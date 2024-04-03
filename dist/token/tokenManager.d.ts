export declare const tokenApi: {
    generateToken: () => Promise<void>;
    isTokenValid: () => boolean;
    clearToken: () => void;
    getToken: () => {
        token: string;
        callId: string;
    };
};
