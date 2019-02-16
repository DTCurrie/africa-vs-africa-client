declare interface Track {
    id: string;
    album: Album;
    artists: Artist[];
    available_markets: AvailableMarket[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: StringMap;
    external_urls: StringMap;
    href: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: "track";
    uri: string;
}
