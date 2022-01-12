import { useState } from "react";
import { AdDesigner } from "./AdDesigner";
import { Votes } from "./Votes";
import "./AdDesigner.css"

export interface AdProps {
    flavor: string,
    fontSize: number,
    darkTheme: boolean,
}

export function Ad({flavor, fontSize, darkTheme}:AdProps) {

    let theme = "";
    if (darkTheme) {
    theme = "darkTheme";
    }
    else if (!darkTheme) {
    theme = "designBox";
    }

    return (
        <div className="designContainer">
        <div className={"designBox " + theme}>
            <h3>Vote For</h3>
            <p style={{ fontSize: fontSize }}>{flavor}</p>
        </div>
        </div>
    )
}