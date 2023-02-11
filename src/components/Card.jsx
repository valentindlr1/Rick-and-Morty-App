import style from "styled-components";
import { Link } from "react-router-dom";
//rgba(232, 6, 255, 0.4) morado #B45CAA bordeshadow
const CardsStyle = style.div`
margin-left: 40px;
margin-right: 40px;
margin-bottom: 40px;
justify-content: center;
background: rgba(255, 255, 255, 0.4);
max-width: 250px;
box-shadow: 0 0 30px #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 15px;
&:hover {
   box-shadow: 0 0 60px #FFFFFF;
   background: rgba(255, 255, 255, 0.9);
   
}
`;
const BotonStyle = style.button`
cursor: pointer;
position: relative;
// font-family: cursive;
border-radius: 5px;
margin: 10px;
background: rgba(251, 156, 221, 0.5);
font-size: 18px;
color: #4D0135;
font-weight: bold;
&:hover {
   background-color: red;
}

`;
const NombreStyle = style.h2`
font-family: Cursive;
background: rgba(255, 255, 255, 0.7);
max-width: 190px;
padding-left: 5px;
padding-right: 5px;
padding-top: 1px;
padding-bottom: 1px;
margin: 0px;
border-radius: 10px;
color: black;
box-shadow: 0 0 4px #FFFFFF;
font-size: 18px;

`;
const SpecieStyle = style.h2`
font-family: Cursive;
font-size: 12px;
background: rgba(255, 255, 255, 0.7);
padding-left: 8px;
padding-right: 8px;
padding-top: 3px;
padding-bottom: 3px;
max-width: 50%;
position: relative;

color: black;
border-radius: 10px;
box-shadow: 0 0 4px #FFFFFF;

`;
const GenderStyle = style.h2`
font-family: Cursive;
font-size: 12px;
background: rgba(255, 255, 255, 0.7);
padding-left: 8px;
padding-right: 8px;
padding-top: 3px;
padding-bottom: 3px;
max-width: 50%;
position: relative;
color: black;
border-radius: 10px;
box-shadow: 0 0 4px #FFFFFF;
`;
const ImgStyle = style.img`
border: 2px solid;
border-radius: 20px;
`;
const HrStyle = style.hr`
margin: 0px;
padding: 0px;
 height:40px;
 width:2px;
 border-width:0px;
 background: rgba(255, 255, 255, 0.5);
 box-shadow: 0 0 4px #FFFFFF;
`;

export default function Card(props) {

  const { detailId, per, onClose } = props;

   return (
      <CardsStyle >
         <div style={{margin: "1px", paddingLeft: "10px", paddingRight: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "45px"}}>
         
         <Link to={`/detail/${detailId}`} > 
         <NombreStyle>{per.name}</NombreStyle>
         </Link>
         <BotonStyle onClick={() => {
            //CERRAR CARD
            return onClose(per.id);
         }}>X</BotonStyle>
         </div>
         
         <ImgStyle  src={per.image} alt={per.name + "img"} style= {{maxWidth: "80%"}}></ImgStyle> 
         <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
         <SpecieStyle>Specie: {per.species}</SpecieStyle>
         <HrStyle />
         <GenderStyle>Gender: {per.gender}</GenderStyle>
         </div>
       
         
      </CardsStyle>
   );
}
