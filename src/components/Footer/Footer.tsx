import Octicon, { MarkGithub } from "@githubprimer/octicons-react";
import * as React from "react";
import { ReactElement } from "react";

import "./Footer.scss";

export function Footer(): ReactElement {
    return (
        <div className="footer">
            Why? How? Check it out on GitHub: <a href="#"><Octicon icon={MarkGithub} /></a>
        </div>);
}
