import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

 export const useFetchGifs = ( category )=> {
   
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //promesa
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //Este hook evitar que cuando se renderice el modulo, se renderice la funcion getGifs, está solo lo hace una vez y es cuando entra
    useEffect(() => {
        getImages();
    }, []);
    
    return {
        images,
        isLoading
   }
   
 }
 