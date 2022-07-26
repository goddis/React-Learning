const activo = true;

// let mensaje='';

// if(activo){
//     mensaje='Activo';
// }else{
//     mensaje='Inactivo';
// }

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
const mensaje = activo && 'Activo'; //Este condicional es muy útil para cuando se necesita mostrar algo por que se cumple la condición
const mensaje2 = !activo && 'Activo'; //me regresa false

console.log(mensaje);
console.log(mensaje2);