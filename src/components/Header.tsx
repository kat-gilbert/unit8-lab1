import "./Header.css"


export const Header = () => {

    let userProp:string = "Kat";

    return (
        <div className="Header">
            <h1>Ice Cream Wars</h1>
            <p>Welcome {userProp}</p>
        </div>
    )
}
