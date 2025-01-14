// Een object 'user' met twee eigenschappen: 'name' en 'age'.
const user = {  
    name: 'Jan',  // Naam van de gebruiker.
    age: 25       // Leeftijd van de gebruiker.
}; 

// user wordt omgezet naar JSON-string en opgeslagen sleutel 'user'.
localStorage.setItem('user', JSON.stringify(user));  
console.log('Gegevens opgeslagen');

// De opgeslagen data wordt opgehaald uit LocalStorage met de sleutel 'user'.
const data = localStorage.getItem('user');

// De opgehaalde JSON-string wordt omgezet naar een JavaScript-object.
const parseUser = JSON.parse(data);  

// De eigenschappen 'name' en 'age' van het object worden gelogd in de console.
console.log(user.name, user.age);  // Output: Jan 25

// data met key 'user' wordt verwijderd
localStorage.removeItem('user');
console.log('Gegevens verwijderd');
