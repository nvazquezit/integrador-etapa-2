import { useContext, useEffect, useState } from "react"
import ProductosContext from "../../contexts/ProductosContext"
import './Formulario.scss'

const Formulario = () => {

    const {crearProductoContext, 
        productoAEditar, 
        setProductoAEditar, 
        actualizarProductoContext} = useContext(ProductosContext)

    const formInicial = {
        id: null,
        nombre: '',
        precio: '',
        stock: '',
        categoria: '',
        descripcion: '',
        foto: '',
        envio: false,
    }

    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar])

    const [form, setForm] = useState(formInicial)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.id === null) {
            crearProductoContext(form)
        } else {
            actualizarProductoContext(form)
        }

    }
    const handleChange = (e) => {

          const { type, name, checked, value } = e.target
          // debugger
          setForm({
              ...form,
              [name]: type === 'checkbox' ? checked : value
          })

    }
    const handleReset = ()  => {
        setForm(formInicial)
        setProductoAEditar(null)
    }


  return (
    <>
        <h2 className="titulo-crud">Carga/Edición de productos</h2>
        <form className="form-style" onSubmit={handleSubmit}>
            <div>
                <label className="label-form-alta" htmlFor="lbl-nombre">Nombre</label>
                <input className="input-style"
                type="text" 
                id="lbl-nombre"
                placeholder="Escriba nombre de producto" 
                name="nombre" 
                value={form.nombre} 
                onChange={handleChange} />
            </div>
            <div>
                <label className="label-form-alta" htmlFor="lbl-precio">Precio</label>
                <input className="input-style"
                type="text" 
                id="lbl-precio"
                placeholder="Escriba el precio del producto" 
                name="precio" 
                value={form.precio}  
                onChange={handleChange} />
            </div>
            <div>
                <label className="label-form-alta" htmlFor="lbl-stock">Stock</label>
                <input className="input-style"
                type="text" 
                id="lbl-stock"
                placeholder="Escriba cantidad de productos en stock" 
                name="stock" 
                value={form.stock}
                onChange={handleChange} />
            </div>
            <div>
                <label className="label-form-alta" htmlFor="lbl-categoria">Categoria</label>
                <input className="input-style"
                type="text"
                id="lbl-categoria"
                placeholder="Escriba categoria del producto" 
                name="categoria" 
                value={form.categoria} 
                onChange={handleChange} />
            </div>
            <div>
                <label className="label-form-alta" htmlFor="lbl-detalle">Descripcion</label>
                <input className="input-style"
                type="text" 
                id="lbl-descripcion"
                placeholder="Breve descripcion del producto" 
                name="descripcion" 
                value={form.descripcion}  
                onChange={handleChange}/>
            </div>
            <div>
                <label className="label-form-alta" htmlFor="lbl-foto">Foto</label>
                <input className="input-style"
                type="text" 
                id="lbl-foto"
                placeholder="URL de la imagen del producto" 
                name="foto" 
                value={form.foto} 
                onChange={handleChange} />
            </div>
            <div>
                <label className="label-form-alta" htmlFor="lbl-envio">Envío</label>
                <input className="check-style"
                type="checkbox" 
                id="lbl-envio" 
                name="envio" 
                checked={form.envio} 
                onChange={handleChange} />
            </div>

            <div className="contenedor-botones-crud">
                <button className="boton-guardar-editar" type="submit"> { productoAEditar ? 'Editar' : 'Crear' }</button>
                <button className="boton-reset" type="reset" onClick={handleReset}>Limpiar</button>
            </div>

            
        </form>
    </>
  )
}

export default Formulario