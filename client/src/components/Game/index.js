import React, { useEffect, useState } from 'react'

import api from '../../api'
import Header from '../Header'
import Block from './Block'

import './game.css'

const Game = () => {
    const [board, setBoard] = useState([])
    const [bombs, setBombs] = useState(0)

    useEffect(() => {
        fetchBoard()
    }, [board])
    
    const fetchBoard = async () => {
        const response = await api.getBoard()
        const field = response.data.data

       setBoard(field)
       setBombs(field.filter(item => item === '*').length)
    }

    return (
        <section className="Game">
            <Header />
            <section className="Game-minefield">
                <div className="Game-layout">
                    <header className="grid-header">
                        <p className="bombs">{bombs}</p>
                    </header>
                    <div className="grid">
                        {board.map((item, index) => (<Block content={item} key={index}/>))}
                    </div>
                </div>
            </section>           
        </section>
    )
}

export default Game
