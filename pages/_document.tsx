import Document, { Head, Html, Main, NextScript } from "next/document";


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="The latest news and headlines from News!. Get breaking news stories and in-depth coverage with videos and photos."
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/ico" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="128x128" href="/icon/128x128.png" />
          <link rel="icon" type="image/png" sizes="144x144" href="/icon/144x144.png" />
          <link rel="icon" type="image/png" sizes="152x152" href="/icon/152x152.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon/192x192.png" />
          <link
            rel="apple-touch-startup-image"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            href="/launch/launch-max.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            href="/launch/launch-xr.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            href="/launch/launch-x.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
            href="/launch/launch-plus.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            href="/launch/launch-8.png"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://www.youtube.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <meta name="apple-mobile-web-app-title" content="News" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/icon/144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
