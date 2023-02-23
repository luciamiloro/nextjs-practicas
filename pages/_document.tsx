import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const generateCsp = (): string => {
    let csp = '';
    csp += 'default-src \'none\';';
    csp += 'img-src \'self \' data;';
    return csp;
  }

  return (
    <Html lang="en">
      <Head >
      <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* p mantener la escala del viewport en dif resoluciones*/}
       {/* <meta httpEquiv="Content-Security-Policy" content={generateCsp()}/>  para politicas de contenido */}
       </Head>
      <body>
        {/* React components outside of <Main /> will not be initialized by the browser.  */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
