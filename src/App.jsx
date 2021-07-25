import React from "react";
import Main from "./Pages/Main";
import CssBaseline from "@material-ui/core/CssBaseline";
import "font-awesome/css/font-awesome.min.css";

function App(props) {
    return (
        <div className='body'>
            <CssBaseline />

            <Main />
        </div>
    );
}

export default App;
