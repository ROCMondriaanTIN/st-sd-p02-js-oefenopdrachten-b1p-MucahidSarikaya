console.log('file loaded')

const playerOne = {
    name: 'Piet',
    age: 15,
    point: 55
};

// console.log('object console', playerOne);

const playerOneJson = JSON.stringify(playerOne);

// console.log('Dit is JSON', playerOneJson);

const setUser = localStorage.setItem('user', playerOneJson);

console.log(localStorage.getItem('user'))

localStorage.removeItem('user');

console.log(localStorage.getItem('user'))


