const selectSaveButton = document.querySelector('.saveButton');
const selectDeleteButton = document.querySelector('.deleteButton');
const selectGetButton = document.querySelector('.getButton');
const selectOutput = document.querySelector('.output');

// Functie om gegevens op te slaan in LocalStorage
selectSaveButton.addEventListener('click', function () {
    const user = {
        name: prompt('Wat is je naam'),
        tweet: prompt('Wat is je Tweet'),
        timestamp: new Date().toISOString() // Voeg een timestamp toe
    };

    // Haal de bestaande gebruikers op uit LocalStorage of gebruik een lege array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user); // Voeg de nieuwe gebruiker toe
    console.log('array met users', users)
    localStorage.setItem('users', JSON.stringify(users)); // Sla de bijgewerkte lijst op
    selectOutput.innerHTML = "<p>Gegevens opgeslagen in LocalStorage.</p>";
});

selectGetButton.addEventListener('click', function () {
    const data = localStorage.getItem('users'); // Haal data uit LocalStorage
    if (data) {
        const users = JSON.parse(data); // Parse JSON-string naar array
        let newHtml = '';
        for (let i = 0; i < users.length; i++) {
            newHtml += `<div class="card">
            <h3 class="card-title">${users[i].name}</h3>
            <p class="card-description">${users[i].tweet} - ${users[i].timestamp}</p>
            <a href="#" class="card-button">Stuur een dm</a>
        </div>`;
        }
        selectOutput.innerHTML = newHtml;
    } else {
        // Geen data gevonden
        selectOutput.innerHTML = "<p>Geen gegevens gevonden in LocalStorage.</p>";
    }
});

// Functie om gegevens te verwijderen uit LocalStorage
selectDeleteButton.addEventListener('click', function () {
    localStorage.removeItem('users');
    selectOutput.innerHTML = "<p>Gegevens verwijderd uit LocalStorage.</p>";
});

