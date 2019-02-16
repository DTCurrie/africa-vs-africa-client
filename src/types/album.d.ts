declare interface IAlbum {
    id: string;
    album_type: "album" | "single" | "compilation";
    artists: IArtist[];
    available_markets: AvailableMarket[];
    external_urls: IStringIndexedObject;
    href: string;
    images: IImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    type: "album";
    uri: string;
}
