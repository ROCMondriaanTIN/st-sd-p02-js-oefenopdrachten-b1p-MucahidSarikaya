console.log('file loaded');

const selectButton = document.querySelector('.add-button');
const selectListing = document.querySelector('.listing');
const delButton = document.querySelector('.del-button');

const cars = [];

//functie om objecten te maken
function makeCars(brand, color, year, price, speed) {
    const carObject = {
        merk: brand,
        kleur: color,
        bouwjaar: year,
        prijs: price,
        snelheid: speed,
        getDescription: function () {
            return `<div class="card">
            <h2>${this.merk}</h2>
            <p>${this.kleur} - ${this.bouwjaar} - ${this.prijs} - ${this.snelheid} </p>
            <button> Klik om te kopen</button>
        </div>`;
        } 
    };
    return carObject;
}

//prompts aanmaken om objecten te creeren.
function addCarsPrompt() {
    const userBrand = prompt('Merk');
    const userColor = prompt('Kleur');
    const userYear = prompt('Bouwjaar');
    const userPrice = prompt('Prijs');
    const userSpeed = prompt('Snelheid');
    cars.push(makeCars(userBrand, userColor, userYear, userPrice, userSpeed));
    displayCars();
}

//deze functie is een duplicatie voor eerdere oefening met Array 
// function displayCars(){
//     for(let i = 0; i < cars.length; i++){
//         if(cars[i] !== 'BMW'){
//             const car = cars[i];
//             selectListing.innerHTML += `<li> ${car} </li>`;
//         }
//     }
// }

function displayCars() {
    let newHTML = '';
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        console.log(car);
        newHTML += car.getDescription();
    }
    selectListing.innerHTML = newHTML;
}



function deleteCars() {
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        selectListing.innerHTML = '';
    }
}


selectButton.addEventListener('click', addCarsPrompt);
delButton.addEventListener('click', deleteCars);