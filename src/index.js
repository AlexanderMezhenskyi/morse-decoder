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
    let str = '';

    for (let i = 0; i < expr.length; i += 10) {
        const chunk = expr.substr(i, 10);

        if (chunk === '**********') {
            str += ' ';
        } else {
            let encodedLetter  = '';

            for (let j = 0; j < chunk.length; j += 2) {
                const innerChunk = chunk.substr(j, 2);

                if (innerChunk === '10') {
                    encodedLetter += '.';
                } else if (innerChunk === '11') {
                    encodedLetter += '-';
                }
            }

            str += MORSE_TABLE[encodedLetter];
        }
    }

    return str;
}

module.exports = {
    decode
}