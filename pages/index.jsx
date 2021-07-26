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
                    name='description'
                    content='Full Stack Developer and Android Developer | Pursuing CSE from IIITR | '
                />

                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'></meta>
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
