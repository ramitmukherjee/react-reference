import { useState } from "react";

const Greet = () => {

    const [name, setName] = useState("");
    const [greeting, setGreeting] = useState("");

    const displayGreeting = (yN) => {
        if(yN === "N") {
            return;
        } else {
            if([ "dwipa", "dwipanjeeta" ].includes(name.toLowerCase())) {
                setGreeting(`😘 ${name}`);
            } else {
                setGreeting(`Hello ${name}`);
            }
        }
        setName("");
    };

    return (
    <div className="form-container">
        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="What is your name?" />
            {name ? <p>
                Is your name {name} ?
                <button style={{margin: "0 5px 0 10px"}} onClick={(e) => displayGreeting("Y")}>Yes</button>
                <button onClick={(e) => displayGreeting("N")}>No</button>
            </p> : <h4>{greeting}</h4> }
        </form>
        
        
    </div>
    );
};

export default Greet