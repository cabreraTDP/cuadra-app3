import TableDisplay from "../../TableDisplay"
import { titles , options } from '../../../datafake';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const URL = process.env.REACT_APP_URL_URI;

const Empleados = () => {

    const [dataEmpleados, setDataEmpleados] = useState([{
        "Nombre": "",
        "RFC": "",
        "CURP": "",
        "NSS": ""
    }]);

    useEffect(()=>{
        const  getData = async() => {
            await axios.get(`${URL}/trabajadores`, {withCredentials: true});
        }
        const trabajadores = getData();

        setDataEmpleados(trabajadores.data.data.map((trabajador) => (
            trabajador.datosPersonales ? {
                "Nombre": trabajador.datosPersonales.nombre,
                "RFC": trabajador.datosPersonales.rfc,
                "CURP": trabajador.datosPersonales.curp,
                "NSS": trabajador.datosPersonales.nss
            } :
            {
                "Nombre": '',
                "RFC": "",
                "CURP": "",
                "NSS": ""
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