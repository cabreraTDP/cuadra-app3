import TableDisplay from "../../TableDisplay"
import { titles, data, options } from '../../../datafake';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Nominas = () => {
    const [nominas, setNominas] = useState([]);
    const [dataNominas, setDataNominas] = useState([{
        "Nombre": "",
        "RFC": "",
        "CURP": "",
        "NSS": ""
    }]);

    useEffect(async()=>{
        const trabajadores = await axios.get('http://localhost:7799/nominas', {withCredentials: true});
        setNominas(trabajadores.data.data);
        setDataNominas(trabajadores.data.data.map((trabajador) => (
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
            <h1>Nominas</h1>
            <TableDisplay titles={titles} rawData={data} options={options}/>
        </div>
    )
}

export default Nominas