import React from 'react'

import Header from './Header'

const Game = () => {
    return (
        <section className="Game">
            <Header />
            <section className="Game-minefield">
                <div className="grid"></div>
            </section>           
        </section>
    )
}

export default Game
