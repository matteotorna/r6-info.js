import getMaps from "./methods/getMaps";
import getAttachment from "./methods/getAttachment";
import getCharms from "./methods/getCharms";
import getOperators from "./methods/getOperators";
import getRanks from "./methods/getRanks";
import getSeasons from "./methods/getSeasons";
import getServiceStatus from "./methods/getServiceStatus";
declare const r6info: {
    getMaps: typeof getMaps;
    getAttachment: typeof getAttachment;
    getCharms: typeof getCharms;
    getOperators: typeof getOperators;
    getRanks: typeof getRanks;
    getSeasons: typeof getSeasons;
    getServiceStatus: typeof getServiceStatus;
    tokenManager: {
        generateToken: () => Promise<void>;
        isTokenValid: () => boolean;
        clearToken: () => void;
        getToken: () => {
            token: string;
            callId: string;
        };
    };
};
export default r6info;
