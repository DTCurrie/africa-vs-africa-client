declare interface ITrack {
    id: string;
    album: IAlbum;
    artists: IArtist[];
    available_markets: AvailableMarket[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: IStringIndexedObject;
    external_urls: IStringIndexedObject;
    href: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: "track";
    uri: string;
}
