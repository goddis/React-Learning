import { getHeroeById } from './20-21-import-export';

//Promesas que por naturaleza son tareas asincronas...
/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        console.log(heroe);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe');
    }, 2000)
});

//cuando se regresa un resolve
promesa.then((heroe) => {
    console.log('Then de la promesa', heroe);
})

    //Cuando se regresa un reject
    .catch(err => console.warn(err))*/

//----------------------------------------------------------------------------
//Mandarle a la promesa el heroe que necesito buscar...

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(2);
            console.log(heroe);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('Lo siento, Él héroe no existe!')
            }
        }, 1000)
    });
}

getHeroeByIdAsync(4).then(console.log) //otra manera de imprimir en el console
.catch(console.warn)