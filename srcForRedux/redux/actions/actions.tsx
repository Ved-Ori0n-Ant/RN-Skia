export const ADD_CAKE = 'ADD_CAKE';
export const REMOVE_CAKE = 'REMOVE_CAKE';
export const ADD_ICECREAM = 'ADD_ICECREAM';
export const REMOVE_ICECREAM = 'REMOVE_ICECREAM';

export function addCakeToStore() {
    return ({
        type: ADD_CAKE
    })
}

export function removeCakeFromStore()  {
    return({
        type: REMOVE_CAKE
    })    
}
export function addIceCreaMToFreezer() {
    return ({
        type: ADD_CAKE
    })
}

export function removeIceCreaMFromFreezer()  {
    return({
        type: REMOVE_CAKE
    })    
}


//  We could directly export actions, without the help of the action creater;
//  But it's a good practice to use action creater
//  If action-object is directly used as the argument of the store, then when changes are made, they've to manage separately
//  Which is kind of time consuming as well as redundant task
//  
//  action creaters are functions. actions are the objects with type properties