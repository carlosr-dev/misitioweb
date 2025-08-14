import Footer from '@/components/layout/Footer';
import MobileMenu from '@/components/layout/MobileMenu';
import Navbar from '@/components/layout/Navbar';
import Script from 'next/script';

export const metadata = {
  title: 'Carlosr Dev | Te ayudo a crear tu presencia digital',
  description:
    'Diseño y desarrollo de páginas web modernas, tiendas en línea y sitios a medida en Toluca, Metepec y alrededores. Impulsa tu presencia digital con soluciones profesionales.',
  keywords: [
    'desarrollo web Toluca',
    'páginas web Toluca',
    'páginas web Metepec',
    'páginas web Lerma',
    'páginas web San Mateo Atenco',
    'páginas web Xonacatlán',
    'tiendas en línea Toluca',
    'tiendas en línea Metepec',
    'tiendas en línea LErma',
    'diseño web profesional',
    'sitios web a medida',
    'Carlosr Dev',
    'presencia digital',
    'Toluca',
    'Metepec',
    'Lerma',
    'San Mateo Atenco',
    'Xonacatlán',
    'Estado de México',
  ],
  authors: [{ name: 'Carlosr Dev', url: 'https://carlosrdev.netlify.app' }],
  metadataBase: new URL('https://carlosrdev.netlify.app'),
  alternates: {
    canonical: 'https://carlosrdev.netlify.app',
  },
  openGraph: {
    title: 'Desarrollo Web en Toluca y Metepec | Carlosr Dev',
    description:
      'Diseño y desarrollo de páginas web modernas, tiendas en línea y sitios a medida en Toluca, Metepec y alrededores. Presencia digital profesional.',
    url: 'https://carlosrdev.netlify.app',
    siteName: 'Carlosr Dev',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/assets/images/og-image.jpg', // 1200x630 px recomendado
        width: 1200,
        height: 630,
        alt: 'Ejemplo de página web desarrollada por Carlosr Dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo Web en Toluca y Metepec | Carlosr Dev',
    description:
      'Diseño y desarrollo de páginas web modernas, tiendas en línea y sitios a medida en Toluca y Metepec.',
    images: ['/assets/og-image.jpg'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.ico"
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
