import React from 'react'

const Navbar = () => {
  return (
     <header>
          <div
            id="header-sticky"
            className="tp-header-area tp-header-hight p-relative"
          >
            <div className="container container-1435">
              <div className="tp-header-box p-relative">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                    <div className="tp-header-logo">
                      <a href="/">
                        <img
                          width={200}
                          src="/logo.svg"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                    <div className="tp-main-menu d-none d-xl-block ml-50">
                      <nav className="tp-mobile-menu-active">
                        <ul>
                          <li className="has-dropdown">
                            <a href="/">Inicio</a>
                          </li>
                          <li className="has-dropdown">
                            <a href="/#sobre-mi">Sobre mi</a>
                          </li>
                          <li className="has-dropdown">
                            <a href="/#servicios">Servicios</a>
                          </li>
                          <li className="has-dropdown">
                            <a href="/#precios">Precios</a>
                          </li>
                          <li>
                            <a href="/#contacto">Contacto</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-9 col-6">
                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                      <div className="tp-header-right-btn ml-35 d-none d-md-block">
                        <a
                          className="tp-btn-black d-inline-block"
                          href="#"
                        >
                            <i className="fa-brands fa-whatsapp"></i> Contactar
                        </a>
                      </div>
                      <div className="tp-header-5-menu-bar tp-header-4-menu-bar d-block d-xl-none">
                        <button className="tp-offcanvas-open-btn offcanvas-open-btn">
                          <span />
                          <span />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
  )
}

export default Navbar