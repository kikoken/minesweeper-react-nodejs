import React from 'react'

const Header = () => { 
    return (
        <header>
            <h1>MineSweeper</h1>
            <nav>
            <label>
                Dimensions: 
                <input type="number" min="5" max="10" name="dimensions" value="10"/>
            </label>
            </nav>
            <button>New Game</button>
      </header>
    )
}

export default Header