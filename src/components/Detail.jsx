import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom"


const Div = styled.div`
justify-content: center;
display: flex;

flex-wrap: wrap;
`;
const DataStyle = styled.div`
margin: 80px;
background: rgba(0, 0, 0, 0.6);
padding-left: 50px;
padding-right: 50px;
border: 3px solid white;
border-radius: 15px;
box-shadow: 0 0 15px #FFFFFF;
`;
const Dato = styled.div`
color: white;
margin: 10px;
font-size: 22px;
`;
const Nom = styled.h1`
color: white;
margin: 10px;

`;
const Foto = styled.img`
border: 3px solid white;
border-radius: 20px;
box-shadow: 0 0 15px #FFFFFF;
`;
const Volver = styled.button`
position: absolute;
margin-top: 500px;
cursor: pointer;
border-radius: 10px;
background-color: #FFFFFF;
font-family: Cursive;
font-weight: bold;
font-size: 30px;
padding: 15px;
box-shadow: 0 0 15px #FFFFFF;
&:hover{
   box-shadow: 0 0 60px #FFFFFF;
   background-color: #686868;
   color: white;
}
`;
export default function Detail(){
    const {detailId} = useParams();
    const [character, setCharacter] = useState()
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    
    return <Div >
        <DataStyle>
            <Nom>{character?.name}</Nom>
            <Dato>Status: {character?.status}</Dato>
            <Dato>Especie: {character?.species}</Dato>
            <Dato>Genero: {character?.gender}</Dato>
            <Dato>Origen: {character?.origin?.name}</Dato>
        </DataStyle>
        <Foto src={character?.image} />
        <Link to="/"><Volver>Volver</Volver></Link>
        
    </Div>
}