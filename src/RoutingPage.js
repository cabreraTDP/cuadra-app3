
import App from './App';
import SignIn from './Components/SignIn'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthRouteComponent} from './Components/AuthRouteComponent'

import Empleados from "./Components/Modules/Empleados/Empleados";
import NuevoEmpleado from "./Components/Modules/Empleados/NuevoEmpleado";
import Home from "./Components/Modules/Home";
import Nominas from "./Components/Modules/Nominas/Nominas";
import NuevoNomina from "./Components/Modules/Nominas/NuevoNomina"
import { Post } from './utils/axiosUtils';
import { Fragment, useEffect, useState } from 'react';
import store from './state/store';
import { AUTH_LOGIN } from './state/actions/types';

const RoutingPage = () => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false)

    /* useEffect(async() => {
        const user = await Post('/users/check');
        if(user){
            setIsLoggedIn(true);
            console.log('setting user')
        
            await store.dispatch({
                type: AUTH_LOGIN, 
                payload:true
            });
            console.log(await store.getState())
    }
        
    },[]) */

    return (
    <Router>
    <Fragment>
        <Routes>
            <Route exact path="/" element={<SignIn/>} />
            <Route element={<AuthRouteComponent/>}  path="/app/*">
                <Route   path="/app/*" element={<App/>} >
                    <Route exact path="home" element={<Home />} />
                    <Route exact path="empleados" element={<Empleados />} />
                    <Route path="empleados/nuevo" element={<NuevoEmpleado />} />
                    <Route path="nominas" element={<Nominas />} />
                    <Route path="nominas/nuevo" element={<NuevoNomina />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Route>
        </Routes>
        </Fragment>
    </Router>
    );
}

export default RoutingPage