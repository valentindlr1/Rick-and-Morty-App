import React from "react"
import SearchBar from "./SearchBar";
import style from "styled-components";
import { Link } from "react-router-dom";

const DivStyle = style.div`
margin-top: 20px;
margin-bottom: 20px;
display: flex;

position: sticky;
top: 0px;
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
const HomeBut = style.button`
position: absolute;
left: 50px;
cursor: pointer;
border-radius: 10px;
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
const AboutBut = style.button`
position: absolute;
right: 50px;
cursor: pointer;
border-radius: 10px;
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
        <Link to="/home"><HomeBut>HOME</HomeBut></Link>
        
        <SearchBar onSearch={props.onSearch}/>
        <ButtonStyle onClick={()=> onRandom() }>Random</ButtonStyle>

        <Link to="/about"><AboutBut>About</AboutBut></Link>
        
    </DivStyle>
    )
}