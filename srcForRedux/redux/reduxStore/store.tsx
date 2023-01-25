import { addCakeToStore, addIceCreaMToFreezer, removeCakeFromStore, removeIceCreaMFromFreezer } from "../actions/actions";
import { reducerManagingCake, reducerManagingIceCream } from "../reducer/reducer";

const redux = require('redux');

const createStore = redux.createStore();

//Multiple reducer

const store = createStore(reducerManagingCake)
console.log('initial no of cakes', store.getState())
store.subscribe(() => console.log('Updated state', store.getState()))
const unsubscribeStore = store.subscribe(() => console.log('Updated number', store.getState()))

//Checking the implementations
store.dispatch(addCakeToStore)
store.dispatch(removeCakeFromStore)
store.dispatch(removeCakeFromStore)
store.dispatch(addCakeToStore)
store.dispatch(addCakeToStore)
store.dispatch(addCakeToStore)
store.dispatch(removeCakeFromStore)
unsubscribeStore()



const freezer = createStore(reducerManagingIceCream)
console.log('Initial no of ice-creams', freezer.getState())
freezer.subscribe(() => console.log('Updated number', freezer.getState()))
const unsubscribeFreezer = freezer.subscribe(() => console.log('Updated number', freezer.getState()))

//Checking the implementations
freezer.dispatch(addIceCreaMToFreezer)
freezer.dispatch(addIceCreaMToFreezer)
freezer.dispatch(removeIceCreaMFromFreezer)
freezer.dispatch(addIceCreaMToFreezer)
freezer.dispatch(addIceCreaMToFreezer)
freezer.dispatch(addIceCreaMToFreezer)
freezer.dispatch(removeIceCreaMFromFreezer)