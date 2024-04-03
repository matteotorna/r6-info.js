declare class TokenManager {
    private token;
    private expiry;
    private callId;
    generateToken(): Promise<void>;
    setToken(newToken: string, expiresIn: number, callId: string): void;
    getToken(): {
        token: string;
        callId: string;
    };
    isTokenValid(): boolean;
    clearToken(): void;
}
declare const _default: TokenManager;
export default _default;
