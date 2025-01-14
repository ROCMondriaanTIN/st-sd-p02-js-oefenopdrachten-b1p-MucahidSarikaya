const cars = ['Mercedes', 'Audi', 'BMW', 'Golf', 'Porsche', 'Kia'];

console.log(cars);

for(let i = 0; i <= cars.length; i++){
    if(cars[i] != 'Kia'){
        console.log(cars[i]);
    }
}

let authenticated = false;
const password = 'test';


while(!authenticated){ // als authenticatie false is
    const userInput = prompt('Wat is je ww');
    if(userInput == password){
        alert('ingelogd');
        authenticated = true; //stopt de while loop
    } else {
        alert('probeer het opnieuw');
    }
}








// console.log('connected');

// const myCars = ['Mercedes', 'Audi', 'Fiat', 'BMW', 'Kia', 'Porsche'];

// for(let i = 0; i < myCars.length; i++){
//     if(myCars[i] != 'Mercedes'){
//         console.log(myCars[i]);
//     }
// }









// let authenticated = false;
// const userPassword = 'test';
// let userInput;

// while (!authenticated) { // Blijf vragen zolang de gebruiker niet geauthenticeerd is
//     userInput = prompt('Wat is je wachtwoord?');
    
//     if (userInput === userPassword) {
//         authenticated = true; // Wachtwoord correct, beëindig de lus
//         alert('Je bent ingelogd!');
//     } else {
//         alert('Onjuist wachtwoord, probeer opnieuw.');
//     }
// }
