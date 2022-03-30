import { Routes, Route } from "react-router-dom";
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
            <Routes>
                <Route index element={<Home />} />
                <Route path="empleados" element={<Empleados />} />
                <Route path="nominas/verNomina" element={<VerNomina />} />
                <Route path="nominas/DetalleNomina" element={<DetalleNomina />} />

                <Route path="empleados/nuevo" element={<NuevoEmpleado />} />
                <Route path="nominas" element={<Nominas />} />
                <Route path="nominas/nuevo" element={<NuevoNomina />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default MainBox