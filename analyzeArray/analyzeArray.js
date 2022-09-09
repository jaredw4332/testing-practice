const analyzeArray = (array) => {
    const length = array.length
    let average = 0
    let min = array[0]
    let max = array[0]
    for (let item in array) {
        average += array[item]
        if (array[item] > max) {
            max = array[item]
        }
        if (array[item] < min) {
            min = array[item]
        }
    }
    average /= length

    const object = {
        average: average,
        min: min,
        max: max,
        length: length
    }

    return object
}

export {analyzeArray}