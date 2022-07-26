const apiKey = 'ogFAfSSZssAWCXFHVx1plEhSbcFTnAhO';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
//promesas en cadena
peticion
    .then(respuesta => respuesta.json())
    .then(({ data }) => {   //desestructurado la data
        const urlGif = data.images.original.url;
        console.log(urlGif);

        const img = document.createElement('img');
        img.src = urlGif;

        document.body.append(img);

        /*const {gifUrl} = data.images.original.url;  //desestructurado la url
        console.log(urlGif);
        const img2 = document.createElement('img2');
        img2.src = gifUrl;
        document.body.append(img2);*/

    })
    .catch(console.warn);