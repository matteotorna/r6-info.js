export interface Charms {
    name?: string;
    collections?: string;
    rarity?: string;
    availability?: string;
    bundle?: string;
    seasons?: string;
    [key: string]: string | undefined;
}
