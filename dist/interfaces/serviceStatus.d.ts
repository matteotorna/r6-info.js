export interface PlatformStatus {
    name: string;
    status: string;
    services: Array<string>;
}
export interface ServiceStatusResponse {
    platforms: PlatformStatus[];
}
