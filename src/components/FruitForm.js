import { useState } from "react";

export default function FruitForm({handleAdd}) {
    // state
    const [nouveauFruit, setNouveauFruit] =useState("");
    // comportements
    const handleSubmit = (event) => {
        event.preventDefault(); // empecher le rechargement de la page
        // console.log(inputRef.current.value);
    
        const id = new Date().getTime();
        const nom = nouveauFruit;
        const fruitsAAJouter = {id: id,nom: nom}

        handleAdd(fruitsAAJouter);

        setNouveauFruit("");
    

    };
    
    const handleChange = (event) => {
        setNouveauFruit(event.target.value);
    };
    

    // affichage
    return <form action="submit" onSubmit={handleSubmit} className="form-container">
            <input /*ref={inputRef}*/ value={nouveauFruit} type="text" placeholder="Ajouter un fruit..." onChange={handleChange}/> 
            <button>+</button>
            </form>
}