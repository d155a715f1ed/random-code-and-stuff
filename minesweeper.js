var height = process.argv[2] || 8;
var width = process.argv[3] || 8;
var mineDensity = process.argv[4] || 0.1;

/* 
    minesweeper board generator for copy pasting into discord
    usage: node .\minesweeper.js height width density
    height and width are integers, density is a float between 0 and 1.
    defaults set above if not provided.

    characters may look weird in some terminals; should copy paste fine into Discord. regardless. 

*/

const BARS = "||";
const MINE = "💥";
const numerals = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
const BLANK = "";
let mineCount = 0;
let board = [];
for (let i = 0; i < height; i++) {
  let row = [];
  for (let j = 0; j < width; j++) {
    if (Math.random() <= mineDensity) {
      row.push(MINE);
      mineCount++;
    } else {
      row.push(BLANK);
    }
  }
  board.push(row);
}

let boardDisplay = "";
for (let i = 0; i < height; i++) {
  for (let j = 0; j < height; j++) {
    let char = board[i][j];
    if (char === BLANK) {
      char = countNeighbors(i, j);
    }
    boardDisplay += BARS + char + BARS + " ";
  }
  boardDisplay += "\n";
}

console.log("This board contains " + mineCount + " mines.");
console.log(boardDisplay);

function countNeighbors(row, col) {
  let count = 0;
  let minRow = Math.max(row - 1, 0);
  let minCol = Math.max(col - 1, 0);
  let maxRow = Math.min(height - 1, row + 1);
  let maxCol = Math.min(width - 1, col + 1);
  for (let i = minRow; i <= maxRow; i++) {
    for (let j = minCol; j <= maxCol; j++) {
      if (board[i][j] === MINE) {
        count++;
      }
    }
  }
  return numerals[count];
}
