import React from 'react'
import TableDisplay from "../../TableDisplay"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import '../../../CSS/Contabilidad.css'
import Icon from "awesome-react-icons";

const URL = process.env.REACT_APP_URL_URI;

const titlesEmpleados = ['Fecha Captura', 'Categoría', 'Tipo', 'Titulo', 'Monto', 'Fecha Operación', 'Descripción', 'Editar'];

const Contabilidad = () => {
    const [dataContabilidad, setDataContabilidad] = useState([{
        "Fecha Captura": "",
        "Categoría": "",
        "Tipo": "",
        "Titulo": "",
        "Monto": "",
        "Fecha Operación": "",
        "Descripción": "",
        "Editar": ""
    }]);

    useEffect(() => {
        const getData = async (URL) => {
            //Ajustar Dirección y obj json de contabilidad ya que cuenta con información de la tabla trabajadores
            const registros = await axios.get(`${URL}/trabajadores`, { withCredentials: true });
            setDataContabilidad(registros.data.data.map((registro) => (
                registro.datosPersonales ? {
                    "Fecha Captura": "Rellenar con Info JSON",
                    "Categoría": "Rellenar con Info JSON",
                    "Tipo": "Rellenar con Info JSON",
                    "Titulo": "Rellenar con Info JSON",
                    "Monto": "Rellenar con Info JSON",
                    "Fecha Operación": "Rellenar con Info JSON",
                    "Descripción": "Rellenar con Info JSON",
                    "Editar": "Rellenar con Info JSON"
                } :
                    {
                        "Fecha Captura": "",
                        "Categoría": "",
                        "Tipo": "",
                        "Titulo": "",
                        "Monto": "",
                        "Fecha Operación": "",
                        "Descripción": "",
                        "Editar": ""
                    }
            )));
        }
        getData(URL).catch(console.error);


    }, []);

    return (
        <div >
            <h1>Contabilidad</h1>
            <div id='buscadorOpcion'>
                <h3 style={{}}>Filtro:</h3>
                <div id='opciones'>
                    <Icon name="plus" strokeWidth="3" size="25" color="blue" />
                    <Icon name="chevron-up" strokeWidth="3" size="25" color="blue" />
                    <Icon name="eye" strokeWidth="3" size="25" color="blue" />
                <div>
                    Añadir
                </div>

                <div>
                    subir PDF SAT
                </div>
                <div>
                    Analisis
                </div></div>

                
            </div>
            <TableDisplay titles={titlesEmpleados} rawData={dataContabilidad} link={'empleados/editar/'} />
        </div>
    )
}
export default Contabilidad