import Neighbors from './neighbors'
import mineField from './minefield'

const _minefield = mineField(10)



const Minesweeper = (minefield) => () => {
    const minefield_length = minefield.length
    const neighbors = Neighbors(minefield)
    const result = []
    
    for (let row = 0; row < minefield_length; row++) {
        let line = ''
        for (let col = 0; col < minefield[row].length; col++) {
            if (neighbors(row,col) === 1) {
                line += '*'
            } else {
                let bombs = 0
                // top-left, top, top-right
                bombs += neighbors(row - 1, col + 1)
                bombs += neighbors(row - 1, col)
                bombs += neighbors(row - 1, col - 1)

                bombs += neighbors(row, col - 1) // left
                bombs += neighbors(row, col + 1) // right

                // bot-left, bot, bot-right
                bombs += neighbors(row + 1, col - 1)
                bombs += neighbors(row + 1, col)
                bombs += neighbors(row + 1, col + 1)

                line += bombs
            }
        }
        result.push(line.split(''))
    }

    return result.flat()
}

export default Minesweeper(_minefield)