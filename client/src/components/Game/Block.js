import React, { useEffect, useState } from 'react'

const Block = ({content}) => {
    const [item, setItem] = useState('0')
    const [pointer, setPointer] = useState('')
    
    useEffect(() => {
        setItem(content)
    }, [item, content])

    const onClickHandler = (e) => {
        if(item === '*') {
            console.log('Game Over!')
        } else {
            console.log(item)
            setPointer('checked')
        }
    }

    return (
        <div className={`block ${pointer}`} onClick={onClickHandler}>{item}</div>
    )
}

export default Block
