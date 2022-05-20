import { useState, useEffect } from 'react';
import { Button, Modal, ModalFooter } from 'react-bootstrap';
import React from 'react';
import TableDisplay from "../../TableDisplay"
import axios from "axios";
import '../../../CSS/Contabilidad.css'
import Icon from "awesome-react-icons";
import { Post } from '../../../utils/axiosUtils';
import { numberToCurrency } from '../../../utils/format';
import moment from 'moment';

import ExportExcel from "react-export-excel";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

const URL = process.env.REACT_APP_URL_URI;

const titleArchivos = ['Factura', 'Fecha', 'Tipo', 'Tamaño'];

const transformarDatos = (datos) => {
    const nuevos = datos.map((registro) => (
        registro ? {
            "Tipo": registro.tipo ? registro.tipo : "",
            "Categoría": registro.categoria ? registro.categoria : "",
            "Titulo": registro.titulo ? registro.titulo : "",
            "Descripción": registro.descripcion ? registro.descripcion : "",
            "Monto": registro.monto ? numberToCurrency(registro.monto) : "",
            "Fecha Operación": registro.fechaOperacion ? moment(registro.fechaOperacion).format("DD-MM-YYYY") : "",
            "Editar": registro
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
    ));
    return nuevos
};

const titlesTablaContabilidad = ['Tipo', 'Categoría', 'Titulo', 'Descripción', 'Monto', 'Fecha Operación', 'Editar'];

const ExportarExcel = ({datos}) => {
    return(
    <ExcelFile element={<Icon name="arrow-down" strokeWidth="3" size="25" color="blue" />} filename="Contabilidad">
        <ExcelSheet data={datos} name="Operaciones">
            <ExcelColumn label="Tipo" value="Tipo"/>
            <ExcelColumn label="Categoría" value="Categoría"/>
            <ExcelColumn label="Titulo" value="Titulo"/>
            <ExcelColumn label="Descripción" value="Descripción"/>
            <ExcelColumn label="Monto" value="Monto"/>
            <ExcelColumn label="Fecha Operación" value="Fecha Operación"/>
        </ExcelSheet>
    </ExcelFile>
    )
}

const Contabilidad = () => {
    const [dataContabilidad, setDataContabilidad] = useState([]);
    const [dataFiltered, setDataFiltered] = useState([]);

    const [AñadirArchivo, setAñadirArchivo] = useState(false);

    const CancelarArchivoSAT = () => setAñadirArchivo(false);
    const AgregarArchivoSAT = () => setAñadirArchivo(true);

    const [NuevoRegistro, setNuevoRegistro] = useState(false);

    const CancelarNuevoRegistro = () => setNuevoRegistro(false);
    const CrearNuevoRegistro = () => setNuevoRegistro(true);

    const [editarRegistro, setEditarRegistro] = useState(false);
    const CancelarEditarRegistro = () => setEditarRegistro(false);
    const EditarRegistro = () => setEditarRegistro(true);
    const [registroEnEdicion, setRegistroEnEdicion] = useState({});

    const [archivo, setArchivo] = useState();
    const [datosOperacion, setDatosOperacion] = useState({})

    const [filtroMes, setFiltroMes] = useState('all');

    const funcionFiltroMes = (e) => {
        setFiltroMes(e.target.value);
    };

    const onSubmitOperacion = async (e) => {
        e.preventDefault();
        const nuevosDatos = await Post('/contabilidad/crear', datosOperacion);
        setDataContabilidad([...dataContabilidad, ...transformarDatos([nuevosDatos.data.data])])
        setNuevoRegistro(false)
    };

    const onChangeOperacion = async (e) => {
        const { name, value } = e.target;
        setDatosOperacion({
            ...datosOperacion,
            [name]: value
        });
    };
    const changeFile = (e) => {
        setArchivo(e);
    }

    const onSubmitHandlerDocumento = async (e) => {
        e.preventDefault();
        const f = new FormData();
        f.append('file', archivo[0]);
        const nuevosDatos = await axios.post(`${URL}/contabilidad/sat`, f, { withCredentials: true });
        setDataContabilidad([...dataContabilidad, ...transformarDatos(nuevosDatos.data.data)])
        CancelarArchivoSAT(false);
    };

    const onButtonFunction = (value) => {
        EditarRegistro()
        setRegistroEnEdicion(value)
    };

    const onSubmitEditar = async (e) => {
        e.preventDefault();
        const nuevosDatos = await Post('/contabilidad/editar', registroEnEdicion);
        setDataContabilidad([...dataContabilidad.filter((operacion) => operacion.Editar._id !== registroEnEdicion._id), ...transformarDatos([nuevosDatos.data.data])])
        setEditarRegistro(false)
    };

    const onChangeEditar = async (e) => {
        const { name, value } = e.target;
        setRegistroEnEdicion({
            ...registroEnEdicion,
            [name]: value
        });
    };

    const onDeleteOperacion = async (id) => {
        const eliminar = await axios.post(`${URL}/contabilidad/eliminar`, { id }, { withCredentials: true });
        setDataContabilidad(dataContabilidad.filter((operacion) => operacion.Editar._id !== id));
        setEditarRegistro(false)
    };

    useEffect(() => {
        const getData = async (URL) => {
            //Ajustar Dirección y obj json de contabilidad ya que cuenta con información de la tabla trabajadores
            const registros = await axios.get(`${URL}/contabilidad/operaciones`, { withCredentials: true });
            const datos = transformarDatos(registros.data.data);
            if (registros.data.data.length > 0) {
                setDataContabilidad(datos)
                setDataFiltered(datos)
            }
        }
        getData(URL).catch(console.error);
    }, []);

    useEffect(() => {
        if (filtroMes === 'all') {
            setDataFiltered(dataContabilidad)
        } else {
            setDataFiltered(dataContabilidad.filter((operacion) => moment(operacion["Fecha Operación"], "DD-MM-YYYY").month() + 1 === Number(filtroMes)));
        };
    }, [dataContabilidad, filtroMes]);

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <h1>Contabilidad</h1>
            <div id='buscadorOpcion'>
                <div id='filtroOpcion'>
                    <h3>Filtro:</h3>
                    <select style={{ height: '30px', width: '200px' }} value={filtroMes} onChange={(e) => funcionFiltroMes(e)}>
                        <option selected value="all">Todos los meses...</option>
                        <option value="1">Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                </div>
                <div style={{ width: '100%' }}>
                </div>
                <div id='opciones'>
                    <div id='opcion'>
                        <Icon name="plus" strokeWidth="3" size="25" color="blue" onClick={CrearNuevoRegistro} />
                        <div>
                            Añadir
                        </div>
                    </div>
                    <div id='opcion'>
                        <Icon name="chevron-up" strokeWidth="3" size="25" color="blue" onClick={AgregarArchivoSAT} />
                        <div>
                            Subir pdf sat
                        </div>
                    </div>
                    <div id='opcion'>
                        <Icon name="activity" strokeWidth="3" size="25" color="blue" />
                        <div>
                            Analisis
                        </div>
                    </div>
                    <div id='opcion'>
                        <ExportarExcel datos={dataFiltered}/>
                        <div>
                            Exportar a Excel
                        </div>
                    </div>
                </div>
            </div>

            <TableDisplay
                titles={titlesTablaContabilidad}
                rawData={dataFiltered}
                link={'contabilidad/'}
                type={'button'}
                buttonFunction={onButtonFunction}
                paginacion={true}
            />



            <Modal
                show={AñadirArchivo}
                onHide={CancelarArchivoSAT}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Archivo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={onSubmitHandlerDocumento}>
                        <label>Categoría:</label>
                        <select style={{ height: '30px', width: '200px' }} value={filtroMes} onChange={(e) => funcionFiltroMes(e)}>
                            <option selected value="all">Opciones</option>
                            <option value="1">Facturas Emitidas</option>
                            <option value="2">Facturas Recibidas</option>
                            <option value="3">Impuestos</option>
                            <option value="4">IMSS</option>
                        </select>

                        <input type="file" name="file" style={{ width: '100%', marginTop: '20px' }} onChange={(e) => changeFile(e.target.files)} accept="application/pdf" required />

                        <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '20px' }} >Subir Documento</Button>

                    </form>
                </Modal.Body>
                <Modal.Footer>


                </Modal.Footer>
            </Modal>
            <Modal
                show={NuevoRegistro}
                onHide={CancelarNuevoRegistro}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Regisro</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={onSubmitOperacion}>

                        <label>Tipo:</label>
                        <select style={styles.input} name="tipo" onChange={(e) => onChangeOperacion(e)} required>
                            <option value="Ingreso" selected="selected">Ingreso</option>
                            <option value="Gasto">Gasto</option>
                        </select>

                        <label>Categoría:</label>
                        <select style={styles.input} name="categoria" onChange={(e) => onChangeOperacion(e)} required>
                            <option value="Ventas" selected="selected">Ventas</option>
                            <option value="Sueldos">Sueldos</option>
                        </select>

                        <label>Título:</label>
                        <input type="text" name="titulo" style={styles.input} onChange={(e) => onChangeOperacion(e)} required />

                        <label>Descripción:</label>
                        <input type="text" name="descripcion" style={styles.input} onChange={(e) => onChangeOperacion(e)} required />

                        <label>Monto:</label>
                        <input type="number" name="monto" style={styles.input} onChange={(e) => onChangeOperacion(e)} required />

                        <label>Fecha Operación:</label>
                        <input type="date" name="fechaOperacion" style={styles.input} onChange={(e) => onChangeOperacion(e)} required />

                        <Button variant="primary" type="submit" >Añadir Registro</Button>

                    </form>
                </Modal.Body>
                <Modal.Footer>


                </Modal.Footer>
            </Modal>

            {/*EDITAR TRANSACCIÓN */}
            <Modal
                show={editarRegistro}
                onHide={CancelarEditarRegistro}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Regisro</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={onSubmitEditar}>

                        <label>Tipo:</label>
                        <select style={styles.input} value={registroEnEdicion.tipo} name="tipo" onChange={(e) => onChangeEditar(e)} required>
                            <option value="Ingreso" >Ingreso</option>
                            <option value="Gasto">Gasto</option>
                        </select>

                        <label>Categoría:</label>
                        <select style={styles.input} value={registroEnEdicion.categoria} name="categoria" onChange={(e) => onChangeEditar(e)} required>
                            <option value="Ventas" >Ventas</option>
                            <option value="Sueldos">Sueldos</option>
                        </select>

                        <label>Título:</label>
                        <input type="text" name="titulo" value={registroEnEdicion.titulo} style={styles.input} onChange={(e) => onChangeEditar(e)} required />

                        <label>Descripción:</label>
                        <input type="text" name="descripcion" value={registroEnEdicion.descripcion} style={styles.input} onChange={(e) => onChangeEditar(e)} required />

                        <label>Monto:</label>
                        <input type="number" name="monto" value={registroEnEdicion.monto} style={styles.input} onChange={(e) => onChangeEditar(e)} required />

                        <label>Fecha Operación:</label>
                        <input type="date" name="fechaOperacion" value={moment(registroEnEdicion.fechaOperacion).format('YYYY-MM-DD')} style={styles.input} onChange={(e) => onChangeEditar(e)} required />

                        <Button variant="primary" type="submit" >Guardar Registro</Button>
                        <Button style={{ marginLeft: 20 }} variant="warning" onClick={() => onDeleteOperacion(registroEnEdicion._id)} >Eliminar Registro</Button>

                    </form>
                </Modal.Body>
                <ModalFooter>

                </ModalFooter>
            </Modal>


        </div>
    )
}
export default Contabilidad

const styles = {
    input: {
        width: '100%',
        marginBottom: 15,
        border: '1px black solid',
        height: 35,
        padding: 5
    }
}