import { useFetchGifs } from '../hooks/useFetchGifs'; //hook creado por nosotros
import GifItems from './GifItems'; //componente

export const GifGrid = ({ category }) => {
 
    // const [images, setImages] = useState([]);

    // //promesa
    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // //Este hook evitar que cuando se renderice el modulo, se renderice la funcion getGifs, está solo lo hace una vez y es cuando entra
    // useEffect(() => {
    //     getImages();
    // }, [])

    //Todo lo anterior lo paso para el hook que creamos nosotros mismos...
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && <h2>Cargando...</h2> //mensaje de cargando, si cumple la condición de que la imagen esta cargando
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItems
                            key={image.id}
                            {...image} //esta es una manera de traer todas las propiedades de la imagen
                        />
                    ))
                }
            </div>
        </>
    )
}
