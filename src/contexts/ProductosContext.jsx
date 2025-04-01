import { createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";



const ProductosContext = createContext()

const ProductosProvider = ( { children }) => {

    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect(() => {
      getAllProductos()
    }, [])
    

    const getAllProductos = async () => {

        try {

            const prods = await peticionesHttp(url, {})

            setProductos(prods)

        } catch (error) {
            console.error('[getAllProductos]', error)
        }

    }

    const crearProductoContext = async (productoNuevo) => {
        try {
            delete productoNuevo.id 

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoNuevo)
            }
            
            const prods = await peticionesHttp(url, options)
            const nuevoEstadoProductos = [...productos, prods]
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[crearProductoContext]', error)
        }

    }
    const actualizarProductoContext = async (productoAEditar) => {
        //console.log(productoAEditar)

        try {

            const options = {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoAEditar)
            }

            const urlActualizar = url + productoAEditar.id

            const productoEditado = await peticionesHttp(urlActualizar, options)
            console.log(productoEditado)

            const nuevoEstadoProductos = productos.map(prod => prod.id === productoEditado.id ? productoEditado : prod)
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }
    }

    const eliminarProductoContext = async (id) => {
        // console.log(id)

        try {

            const urlEliminacion = url + id

            const options = {
                method: 'DELETE'
            }

            const prodEliminado = await peticionesHttp(urlEliminacion, options)
            console.log(prodEliminado)

            const nuevoEstadoProductos = productos.filter(prod => prod.id !== id)
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[eliminarProductoContext]', error)
        }

    }

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        eliminarProductoContext,
        productoAEditar,
        setProductoAEditar
    }

    return <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>
}

export { ProductosProvider }
export default ProductosContext