import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   const personajes = characters?.map((per) => <div key={per.id} >{Card(per)}</div>)
   return (
   <div style={{justifySelf: "center"}}>
      {personajes}
   </div>
   )
}
