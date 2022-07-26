//Desestructuración Objetos
//Asignación Desestructurante

const Persona = {
    nombre: 'Yodi',
    edad: 30,
    clave: 'DIM'
};

//La desestructuración en vez de esto...
//console.log(Persona.nombre);
//console.log(Persona.edad);
//console.log(Persona.clave);

//Permite hacer esto...
//const { nombre } = Persona;
//console.log(nombre);

//Tambien se puede cambiar el nombre en caso que exista otra variable con el mismo nombre
//const { nombre: nombre2 } = Persona;
//console.log(nombre2);

//Tambien se puede en cualquier orden
//const { nombre, edad, clave } = Persona; 
//const { edad, nombre, clave } = Persona;

//puedo crear otro valor del objeto con un valor ya definido asi no exista en el objeto
const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad
    }
}

//retornaPersona(Persona);

const avenger = retornaPersona(Persona);
console.log(avenger);

//cambiamos el nombre de la función
const changeContext = ({ clave, ombre, edad, rango = 'Capitan' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.152,
            lng:36.123
        }
    }
}

//si quiero extraer solo de un objeto y pasarlo a constante debo hacer lo siguiente, por ejemplo si necesito solo la latitud
const { nombreClave, anios, latlng:{lat,lng}} = changeContext(Persona);
console.log(nombreClave, anios);
console.log(lat);
console.log(lng);