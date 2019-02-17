import React, { Dispatch, ReactElement, useEffect, useState } from 'react';

import './Track.scss';

interface TrackProps { artist: string; trackId: string; onLoaded(loaded: boolean): void; }
interface Translate { transform: string; }

function TrackError(props: { error: string }): ReactElement {
    if (!props.error) { return null; }
    return <div className='track-error'>{props.error}</div>;
}

function TrackContent(props: { track: Track }): ReactElement {
    if (!props.track) { return null; }

    const calculateTransform = (value: number): string =>
        window.innerWidth < 992 ? `translateX(${value > 60 ? -60 : -value}%)` : `translateY(${value > 65 ? 65 : value}%)`;

    const [ popularity, setPopularity ]: [ number, Dispatch<number> ] = useState(100);
    const [ translate, setTranslate ]: [ Translate, Dispatch<Translate> ] = useState({ transform: calculateTransform(popularity) });

    const track = props.track;
    const artist = track.artists[ 0 ];
    const album = track.album;

    const offset = 100 - track.popularity;

    const lerp = (start: number, end: number, delta: number): number => (1 - delta) * start + delta * end;

    useEffect(() => {
        setPopularity(lerp(popularity, offset, 0.0025));
        setTranslate({ transform: calculateTransform(popularity) });
    });

    return (
        <div className='track-content'>
            <div className='track-popularity' style={translate}>
                <div className='track-info'>
                    <a href={track.external_urls.spotify}>{track.name}</a> by
                    <a href={artist.external_urls.spotify}> {track.artists[ 0 ].name}</a> from the album
                    <a href={album.external_urls.spotify}> {album.name}</a>
                </div>
                <h1>{track.popularity}</h1>
                <h3>POPULARITY</h3>
            </div>
        </div>);
}

export function Track(props: TrackProps): ReactElement {
    const [ track, setTrack ]: [ Track, Dispatch<Track> ] = useState(undefined);
    const [ error, setError ]: [ string, Dispatch<string> ] = useState(undefined);

    let url = `http://localhost:3000/api/track/${props.trackId}`;
    if (process.env.NODE_ENV === 'production') { url = `https://ava.devintcurrie.com/api/track/${props.trackId}`; }

    function setData(data?: Track, err?: string): void {
        setTrack(data);
        setError(err);
    }

    useEffect(() => {
        fetch(url)
            .then((response: Response) => response.json()
                .then((data: { body: Track }) => setData(data.body, undefined))
                .catch((err: string) => setData(undefined, err)))
            .catch((err: string) => setError(err));
    }, [ props.trackId ]);

    if (track === undefined && error === undefined) { return null; }

    props.onLoaded(true);

    const trackImage = {
        backgroundImage: `url(${track.album.images[ 0 ].url})`
    };

    return (
        <div className={`track ${props.artist}`} style={trackImage}>
            <TrackError error={error} />
            <TrackContent track={track} />
        </div>);

}
