import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script src="https://universal-editor-service.adobe.io/cors.js" async></script>
      <meta name="urn:adobe:aue:system:aemconnection" content={`aem65:${process.env.AEM_ON_PREM_HOST}`}></meta>
      <meta name="urn:adobe:aue:config:service" content="https://localhost:8008" />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
