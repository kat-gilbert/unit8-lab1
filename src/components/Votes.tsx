import { useState } from "react";
import "./Votes.css";

export const Votes = () => {

    let [ chocolate, setChocolate ] = useState<number>(0);
    let [ vanilla, setVanilla ] = useState<number>(0);
    let [ strawberry, setStrawberry ] = useState<number>(0);

    let totalVotes = chocolate + vanilla + strawberry;
    
    let chocolateAvg = chocolate / totalVotes * 100;
    chocolateAvg = parseFloat(chocolateAvg.toFixed(1))

    let vanillaAvg = vanilla / totalVotes * 100;
    vanillaAvg = parseFloat(vanillaAvg.toFixed(1))

    let strawberryAvg = strawberry / totalVotes * 100;
    strawberryAvg = parseFloat(strawberryAvg.toFixed(1))

    return (
        <div className="Votes">
            <h2>Vote Here</h2>
    <p>
        <button onClick={() => setChocolate( chocolate += 1 )}>Chocolate</button>
        <button onClick={() => setVanilla( vanilla += 1 )}>Vanilla</button>
        <button onClick={() => setStrawberry( strawberry += 1 )}>Strawberry</button>
    </p>
    <p>Chocolate: {chocolate} // {chocolateAvg}%</p>
    <div className="chocolate" style={{ width: chocolateAvg + "%" }}></div>

    <p>Vanilla: {vanilla} // {vanillaAvg}%</p>
    <div className="vanilla" style={{ width: vanillaAvg + "%" }}></div>

    <p>Strawberry: {strawberry} // {strawberryAvg}%</p>
    <div className="strawberry" style={{ width: strawberryAvg + "%" }}></div>
        </div>
    )
}
