import React from "react"
import SearchBar from "./SearchBar";
import style from "styled-components";

const DivStyle = style.div`
margin-top: 20px;
margin-bottom: 20px;
display: flex;

width: 100%;
flex-direction: row;
justify-content: center;

`;
const ButtonStyle = style.button`
cursor: pointer;
border-radius: 10px;
margin-left: 20px;
color: black;
background-color: #FFFFFF;
font-family: Cursive;
font-weight: bold;
height: 30px;
box-shadow: 0 0 8px #FFFFFF;
&:hover{
   box-shadow: 0 0 16px #FFFFFF;
   background-color: #686868;
   color: white;
}
`;

export default function Nav(props){
    const {onRandom} = props;

    return (
    <DivStyle>
        <SearchBar onSearch={props.onSearch}/>
        <ButtonStyle onClick={()=> onRandom() }>Random</ButtonStyle>
    </DivStyle>
    )
}