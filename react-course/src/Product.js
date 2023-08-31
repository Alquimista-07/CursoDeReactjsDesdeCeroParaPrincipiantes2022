function Product() {
    return <div>
        <h1>Producto</h1>
    </div>
}

export function Navbar(){
    return <nav>
        navigation
    </nav>
}

// Otra forma de exportar la función o el componentes es:
export default Product;
// NOTA: Y hay que tener en cuenta que cuando exportamos de esta forma
//       no estamos exportanto individualmente sino que todo este módulo
//       esta siendo exportado, pero también podemos hacerlo de forma individual
// usando el export antes de la función