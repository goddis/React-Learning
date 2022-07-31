//import { Fragment } from 'react';
import PropTypes from 'prop-types';

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
            <p>Props=Propiedades de los componentes: {title + ' ' + subtitle}</p>
        </>
    );
}

//Validación de los protypes, definiendo el tipo y validando si es oblogatorio o no
//Saca un mensaje en la consola si no cumple con estas condiciones
PrimerComponente.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

//Al definir valores por defecto no es necesario poner las propiedades en el componente del main.
PrimerComponente.defaultProps ={
    title: "Titulo por defecto",
    subtitle: "subtitulo por defecto",
    otraPropiedad: "otra propiedad" //se pueden agregar otras propiedades, pero esta solo se ven en la consola
} 