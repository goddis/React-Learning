/*Tarea: 
1. Crear un nuevo componente dentro de la src llamada  CounterApp
2. El CounterApp debe ser un Functional Component
3. El contenido del CounterApp debe ser: lo que contiene el componente
4. Donde "value" es una propiedad enviada desde el padre hacia el componente CounterApp
(Debe ser númerica validada con PropTypes)
5. Agregar el componente en el main.jsx
6. Verificar no tener errores o warnings */

import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
    //Usando Hooks -> use=significa que es Hook
    const [counter, setCounter] = useState(value); //estado actual    

    //Adiccionar
    const handleAdd = () => {
        //setCounter(counter+1); //cambia el estado
        setCounter((c) => c + 1); //tambien se puede incrementa con funcion
    }

    //Restar
    const handleSubtract = () => {
        setCounter(counter - 1); //cambia el estado
        //setCounter((c) => c + 1); //tambien se puede incrementa con funcion
    }

    //Resetear
    const handleReset = () => {
        setCounter(value);
        //setCounter((c)=> value); //tambien se puede incrementa con funcion
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubtract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

// CounterApp.defaultProps={
//     value: 123
// }