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
users.push(makeUser('Ali', 'Bombali', 25));
users.push(makeUser('Frans', 'Piet', 15));
users.push(makeUser('Bobo', 'Lang', 35));

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

const selectButton = document.querySelector('.add-users');
selectButton.addEventListener('click', function(){
    const userFirstName = prompt('Yo rare, wat is je voornaam?');
    const userLastName = prompt('Yo rare, wat is je achternaam?');
    const userAge = prompt('Yo rare, wat is je leeftijd?');

    if (userFirstName && userLastName && userAge) {
        users.push(makeUser(userFirstName, userLastName, userAge));   
        showAllUsers();
    } else {
        alert('ongeldige invoer');
    }      
});
