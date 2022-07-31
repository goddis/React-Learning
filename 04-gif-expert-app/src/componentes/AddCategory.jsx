import React from 'react'
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    //De esta manera ver que se esta ingresando en el input
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
        console.log(target.value);
    }

    //Función para que el form no refresque el navegador
    const onSubmit = (event) => {
        event.preventDefault();
        const nuevaCategoria=inputValue.trim();
        //Validamos que ingresen una categoría con más de un cáctecter, no vacios ni menor o igual a 1
        if (nuevaCategoria.length <= 1) return;

        onNewCategory(nuevaCategoria);
        //Limpiamos el input luego de ingresar una categoria
        setInputValue('');
    }

    return (
        //Cuando tengo un form no es necesario el fragmento, ya que form es una sola etiqueta que contiene otras.
        //Cuando usamos formulario, este refresca el navegador, entonces para evitar eso se crea una funcion event
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Agregar categoria'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
