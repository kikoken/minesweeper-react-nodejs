import React, { useEffect, useState } from 'react'

import api from '../../api'
import Header from '../Header'
import Block from './Block'

import './game.css'

const Game = () => {
    const [squares, setSquares] = useState([])
    const [bombs, setBombs] = useState(0)
    const [width, setWidth] = useState(10)
    const [isGameOver, setIsGameOver] = useState(false)

    useEffect(() => {
        fetchBoard()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const fetchBoard = async () => {
        const response = await api.getBoard()
        const field = response.data.data

        setSquares(getElementBlock(field))
        setBombs(field.filter(item => item === '*').length)
    }

    const getElementBlock = listField => listField.map((item, index) => (
        <Block
            content={item} 
            onRevealBlock={revealBlockHandler}
            onGameOver={gameOverHandler}
            isGameOver={isGameOver}
            isReveled={false}
            key={index}
            id={index}
        />
    ))

    const revealBlockHandler = (currentId) => {
        const isLeftEdge = (currentId % width === 0)
        const isRightEdge = (currentId % width === width - 1)
        
        squares[parseInt(currentId)].props.isReveled = false
        let newSquare = null
        setTimeout(() => {
            if(currentId > 0 && !isLeftEdge) newSquare = squares[parseInt(currentId) - 1]
            if(currentId > 9 && !isRightEdge) newSquare = squares[parseInt(currentId) + 1 - width]
            if(currentId > 10) newSquare = squares[parseInt(currentId) - width]
            if(currentId > 11 && !isLeftEdge) newSquare = squares[parseInt(currentId) - 1 - width]
            if(currentId < 98 && !isRightEdge) newSquare = squares[parseInt(currentId) + 1]
            if(currentId < 90 && !isLeftEdge) newSquare = squares[parseInt(currentId) - 1 + width]
            if(currentId < 88 && !isRightEdge) newSquare = squares[parseInt(currentId) + 1 + width]
            if(currentId < 89) newSquare = squares[parseInt(currentId) + width]

            newSquare.props.isReveled = true
        }, 10)
    }

    const gameOverHandler = () => setIsGameOver(true)

    return (
        <section className="Game">
            <Header />
            <section className="Game-minefield">
                <div className="Game-layout">
                    <header className="grid-header">
                        <p className="bombs">{bombs}</p>
                    </header>
                    <div className="grid">{squares}</div>
                </div>
            </section>           
        </section>
    )
}

export default Game
