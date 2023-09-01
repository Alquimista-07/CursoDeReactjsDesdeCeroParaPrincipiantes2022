// NOTA:Otra forma de crear un un componente con una sintáxis diferente
//      es usar una función flecha  asignada a una constante.

export const Post = () => {
    return <button onClick={() => {
        // Esto es una promesa en JS y tenemos que tener en cuenta deemos tener en cuenta
        // los conceptos de promesas, callback, async y await en JavaScript
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(data => console.log('Datos:', data ))
            .catch(error => console.error(error));
    }}>
        Traer datos
    </button>
}