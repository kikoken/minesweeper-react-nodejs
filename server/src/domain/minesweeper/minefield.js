const MineField = (width = 5) => {
    let bombAmount = 20

    const bombsArray = Array(bombAmount).fill('*')
    const emptyArray = Array(width**2 - bombAmount).fill('')
    const shuffleArray = emptyArray.concat(bombsArray).sort(() => Math.random() - 0.5)
    
    const gameArray = shuffleArray.reduce((resultArray, item, index) => { 
        const chunkIndex = Math.floor(index/width)
      
        if(!resultArray[chunkIndex]) resultArray[chunkIndex] = [] 
      
        resultArray[chunkIndex].push(item)
        return resultArray
      }, [])

    return gameArray
}

export default MineField