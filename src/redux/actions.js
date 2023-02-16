export const ADD_FAVORITE = "ADD_FAVORITE";
export const DEL_FAVORITE = "DEL_FAVORITE";

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

