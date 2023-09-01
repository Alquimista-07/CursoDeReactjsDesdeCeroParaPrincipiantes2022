// NOTA: Como sabemos en React una forma común de crear un componente es usando una función
//       pero tamibén existe otra forma para poder crearlos y es utilizando clases.

// Como esta clase no esta heredando nada, es decir, no se de donde vienen esos métodos que usa
// entonces es necesario importar la clase Component desde react y heredarla
import {Component} from 'react';

// Y de la misma forma a parte de heredarla tenemos que exportarla para poder usarla fuera
export class Saludar extends Component {

    // Para poder crear un componente en este caso llamado Saludar
    // acá debo usar un método llamado render y el cual al final 
    // va a retornar un elemento html
    render() {
        return <h1>Hello Workd! Desde Un Componente Creado Con Class</h1>
    }
    
}