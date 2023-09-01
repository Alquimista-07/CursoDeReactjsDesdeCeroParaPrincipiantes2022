// NOTA: Si nos damos cuenta estamos creando un componente que en este caso sería un botón, pero lo estamos
//       llamando exactamente igual como se hacen en html solo que hay que tener en cuenta que el boton de html
//       va en minúscula, adicionalmente la ventaja que me permetie hacer es que al crear el componente puedo
//       configurar un botón con estilos, lógica y en lugar de estar haciendo ese elemento en otras partes de la 
//       interfaz puedo reutilizarlo ya que es un componente

// NOTA: ¿Cómo puedo asegurarme de que siempre lo que me envíen en el props sea un tipo de dato definido, o almenos darle
//       una advertencia del desarrollador que tiene que usar un tipo específico?
//       Para esto existe algo llamado PropTypes o mejor dicho añadir unos tipos de datos a los props para indicar por ejemplo
//       que siempre quiero que pase un string o un númeto, etc. Entonces estos PropTypes provienen de un paquete que se instala
//       con el gestor npm de node y el comando a usar es: 
//       
//       npm install prop-types
//

// Importamos Proptypes
import PropTypes from 'prop-types';

export function Button({ text, name }){
    /*
    NOTA: Ahora que pasa si quiero aceptar otro valor por defecto, 
        es decir que me pueden pasar otra porpiedad pero es opcional entonces en
        el componente indicamos un valor por defecto con el igual por ejemplo

        export function Button({ text, name = 'Usuario' }){
        
        Pero también podemos pasar valores por defecto con el defaultProps
    */

    /*También podemos validar y lanzar advetencias en caso de que se mande por ejemplo un string vacío */
    if(!text){
        console.error('El texto es requerido');
    }
    return <button>
        {text} - {name}
    </button>
}

// Ya con el paquete Proptypes instalado e importado podemos definirlos
// Y no es más que un objeto donde voy a indicar las reglas como por ejemplo
// que el texto sea un string. Y esto por ejemplo si pasamos un booleano o un
// arreglo nos va a mostrar un warning en la consola indicando que esperaba
// un tipo de dato pero pasando otro y en algunos casos no va a causar que crashee
// la aplicación pero otras veces sí ya que pasamos un tipo de dato inconsistente.
Button.propTypes = {
    // Y también podemos obligarlo es decir que sea requerido
    text: PropTypes.string.isRequired
}

// Pasamos valor por defecto usando el defaultProps en luegar de igualar a un valor por 
// defecto en el parámentro del componente (el props)
Button.defaultProps = {
    name: 'Some User'
}