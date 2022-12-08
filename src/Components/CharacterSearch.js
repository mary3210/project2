import React from "react";
import { useState, useEffect } from 'react'
import CharacterList from "./CharacterList";




export default function CharacterSearch(){
    const [query, setQuery] = useState("")
    
    
    
    const handleChange = (e) => {
       // e.preventDefault();
        setQuery(e.target.value);
    }

    return (

        <div>
              <input
   type="text"
   placeholder="Search Character here"
   onChange={handleChange}
   value={query} />

    </div>
     )
    
}