
const Inicio = () => {
  return (
    <>
    <header class="main-header">
      <input type="checkbox" id="menu" />

      <nav class="nav-bar">
        <ul class="nav-bar__nav-list">
          <li class="nav-bar__nav-item">
            <a href="" class="nav-bar__nav-link">Inicio</a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" class="nav-bar__nav-link">Alta</a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" class="nav-bar__nav-link">Nosotros</a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" class="nav-bar__nav-link">Contacto</a>
          </li>
        </ul>
      </nav>

      <div class="search-bar">
        <div class="search-bar__logo-container">Logo</div>
        <form action="#" class="search-bar__form-container">
          <label for="busqueda" class="search-bar__form-label">Buscar</label>
          <input type="search" id="busqueda" class="search-bar__form-search" />
          <button type="submit" class="search-bar__form-submit">Buscar</button>
        </form>
        <div class="search-bar__carrito-container">C</div>
        <div class="menu-toogle">
          <label for="menu" class="menu-toogle__label">
            <span class="menu-toogle__top-bread"></span>
            <span class="menu-toogle__meat"></span>
            <span class="menu-toogle__bottom-bread"></span>
          </label>
        </div>
      </div> 

    </header>

    <main>
      <section class="section-cards">
        <header class="section-cards__header">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Se encontraron X productos</p>
        </header>
      </section>

      <section class="cards-container" id="container-productos"></section>

    </main>
    
        
    </>
  )
}

export default Inicio