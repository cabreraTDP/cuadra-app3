import { Routes, Route, Outlet } from "react-router-dom";
import Empleados from "../Modules/Empleados/Empleados";
import NuevoEmpleado from "../Modules/Empleados/NuevoEmpleado";
import Home from "../Modules/Home";
import Nominas from "../Modules/Nominas/Nominas";
import NuevoNomina from "../Modules/Nominas/NuevoNomina"
import VerNomina from "../../Components/Modules/Nominas/VerNominas"
import DetalleNomina from "../../Components/Modules/Nominas/DetalleNomina"





const MainBox = () => {

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default MainBox