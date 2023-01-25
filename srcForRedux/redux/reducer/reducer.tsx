import { ADD_CAKE, REMOVE_CAKE } from "../actions/actions"
import { ADD_ICECREAM, REMOVE_ICECREAM } from "../actions/actions"

const initialStateForCake = {
    noOfCake: 10
}
const initialStateForIceCream = {
    noOfIceCream: 20
}
export const reducerManagingCake = (state = initialStateForCake, action: any) => {
    switch(action.type) {
        case ADD_CAKE:
            return({
                ...state,
                noOfCake: state.noOfCake + 1
            })
        case REMOVE_CAKE :
            return({
                ...state,
                noOfCake: state.noOfCake - 1
            })
        default:
            // return({...state})
            return (state)
    }
}

export const reducerManagingIceCream = (state = initialStateForIceCream, action: any) => {
    switch(action.type) {
        case ADD_ICECREAM : 
            return({
                ...state,
                noOfIceCream: state.noOfIceCream + 1
            })
        case REMOVE_ICECREAM :
            return({
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            })
        default :
            return({...state})
    }
}