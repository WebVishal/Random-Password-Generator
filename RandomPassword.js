
// Range connect with Check box
const NumberRange = document.getElementById('NumberRange');
const RangeNumberCheckbox = document.getElementById('RangeNumberCheckbox');
const symbol = document.getElementById('Symbol');
const upperCase = document.getElementById('UpperCase');
const lowerCase = document.getElementById('LowerCase');
const digit = document.getElementById('Digit');

const ResultEl = document.getElementById('result');

RangeNumberCheckbox.addEventListener('input', synRangeNumber)
NumberRange.addEventListener('input', synRangeNumber)


function synRangeNumber(e) {
    const value = e.target.value
    NumberRange.value = value
    RangeNumberCheckbox.value = value

}

//console.log(ResultEl.innerText)
// Genarator Passowrd Button

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    Symbol: getRandomsymbol,
};

const form = document.getElementById('PasswordGenarator')
form.addEventListener('submit', e => {
    e.preventDefault();
    const CharacterAmount = RangeNumberCheckbox.value;
    const haslower = lowerCase.checked
    const hasuppers = upperCase.checked
    const hasnumber = digit.checked
    const hasSymbols = symbol.checked

    const Passowrd = generatPassword(CharacterAmount, hasSymbols, hasnumber, hasuppers, haslower)

    ResultEl.innerText = Passowrd
})



function generatPassword(CharacterAmount, Symbol, number, upper, lower) {
    let generatPassword = "";
    const typesCount = lower + upper + number + Symbol;

    const typeArr = [{ Symbol }, { upper }, { lower }, { number }].filter(
        item => Object.values(item)[0]
    );

    if (typesCount == 0) {
        return "";
    }

    for (let i = 0; i < CharacterAmount; i += typesCount) {

        typeArr.forEach(type => {

            const FuncName = Object.keys(type)[0];
            generatPassword += randomFunc[FuncName]();

        });


    }
    const FinalPassword = generatPassword.slice(0, CharacterAmount);


    return FinalPassword;

}

function getRandomsymbol() {

    const Symbol = "~!`?.><}{][£$%#'/^&*(-=+)`§¥;¢€@|"

    return Symbol[Math.floor(Math.random() * Symbol.length)];
}
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}