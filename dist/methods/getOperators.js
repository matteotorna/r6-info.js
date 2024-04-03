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
function getOperators(callId_1) {
    return __awaiter(this, arguments, void 0, function* (callId, params = {}) {
        if (!tokenManager_1.tokenApi.isTokenValid()) {
            yield tokenManager_1.tokenApi.generateToken();
        }
        const token = tokenManager_1.tokenApi.getToken();
        let url = '/operators';
        const urlParams = new URLSearchParams();
        Object.keys(params).forEach(key => {
            if (params[key] !== undefined) {
                urlParams.append(key, params[key]);
            }
        });
        if (urlParams.toString()) {
            url += `?${urlParams.toString()}`;
        }
        const response = yield axiosInstance_1.default.get(url, {
            headers: {
                'Authorization': ` Bearer ${token}`,
                'Call-id': callId
            }
        });
        return response.data;
    });
}
exports.default = getOperators;
