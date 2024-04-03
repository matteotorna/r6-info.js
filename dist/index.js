"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMaps_1 = __importDefault(require("./methods/getMaps"));
const getAttachment_1 = __importDefault(require("./methods/getAttachment"));
const getCharms_1 = __importDefault(require("./methods/getCharms"));
const getOperators_1 = __importDefault(require("./methods/getOperators"));
const getRanks_1 = __importDefault(require("./methods/getRanks"));
const getSeasons_1 = __importDefault(require("./methods/getSeasons"));
const getServiceStatus_1 = __importDefault(require("./methods/getServiceStatus"));
const tokenManager_1 = require("./token/tokenManager");
const r6info = {
    getMaps: getMaps_1.default,
    getAttachment: getAttachment_1.default,
    getCharms: getCharms_1.default,
    getOperators: getOperators_1.default,
    getRanks: getRanks_1.default,
    getSeasons: getSeasons_1.default,
    getServiceStatus: getServiceStatus_1.default,
    tokenManager: tokenManager_1.tokenApi,
};
exports.default = r6info;
