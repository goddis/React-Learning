//Importar, Exportar y Funciones comunes de arreglos


import { heroes } from '../data/heroes' //Para importar información de otros archivos
//import { heroes } from './data/heroesExportDefault' //Para importar por defecto

//find
export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);
console.log(getHeroeById(2));

//filter
export const getHeroeByOwner= (owner)=>heroes.filter(heroe=>heroe.owner===owner);
console.log(getHeroeByOwner('Marvel'));
console.log(getHeroeByOwner('DC'));

//Múltiples importaciones y exportaciones por defecto
