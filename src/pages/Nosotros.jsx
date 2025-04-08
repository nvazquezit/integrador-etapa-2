import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <>
      <div>
        <h1 className="title-nosotros">¿Quienes Somos?</h1>

        <hr />
        <h2 className="sub-title">Identidad MEFER</h2>

        <p className="parrafos-nos">
          MEFER Distribuidora nace gracias a dos amigos: Gabriel de <b>Me</b>lo y Guido <b>Fer</b>nandez.
          Ambos ante la necesidad de emprender, idearon este emprendimiento para llevarte los productos que necesitas a la puerta de tu casa.
        </p>

        <h2 className="sub-title">¿Qué Comercializamos?</h2>

        <p className="parrafos-nos"> Nuestro proyecto comercializa bebidas de todo tipo: sin alcohol y con alcohol, brindando a nustros clientes una amplia carta de productos de primera marca y económicos, pensando en el bolsillo de cada uno</p>

        <p className="parrafos-nos">Trabajamos con:

        </p>

        <div className="img-png">
          <img className="img-edit" src="/imgs/png-branca-edit.png" alt="marca branca" />
          <img className="img-edit" src="/imgs/smirnoff-logo-edit.png" alt="marca smirnoff" />
          <img className="img-edit" src="/imgs/heineken-png-edit.png" alt="marca heineken" />
          <img className="img-edit" src="/imgs/brahma-png-edit.png" alt="marca brahma" />
          <img className="img-edit" src="/imgs/campari-png.png" alt="marca campari" />
          <img className="img-edit" src="/imgs/coca-png-edit.png" alt="marca coca" />
          <img className="img-edit" src="/imgs/villa-png.png" alt="marca villadelsur" />
        </div>

        <h2 className="sub-title">¿Dónde nos encontramos?</h2>
        <p className="parrafos-nos">Nuestra sede principal por el momento es en Zona Sur, teniendo nuestro centro distribuidor en Gerli</p>

      </div>
      <div className="mapa">
        <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11034.921090179909!2d-58.37790040893561!3d-34.687478194990945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccd2a95284c3%3A0xc40db4ad11bd87eb!2sGerli%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1744090115186!5m2!1ses!2sar" ></iframe>
      </div>
    </>
  )
}

export default Nosotros