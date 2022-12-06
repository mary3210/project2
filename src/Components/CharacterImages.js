import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function CharacterImages(){
    const [characterImages, setCharacterImages] = useState([]);
    useEffect(() => {
        
        fetch("https://rickandmortyapi.com/api/character/1")
        .then((res) => res.json())
        .then((json) => {
            setCharacterImages([json]);
            
        })
        .catch(console.error)
    }, []);
    return (
        <section className="container">
            {console.log(characterImages)}
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