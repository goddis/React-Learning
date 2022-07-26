//Desestructuración Arreglos

const personajes = ['Yodi', 'Tatiana', 'Isabela'];
const [p1, p2, p3] = personajes;
/*const[p1,,]=personajes;
const[,p2,]=personajes;
const[,,p3]=personajes;*/
console.log(p1, p2, p3);
/*console.log(p1);
console.log(p2);
console.log(p3);*/

const retornaArreglo = () => {
    return ['ABD', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras,'-',numeros)

//Tarea
//1. El primer valor del arr se llamará nombre
//2. se llamará setNombre

const tareaState=(valor)=>{
    return[valor, ()=>{console.log('Hola mundo')}];
}

const [nombre, newNombre]=tareaState('Tarea');

console.log(nombre);
newNombre();