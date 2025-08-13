import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="tp-footer-3-bg bg-position p-relative fix z-index-1">
        <div className="tp-footer-3-area pt-40 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-5 mb-10">
                <div className="tp-footer-3-widget tp-footer-col-3-1">
                  <div className="tp-footer-widget-logo">
                    <a href="/">
                      <img width={200} src="/logo_white.svg" alt="logo" />
                    </a>
                  </div>
                  <div className="tp-footer-3-widget-social-box">
                    <h4 className="tp-footer-3-widget-social-title">
                      Sígueme en redes
                    </h4>
                    <div className="tp-footer-widget-social">
                      <a href="https://www.facebook.com/carlosramirezdev" target="_blank">
                        <span>
                          <svg
                            width={8}
                            height={14}
                            viewBox="0 0 8 14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.88265 13.9168H4.70664V6.95842H7.26587L7.53062 4.56646H4.70664V3.37048C4.70664 3.00807 4.76547 2.75437 4.88313 2.60941C5.0008 2.46444 5.28516 2.39196 5.73621 2.39196H7.53062V0H4.94197C3.76531 0 2.96126 0.262753 2.52982 0.788258C2.09838 1.29564 1.88265 2.0839 1.88265 3.15303V4.56646H0V6.95842H1.88265V13.9168Z"
                              fill="currentcolor"
                            />
                          </svg>
                        </span>
                      </a>
                      <a href="https://www.instagram.com/carlosr.dev" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.tiktok.com/@carlosr_dev" target="_blank">
                        <i className="fab fa-tiktok"></i>
                      </a>
                      <a href="https://github.com/carlosr-dev" target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 mb-10">
                <div className="tp-footer-3-widget tp-footer-col-3-2">
                  <h4 className="tp-footer-widget-title text-white">
                    Diseño de páginas web en:
                  </h4>
                  <div className="tp-footer-3-widget-menu">
                    <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1">
                      <div className="col-6">
                        <ul>
                          <li>
                            <a href="#footer">Toluca</a>
                          </li>
                          <li>
                            <a href="#footer">Metepec</a>
                          </li>
                          <li>
                            <a href="#footer">Lerma</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li>
                            <a href="#footer">San Mateo Atenco</a>
                          </li>
                          <li>
                            <a href="#footer">Xonacatlán</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-10">
                <div className="tp-footer-3-widget tp-footer-col-3-3">
                  <h4 className="tp-footer-widget-title text-white">
                    Contáctame
                  </h4>
                  <div className="tp-footer-3-widget-info-box">
                    <div className="tp-footer-3-widget-info-item d-flex align-items-start">
                      <span className="tp-footer-3-widget-info-icon">
                       <i className="fab fa-whatsapp"></i>
                      </span>
                      <a
                        className="tp-footer-3-widget-info-text"
                        href="https://wa.me/5217225390427?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20desarrollo%20web"
                        target="_blank"
                      >
                        +52 722 539 0427
                      </a>
                    </div>
                    <div className="tp-footer-3-widget-info-item d-flex align-items-start">
                      <span className="tp-footer-3-widget-info-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                      <a
                        className="tp-footer-3-widget-info-text"
                        href="#footer"
                      >
                        Lerma, Edo. México
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-copyright-area tp-copyright-style-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-copyright-text">
                  <p>
                    © {new Date().getFullYear()} <a href="#">CARLOSR.DEV</a>.
                    Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer