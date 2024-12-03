const recipeInput = document.querySelector('.recipe-input');
const dayInput = document.querySelector('.day-input');
const selectButton = document.querySelector('.add-recipe');
const weekPlanning = document.querySelector('.week-planning');
const errorDisplay = document.querySelector('.error');

console.log(recipeInput);
console.log(dayInput);
console.log(selectButton);

const days = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];

const recipes = [];

// Dynamisch dagen toevoegen aan de weekplanning
function initializeDays() {
    let daysHTML = '';
    for (let i = 0; i < days.length; i++) {
        daysHTML += `
            <div class="day-section">
                <h3>${days[i]}</h3>
                <ul class="${days[i]}-list"></ul>
            </div>
        `;
    }
    weekPlanning.innerHTML = daysHTML;
}

function showError(message) {
    errorDisplay.innerHTML = message;
    // Foutmelding verdwijnt na 3 seconden
    setTimeout(() => {
        errorDisplay.innerHTML = '';
    }, 3000);
}

//aanmaken van object met eigenschap naam en dag
function createRecipe(name, day) {
    const recipeObject = {
        name: name,
        day: day,
        edit: function (newName) {
            this.name = newName;
        }
    };
    return recipeObject;
}

function displayRecipes() {
    // Leeg eerst alle lijsten
    for (let i = 0; i < days.length; i++) {
        //dynamische selectie van een list item. 
        const list = document.querySelector(`.${days[i]}-list`);
        list.innerHTML = '';
    }
    // Voeg elk recept toe aan de juiste dag
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const list = document.querySelector(`.${recipe.day}-list`);
        list.innerHTML += `<li>${recipe.name}</li>`;
        console.log(recipe);
    }
}

selectButton.addEventListener('click', function () {
    const recipeName = recipeInput.value;
    const dayName = dayInput.value;

    // Controleer of beide velden zijn ingevuld
    if (recipeName === '' || dayName === '') {
        showError('Vul zowel een receptnaam als een dag in.');
        return;
    }

    // Controleer of de dag geldig is
    if (!days.includes(dayName)) {
        showError('Voer een geldige dag in (bijv. maandag, dinsdag).');
        return;
    }

    const newRecipe = createRecipe(recipeName, dayName);
    recipes.push(newRecipe);

    // Toon de bijgewerkte receptenlijst
    displayRecipes();

    // Maak de invoervelden leeg
    recipeInput.value = '';
    dayInput.value = '';
});

initializeDays();



