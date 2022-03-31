import '../../../CSS/nuevoNomina.css'
import { titles } from '../../../dataNomina';
import TableNominasNueva from './TableNominasNueva';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '../../../utils/axiosUtils';
import { useNavigate } from 'react-router';

const NuevoNomina = () => {
    const [dataEmpleados, setDataEmpleados] = useState([{
        "Nombre": '',
        "Faltas": 0,
        "Complementos": 0,
        "Rebajes": 0
    }]);

    const [periodoInicio, setPeriodoInicio] = useState();
    const [periodoFin, setPeriodoFin] = useState();
    const [esquema, setEsquema] = useState();

    const onChangePeriodoInicio = (e) => {
        const {value} = e.target;

        setPeriodoInicio(value);
    };

    const onChangePeriodoFin = (e) => {
        const {value} = e.target;

        setPeriodoFin(value);
    };

    const onChangeEsquema = (e) => {
        const {value} = e.target;

        setEsquema(value);
    };

    const [datos, setDatos] = useState([])

    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        const {name, id, value} = e.target;

        datos[id][name] = Number(value)
        setDatos([
            ...datos
        ]);
    };

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        await Post('/nominas/add', {operaciones:datos, detalle:{periodoInicio,periodoFin, esquema}});
        navigate('/app/nominas');
    };

    useEffect(async()=>{
        const trabajadores = await axios.get('http://localhost:7799/trabajadores', {withCredentials: true});
        setDataEmpleados(trabajadores.data.data.map((trabajador) => (
            trabajador.datosPersonales ? {
                "Nombre": trabajador.datosPersonales.nombre,
                "Faltas": 0,
                "Complementos": 0,
                "Rebajes": 0
            } :
            {
                "Nombre": '',
                "Faltas": 0,
                "Complementos": 0,
                "Rebajes": 0
            })
        ));
        setDatos(trabajadores.data.data.map(trabajador=>(
            {
            "trabajador": trabajador._id,
            "sueldoBase": Number(trabajador.datosLaborales.sueldo),
            "dias": 0,
            "complementos": 0,
            "rebajes": 0
            }
        )
        ));
    },[]);

    return (
        <div>
            <h1>Crear Nómina</h1>
            <div style={{ marginLeft: '50px', marginRight: '50px' }}>
            <form onSubmit={onSubmitHandler}>
                <div id="contenedorPrincipal">

                    <div id="informacion">

                        <div id="informacionEspecifica">
                            <div id="titulo">
                                Esquema
                            </div>
                            <div id="info">
                                <select name="esquema" onChange={onChangeEsquema}>
                                    <option value="Semana">Semanal</option>
                                    <option value="Quincena">Quincenal</option>

                                </select>
                            </div>
                        </div>
                        <div id="informacionEspecifica">
                            <div id="titulo">
                                De la fecha:
                            </div>
                            <div id="info">
                                <input type='date' name="periodoInicio" onChange={onChangePeriodoInicio}/>
                            </div>
                        </div>
                        <div id="informacionEspecifica">
                            <div id="titulo">
                                A la fecha:
                            </div>
                            <div id="info">
                                <input type='date' name="periodoFin" onChange={onChangePeriodoFin}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div >

                    <TableNominasNueva titles={titles} rawData={dataEmpleados} onChangeHandler={(e)=>onChangeHandler(e)}/>
                    <button type='submit'>Enviar</button>
                    
                </div>
                </form>
            </div>

        </div>
    )
}

export default NuevoNomina