
import React from 'react';
import Welcome from "./Pages/Welcome";
import { Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';


function App(props){
    
    return (
        <div className="body">

            <CssBaseline />
            
                <Switch>
            
                    <Route path='/' render={props => <Welcome />}
                    />

                </Switch>
            
        </div>
    );
}


export default App;

