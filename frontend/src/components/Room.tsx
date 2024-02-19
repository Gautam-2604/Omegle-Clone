import { useSearchParams } from "react-router-dom"
import { useEffect } from "react";

export const Room = ()=>{
    const [searchParams, setSearchParams]= useSearchParams();
    const name=searchParams.get('name');

    useEffect(() => {
      
    //login to init user into the room
      
    }, [name])
    
    return(
        <div>
            Hi {name}
        </div>
    )
}