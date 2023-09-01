// NOTA: Para que el código no se vuelva inmantenible en el archivo index.js a medida que vaya creciendo
//       podemos transformar o dividir cada componente en archivos separados e importarlos en el componente 
//       index.js y lo que hacemos es exportar la función con la palabra export para poderla usaar fuera.

//       Otra cosa importante es que el nombre de las funciones deben iniciar en mayúscula ya que si no lo hacemos
//       de esta forma va a dar error, y a esta forma de nombrar se le llama PascalCase

// NOTA: Un concepto muy relacionado con los componentes es el props el cual nos ayuda a saber como cambiar datos internamente en un 
//       componente, por ejemplo supongamos que en un componente no quiero mostrar el texto Componente de React sino que diga componente
//       1, componente 2, 3, 4, etc. Pero en texto, es decir si quiero que cada componente tenga un dato en especial que sea distinto del 
//       otro, de alguna forma le tenemos que pasar ese dato y es allí donde entran los props.
//       Y en pocas palabras los props son tan solo parámetros que le paso a una función.

export function Greeting3(props){
    // Mostramos por consola que está recibiendo el componente por medio del prop que estamos mandando desde el index.js
    console.log(props);
    // Adicionalmente como es un objeto lo que estamos pasando en el props podemos usarlo y mostralo
    // Y también podemos hacer todo lo que podríamos hacer con objetos de JavaScript como por ejemplo
    // desestructurarlo por ejemplo al declarar la función podemos dedir que queremos del objeto el title
    // por ejemplo así: 
    //
    // function Greeting3({ title }){
    //
    // También si pasamos un parámetro que no es usado por los demás componentes por ejemplo un name también podemos pasarle un valor
    // por defecto para que no quede como undefined para los demás componentes por lo tanto usando la desestructuración quedaría de la 
    // siguiente forma:
    //
    // function Greeting3({ title, name="User" }){
    //
    return <h1>{props.title}, dice {props.name}</h1>
}

export function UsusrioCard({ name, amount, married, address, greet }){
    // console.log( name, amount, married, address, greet );
    return <div>
        <h1>{name}</h1>
        <p>💲{amount}</p>
        <p>{married ? 'Married' : 'Single'}</p>
        <ul>
            <li>{address.city}</li>
            <li>{address.street}</li>
        </ul>
    </div>
}
