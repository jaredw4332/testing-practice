const reverseString = (string) => {
    let splitString = string.split("")
    splitString = splitString.reverse()
    return splitString.join("")
}

module.exports = reverseString