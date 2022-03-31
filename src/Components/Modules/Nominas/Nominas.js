import TableDisplay from "../../TableDisplay"
import { options } from '../../../datafake';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const titlesNomina = ['Periodo Inicio','Periodo Fin','Semana','Total']

const Nominas = () => {

    const [dataNominas, setDataNominas] = useState([{
        "Periodo Inicio": '',
        "Periodo Fin": "",
        "Semana": "",
        "Total": ""
    }]);

    useEffect(async()=>{
        const nominas = await axios.get('http://localhost:7799/nominas', {withCredentials: true});

        setDataNominas(nominas.data.data.map((nomina) => (
            nomina.detalle ? {
                "Periodo Inicio": nomina.detalle.periodoInicio,
                "Periodo Fin": nomina.detalle.periodoFin,
                "Semana": nomina.detalle.semana,
                "Total": nomina.detalle.total
            } :
            {
                "Periodo Inicio": '',
                "Periodo Fin": "",
                "Semana": "",
                "Total": ""
            }
        )));


    },[]);
    return (
        <div >
            <h1>Nominas</h1>
            <TableDisplay titles={titlesNomina} rawData={dataNominas} options={options}/>
        </div>
    )
}

export default Nominas