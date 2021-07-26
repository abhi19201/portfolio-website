import "../styles/globals.scss";
import { useEffect } from "react";
import AOS from "aos";
import "font-awesome/css/font-awesome.min.css";

import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {

    useEffect(() => {
        AOS.init({
            delay: 3000,
            duration: 800,
        });
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
