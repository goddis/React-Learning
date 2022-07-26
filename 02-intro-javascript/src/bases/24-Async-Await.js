//Async y await funcionan juntos, solo se usa await si la funcion es Async, esta es otra manera de trabajar promesas

const getImagen = async () => {
    try {
        const apiKey = 'ogFAfSSZssAWCXFHVx1plEhSbcFTnAhO';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const { data } = await respuesta.json();
        const urlGif = data.images.original.url;

        console.log(urlGif);

        const img = document.createElement('img');
        img.src = urlGif;

        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}

getImagen();