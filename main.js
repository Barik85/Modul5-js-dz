document.writeln('Задача про 3 раскладки и произвольную букву');

let alphabetEn = "qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
let alphabetRu = "йцукенгшщзхъ\\фывапролджэячсмитьбю.";
let alphabetUa = "йцукенгшщзхї\\фівапролджєячсмитьбю.";

function addKeyboardLayout( alf ){
    let keyboard = [Array.from(alf.slice(0, 13)), Array.from(alf.slice(13, 24)), Array.from(alf.slice(24))];
    return(keyboard);
}

layoutEn = addKeyboardLayout(alphabetEn);
layoutRu = addKeyboardLayout(alphabetRu);
layoutUa = addKeyboardLayout(alphabetUa);

const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

keyboard.layouts.en.topRow = layoutEn[0];
keyboard.layouts.en.middleRow = layoutEn[1];
keyboard.layouts.en.bottomRow = layoutEn[2];

keyboard.layouts.ru.topRow = layoutRu[0];
keyboard.layouts.ru.middleRow = layoutRu[1];
keyboard.layouts.ru.bottomRow = layoutRu[2];

keyboard.layouts.ua.topRow = layoutUa[0];
keyboard.layouts.ua.middleRow = layoutUa[1];
keyboard.layouts.ua.bottomRow = layoutUa[2];

function getRandCharInRow( raw ) {
    raw = raw - 1;
    let keyboard = addKeyboardLayot(alfabet);
    let number = keyboard[raw].length;
    let letter = keyboard[raw][randomNumber(number)];
    return(letter);
}
function randomNumber(max) {
    let rand = Math.random() * max;
    rand = Math.floor( rand );
    return(rand);
}
let lang;
do {
    lang = prompt('Выберите язык: 1 - Английский, 2 - русский, 3 - украинский');
    if (lang == undefined) break;
    lang = parseInt(lang);
    if (lang > 3 || lang < 1) {
        alert('Выбран недоступный язык. Повторите попытку');
    }
} while (lang != 1 && lang != 2 && lang != 3);

if (lang == 1) {
    keyboard.currentLang = 'en';
} else if (lang == 2) {
    keyboard.currentLang = 'ru';
} else if (lang == 3) {
    keyboard.currentLang = 'ua';
}
function getRandCharInAlph() {
    let language = keyboard.currentLang;
    let layout = keyboard.layouts[language];
    let raws = Object.keys(layout);
    let raw = raws[randomNumber(raws.length)];
    let number = raw.length;
    let letter = layout[raw][randomNumber(number)];
    return letter;
}
const LetterPlace = document.createElement("p");

document.body.append(LetterPlace);
LetterPlace.style.position = "absolute";
LetterPlace.style.top = "50%";
LetterPlace.style.left = "40%";
LetterPlace.style.color = "red";
LetterPlace.style.fontSize = "20px";
LetterPlace.style.fontFamily = "Arial";


LetterPlace.innerHTML = `Случайна буква в раскладке ${keyboard.currentLang}: ${getRandCharInAlph()}`;
console.log(getRandCharInAlph());