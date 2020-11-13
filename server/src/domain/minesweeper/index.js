import Neighbors from './neighbors'

const minefield = [
    ['*','*','',''],
    ['*','*','',''],
    ['','','*',''],
    ['','','','']
]



const Minesweeper = (minefield) => () => {
    const minefield_length = minefield.length
    const neighbors = new Neighbors(minefield)
    
    for (let row = 0; row < minefield_length; row++) {
        let line = ''
        for (let col = 0; col < minefield[row].length; col++) {
            if (neighbors(minefield,row,col) === 1) {
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
        console.log(line)
    }
}

export default Minesweeper(minefield)