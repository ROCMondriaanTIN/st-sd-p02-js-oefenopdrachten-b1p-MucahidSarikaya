console.log("Page loaded");

const firstname = "Mucahid";
const lastname = "Sarikaya";
const sex = "male";
let status = "online";
let age = 30;

//Haalt HTML-Elementen op
const profileDiv = document.querySelector(".profile");
const nameParagraph = document.querySelector(".name");
const ageParagraph = document.querySelector(".age");
const addButton = document.querySelector(".add-profile");
const profilesDiv = document.querySelector(".profiles");

// verandert de tekst
nameParagraph.textContent = firstname + " " + lastname; 
ageParagraph.textContent = "age: " + age; 

// zorgt ervoor dat de add-profile button iets uitvoert.
addButton.addEventListener("click", function (event){
    alert("Vul hier alle gegevens in van een nieuwe profiel");
    const firstName = prompt("fill firstname: ");
    const lastName = prompt("lastname: ");
    const sex = prompt("sex: ");
    const status = "offline";
    const age = prompt("age: ");
    // aanroepen van een functie met parameters
    let profileHTML = createProfileDiv(firstName, lastName, sex,age); 
    profilesDiv.innerHTML = profileHTML;
});

// een funtie dat een een profiel aanmaakt in html
function createProfileDiv(fname, lname, sex, age){
    let htmlCode = `
    <div class="profile">
        <h3 class="name"> ${fname} ${lastname} </h3>
        <p class="age"> age: ${age} </p>
    </div>
    `;
    return htmlCode;
}
