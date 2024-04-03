import { Ranks } from "../interfaces/ranks";
declare function getRanks(callId: string, version: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6', params: Ranks): Promise<any>;
export default getRanks;
