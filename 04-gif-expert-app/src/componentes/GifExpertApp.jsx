import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = ({ nuevaCategoria }) => {

  //Espacio de memoria para manejar las categorias, usamos useState (Snipe)(Hook) para mantener el estado
  const [categorias, setCategorias] = useState(['Cat 1', 'Cat 2', 'Cat 3'])

  const newCategory = (nuevaCategoria) => {
    //Validamos que la caterogira no se repita, tener en cuenta
    //que para react minusculas y mayusculas son diferentes, entonces no valida si la categoria es min o mayus
    //por lo tanto más adelante buscar hacer esa valiación con JAVASCRIPT 
    if (categorias.includes(nuevaCategoria)) {
      alert("Lo siento, ya existe esta categoria");
      return
    }
    setCategorias([...categorias, nuevaCategoria]);
    console.log(nuevaCategoria);
    //setCategorias(['nueva categoria', ...categorias]);
    //setCategorias(cat => [...categorias, 'nueva categoria']);
  }

  return (
    <>
      <h1>probando</h1>
      <AddCategory onNewCategory={(event) => newCategory(event)} />
      <ol>
        {
          categorias.map((category) => (
            <GifGrid 
            key={category} 
            category={category}
            />

          ))
        }
      </ol>

    </>

  )
}
