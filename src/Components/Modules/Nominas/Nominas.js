import TableDisplay from "../../TableDisplay"
import { options } from '../../../datafake';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const URL = process.env.REACT_APP_URL_URI;

const titlesNomina = ['Periodo Inicio','Periodo Fin','Semana','Total','Ver']

const Nominas = () => {

    const [dataNominas, setDataNominas] = useState([{
        "Periodo Inicio": '',
        "Periodo Fin": "",
        "Semana": "",
        "Total": "",
        "Ver": ""
    }]);

    useEffect(async()=>{
        const nominas = await axios.get(`${URL}/nominas`, {withCredentials: true});

        setDataNominas(nominas.data.data.map((nomina) => (
            nomina.detalle ? {
                "Periodo Inicio": nomina.detalle.periodoInicio.slice(0,10),
                "Periodo Fin": nomina.detalle.periodoFin.slice(0,10),
                "Semana": nomina.detalle.semana,
                "Total": nomina.detalle.total,
                "Ver": nomina._id
            } :
            {
                "Periodo Inicio": '',
                "Periodo Fin": "",
                "Semana": "",
                "Total": "",
                "Ver": ""
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