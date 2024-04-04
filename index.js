function isWinner(record) {
    return record.result === "W"
}
function superbowlWin(record) {
    const win = record.find(isWinner)
    return win? win.year : undefined
}