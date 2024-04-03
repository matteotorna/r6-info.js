export interface Ranks {
    name?: string;
    min_mmr?: number;
    max_mmr?: number;
    [key: string]: string | number | undefined;
}
