const l = [
    [[6, 5, 7, 1], [1, 4, 9, 8], [2, 5, 6, 9], [2, 4, 1, 3]],
    [[4, 6, 7, 9], [4, 6, 3, 8], [3, 6, 9, 2], [6, 7, 5, 1]],
    [[5, 8, 11, 13], [1, 4, 7, 5], [9, 12, 10, 11], [2, 5, 3, 6]],
    [[3, 6, 8, 9], [3, 6, 8, 7], [6, 7, 4, 3], [2, 4, 3, 6]],
    [[9, 11, 13, 14], [9, 11, 13, 12], [7, 8, 9, 5], [3, 5, 2, 1]],
    [[2, 5, 7, 11], [1, 6, 8, 3], [4, 6, 3, 7], [3, 6, 8, 7]],
    [[1, 5, 8, 9], [1, 5, 9, 8], [1, 5, 4, 6], [1, 7, 9, 6]],
    [[5, 8, 11, 14], [11, 14, 13, 15], [11, 12, 10, 15], [5, 7, 3, 8]],
    [[4, 7, 8, 9], [4, 6, 8, 7], [3, 5, 6, 4], [3, 4, 7, 6]],
    [[3, 6, 9, 10], [3, 9, 6, 4], [4, 6, 9, 7], [4, 7, 6, 9]]
]

for (let i = 0; i < l.length; i++) {
    // row
    for (let j = 0; j < 4; j++) {
        // col
        l[i][j] = l[i][j].map(el => el + 2);
    }
}

console.log(l);