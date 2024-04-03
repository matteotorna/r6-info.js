import { ServiceStatusResponse } from './../interfaces/serviceStatus';
declare function getServiceStatus(callId: string): Promise<ServiceStatusResponse>;
export default getServiceStatus;
