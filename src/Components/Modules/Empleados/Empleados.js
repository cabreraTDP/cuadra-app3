import TableDisplay from "../../TableDisplay"
import { titles, data, options } from '../../../datafake';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const Empleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [dataEmpleados, setDataEmpleados] = useState([{
        "Nombre": "",
        "RFC": "",
        "CURP": "",
        "IMSS": ""
    }]);

    useEffect(async()=>{
        const trabajadores = await axios.get('http://localhost:7799/trabajadores', {withCredentials: true});
        setEmpleados(trabajadores.data.data);
        setDataEmpleados(trabajadores.data.data.map((trabajador) => (
            trabajador.datosPersonales ? {
                "Nombre": trabajador.datosPersonales.nombre,
                "RFC": trabajador.datosPersonales.rfc,
                "CURP": trabajador.datosPersonales.curp,
                "IMSS": trabajador.datosPersonales.imss
            } :
            {
                "Nombre": '',
                "RFC": "",
                "CURP": "",
                "IMSS": ""
            }
        )));

    },[]);

    return (
        <div >
            <h1>Empleados</h1>
            <TableDisplay titles={titles} rawData={dataEmpleados} options={options}/>
        </div>
    )
}

export default Empleados