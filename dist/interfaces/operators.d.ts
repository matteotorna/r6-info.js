export interface Operators {
    name?: string;
    safename?: string;
    realname?: string;
    birthplace?: string;
    age?: number;
    date_of_birth?: string;
    season_introduced?: string;
    health?: number;
    speed?: number;
    unit?: string;
    country_code?: string;
    roles?: Array<string>;
    side?: string;
    icon_url?: string;
    [key: string]: string | number | string[] | undefined;
}
