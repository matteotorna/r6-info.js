import { Charms } from "../interfaces/charms";
import axiosInstance from "../axiosInstance/axiosInstance";
import { tokenApi } from "../token/tokenManager";

async function getCharms(callId: string, params: Charms = {}): Promise<any> {
    if (!tokenApi.isTokenValid()) {
        await tokenApi.generateToken();
    }

    const token = tokenApi.getToken();
    let url = '/charms';
    const urlParams = new URLSearchParams();

    Object.keys(params).forEach(key => {
        if (params[key] !== undefined) {
            urlParams.append(key, params[key] as string);
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

export default getCharms;
