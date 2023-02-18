export const ADD_FAVORITE = "ADD_FAVORITE";
export const DEL_FAVORITE = "DEL_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function addFavorite(character){
    return{
        type: ADD_FAVORITE,
        payload: character
    }
}
export function delFavorite(id){
    return{
        type: DEL_FAVORITE,
        payload: id
    }
}
export function filterCards(status){
    return{
        type: FILTER,
        payload: status
    }
}
export function orderCards(id){
    return{
        type: ORDER,
        payload: id
    }
}

