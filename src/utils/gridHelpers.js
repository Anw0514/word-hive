import { randomLetter } from './letterHelpers'

export const generateGridArray = () => {
    const arr = []
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 6; j++) {
            let letter = randomLetter()
            if ((i === 1 && (j === 1 || j === 5)) || (i === 5 && j !== 3)) {
                letter = ""
            }
            arr.push({
                id: crypto.randomUUID(),
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
    // this solution returns the same letter as a valid distance
    const isOneAbove = (curr.row === last.row - 1) && curr.column === last.column
    const isOneBelow = (curr.row === last.row + 1) && curr.column === last.column
    const isValidRowEven = (curr.row === last.row + 1) || curr.row === last.row
    const isValidRowOdd = (curr.row === last.row - 1) || curr.row === last.row
    const isValidCol = (curr.column >= last.column - 1) && (curr.column <= last.column + 1)

    return last.column % 2 === 0 ? isOneAbove || (isValidRowEven && isValidCol) : isOneBelow || (isValidRowOdd && isValidCol)
}

export const isBottomRow = (letterObj) => {
    const validFourthRow = letterObj.row === 4 && letterObj.column !== 3
    return letterObj.row === 5 || validFourthRow
}

export const deleteBottomRow = (letters) => {
    // for loop, starting at row 5 & descending
    // if not row 1 & col 1,5 or row 2 & col 1,2,4,5 :
    //   update letter to be equal to the letter from the row above
    // else
    //   update letter to be a random new letter
}

export const calculateScore = (letterCount, multiplier = 1) => {
    // function for score slope comes out as 10, 15, 30, 55, 90, 135, 190
    const baseScore = (((letterCount-1 )**2 )/2 )+1
    return multiplier * Math.round(baseScore * 10)
}