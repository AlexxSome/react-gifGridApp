import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Shingeki', 'Boku no Hero', 'Shokugeki no Soma'];
    const [categories, setCategories] = useState(['Shingeki']);

    // const handleAdd= () =>{
        //setCategories([...categories, "HunterXhunter"]);

    //     setCategories(cats => [...cats, "Hunter X Hunter"]);
    // }

    return (
        <div>
            <h2>GifExpertApp Component</h2>      
            <AddCategory setCategories={setCategories}/>
            <hr /> 

            {// <button onClick={handleAdd}>Agregar</button>   
            }

            <ol>
                {   categories.map( (cat) => {
                        return <GifGrid key={cat} category={cat}/>
                    })
                }
            </ol>   
        </div>
    )
}
