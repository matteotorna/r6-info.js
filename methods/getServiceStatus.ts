import { ServiceStatusResponse } from './../interfaces/serviceStatus';
import axiosInstance from "../axiosInstance/axiosInstance";
import tokenManager from "../dist/tokenManager";

async function getServiceStatus(callId: string): Promise<ServiceStatusResponse> {
    if (!tokenManager.isTokenValid()) {
        await tokenManager.generateToken();
    }

    const token = tokenManager.getToken();
    const url = '/servicestatus';

    const response = await axiosInstance.get<ServiceStatusResponse>(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Call-id': callId
        }
    });

    if (!response.data || !Array.isArray(response.data.platforms)) {
        throw new Error('Invalid response structure');
    }

    return response.data;
}

export default getServiceStatus;
