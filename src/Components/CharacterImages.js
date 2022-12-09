import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './CharacterImages.css'

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
    return (
        <section className="container">
            {characterImages.map((character) => ( 
               
                <Link to={`/details/${character.id}`} key={character.id}>
                <div> {character.name}</div>
                <div className="card">
                <div className="card-image">
                <img src={character.image} alt={character.name} />
            </div>
            <div>
            
             </div>
              </div>
             
              </Link>            
))} 
            
        
        </section>
    );
    
}