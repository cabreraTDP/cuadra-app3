import { Routes, Route, Outlet } from "react-router-dom";
import Empleados from "../Modules/Empleados/Empleados";
import NuevoEmpleado from "../Modules/Empleados/NuevoEmpleado";
import Home from "../Modules/Home";
import Nominas from "../Modules/Nominas/Nominas";
import NuevoNomina from "../Modules/Nominas/NuevoNomina"



const MainBox = () => {

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default MainBox