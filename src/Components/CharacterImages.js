import React from "react";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function CharacterImages(){
    const [characterImages, setCharacterImages] = useState([]);
    useEffect(() => {
        
        fetch("https://cors-anywhere.herokuapp.com/"+"https://rickandmortyapi.com/",{headers: {"Access-Control-Allow-Origin": "*"}})
        .then((res) => res.json())
        .then((json) => {
            setCharacterImages(json);
            console.log(setCharacterImages(json))
        })
        .catch(console.error)
    }, [])
    return (
        <section className="container">
            {characterImages.map((character) => ( 
                <div className="card-image">
                <img src={characterImages.image} alt={characterImages.name} />
              </div>
))}
            <p>whoo i show up!</p>
        
        </section>
    )
    
}