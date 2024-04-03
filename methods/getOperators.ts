import { Operators } from './../interfaces/operators';
import axiosInstance from "../axiosInstance/axiosInstance";
import { tokenApi } from "../token/tokenManager";

async function getOperators(callId: string, params: Operators = {}): Promise<any> {
    if (!tokenApi.isTokenValid()) {
        await tokenApi.generateToken();
    }

    const token = tokenApi.getToken();
    let url = '/operators';
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

export default getOperators;
