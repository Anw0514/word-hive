export const alphabetByFrequency = [
    ["E", 110],
    ["S", 87],
    ["I", 86],
    ["A", 78],
    ["R", 73],
    ["N", 72],
    ["T", 67],
    ["O", 61],
    ["L", 53],
    ["C", 40],
    ["D", 38],
    ["U", 33],
    ["G", 30],
    ["P", 28],
    ["M", 27],
    ["H", 23],
    ["B", 20],
    ["Y", 16],
    ["F", 14],
    ["V", 10],
    ["K", 10],
    ["W", 10],
    ["Z", 4],
    ["X", 3],
    ["J", 2],
    ["Q", 2],
]

export const totalFrequency = alphabetByFrequency.reduce((a, b) => a + b[1], 0)

export const randomLetter = () => {
    let currentNum = Math.ceil(Math.random() * totalFrequency)
    console.log('Random Number: ', currentNum)
    let currentLetter = ''
    alphabetByFrequency.every(([char, freq]) => {
        currentLetter = char // set current Letter so we have it after break
        currentNum -= freq // subtract frequency from random number
        return currentNum > 0 // if we've hit 0, will break out of loop
    })
    console.log('Letter: ', currentLetter)
    return currentLetter
}