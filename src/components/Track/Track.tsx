import * as React from "react";
import { Dispatch, ReactElement, useEffect, useState } from "react";

import "./Track.scss";

function TrackError(props: { error: string }): ReactElement {
    if (!props.error) { return null; }
    return <div className="track-error">{props.error}</div>;
}

function TrackContent(props: { track: ITrack }): ReactElement {
    if (!props.track) { return null; }

    interface ITranslate { transform: string; }

    const [ height, setHeight ]: [ number, Dispatch<number> ] = useState(100);
    const [ translate, setTranslate ]: [ ITranslate, Dispatch<ITranslate> ] = useState({ transform: `translateY(${height}%)` });

    const track = props.track;
    const artist = track.artists[ 0 ];
    const album = track.album;

    const offset = 100 - track.popularity;
    const lerp = (start: number, end: number, delta: number): number => (1 - delta) * start + delta * end;

    useEffect(() => {
        setHeight(lerp(height, offset, 0.0025));
        setTranslate({ transform: `translateY(${height}%)` });
    });

    return (
        <div className="track-content">
            <div className="track-popularity" style={translate}>
                <h3>Popularity: {track.popularity}/100</h3>
            </div>
            <div className="track-info">
                <h1><a href={track.external_urls.spotify}>{track.name}</a></h1>
                <p>
                    by <a href={artist.external_urls.spotify}>{track.artists[ 0 ].name}</a> from the album
                    <a href={album.external_urls.spotify}> {album.name}</a>
                </p>
            </div>
        </div>);
}

export function Track(props: { id: string; onLoaded: (loaded: boolean) => void }): ReactElement {
    const [ track, setTrack ]: [ ITrack, Dispatch<ITrack> ] = useState(null);
    const [ error, setError ]: [ string, Dispatch<string> ] = useState(null);

    const url = `http://localhost:3000/api/track/${props.id}`;
    if (process.env.NODE_ENV === "production") { /* point ot production url */ }

    function setData(data: ITrack = null, err: string = null): void {
        setTrack(data);
        setError(err);
    }

    useEffect(() => {
        fetch(url)
            .then((response: Response) => response.json()
                .then((data: { body: ITrack }) => setData(data.body, null))
                .catch((err: string) => setData(null, err)))
            .catch((err: string) => setError(err));
    }, [ props.id ]);

    if (track === null && error === null) { return null; }

    props.onLoaded(true);

    const trackImage = {
        backgroundImage: `url(${track.album.images[ 0 ].url})`,
    };

    return (
        <div className="track" style={trackImage}>
            <TrackError error={error} />
            <TrackContent track={track} />
        </div>);

}
