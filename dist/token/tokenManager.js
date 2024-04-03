"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = __importDefault(require("../axiosInstance/axiosInstance"));
class TokenManager {
    constructor() {
        this.token = null;
        this.expiry = null;
        this.callId = null;
    }
    generateToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axiosInstance_1.default.get('/token');
                const { token, expiresIn, callId } = response.data;
                this.setToken(token, expiresIn, callId);
            }
            catch (error) {
                throw new Error("Failed to generate token: " + error);
            }
        });
    }
    setToken(newToken, expiresIn, callId) {
        this.token = newToken;
        this.expiry = Date.now() + expiresIn * 1000;
        this.callId = callId;
    }
    getToken() {
        if (!this.token || !this.expiry || Date.now() > this.expiry) {
            throw new Error("Token is expired or not set");
        }
        if (!this.callId) {
            throw new Error("Call ID is not set");
        }
        return { token: this.token, callId: this.callId };
    }
    isTokenValid() {
        return !!(this.token && this.expiry && Date.now() < this.expiry && this.callId);
    }
    clearToken() {
        this.token = null;
        this.expiry = null;
        this.callId = null;
    }
}
exports.default = new TokenManager();
