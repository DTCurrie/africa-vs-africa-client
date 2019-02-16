declare interface Album {
    id: string;
    album_type: "album" | "single" | "compilation";
    artists: Artist[];
    available_markets: AvailableMarket[];
    external_urls: StringMap;
    href: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    type: "album";
    uri: string;
}
