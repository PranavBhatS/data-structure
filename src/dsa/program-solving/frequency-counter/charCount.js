
const frequencyCount = (val) => {
    val = String(val)
    let result = new Map();
    for (c of val) {
        if (result.has(c)) {
            result.set(c, result.get(c) + 1)
        } else {
            result.set(c, 1)
        }
    }
    return result
}
console.log(frequencyCount(100))