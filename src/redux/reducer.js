import { ADD_FAVORITE, DEL_FAVORITE } from "./actions";

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DEL_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(card => card.id !== action.payload)
            }
        default: return {...state}
    }

}

export default rootReducer