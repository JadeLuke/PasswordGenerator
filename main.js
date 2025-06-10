const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowerCase = "abcdefghijklmnopqrstuvxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()?+_=-<>/|~";

const allChar = upperCase + lowerCase + numbers + symbol;

function createPassword(){

let password = "";
password += upperCase[Math.floor(Math.random() * upperCase.length)];
password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
password += numbers[Math.floor(Math.random() * numbers.length)];
password += symbol[Math.floor(Math.random() * symbol.length)];

while(lenght > password.length){
    password += allChar[Math.floor(Math.random() * allChar.length)];
}
passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}