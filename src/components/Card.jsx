export default function Card(props) {
   return (
      <div style={{backgroundColor: "grey", maxWidth: "30%", justifyContent: "space-around"}}>
         <button onClick={() => alert("Cerrar")}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name + "img"} style= {{maxWidth: "80%"}}/> 
      </div>
   );
}
