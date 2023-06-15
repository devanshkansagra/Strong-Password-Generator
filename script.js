let passlength = document.getElementById('passLen');
let generateBtn = document.getElementById('generate');
let passOP = document.getElementById('passOP');
let charContain = document.getElementById('charContain');

let clear = document.getElementById('clear');

let numbers = document.getElementById('number');
let capital = document.getElementById('capital');
let small = document.getElementById('small');
let special = document.getElementById('special');

let all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonoprstuvwxyz1234567890!@#$%^&*()_+-={}[]|:''< >?,./";

function generate(length) {

    let password = "";
    for (i = 0; i < length; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    return password;
}

generateBtn.addEventListener('click', () => {
    var upperCase = /[A-Z]/;
    var lowerCase = /[a-z]/;
    var passNum = /[0-9]/;
    var specialChar1 = /[!-/]/;
    var specialChar2 = /[:-@]/;
    var specialChar3 = /[[-`]/;
    var specialChar4 = /[{-~]/;

    let o = document.getElementById('1');
    let t = document.getElementById('2');
    let th = document.getElementById('3');
    let f = document.getElementById('4');

    let op = generate(parseInt(passlength.value));
    if (passlength.value == 0) {
        charContain.innerHTML = "0 characters";
    }
    else {
        charContain.innerHTML = passlength.value + " characters";
    }
    passOP.value = op.toString();

    if (passOP.value.match(upperCase)) {
        capital.innerHTML = '<i class="fa-solid fa-check" id="2"></i>'

    }
    else {
        capital.innerHTML = '<i class="fa-solid fa-circle fa-2xs" id="2"></i>'
    }

    if (passOP.value.match(lowerCase)) {
        small.innerHTML = '<i class="fa-solid fa-check" id="3"></i>'
    }
    else {
        small.innerHTML = '<i class="fa-solid fa-circle fa-2xs" id="3"></i>';
    }

    if (passOP.value.match(passNum)) {
        numbers.innerHTML = '<i class="fa-solid fa-check" id="1"></i>';
    }
    else {
        numbers.innerHTML = '<i class="fa-solid fa-circle fa-2xs" id="1"></i>';
    }
    if (passOP.value.match(specialChar1) || passOP.value.match(specialChar2) || passOP.value.match(specialChar3) || passOP.value.match(specialChar4)) {
        special.innerHTML = '<i class="fa-solid fa-check" id="4"></i>';
    }
    else {
        special.innerHTML = '<i class="fa-solid fa-circle fa-2xs" id="4"></i>';
    }
});

clear.addEventListener('click', () => {
    passOP.value = "";
    charContain.innerHTML = "";
    let passlength = document.getElementById('passLen');
    capital.innerHTML = '<i class="fa-solid fa-circle fa-2xs" id="2"></i>'
    small.innerHTML = '<i class="fa-solid fa-circle fa-2xs" id="3"></i>';
    numbers.innerHTML = '<i class="fa-solid fa-circle fa-2xs" id="1"></i>';
    special.innerHTML = '<i class="fa-solid fa-circle fa-2xs" id="4"></i>';
});
