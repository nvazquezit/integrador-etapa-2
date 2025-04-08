import './Inicio.scss'
import Card from "../components/Card"
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import useTitulo from '../hooks/useTitulo'

const Inicio = () => {
  const {productos} = useContext(ProductosContext)

  useTitulo ('Inicio')

  return (
    <>

      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1 className='title-index'>Distribuidora Mefer</h1>
            <h2 className='subtitulo-index'>Nuestros destacados del mes</h2>
          </header>
        </section>

        <section className="cards-container" id="container-productos">
          {
            productos && productos.map((producto) => (
              <Card producto={producto} key={producto.id} />
            ))


          }

        </section>

      </main>


    </>
  )
}

export default Inicio