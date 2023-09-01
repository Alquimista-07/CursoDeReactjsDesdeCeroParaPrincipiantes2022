// NOTA:Otra forma de crear un un componente con una sintáxis diferente
//      es usar una función flecha  asignada a una constante.

// Podemos usar bibliotecas de terceros las cuales se instalan con el gestor de node
// por ejemplo acá vamos a usar react icons el cual se instala: npm install react-icons
// y se debe importar para poder usarla. Adicionalmente existen muchas bibliotecas como
// por ejemplo para remplazar fecth y tener una mejor forma de manejar peticiones, 
// añadir animaciones, bibliotecas para crear formularios, modeles. Un ejemplo de estas 
// otras bibliotecas por ejemplo es Material UI (MIUI) que su documentación oficial se
// encuentra en: https://mui.com/
//
// NOTA: La web con la documentación oficial de react-icons es: 
//       https://react-icons.github.io/react-icons/
//
// En este caso elegimos los iconos de VS Code pero existen muchos otros por ejemplo de 
// font-awesom, Material Icons, etc
import { VscGlobe } from "react-icons/vsc";

export const Post = () => {
    return <button onClick={() => {
        // Esto es una promesa en JS y tenemos que tener en cuenta deemos tener en cuenta
        // los conceptos de promesas, callback, async y await en JavaScript
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(data => console.log('Datos:', data ))
            .catch(error => console.error(error));
    }}>
        {/* Y usamos el icono que elegimos */}
        <VscGlobe/>
        Traer datos
    </button>
}