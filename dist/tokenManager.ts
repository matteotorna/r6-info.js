import axiosInstance from "../axiosInstance/axiosInstance";

interface TokenResponse {
    token: string;
    expiresIn: number;
    callId: string;
}

class TokenManager {
    private token: string | null = null;
    private expiry: number | null = null;
    private callId: string | null = null;

    async generateToken(): Promise<void> {
        try {
            const response = await axiosInstance.get<TokenResponse>('/token');
            const { token, expiresIn, callId } = response.data;
            this.setToken(token, expiresIn, callId);
        } catch (error) {
            throw new Error("Failed to generate token: " + error);
        }
    }

    setToken(newToken: string, expiresIn: number, callId: string): void {
        this.token = newToken;
        this.expiry = Date.now() + expiresIn * 1000;
        this.callId = callId;
    }

    getToken(): { token: string; callId: string } {
        if (!this.token || !this.expiry || Date.now() > this.expiry) {
            throw new Error("Token is expired or not set");
        }
        if (!this.callId) {
            throw new Error("Call ID is not set");
        }
        return { token: this.token, callId: this.callId };
    }

    isTokenValid(): boolean {
        return !!(this.token && this.expiry && Date.now() < this.expiry && this.callId);
    }

    clearToken(): void {
        this.token = null;
        this.expiry = null;
        this.callId = null;
    }
}

export default new TokenManager();