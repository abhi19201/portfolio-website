import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel='icon' type='image/png' href='/logo.svg' />

                    <meta
                        httpEquiv='Content-Type'
                        content='text/html; charset=utf-8'
                    />

                    <script
                        src='https://kit.fontawesome.com/d9c25f1394.js'
                        crossOrigin='anonymous'
                        async></script>
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
