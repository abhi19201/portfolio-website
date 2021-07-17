
import React from 'react';
import Main from "./Pages/Main";
import { Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import "font-awesome/css/font-awesome.min.css";


function App(props){
    
    return (
        <div className="body">

            <CssBaseline />
            
                <Switch>
            
                    <Route path='/' render={props => <Main />}
                    />

                </Switch>
            
            
        </div>
    );
}


export default App;

