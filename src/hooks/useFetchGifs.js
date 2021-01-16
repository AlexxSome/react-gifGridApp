import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGif'

export const useFetchGifs = (category) =>{
    const [state, setstate] = useState({
        data : [],
        loading: true
    })

    //const [images, setTmages] = useState([]);
    
    useEffect( () => {
    //     getGifs(category).then(imgs => setTmages(imgs));
        getGifs(category).then(imgs => 
            setTimeout(()=>{
                setstate({
                    data:imgs,
                    loading: false
                })
            }, 1500)

        )
    }, [category]);

    return state;
}