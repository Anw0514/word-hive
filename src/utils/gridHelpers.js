export const generateGridArray = () => {
    const arr = []
    const alphabet = 'EEEEAAAARIIIIOOOOTNSLCUUUUDPMHGBFYWKVXZJQ'; // in order of most common to least common
    // TODO: implement mitchel's idea for weighted letters
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 6; j++) {
            let letter = alphabet[Math.floor(Math.random() * alphabet.length)]
            if ((i === 1 && (j === 1 || j === 5)) || (i === 5 && j !== 3)) {
                letter = ""
            }
            arr.push({
                letter,
                row: i,
                column: j,
                position: arr.length,
                clicked: false
            })

        }
    }
    return arr
}

export const checkDistance = (last, curr) => {
    // this solution returns the same letter as valid
    // only works for letters in columns 2 & 4
    const isOneAbove = (curr.row === last.row - 1) && curr.column === last.column
    const isValidRow = (curr.row === last.row + 1) || curr.row === last.row
    const isValidCol = (curr.column >= last.column - 1) && (curr.column <= last.column + 1)

    console.log(`(${curr.row}, ${curr.column})  (${last.row}, ${last.column})`)

    return isOneAbove || (isValidRow && isValidCol)
}