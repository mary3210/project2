import React from "react";
import { useParams } from 'react-router-dom'

export default function CharacterFooter(){
    const {id} = useParams()
    const url =`/details/${Number(id) + Number(1)}`
    return (
        <div className="characterFooter">
            <p>Im the footer that works </p>
            <h1> <a href={url}> See Next Character </a></h1>
        </div>
    )
}