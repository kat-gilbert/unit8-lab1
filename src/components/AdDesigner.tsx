import { useState } from "react";
import "./AdDesigner.css";

export const AdDesigner = () => {

let [ flavor, setFlavor ] = useState<string>('');
let [ theme, setTheme ] = useState<boolean>(false);
let [ newFontSize, setNewFontSize ] = useState<number>(45);
let [ disabled, setDisabled ] = useState<boolean>(false);

    let chooseTheme = "";
    if (theme) {
        chooseTheme = "darkTheme";
    }

    // let upSize = () => {
    //     setFontSize(fontSize += 1);
    // }
    // let downSize = () => {
    //     setFontSize(fontSize -= 1);
    // }
    // //connect to font size in flavor className?


return (
    <div className="designContainer">

        <h2>Ad Designer</h2>
        <div className={"designBox " + chooseTheme}>
            <h3>Vote For</h3>
        <span style={{ fontSize: newFontSize + "px" }} className="flavor">{flavor}</span>

        </div>
        <p>What to Support</p>
    <p>
        <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
        <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
    </p>
    <p>Color Theme</p>
    <p>
        <button onClick={()=> setTheme(false)}>Light Theme</button>
        <button onClick={()=> setTheme(true)}>Dark Theme</button>
    </p>
    <p>Font Size</p>
    <p>
        <button onClick={()=> setNewFontSize(newFontSize +=1)}>Up</button>
        {newFontSize}
        <button onClick={()=> setNewFontSize(newFontSize -= 1)}>Down</button>
    </p>
    </div>
    )
}
