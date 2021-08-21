const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var newstr = expr.replace(/(.{10})/g,"$1 ");
    var str_11 = newstr.replace(/11/gi, '-');
    var str_10 = str_11.replace(/10/gi, '.');
    var str = str_10.replace(/[**********]/gi, ' ');
   
    var newnewstr = str.replace(/0/gi, '');

    var messageConverted = [];

    newnewstr.split("          ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(MORSE_TABLE[letter]);
        });
        messageConverted.push(" ");
    });
     
    result = messageConverted.join("");

    return result.slice(0, -1);

}



module.exports = {
    decode
}