import { Attachment } from './../interfaces/attachment';
import axiosInstance from "../axiosInstance/axiosInstance";
import tokenManager from "../token/tokenManager";

async function getAttachment(callId: string, params: Attachment = {}): Promise<any> {
    if (!tokenManager.isTokenValid()) {
        await tokenManager.generateToken();
    }

    const token = tokenManager.getToken();
    let url = '/attachment';
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

export default getAttachment;
