import * as React from "react";
import { useEffect, useState, Dispatch, ReactElement } from "react";

import { Footer } from "./Footer/Footer";
import { Track } from "./Track/Track";

export function App(): ReactElement {
    const [ totoLoaded, setTotoLoaded ]: [ boolean, Dispatch<boolean> ] = useState(false);
    const [ weezerLoaded, setWeezerLoaded ]: [ boolean, Dispatch<boolean> ] = useState(false);

    useEffect(() => {
        if (totoLoaded && weezerLoaded) {
            const loader = document.querySelector(".loader");
            loader.remove();
        }
    }, [ totoLoaded, weezerLoaded ]);

    return (
        <div className="app">
            <div className="tracks">
                <Track artist="toto" trackId="2374M0fQpWi3dLnB54qaLX" onLoaded={setTotoLoaded} />
                <Track artist="weezer" trackId="36Pim2ANczp82lCWIb8GHy" onLoaded={setWeezerLoaded} />
            </div>
            {totoLoaded && weezerLoaded && <Footer />}
        </div>);
}
