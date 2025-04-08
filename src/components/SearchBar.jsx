import { Link } from 'react-router'
import './SearchBar.scss'
import { TiShoppingCart } from "react-icons/ti"
import { useContext } from 'react'
import CarritoContext from '../contexts/CarritoContext'

const SearchBar = () => {
    const {cantidadTotalProductos} = useContext(CarritoContext)
    
  return (
    
    <div className="search-bar">
                <div className="search-bar__logo-container"><img className="logo-mefer" src="imgs/mefer-logo2.png" alt="logo mefer" /></div>
                <form action="#" className="search-bar__form-container">
                    <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
                    <input type="search" id="busqueda" className="search-bar__form-search" />
                    <button type="submit" className="search-bar__form-submit">Buscar</button>
                </form>
                <div className="search-bar__carrito-container"><Link to="/carrito"><TiShoppingCart className="carrito" /></Link>
                    <div className='count-products'>
						<span id='contador-productos'>{cantidadTotalProductos}</span>
					</div>
                </div>
                <div className="menu-toogle">
                    <label htmlFor="menu" className="menu-toogle__label">
                        <span className="menu-toogle__top-bread"></span>
                        <span className="menu-toogle__meat"></span>
                        <span className="menu-toogle__bottom-bread"></span>
                    </label>
                </div>
            </div>

  )
}

export default SearchBar