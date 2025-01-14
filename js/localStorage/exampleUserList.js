console.log('file loaded');

const selectSaveButton = document.querySelector('.set-item');
const selectGetButton = document.querySelector('.get-item');
const selectDeleteButton = document.querySelector('.delete-item');
const selectOutput = document.querySelector('.output');

selectSaveButton.addEventListener('click', function(){
    const user = {
        name: prompt('Wat is je naam'),
        tweet: prompt('Wat is je Tweet')
    };

     // Haal de bestaande gebruikers op uit LocalStorage of gebruik een lege array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    //voeg users toe
    users.push(user);
    
    //sla gegevens op in localStorage
    const saveUser = localStorage.setItem('users', JSON.stringify(users)); // Sla de bijgewerkte lijst op
    console.log('gebruikers', users)

    if(!saveUser){
        selectOutput.textContent = 'is opgeslagen';
    }else{
        selectOutput.textContent = 'is helaas niet opgeslagen';
    }    
});


selectGetButton.addEventListener('click', function(){
    //stap 1 = ophalen met getItem(key)
    const getUsers = localStorage.getItem('users');
    console.log(getUsers);
    
    //stap 2 = JSON.parse() omdat je JSON wilt omzetten in JS objects.
    const users = JSON.parse(getUsers);
    console.log(users);
 
    for(let i = 0; i < users.length; i++){
        console.log('alle users na loop', users[i])
        selectOutput.innerHTML += `<div class="card">
            <h3 class="card-title">${users[i].name}</h3>
            <p class="card-description">${users[i].tweet}</p>
            <a href="#" class="card-button">Stuur een dm</a>
        </div>`
    }

});

selectDeleteButton.addEventListener('click', function(){
    const users = JSON.parse(localStorage.getItem('users'));
    localStorage.removeItem('users');
    console.log('gebruikers na verwijdering', users);
    const check = alert('is verwijderd');
})

