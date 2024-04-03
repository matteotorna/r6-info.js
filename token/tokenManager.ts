import axiosInstance from "../axiosInstance/axiosInstance";

interface TokenResponse {
    token: string;
    expiresIn: number;
    callId: string;
}

class TokenManager {
    private _token: string | null = null;
    private _expiry: number | null = null;
    private _callId: string | null = null;

    public async generateToken(): Promise<void> {
        try {
            const response = await axiosInstance.get<TokenResponse>('/token');
            const { token, expiresIn, callId } = response.data;
            this.setToken(token, expiresIn, callId);
        } catch (error) {
            throw new Error("Failed to generate token: " + error);
        }
    }

    private setToken(newToken: string, expiresIn: number, callId: string): void {
        this._token = newToken;
        this._expiry = Date.now() + expiresIn * 1000;
        this._callId = callId;
    }

    public getToken(): { token: string; callId: string } {
        if (!this._token || !this._expiry || Date.now() > this._expiry) {
            throw new Error("Token is expired or not set");
        }
        if (!this._callId) {
            throw new Error("Call ID is not set");
        }
        return { token: this._token, callId: this._callId };
    }

    public isTokenValid(): boolean {
        return !!(this._token && this._expiry && Date.now() < this._expiry && this._callId);
    }

    public clearToken(): void {
        this._token = null;
        this._expiry = null;
        this._callId = null;
    }
}

export default new TokenManager();