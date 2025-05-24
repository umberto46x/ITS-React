import { useEffect, useState } from "react"
import type { Character } from "../models/Character"
import axios from 'axios';


export const useCharacters = (page:number) => {

    const [Characters, setCharacters] = useState<Character[]>([])
    const [totalPages,setTotalPages] = useState<number|null>(null)


    useEffect(() => {

        
        


    },[page])



    


}

    
};



