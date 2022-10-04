import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
            id="Adsense-id" data-ad-client="ca-pub-4352778397803727"
            async strategy="afterInteractive"
            onError={ (e) => { console.error('Script failed to load', e) }}
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}