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
const tokenManager_1 = require("../token/tokenManager");
function getServiceStatus(callId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tokenManager_1.tokenApi.isTokenValid()) {
            yield tokenManager_1.tokenApi.generateToken();
        }
        const token = tokenManager_1.tokenApi.getToken();
        const url = '/servicestatus';
        const response = yield axiosInstance_1.default.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Call-id': callId
            }
        });
        if (!response.data || !Array.isArray(response.data.platforms)) {
            throw new Error('Invalid response structure');
        }
        return response.data;
    });
}
exports.default = getServiceStatus;
