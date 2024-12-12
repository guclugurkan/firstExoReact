
import {useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  //données
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);
  
  
  // const inputRef = useRef();
  //comportement
  const handleClick = (id) => {
    console.log(id);
    // const fruitsCopy = fruits.slice(); 
    // console.log(fruitsCopy);
    const fruitsCopy = [...fruits];
    const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id);
    
    setFruits(fruitsCopyUpdated);

  };
  const handleAdd = (fruitAdd) => {
    // copie du state
    const fruitsCopy = [...fruits];

    // manip du state
    fruitsCopy.push(fruitAdd);


    setFruits(fruitsCopy);
    
  }
  
  //affichage
  return (
    <div className="app-container">
      <h1>Liste de fruits</h1>

      <ul>
        {fruits.map((fruit) => (   
          <Fruit onFruit={fruit} onHandleClick= {handleClick} key={fruit.id}/>
        ))}
      </ul>
      
      <FruitForm handleAdd = {handleAdd}/>
    </div>
  );
}


export default App; 

















































// import { useState } from "react";

// function App() {//2. un composant React c'est 3 box

//   // un state (des données)
//   const [fruits, setFruits] = useState([
//     {id: 1, nom: "Abricot"},
//     {id: 2, nom: "Banane"},
//     {id: 3, nom: "Cerise"}
//   ])
//   const [nouveauFruit, setNouveauFruit] = useState("");

//   // comportements
//   const handleDelete = (id) => {
//     const nouveauTableau = fruits.filter((fruit) =>  fruit.id !== id);
//     setFruits(nouveauTableau);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const fruitsCopy = [...fruits];

//     let id = new Date().getTime();
//     const nom = nouveauFruit;
//     const fruitAAjouter = {id: id, nom: nom}
//     fruitsCopy.push(fruitAAjouter);
//     setFruits(fruitsCopy);
//     setNouveauFruit("");
    
//   }
//   // un affichage (avec un return)
//   return <div>
//           <h1>Liste de fruits</h1>
//           <ul>
//             {fruits.map((fruit) => {
//               return <li key={fruit.id}>{fruit.nom} <button onClick={() => handleDelete(fruit.id)}>X</button> </li>
//             })}
//           </ul>


//           <form action="submit">
//             <input 
//             type="text"
//             placeholder="Ajouter un fruit"
//             value={nouveauFruit}
//             onChange={(e) => setNouveauFruit(e.target.value)}/>
//             <button type="button" onClick={handleSubmit}>Ajouter</button>
//           </form>

//         </div>; 
// }

