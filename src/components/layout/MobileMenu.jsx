import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className="offcanvas__area">
        <div className="offcanvas__close">
          <button className="offcanvas__close-btn offcanvas-close-btn">
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L11 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40">
              <div className="offcanvas__logo">
                <a href="/">
                  <img width={180} src="/logo.svg" alt="logo" />
                </a>
              </div>
            </div>
            <div className="tp-offcanvas-menu fix d-xl-none mb-30">
              <nav>
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
        </div>
      </div>
      <div className="body-overlay" />
    </>
  );
};

export default MobileMenu;
