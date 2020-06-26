import { createStore } from "redux";

const initialState = {
    name: 'Rebecca',
    age: 79
}

function buildReducers(obj){
    return function(state, action){
        const outObj = {};
        Object.keys(obj).forEach(key => {
            outObj[key] = obj[key](state[key],action);
        });
        return outObj;
    }
}

const actionTypes = {
    CHANGE_NAME: 'CHANGE_NAME',
    INCREMENT_AGE: 'INCREMENT_AGE' 
}

function changeName(name){
    return {
        type: actionTypes.CHANGE_NAME,
        payload: name
    }
}

function incrementAge(){
    return {
        type: actionTypes.INCREMENT_AGE
    }
}

function changeNameReducer(state='', action){
    switch(action.type){
        case actionTypes.CHANGE_NAME:
            return action.payload;
        default:
            return state;
    }
}

function ageReducer(state=1, action){
    switch(action.type){
        case actionTypes.INCREMENT_AGE:
            return state+1;
        default:
            return state;
    }
}

const store = createStore(buildReducers({ 
    name: changeNameReducer,
    age: ageReducer
}), initialState);

let data = store.getState();
console.log('initial state:',data);

store.dispatch(changeName('Jacqualine'));
store.dispatch(incrementAge());
store.dispatch(incrementAge());
store.dispatch(incrementAge());
store.dispatch(incrementAge());
store.dispatch(incrementAge());

data = store.getState();
console.log('final state: ',data);