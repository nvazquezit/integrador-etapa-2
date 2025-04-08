import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const { 
        carrito, 
        limpiarCarritoContext, 
        guardarCarritoBackendContext } = useContext(CarritoContext)
    
    console.log(carrito)

    const handleComprar = () => {
        console.log('Comprando...')
        guardarCarritoBackendContext()
    }
    
    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...')
        limpiarCarritoContext()
    }

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)
    };
    const calcularTotalProductos = () => {
        return carrito.reduce((total, producto) => total + producto.cantidad, 0);
      };

  return (
    <>
    <table className='tabla-carrito'>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                carrito.length <= 0 ? (
                    <tr>
                        <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, idx) => (
                        <ItemCarrito key={idx} producto={producto} />
                    ))
                )
            }
        </tbody>
    </table>
    <hr />
    { !carrito.length <= 0 && (
            <>
                <div className="total-precio">
                     <p>Monto a Pagar: ${calcularTotal().toFixed(2)}</p>
                </div>
                <div className="total-prods">
                     <p>Cantidad de Productos:{calcularTotalProductos()}</p>
                </div>
                <div className="botones">
                    <button className="botonesCarrito" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className="botonesCarrito" onClick={handleComprar}>Comprar</button>
                </div>
            </>
        )
    }
</>
  )
}

export default ListadoCarrito