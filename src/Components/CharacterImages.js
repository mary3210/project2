import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function CharacterImages(){
    const [characterImages, setCharacterImages] = useState([]);
    useEffect(() => {
        
        fetch("https://rickandmortyapi.com/api/character/")
        .then((res) => res.json())
        .then((json) => {
            setCharacterImages(json.results);
            
        })
        .catch(console.error)
    }, []);
    console.log(characterImages)
    return (
        <section className="container">
            {characterImages.map((character) => ( 
               
                <Link to={`/details/${character.id}`} key={character.id}>
                {character.id}
                <div className="card">
                <div className="card-image">
                <img src={character.image} alt={character.name} />
            </div>
            <div>
                <p>whoo i show up!</p>
                </div>
              </div>
             
              </Link>            
))} 
            
        
        </section>
    );
    
}