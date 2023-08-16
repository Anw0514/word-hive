export const dummyGrid = [
    {
        letter: "",
        row: '1',
        column: '1'
    },
    {
        letter: "",
        row: '1',
        column: '2'
    },
    {
        letter: "a",
        row: '1',
        column: '3'
    },
    {
        letter: "",
        row: '1',
        column: '4'
    },
    {
        letter: "",
        row: '1',
        column: '5'
    },
    {
        letter: "",
        row: '2',
        column: '1'
    },
    {
        letter: "",
        row: '2',
        column: '2'
    },
    {
        letter: "a",
        row: '2',
        column: '3'
    },
    {
        letter: "",
        row: '2',
        column: '4'
    },
    {
        letter: "",
        row: '2',
        column: '5'
    },
    {
        letter: "",
        row: '3',
        column: '1'
    },
    {
        letter: "",
        row: '3',
        column: '2'
    },
    {
        letter: "a",
        row: '3',
        column: '3'
    },
    {
        letter: "",
        row: '3',
        column: '4'
    },
    {
        letter: "",
        row: '3',
        column: '5'
    },
]

export const generateGridArray = () => {
    const arr = []
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
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
                position: arr.length
            })

        }
    }
    return arr
}