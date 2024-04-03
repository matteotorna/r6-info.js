import { ServiceStatusResponse } from './../interfaces/serviceStatus';
import axiosInstance from "../axiosInstance/axiosInstance";
import { tokenApi } from '../token/tokenManager';

async function getServiceStatus(callId: string): Promise<ServiceStatusResponse> {
    if (!tokenApi.isTokenValid()) {
        await tokenApi.generateToken();
    }

    const token = tokenApi.getToken();
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
