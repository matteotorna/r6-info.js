import { Ranks } from "../interfaces/ranks";
import axiosInstance from "../axiosInstance/axiosInstance";
import { tokenApi } from "../token/tokenManager";

async function getRanks(callId: string,  version: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6', params: Ranks): Promise<any> {
    if (!tokenApi.isTokenValid()) {
        await tokenApi.generateToken();
    }

    const token = tokenApi.getToken();
    let url = '/ranks';
    const urlParams = new URLSearchParams();
    urlParams.append('version', version);

    Object.keys(params).forEach(key => {
        const value = params[key];
        if (value !== undefined) {
            urlParams.append(key, Array.isArray(value) ? value.join(',') : value.toString());
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
