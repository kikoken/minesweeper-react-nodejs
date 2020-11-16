import MineSweeper from '../../domain/mineSweeper'


const MineField = async (req, res, next) => {
    
    res.status(200).json({
        data: MineSweeper()
    })
}

export default MineField