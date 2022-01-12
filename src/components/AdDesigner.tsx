import { useState } from "react";
import "./AdDesigner.css";
import { Ad } from "./Ad";

export const AdDesigner = () => {

let [ flavor, setFlavor ] = useState<string>('');
let [ theme, setTheme ] = useState<boolean>(false);
let [ newFontSize, setNewFontSize ] = useState<number>(45);

    let lightBtn, darkBtn = "btn"
    let strawBtn, chocBtn, vanBtn = "btn";
    let disabled = "disabled"

    let chooseTheme = "";
        if (theme) {
        chooseTheme = "darkTheme";
        darkBtn = disabled;
        }
        else if (!theme) {
        chooseTheme = "designBox";
        lightBtn = disabled;
        }   
    
    if (flavor === "Chocolate") {
        chocBtn = disabled;
        }
        else if (flavor === "Vanilla") {
            vanBtn = disabled;
        }
            else if (flavor === "Strawberry") {
                strawBtn = disabled;
            }
return (
    <div className="designContainer">

        <h2>Ad Designer</h2>

        <Ad flavor={flavor} fontSize={newFontSize} darkTheme={theme}/>

        
        <p className="votingTitle">What to Support:</p>
    <p>
        <button className ={chocBtn} onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        <button className={vanBtn} onClick={() => setFlavor("Vanilla")}>Vanilla</button>
        <button className={strawBtn} onClick={() => setFlavor("Strawberry")}>Strawberry</button>
    </p>
    <p className="votingTitle">Color Theme:</p>
    <p>
        <button className={lightBtn} onClick={()=> setTheme(false)}>Light Theme</button>
        <button className={darkBtn} onClick={()=> setTheme(true)}>Dark Theme</button> 
    </p>
    <p className="votingTitle">Font Size:</p>
    <p>
        <button onClick={()=> setNewFontSize(newFontSize +=1)}>Up</button>
        {newFontSize}
        <button onClick={()=> setNewFontSize(newFontSize -= 1)}>Down</button>
    </p>
    </div>
    )
}
