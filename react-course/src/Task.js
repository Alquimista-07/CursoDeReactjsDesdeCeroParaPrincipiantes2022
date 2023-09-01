/* NOTA: Los primeros estilos que podemos añadir es algo que se le conoce como estilos en línea,
       es decir al igual que el htlm dentro del componente puedo tener una propiedad de cada
       elemento html que sea el style y dentor de esta se pueden añadir los estilos y se pasan
       como si fuera código JS, es decir entre llaves {} y se pasan como un objeto que contiene
       las reglas de css como pares de clave - valor por ejemplo:

            <h1 style={{fontWeight: 'lighter'}}>Mi primer tarea</h1>

       Pero también com esto es un objeto podemos usar todo lo que conocemos de JavaScript como 
       por ejemplo guardar los estilos en una variable y pasarlo por ejemplo:

            const cardStyles = {
                background: '#202020',
                color: '#fff',
                padding: '20px'
            }
        
        Y lo usariamos 
        
            return <div style={cardStyles}>
    
        Pero estilizar de las 2 anteriore formas es un poco incómodo pero es bastante útil
        ya que hay veces en las que tenemos alguna variable y queremos colocar un conjuto de 
        estilos en lugar de otro y como están agrupados por objetos podemos decir que si una
        propiedad es true muestre una y si no muestre otra.

        Otra forma de añadir estilos es usando clases de css y es lo más similar que vamos a 
        ver en html

*/

// Y para poder usa la forma añadiendo estilos css hay que importarlos
// y usar la propiedad className para poder usarlos, para ello entonces 
// hacemos lo siguiente:
import './task.css';

export function TaskCard({ready}){
    return (
        <div className='card'>
            <h1>Mi primer tarea</h1>
            
            {/* Como mencionamos podemos mostrar mensajes o estilos condicionalmente ya sea pasando los estilos directamente con el style o mediante clases que es la forma más cómoda*/}
            <span className={ ready ? 'bg-green' : 'bg-red' }>
                { ready ? 'Tarea Ralizada!' : 'Tarea Pendiente!' }
            </span>

        </div>
    )
}