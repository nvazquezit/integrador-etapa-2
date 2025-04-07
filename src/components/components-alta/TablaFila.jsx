import { useContext } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import Swal from "sweetalert2";
import './TablaFila.scss'

const TablaFila = ({ producto }) => {

  const { eliminarProductoContext, setProductoAEditar } = useContext(ProductosContext)

  const handleEliminar = (id) => {
    Swal.fire({
      title: "Estás eliminando un producto ¿Deseas continuar?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(146, 28, 28)",
      cancelButtonColor: "rgb(146, 28, 28)",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id);
        Swal.fire({
          title: "Producto Eliminado",
          text: "El producto fue eliminado",
          icon: "success",
        });
      }
    });
  };

  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }

  return (
    <tr>
        <td>{producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.categoria}</td>
        <td>{producto.descripcion}</td>
        <td>
            <img src={producto.foto} alt={producto.nombre} style={{ width: '40px'}} />
        </td>
        <td>{producto.envio ? 'si' : 'no'}</td>
        <td>
            <button className="boton-ver">Ver</button>
            <button className="boton-editar" onClick={() => handleEditar(producto)}>Editar</button>
            <button className="boton-borrar" onClick={() => handleEliminar(producto.id)}>Borrar</button>
        </td>
    </tr>
  )
}

export default TablaFila