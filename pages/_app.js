import "../styles/globals.scss";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import "font-awesome/css/font-awesome.min.css";

import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {

    useEffect(() => {
        AOS.init({
            delay: 3000,
            duration: 800,
        });
    }, []);

    return (
        <>
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
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
