import Card from './Card';
import style from "styled-components"

const CardsStyle = style.div`
display: flex;
justify-content: center;
`
export default function Cards(props) {
   const { characters } = props;
   const personajes = characters?.map((per) => <div key={per.id} >{Card(per)}</div>)
   return (
   <CardsStyle>
      {personajes}
   </CardsStyle>
   )
}
