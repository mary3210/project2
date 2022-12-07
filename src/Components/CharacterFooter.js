import React from "react";
import { useParams } from 'react-router-dom'

export default function CharacterFooter(){
    const {id} = useParams()
    const url1 =`/details/${Number(id) + Number(1)}`
    const url2 =`/details/${Number(id) - Number(1)}`
    return (
        <div className="characterFooter">
            <p>Im the footer that works </p>
            <h1> <a href={url1}> See Next Character </a></h1>
            <h1> <a href={url2}> See Previous Character </a></h1>
        </div>
    )
}