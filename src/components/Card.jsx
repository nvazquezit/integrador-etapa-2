import './Card.scss'

const Card = ( {producto}) => {
    return (
        <div className="card">
            <article className="card__article">
                <div className="card__image-container">
                    <img className="card__image" src={producto.foto} alt="texto foto" />
                </div>
                <div className="card__content">
                    <h2 className="card__heading">{producto.nombre}</h2>
                    <div className="card__description">
                        <p><b>{producto.precio}</b></p>
                        <p>{producto.descripcion}</p>
                        <button className="card__button">Agregar al carrito</button>
                     </div>
                </div>
            </article >
        </div >
  )
}

export default Card