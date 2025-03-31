import './Inicio.scss'
import Card from "../components/Card"

const Inicio = () => {
  return (
    <>

      <main>
        <section className="section-cards">
          <header className="section-cards__header">
            <h1>Distribuidora Mefer</h1>
            <p>Nuestros destacados del mes</p>
          </header>
        </section>

        <section className="cards-container" id="container-productos">
          <Card />
        </section>

      </main>


    </>
  )
}

export default Inicio