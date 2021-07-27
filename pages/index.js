import Head from "next/head";
import Main from "../components/Main";
import CssBaseline from "@material-ui/core/CssBaseline";
import "font-awesome/css/font-awesome.min.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(fas, fab);

export default function Home() {
    return (
        <div>
            <Head>
                <title>Abhijeet Wankhade</title>

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

                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'></meta>

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

            <main>
                <div className='body'>
                    <CssBaseline />

                    <Main />
                </div>
            </main>
        </div>
    );
}
