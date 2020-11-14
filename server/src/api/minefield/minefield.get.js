import MineSweeper from '../../domain/mineSweeper'


const MineField = async (req, res, next) => {
    const gameBoard = MineSweeper()
    
    res.status(200).json({
        data: gameBoard
    })
}

export default MineField