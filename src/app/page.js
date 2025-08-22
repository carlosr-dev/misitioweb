"use client";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <div className="tp-hero-area fix bg-position">
        <span className="tp-hero-shape p-absolute d-none d-lg-block">
          <svg
            width={59}
            height={120}
            viewBox="0 0 59 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={-1} cy={60} r={60} fill="#5CB0E9" />
          </svg>
        </span>
        <span className="tp-hero-shape-2 p-absolute d-none d-lg-block">
          <svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={15} cy={15} r={15} fill="#3D72FC" />
          </svg>
        </span>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="tp-hero-content tp-hero-spacing tp-hero-left-border p-relative">
                <h2
                  className="tp-hero-title mb-35 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  Te ayudo a crear tu <br />
                  <span className="tp-hero-title-main">
                    <Typewriter
                      words={[
                        "Presencia Digital",
                        "Página Web",
                        "Sitio Web",
                        "Tienda en Línea",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                  <br />
                  de tu negocio
                </h2>
                <p
                  className="tp-hero-text mb-40 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  Me especializo en crear sitios web modernos, funcionales y
                  <br /> enfocados en convertir visitas en clientes.
                </p>
                <a
                  href="#contacto"
                  className="tp-btn-gradient tp-gradient-bg wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  ¡Te ayudo a definir tu proyecto!
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="tp-hero-right h-100 p-absolute">
                <img
                  className="tp-hero-thumb-main p-absolute wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                  src="assets/img/hero/main-hero.png"
                  alt="hero"
                />
                <div className="tp-hero-right-shape-wrap h-100">
                  {/* <img
                    className="tp-hero-right-shape p-absolute"
                    src="assets/img/hero/shape1.png"
                    alt="shape"
                  />
                  <img
                    className="tp-hero-right-shape-2 p-absolute"
                    src="assets/img/hero/shape2.png"
                    alt="shape"
                  /> */}
                  <div className="tp-hero-right-shape-3 d-flex align-items-center p-absolute">
                    <div className="tp-hero-right-heart mr-20">
                      {/* <img
                        className="flex-auto"
                        src="assets/img/hero/heart.png"
                        alt="heart"
                      /> */}
                    </div>
                    <h3 className="tp-hero-right-shape-text">
                      <span className="tp-text-black2 fw-600">+5 años</span>{" "}
                      creando
                      <br /> soluciones digitales
                    </h3>
                  </div>
                  {/* <div className="tp-hero-right-shape-wrap-2 text-center p-absolute">
                    <div className="tp-hero-right-shape-counter p-relative mb-20">
                      <img src="assets/img/hero/shape.png" alt="shape" />
                      <h4 className="tp-hero-counter text-center p-absolute">
                        <span
                          data-purecounter-duration={1}
                          data-purecounter-end={84}
                          className="purecounter"
                        >
                          0
                        </span>
                        %
                      </h4>
                    </div>
                    <span className="tp-hero-startups">84% startups</span>
                    <h6 className="m-0">Investors</h6>
                  </div> */}
                  <span className="tp-hero-shape-3 p-absolute">
                    <svg
                      width={30}
                      height={30}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={15} cy={15} r={15} fill="#3D72FC" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-about-area pt-110 pb-120" id="sobre-mi">
        <div className="section__shape-2" />
        <div className="section__shape-3">
          <img
            src="assets/img/shapes/about-two-shape-3.png"
            alt="about shape-3"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="tp-about-3-thumb-wrap mb-40 mr-70 p-relative wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-about-3-expreance">
                  <h2 className="tp-about-3-expreance-title">+5</h2>
                  <h6>
                    Años de
                    <br /> Experiencia
                  </h6>
                </div>
                <div className="tp-about-3-thumb">
                  <img
                    src="/assets/img/about/about-1.png"
                    width={480}
                    alt="about"
                  />
                </div>
                {/* <div className="tp-about-3-thumb-2">
                  <img src="assets/img/about/about-3/about-2.jpg" alt="about" />
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tp-about-3-content mb-40 wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-testimonial-3-title-box mb-35">
                  <span className="tp-section-subtitle gradiant-subtitle mb-15 d-inline-block">
                    SOBRE MÍ
                  </span>
                  <h2 className="tp-section-title pure-blue mb-20">
                    Tu aliado en el mundo digital
                  </h2>
                  <p className="tp-section-para pure-blue-2">
                    Soy <strong>Carlos Ramírez</strong>, desarrollador web con
                    más de 5 años de experiencia, he trabajado en proyectos para
                    diferentes giros de negocios, creando sitios modernos,
                    funcionales y enfocados en resultados. Mi objetivo es
                    ayudarte a tener una <strong>presencia en línea profesional</strong> que transmita
                    confianza e impulse tu negocio.
                  </p>
                </div>
                <div className="tp-about-3-feature-wrap mb-20">
                  <div className="row">
                    <div className="col-md-6 order-2 order-md-1">
                      <div className="tp-about-3-feature-item mb-20 d-flex">
                        <div className="tp-about-3-feature-icon mr-10">
                          <span>
                            <i className="fa fa-circle-check" />
                          </span>
                        </div>
                        <div className="tp-about-3-feature-content">
                          <h5 className="tp-about-3-feature-title">
                            Desarrollo Personalizado
                          </h5>
                          <p>Soluciones únicas para tu negocio</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                      <div className="tp-about-3-feature-item mb-20 d-flex">
                        <div className="tp-about-3-feature-icon mr-10">
                          <span>
                            <i className="fa fa-circle-check" />
                          </span>
                        </div>
                        <div className="tp-about-3-feature-content">
                          <h5 className="tp-about-3-feature-title">
                            Enfoque en Resultados
                          </h5>
                          <p>Webs que convierten visitantes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tp-about-btn">
                  <a
                    href="#contacto"
                    className="tp-btn-gradient tp-gradient-bg-2 mr-20"
                  >
                    Contáctame ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-brand-area">
        <div className="tp-text-wrapper">
          <div className="swiper-container tp-text-active">
            <div className="swiper-wrapper slide-transtion">
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Landing Pages</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Agencia digital</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Estrategia</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Desarrollo Web</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Solución digital</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Tiendas en Línea</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Responsive</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">SEO</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Consultoría</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">E-commerce</span>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tp-text-item">
                  <span className="tp-text-title">Páginas Web</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-service-3-ptb pt-160 pb-160 fix" id="servicios">
        <div className="service-two__sec-shape-1" />
        <div className="service-two__sec-shape-2" />
        <div className="service-two__sec-shape-3" />

        <div className="container">
          <div className="row align-items-end pb-30">
            <div className="col-lg-9">
              <div className="tp-service-3-title-box mb-20">
                <span className="tp-section-subtitle gradiant-subtitle mb-15 d-inline-block">
                  MIS SERVICIOS
                </span>
                <h2 className="tp-section-title text-white">
                  Soluciones para potenciar tu presencia online.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-container mb-60 tp-service-3-slide-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="tp-service-3-item p-relative">
                      <div className="tp-service-3-thumb">
                        <img
                          className="w-100"
                          src="assets/img/service/service-1.webp"
                          alt="thumb"
                          width={370}
                          height={420}
                        />
                      </div>
                      <div className="tp-service-3-content-box">
                        <div className="tp-service-3-content">
                          <h3 className="tp-service-3-title">
                            <a
                              href="https://wa.me/5217225390427?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20Desarrollo%20Web"
                              target="_blank"
                            >
                              Desarrollo Web
                            </a>
                          </h3>
                          <p className="tp-service-3-text">
                            Sitios modernos y optimizados para tu negocio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-service-3-item p-relative">
                      <div className="tp-service-3-thumb">
                        <img
                          className="w-100"
                          src="assets/img/service/service-2.webp"
                          width={370}
                          height={420}
                          alt="thumb"
                        />
                      </div>
                      <div className="tp-service-3-content-box">
                        <div className="tp-service-3-content">
                          <h3 className="tp-service-3-title">
                            <a
                              href="https://wa.me/5211234567890?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Tiendas%20en%20L%C3%ADnea"
                              target="_blank"
                            >
                              Tiendas en Línea
                            </a>
                          </h3>
                          <p className="tp-service-3-text">
                            E-commerce funcional y fácil de administrar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-service-3-item p-relative">
                      <div className="tp-service-3-thumb">
                        <img
                          className="w-100"
                          src="assets/img/service/service-3.webp"
                          width={370}
                          height={420}
                        />
                      </div>
                      <div className="tp-service-3-content-box">
                        <div className="tp-service-3-content">
                          <h3 className="tp-service-3-title">
                            <a
                              href="https://wa.me/5211234567890?text=Hola%2C%20estoy%20interesado%20en%20el%20servicio%20de%20Desarrollo%20Web%20a%20la%20Medida"
                              target="_blank"
                            >
                              Desarrollo a la Medida
                            </a>
                          </h3>
                          <p className="tp-service-3-text">
                            Soluciones web personalizadas para tu negocio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-service-3-item p-relative">
                      <div className="tp-service-3-thumb">
                        <img
                          className="w-100"
                          src="assets/img/service/service-4.webp"
                          width={370}
                          height={420}
                          alt="thumb"
                        />
                      </div>
                      <div className="tp-service-3-content-box">
                        <div className="tp-service-3-content">
                          <h3 className="tp-service-3-title">
                            <a
                              href="https://wa.me/5211234567890?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%20Mantenimiento%20Web"
                              target="_blank"
                            >
                              Mantenimiento Web
                            </a>
                          </h3>
                          <p className="tp-service-3-text">
                            Mantenimiento y actualizaciones de tu sitio web.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tp-service-pagenation-wrap text-center">
                <div className="tp-service-pagenation" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tp-pricing-area tp-pricing-ptb bg-position pt-160 pb-90"
        id="precios"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-section-title-wrap text-center mb-40">
                <span className="tp-section-subtitle gradiant-subtitle mb-5 d-inline-block color-yellow">
                  PLANES Y PRECIOS
                </span>
                <h2 className="tp-section-title color-white">
                  Elige la opción que mejor <br /> se adapte a tu negocio
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div
                className="tp-pricing-wrap wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-pricing-head text-center mb-40">
                  <h3 className="tp-pricing-title mb-15">Esencial</h3>
                  <span className="tp-pricing-subtitle d-inline-block mb-35">
                    Tu landing page profesional
                  </span>
                  <div className="tp-pricing-price-inner">
                    <h3 className="tp-pricing-price">
                      $5,999 <span> MXN</span>
                    </h3>
                  </div>
                </div>
                <div className="tp-pricing-feature-list mb-45">
                  <div className="tp-pricing-feature">
                    <ul>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>1 página o landing page</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Diseño moderno y responsivo </span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Formulario de contacto</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Botón de WhatsApp</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Enlace a redes sociales</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Optimización SEO básica</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Hosting y Dominio (gratis 1 año)</span>
                      </li>
                      <li className="old">
                        <i className="fa-close fa-solid fa-check" />
                        <span>Soporte técnico</span>
                      </li>
                    </ul>
                  </div>
                  <span className="tp-pricing-para mt-70">
                    Entrega en 7 días hábiles
                  </span>
                </div>
                <div className="tp-pricing-btn-wrap">
                  <a
                    className="tp-pricing-btn"
                    href="https://wa.me/5217225390427?text=Hola,%20me%20interesa%20el%20plan%20Esencial%20de%20$5,999%20MXN"
                    target="_blank"
                  >
                    Empezar ahora
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div
                className="tp-pricing-wrap wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div className="tp-pricing-head active text-center mb-40">
                  <h3 className="tp-pricing-title mb-15">Profesional</h3>
                  <span className="tp-pricing-subtitle d-inline-block mb-35">
                    Sitio web completo y moderno
                  </span>
                  <div className="tp-pricing-price-inner">
                    <h3 className="tp-pricing-price">
                      $8,999 <span> MXN</span>
                    </h3>
                  </div>
                </div>
                <div className="tp-pricing-feature-list mb-45">
                  <div className="tp-pricing-feature">
                    <ul>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Hasta 5 páginas personalizadas</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Diseño moderno y responsivo </span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Formulario de contacto avanzado</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Botón de WhatsApp</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Enlace a redes sociales</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Optimización SEO intermedia</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Galería de imágenes o portafolio</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Hosting y Dominio (gratis 1 año)</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Soporte por 15 días</span>
                      </li>
                    </ul>
                  </div>
                  <span className="tp-pricing-para mt-25">
                    Entrega en 14 días hábiles
                  </span>
                </div>
                <div className="tp-pricing-btn-wrap">
                  <a
                    className="tp-pricing-btn active"
                    href="https://wa.me/5217225390427?text=Hola,%20me%20interesa%20el%20plan%20Profesional%20de%20$8,999%20MXN"
                    target="_blank"
                  >
                    Empezar ahora
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div
                className="tp-pricing-wrap wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div className="tp-pricing-head text-center mb-40">
                  <h3 className="tp-pricing-title mb-15">Tienda Online</h3>
                  <span className="tp-pricing-subtitle d-inline-block mb-35">
                    Vende tus productos en internet
                  </span>
                  <div className="tp-pricing-price-inner">
                    <h3 className="tp-pricing-price">
                      $14,999 <span> MXN</span>
                    </h3>
                  </div>
                </div>
                <div className="tp-pricing-feature-list mb-45">
                  <div className="tp-pricing-feature">
                    <ul>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Diseño de 1 e-Commerce a medida</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Catálogo de productos</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Carrito de compras y pagos en línea</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Gestión de inventario</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Botón de WhatsApp</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Enlace a redes sociales</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Optimización SEO para productos</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Hosting y Dominio (gratis 1 año)</span>
                      </li>
                      <li>
                        <i className="fa-sharp fa-solid fa-check" />
                        <span>Soporte por 30 días</span>
                      </li>
                    </ul>
                  </div>
                  <span className="tp-pricing-para mt-25">
                    Entrega en 20 días hábiles
                  </span>
                </div>
                <div className="tp-pricing-btn-wrap">
                  <a
                    className="tp-pricing-btn"
                    href="https://wa.me/5217225390427?text=Hola,%20me%20interesa%20el%20plan%20Tienda%20Online%20de%20$14,999%20MXN"
                    target="_blank"
                  >
                    Empezar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-contact-area pt-120 pb-120" id="contacto">
        <div className="section__shape-2" />
        <div className="section__shape-3">
          <img
            src="assets/img/shapes/about-two-shape-3.png"
            alt="about shape-3"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="tp-contact-wrap p-relative wow tpfadeLeft"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="tp-contact-title-box">
                  <span className="tp-section-subtitle gradiant-subtitle mb-20 d-inline-block">
                    CONTÁCTAME
                  </span>
                  <h2 className="tp-section-title mb-35 color-white">
                    Te ayudo a definir tu proyecto web
                  </h2>
                  <p>Estoy listo para ayudarte. Escríbeme o llámame:</p>
                </div>
                <div className="tp-contact-info">
                  <a className="tp-contact-tel" href="tel:+527225390427">
                    +52 722 539 0427
                  </a>
                  <a
                    className="tp-contact-mail"
                    href="mailto:hola@carlosrdev.com"
                  >
                    hola@carlosrdev.com
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/5217225390427?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20desarrollo%20web"
                target="_blank"
                className="tp-btn-gradient tp-gradient-bg wow tpfadeUp mt-20"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <i className="fab fa-whatsapp mr-10" aria-hidden="true"></i>
                Escríbeme por WhatsApp
              </a>
            </div>
            <div className="col-lg-6">
              <div
                className="tp-contact-wrap p-relative wow tpfadeRight"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <h4 className="tp-about-inner-title mt-40 mb-40">
                  Preguntas Frecuentes
                </h4>
                <div className="tp-about-inner-faq">
                  <div className="tp-faq-accordion">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-items">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-buttons"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            ¿Cuál es la forma de pago?
                            <span className="accordion-icon" />
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              El proceso de pago es simple y flexible: solicito
                              un anticipo del 50% al inicio del proyecto para
                              comenzar el desarrollo, y el 50% restante al
                              finalizar, antes de la publicación oficial del
                              sitio.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-items">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            ¿Cuánto tiempo tarda el desarrollo de un sitio web?
                            <span className="accordion-icon" />
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Depende del tipo de proyecto. Una landing page
                              puede estar lista en pocos días, mientras que
                              sitios más complejos pueden tomar de 2 a 4
                              semanas.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-items">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            ¿Incluyen mantenimiento después del desarrollo?
                            <span className="accordion-icon" />
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              El mantenimiento está incluido de forma gratuita
                              durante los primeros días, según el plan
                              contratado. Después de ese período, tiene un costo
                              adicional, que es completamente opcional.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-items">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            ¿Qué necesito para comenzar el proyecto?
                            <span className="accordion-icon" />
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Solo necesito tus ideas, contenido (textos e
                              imágenes) y una breve reunión para definir
                              objetivos y diseño.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </>
  );
}
