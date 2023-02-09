import Card from './Card';
import style from "styled-components"

const CardsStyle = style.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 100%
`
export default function Cards(props) {
   const { onRandom, characters, onClose } = props;
   const personajes = characters?.map(per => {
   return <Card key={per.id} per={per} onClose={onClose} ></Card>
})
   return (
   <CardsStyle>
      {personajes}
   </CardsStyle>
   )
}
