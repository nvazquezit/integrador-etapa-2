import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'

const Contacto = () => {

  useTitulo ('Contacto')

  return (
    <main>
      <div>
        <h1 className="contacto-title">Dejanos tu contacto</h1>
      </div>
      <form className="form-contacto__form">
        <fieldset className="form-contacto__form__fieldset">
          <legend className="form-contacto__form__legend">Ficha de Datos Personales</legend>

          <div className="form-contacto__form__nombre">
            <label htmlFor="nombre">Nombre</label>
            <input className="inpt" 
            type="text"
            id="lbl-nombre"
            placeholder="Escribí tu nombre" />
          </div>

          <div className="form-contacto__form__apellido">
            <label htmlFor="apellido">Apellido</label>
            <input className="inpt" 
            type="text"
            id="lbl-apellido"
            placeholder="Escribí tu apellido" />
          </div>

          <div className="form-contacto__form__tel">
            <label htmlFor="telefono">Tel/Cel</label>
            <input className="inpt" 
            type="number"
            id="lbl-tel"
            placeholder="Escribí tu teléfono" />
          </div>

          <div className="form-contacto__form__email">
            <label htmlFor="email">Correo Electrónico</label>
            <input className="inpt" 
            type="text"
            id="lbl-mail"
            placeholder="Escribí tu correo" />
          </div>

          <div className="form-contacto__form__age">
            <label htmlFor="edad">Edad</label>
            <input className="inpt" 
            type="text"
            id="lbl-edad"
            placeholder="Escribí tu edad" />
          </div>

          <div className="form-contacto__form__description">
            <label htmlFor="comentarios">Dejanos tus comentarios</label>
            <textarea className="inpt" id="comments"
            placeholder="Dejanos tus comentarios"></textarea>
          </div>
          <button className="btn-send">Enviar</button>

        </fieldset>
      </form>

    </main>
  )
}

export default Contacto