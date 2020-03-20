import React  from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import { render } from '@testing-library/react';
import Home from './pages/home'
function AppRouter(){
    return (
        <Router>
            <Route path="/"  exact component={Home} />
        </Router>
    )

}
 
export default AppRouter;