import style from "styled-components";

const InputStyle = style.input`
height: 24px;
width: 10%;
box-shadow: 0 0 8px #FFFFFF;
border-radius: 10px;
&:hover{
   box-shadow: 0 0 16px #FFFFFF;
   
 
}
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


export default function SearchBar(props) {
   
   return (
      <div>
         <InputStyle type='search' />
         <ButtonStyle onClick={() => props.onSearch()}>Agregar</ButtonStyle> 
      </div>
   );
}
