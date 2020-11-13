const Neighbors = (_minefield) => (row, col) => {
    if (row < 0 || col < 0) return 0
    if (row >= _minefield.length) return 0
    if (col >= _minefield[row].length) return 0
    if (_minefield[row][col] === '*') return 1
    return 0
}


export default Neighbors