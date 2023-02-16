import React from "react";
import "./Favorites.modules.css";
import Card from "../Card";
import { connect } from "react-redux";

export function Favorites(props){

const favos = props.myFavorites?.map(fav =>{
    return <Card key={fav.id} per={fav} detailId={fav.id}/>
})

return (
    <div>
        {favos}
    </div>
    )
}

export const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites);