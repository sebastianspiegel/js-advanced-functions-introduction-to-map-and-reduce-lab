// Your code here

function mapToNegativize(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }
    return total 
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false
    }
    return true 
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true
    }
    return false 
}