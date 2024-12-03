function makeUser(firstName, lastName, age){
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getFullName: function(){
            return this.firstName + ' ' + this.lastName
        }
    };
    return user;
}

const users = [];

function showAllUsers(){
    const selectList = document.querySelector('.all-users');
    let newInnerHTML = '';
    for(let i = 0; i < users.length; i++){
        const user = users[i];
        console.log(user);
        newInnerHTML += `<li> ${user.getFullName()} (${user.age})</li>`
    }
    selectList.innerHTML = newInnerHTML;
}
showAllUsers();

function userInputPrompt(){
    const userFirstName = prompt('Yo rare, wat is je voornaam?');
    const userLastName = prompt('Yo rare, wat is je achternaam?');
    const userAge = prompt('Yo rare, wat is je leeftijd?');

    if (userFirstName && userLastName && userAge) {
        users.push(makeUser(userFirstName, userLastName, userAge));   
        showAllUsers();
    } else {
        alert('ongeldige invoer');
    }      
}


function userInputForms(){
    const selectInputFirstName = document.querySelector('.first-name');
    const selectInputLastName = document.querySelector('.last-name');
    const selectInputAge = document.querySelector('.age');

    if (selectInputFirstName.value && selectInputLastName.value && selectInputAge.value) {
        users.push(makeUser(selectInputFirstName.value, selectInputLastName.value, selectInputAge.value));   
        showAllUsers();
    } else {
        alert('ongeldige invoer');
    }      
}

const selectButton = document.querySelector('.submit-button');
selectButton.addEventListener('click', userInputForms);