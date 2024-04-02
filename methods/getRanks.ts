import { Ranks } from "../interfaces/ranks";
import axiosInstance from "../axiosInstance/axiosInstance";
import tokenManager from "../dist/tokenManager";

async function getRanks(callId: string,  version: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6', params: Ranks): Promise<any> {
    if (!tokenManager.isTokenValid()) {
        await tokenManager.generateToken();
    }

    const token = tokenManager.getToken();
    let url = '/ranks';
    const urlParams = new URLSearchParams();
    const combinedParams = { version, ...params };

    Object.keys(combinedParams).forEach(key => {
        const value = combinedParams[key];
        if (value !== undefined) {
            urlParams.append(key, value.toString());
        }
    });

    if (urlParams.toString()) {
        url += `?${urlParams.toString()}`;
    }

    const response = await axiosInstance.get(url, {
        headers: {
            'Authorization': ` Bearer ${token}`,
            'Call-id': callId
        }
    });

    return response.data;
}

export default getRanks;
