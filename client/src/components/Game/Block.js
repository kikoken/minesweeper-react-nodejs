import React, { useEffect, useState } from 'react'

const Block = ({content}) => {
    const [item, setItem] = useState('0')
    
    useEffect(() => {
        setItem(content)
    }, [item])

    const onClickHandler = (e) => {
        console.log(item)
    }

    return (
        <div className="block" onClick={onClickHandler}>{item}</div>
    )
}

export default Block
