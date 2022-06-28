import React from "react"

export function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--projectName">Just a fun React project!</h4>
        </header>
    )
}