import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en'>
                <Head>

                    <meta
                        content='Full Stack Developer and Android Developer | Pursuing CSE from IIITR | I look forward to create scalable web applications with beautiful UI. I love to explore new frameworks and technologies and work with them'
                        name='description'
                    />

                    <meta
                        content='Abhijeet Wankhade | Full Stack Developer and Android Developer | IIIT Raichur | IIT Hyderabad | Hyderabad | Yavatmal | IIITR | IITH '
                        name='keyword'
                    />

                    <meta
                        name='google-site-verification'
                        content='3KpdWZPHL2DWr9MPTKDO427c8LK4dZO0l3wnRbx_OYI'
                    />
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
