import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav id="navbar">
            <a href="https://www.youtube.com/channel/UCHYMUekrpos9ozGc1rAlz9Q">  <div className="menu-pont">Bemutatkozás</div></a>
            <a href="https://www.youtube.com/channel/UCHYMUekrpos9ozGc1rAlz9Q"> <div className="menu-pont">Zenekari tagok</div></a>
            <a href="https://www.youtube.com/channel/UCHYMUekrpos9ozGc1rAlz9Q"><div className="menu-pont">Kapcsolat</div></a>
        </nav>
    )
}

export default Navbar
