import { createStore } from 'https://cdn.skypack.dev/redux';

const initState = 0;

//Reducer
function reducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW' :
            return state - action.payload;
        default:
            return state ;
    }
}

//store 
const store = createStore(reducer)

function render() {
    const output = document.querySelector('#output');
    output.innerText = store.getState();
} 

render();