import TablaFila from "./TablaFila"
import "./Tabla.scss"
import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"

const Tabla = () => {

    const { productos } = useContext(ProductosContext)


  return (
    <table className="tabla-alta">

        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Marca</th>
                <th>Categoria</th>
                <th>Detalle</th>
                <th>Foto</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
              productos && productos.map((producto) => (
                <TablaFila producto={producto} key={producto.id} />

              ))
            }

        </tbody>

        

    </table>
  )
}

export default Tabla