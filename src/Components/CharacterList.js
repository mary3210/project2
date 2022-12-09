import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import CharacterSearch from "./CharacterSearch";


export default function CharacterList(props){
const [char, setChar] = useState([])

const {id} = useParams()
useEffect(() => {
    
    fetch("https://rickandmortyapi.com/api/character/")
    .then((res) => res.json())
    .then((json) => {
        setChar(json.results);
        
    })
    .catch(console.error)
}, []);


// const handleChange = (e) => {
//     // e.preventDefault();
//      setChar(e.target.value);
//  }
return (
    <div>
{char.filter(value => {
    if (char === '') {
        return value;
      } else if (value.name.includes(char)) {
      return value;
    }
  }).map((value, index) => {
    return (
        <Link to={`/details/${value.id}`} key={value.id}>
    <div className="box" key={index}>
      <p>{value.data}</p>
      <img src={value.image}/>
    </div>
    </Link>
    )
    })}

  

    </div>

)

}