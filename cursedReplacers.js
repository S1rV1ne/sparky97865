const prompt = require('prompt-sync')(); 
let table = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
]
function xPicker() {
    let xprompt = prompt('What would you like to pick X? ');
    return xprompt;
};
function oPicker() {
    let oprompt = prompt('What would you like to pick O? ');
    return oprompt;
};
const activeOPrompt = oPicker();
const activeXPrompt = xPicker();
function replacer() {
    if ((activeOPrompt == 1) && (table[0][0] == 1)){
        table[0][0] = "O"
    } else if ((activeOPrompt == 2) && (table[0][1] == 2)){
        table[0][1] = "O"
    } else if ((activeOPrompt == 3) && (table[0][2] == 3)){
        table[0][2] = "O"
    } else if ((activeOPrompt == 4) && (table[1][0] == 4)){
        table[1][0] = "O"
    } else if ((activeOPrompt == 5) && (table[1][1] == 5)){
        table[1][1] = "O"
    } else if ((activeOPrompt == 6) && (table[1][2] == 6)){
        table[1][2] = "O"
    } else if ((activeOPrompt == 7) && (table[2][0] == 7)){
        table[2][0] = "O"
    } else if ((activeOPrompt == 8) && (table[2][1] == 8)){
        table[2][1] = "O"
    } else if ((activeOPrompt == 9) && (table[2][2] == 9)){
        table[2][2] = "O"
    } else if ((table[0][0] != 1) && (table[0][1] != 2) && (table[0][2] != 3) && (table[1][0] != 4) && (table[1][1] != 5) && (table[1][2] != 6) && (table[2][0] != 7) && (table[2][1] != 8) && (table[2][2] != 9)) { 
        console.log("Draw. You're both loosers.")
    } else {
        console.log("That space is taken you fucking idiot. Do better 4head");
        oPicker();
    };
    return table;
};
function xReplacer() {
    if ((activeXPrompt == 1) && (table[0][0] == 1)){
        table[0][0] = "X"
    } else if ((activeXPrompt == 2) && (table[0][1] == 2)){
        table[0][1] = "X"
    } else if ((activeXPrompt == 3) && (table[0][2] == 3)){
        table[0][2] = "X"
    } else if ((activeXPrompt == 4) && (table[1][0] == 4)){
        table[1][0] = "X"
    } else if ((activeXPrompt == 5) && (table[1][1] == 5)){
        table[1][1] = "X"
    } else if ((activeXPrompt == 6) && (table[1][2] == 6)){
        table[1][2] = "X"
    } else if ((activeXPrompt == 7) && (table[2][0] == 7)){
        table[2][0] = "X"
    } else if ((activeXPrompt == 8) && (table[2][1] == 8)){
        table[2][1] = "X"
    } else if ((activeXPrompt == 9) && (table[2][2] == 9)){
        table[2][2] = "X"
    } else if ((table[0][0] != 1) && (table[0][1] != 2) && (table[0][2] != 3) && (table[1][0] != 4) && (table[1][1] != 5) && (table[1][2] != 6) && (table[2][0] != 7) && (table[2][1] != 8) && (table[2][2] != 9)) { 
        console.log("Draw. You're both loosers.");
    } else {
        console.log("That space is taken you fucking idiot. Do better 4head");
        xPicker();
    };
    return table;
};
oReplacer(activeOPrompt);
console.log( {a: table[0]}, '\n', {b: table[1]}, '\n', {c: table[2]});