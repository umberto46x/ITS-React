import { useEffect, useState } from "react"
import type { Character, CharacterResponse } from "./Character"
import axios from 'axios';


export const useCharacters = (page:number) => {

    const [characters, setCharacters] = useState<Character[]>([])
    const [totalPages,setTotalPages] = useState<number|null>(null)
    const [isLoading,setIsLoading] = useState<boolean>(false)


    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const response = await axios.get<CharacterResponse>(`https://rickandmortyapi.com/api/character/?page=${page}`)
            setCharacters(response.data.results);
            setTotalPages(response.data.info.pages);

            setTimeout(()=>{
                setIsLoading(false);
            },500)

        })();        
    },[page])

    return [characters,totalPages,isLoading] as const ;



    


}

    




