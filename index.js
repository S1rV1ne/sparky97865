const prompt = require('prompt-sync')(); 
let table = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
]
let turn = turnDecider(Math.floor(Math.random() * (1 - 0 + 1) ) + 0);
console.log(`${turn} goes first`)
console.log( {a: table[0]}, '\n', {b: table[1]}, '\n', {c: table[2]});
let propmted = varPrompter(turn) // promted initializes varPromper which imports the turn variable to designate who's picking.
replacer(propmted, table, turn);
swapper(turn);
console.log( {a: table[0]}, '\n', {b: table[1]}, '\n', {c: table[2]});
console.log(turn);
function replacer(p, h, y) {
    // p is the promted var which is used to designate which part of the table array to replace; 
    // h is the table itself so it can import the current game board; 
    // y is the turn var to designated who gets to place the x or o;
    if ((p == 1) && (h[0][0] == 1)){
        h[0][0] = y
    } else if ((p == 2) && (h[0][1] == 2)){
        h[0][1] = y
    } else if ((p == 3) && (h[0][2] == 3)){
        h[0][2] = y
    } else if ((p == 4) && (h[1][0] == 4)){
        h[1][0] = y
    } else if ((p == 5) && (h[1][1] == 5)){
        h[1][1] = y
    } else if ((p == 6) && (h[1][2] == 6)){
        h[1][2] = y
    } else if ((p == 7) && (h[2][0] == 7)){
        h[2][0] = y
    } else if ((p == 8) && (h[2][1] == 8)){
        h[2][1] = y
    } else if ((p == 9) && (h[2][2] == 9)){
        h[2][2] = y
    } else {
        console.log("That space is taken you fucking idiot. Do better 4head");
        varPrompter(y);
    };
    return h;
};
function swapper(y) {
    // y is the turn var to designated whos trun it is so this function can switch it to the other persons; x to o and o to x;
    if (y == "O") {
        y = "X"
        return y;
    } else if (y == "X") {
        y = "O"
        return y;
    };
    return y;
};
function turnDecider(w) {
    // 50/50 coin flip chance of who will start the game
    let turn = ''
    if (w == 1) {
        turn = "X"
    } else if (w == 0) {
        turn = "O"
    }
    return turn;
};
function varPrompter(b) {
    let consolePrompt = prompt(`What would you like to pick ${b}? `)
    return consolePrompt;
};