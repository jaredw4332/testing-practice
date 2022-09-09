const caesarCipher = (string) => {  
    let lowerString = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let finalString = ''

    for(let letter in lowerString){
        let currentLetter = lowerString[letter]
        if (alphabet.indexOf(currentLetter) === -1) {
            finalString += currentLetter
        } 
        else {
            let currentIndex = alphabet.indexOf(currentLetter)
            let newIndex = currentIndex + 1
            if (newIndex > 25) newIndex = 0
            if (string[letter] === string[letter].toUpperCase()) {
                finalString += alphabet[newIndex].toUpperCase()
            } else finalString += alphabet[newIndex]
        }
    }
    return finalString
};

export {caesarCipher}