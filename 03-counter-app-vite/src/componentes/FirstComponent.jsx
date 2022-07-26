//import { Fragment } from 'react';
const fun_retornarValor = () => { return 'hola mundo' };

export function PrimerComponente({ title, subtitle }) {
    /*Fragment agrupa elementos H}TML para que no tener que usar div y correr el riesgo que se dañe el estilo
    se puede importar el fragmento y usarlo*/
    return (
        // <Fragment>
        //     <h2>Este es mi primer componente en REACT!</h2>
        //     <p>Agrupando varios elementos de html usando frament en vez de div</p>
        // </Fragment>
        /*Pero REACT también permite usar fragment sin tener que importarlo. <> es un fragment*/
        <>
            <h2>Este es mi primer componente en REACT!</h2>
            <p>Agrupando varios elementos de html usando frament sin importarlo en vez de div</p>
            <label>{fun_retornarValor()}</label>
            <p>Props=Propiedades de los componentes: {title +' '+ subtitle}</p>
        </>
    );

}