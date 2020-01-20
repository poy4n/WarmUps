console.log('the board')

var createBoard = (w, h, c) => {
    var boardArray = [];
    var board = "";

    for (var i = 0; i < h; i ++) {
        boardArray[i] = [];
        for (var n = 0; n < w; n ++) {
            if (i % 2 === 0) {
                boardArray[i].push(`${c} `)
            } else {
                boardArray[i].push(` ${c}`)
            }
            if (n === w-1) {
                boardArray[i][n] += "\n"
            }
        }
    } 
    boardArray.forEach ( line => {
        board += line.join("");
    }) 
    return board 
}

console.log(createBoard(8, 4, "#"))

/* rubby version

def create_board (w, h, c) 
    board_array = []
    board = ""
    
    h.times do |i|
        board_array[i] = []
        w.times do |n|
            if i.even? 
                board_array[i] << "#{c} "
            else 
                board_array[i] << " #{c}"
            end
            if n === w-1
                board_array[i][n] += "\n"
            end
        end
    end

    board_array.each do |line|
        board += line.join ""
    end

    return board
end

puts create_board(6, 4, "#")

*/