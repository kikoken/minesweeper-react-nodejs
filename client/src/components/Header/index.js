import React from 'react'

import './header.css'

const Header = () => { 
    return (
        <header className="Header">
            <div>
                <h1>MineSweeper</h1>
            </div>
            <nav>
            <label>
                Dimensions: 
                <input type="number" min="5" max="10" name="dimensions" value="10"/>
            </label>
            </nav>
            <div>
                <button>New Game</button>
            </div>
      </header>
    )
}

export default Header