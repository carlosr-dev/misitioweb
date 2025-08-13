import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import Navbar from '@/components/layout/Navbar';
import Script from 'next/script';

export const metadata = {
  title: 'Carlosr Dev | Te ayudo a crear tu presencia digital',
  description: 'Desarrollo de páginas web, tiendas en línea y sitios a medida en Toluca y Metepec. Impulsa tu presencia digital con diseños modernos y funcionales.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/img/favicon/favicon.png"
        />

        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/custom-animation.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <MobileMenu />
        <Navbar />
           <main>
            {children}
           </main>
        <Footer />
        
        <Script src="/assets/js/vendor/jquery.js" strategy='beforeInteractive' />
        <Script src="/assets/js/bootstrap-bundle.js" strategy='beforeInteractive' />

        <Script src="/assets/js/swiper-bundle.js" strategy='afterInteractive' />
        <Script src="/assets/js/wow.js" strategy='afterInteractive' />
        <Script src="/assets/js/slick.js" strategy='afterInteractive' />
        <Script src="/assets/js/magnific-popup.js" strategy='afterInteractive' />
        <Script src="/assets/js/nice-select.js" strategy='afterInteractive' />
        <Script src="/assets/js/purecounter.js" strategy='afterInteractive' />
        <Script src="/assets/js/isotope-pkgd.js" strategy='afterInteractive' />
        <Script src="/assets/js/imagesloaded-pkgd.js" strategy='afterInteractive' />
        <Script src="/assets/js/ajax-form.js" strategy='afterInteractive' />
        <Script src="/assets/js/slider-init.js" strategy='afterInteractive' />
        <Script src="/assets/js/main.js" strategy='afterInteractive' />
      </body>
    </html>
  );
}
