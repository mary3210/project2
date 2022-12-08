import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import {Link} from "react-router-dom";

export default function CharacterSearch(){
    const [searchBarInput, setSearchBarInput] = useState([])
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        
        fetch("https://rickandmortyapi.com/api/character/")
        .then((res) => res.json())
        .then((json) => {
            setData(json.results);
            
        })
        .catch(console.error)
    }, []);
    
    
    const handleChange = (e) => {
       // e.preventDefault();
        setSearchBarInput(e.target.value);
    }

    {data.filter(value => {
        if (searchBarInput === '') {
            return value;
          } else if (value.name.includes(searchBarInput)) {
          return value;
        }
      }).map((value, index) => {
        return (
            <Link to={`/details/${value.id}`} key={value.id}>
        <div className="box" key={index}>
          <p>{value.name}</p>
          <img src={value.image}/>
        </div>
        </Link>
        )
        })}

        

    return (

        <div>
              <input
   type="text"
   placeholder="Search Character here"
   onChange={handleChange}
   value={searchBarInput} />

    </div>
     )
}