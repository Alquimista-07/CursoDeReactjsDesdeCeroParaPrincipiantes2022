// NOTA: Para que el código no se vuelva inmantenible en el archivo index.js a medida que vaya creciendo
//       podemos transformar o dividir cada componente en archivos separados e importarlos en el componente 
//       index.js y lo que hacemos es exportar la función con la palabra export para poderla usaar fuera.

//       Otra cosa importante es que el nombre de las funciones deben iniciar en mayúscula ya que si no lo hacemos
//       de esta forma va a dar error, y a esta forma de nombrar se le llama PascalCase

export function Greeting3(){
    return <h1>Componente de React</h1>
}

export function UsusrioCard(){
    return <h1>Usuario Card</h1>
}
