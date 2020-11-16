import React, { useState, useEffect } from 'react'

import bomb from '../../assets/bomb.svg.png'

const Block = (props) => {
    const { 
        content,
        id,
        isGameOver, 
        isReveled, 
        onGameOver,
        onRevealBlock
    } = props

    const [item, setItem] = useState('')
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (isReveled) setChecked(true)
    }, [isReveled])

    const onClickHandler = (e) => {
        if(content === '*') {
            onGameOver()
        } else {
            if(content !== '0') setItem(content)

            setChecked(true)
            onRevealBlock(id)
        }
    }

    if(content === '*') return <div className={`bomb ${isGameOver ? 'over' : null}`} onClick={onClickHandler}>{isGameOver && <img src={bomb} alt='bomb'/>}</div>

    return <div className={`block ${ checked ? 'checked' : null} ${isGameOver ? 'over' : null}`} onClick={onClickHandler}>{item}</div>
}

export default Block
