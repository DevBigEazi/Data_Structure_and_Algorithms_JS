function countOccurrences(str, char) {
    let count = 0

    for (const st of str) {
        if (st === char)
            count++;
    }
    // console.log(count)
    return count;
}

module.exports = countOccurrences;