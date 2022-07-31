import React from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './componentes/HelloWorld'
import { PrimerComponente } from './componentes/FirstComponent'

//Estilo de la APP
import './styles/styles.css'
import { CounterApp } from './componentes/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    //Props=Propiedades de los componentes, que se pueden desestructurar y enviar como parametros en los componentes cuando se requiera
    <React.StrictMode>
        <App />
        <PrimerComponente/>
        <CounterApp value={20} />
    </React.StrictMode>
);