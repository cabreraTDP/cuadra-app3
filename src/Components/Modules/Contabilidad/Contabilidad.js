import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import TableDisplay from "../../TableDisplay"
import axios from "axios";
import '../../../CSS/Contabilidad.css'
import Icon from "awesome-react-icons";
import { Post } from '../../../utils/axiosUtils';
import {numberToCurrency} from '../../../utils/format';


const URL = process.env.REACT_APP_URL_URI;

const titleArchivos = ['Factura', 'Fecha', 'Tipo', 'Tamaño'];

const transformarDatos = (datos) => {
    const nuevos = datos.map((registro) => (
        registro ? {
            "Tipo": registro.tipo?registro.tipo:"",
            "Categoría": registro.categoria?registro.categoria:"",
            "Titulo": registro.titulo?registro.titulo:"",
            "Descripción": registro.descripcion?registro.descripcion:"",
            "Monto": registro.monto?numberToCurrency(registro.monto):"",
            "Fecha Operación": registro.fechaOperacion?registro.fechaOperacion.slice(0,10):"",
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
        ));
        return nuevos
};

const titlesTablaContabilidad = ['Tipo','Categoría', 'Titulo', 'Descripción','Monto', 'Fecha Operación',  'Editar'];

const Contabilidad = () => {
    const [dataContabilidad, setDataContabilidad] = useState([]);

    const [PDFSAT, setPDFSAT] = useState(false);

    const CanelarNuevoArchivoSAT = () => setPDFSAT(false);
    const CrearNuevoArchivoSAT = () => setPDFSAT(true);

    const [AñadirArchivo, setAñadirArchivo] = useState(false);

    const CancelarArchivoSAT = () => setAñadirArchivo(false);
    const AgregarArchivoSAT = () => setAñadirArchivo(true);

    const [NuevoRegistro, setNuevoRegistro] = useState(false);

    const CancelarNuevoRegistro = () => setNuevoRegistro(false);
    const CrearNuevoRegistro = () => setNuevoRegistro(true);

    const [datosDocumento, setDatosDocumento] = useState({});
    const [archivo, setArchivo] = useState();
    const [datosOperacion, setDatosOperacion] = useState({})



    const onSubmitOperacion = async(e) => {
        e.preventDefault();
        const nuevosDatos = await Post('/contabilidad/crear', datosOperacion);
        setDataContabilidad([...dataContabilidad, ...transformarDatos([nuevosDatos.data.data])])
        setNuevoRegistro(false)
    };

    const onChangeOperacion = async(e) => {
        const {name, value} = e.target;
        setDatosOperacion({
            ...datosOperacion,
            [name]: value
        });
    };
    const changeFile = (e) => {
        setArchivo(e);
    }

    const onChangeHandlerDocumento = (e) => {
        const { name, value } = e.target;
        setDatosDocumento({
            ...datosDocumento,
            [name]: value
        });
    };

    const onSubmitHandlerDocumento = async (e) => {
        e.preventDefault();

        const f = new FormData();
        f.append('file', archivo[0]);
        const nuevosDatos = await axios.post(`${URL}/contabilidad/sat`, f, {withCredentials: true});
        setDataContabilidad([...dataContabilidad, ...transformarDatos(nuevosDatos.data.data)])
        CancelarArchivoSAT(false);
    };

    //falta crear funcion que use setArchivos, para el llenado de la tabla de archivos subidps
    const [archivos, setArchivos] = useState([
        {
            'Factura': '',
            'Fecha': '',
            'Tipo': '',
            'Tamaño': ''
        }
    ])




    useEffect(() => {
        const getData = async (URL) => {
            //Ajustar Dirección y obj json de contabilidad ya que cuenta con información de la tabla trabajadores
            const registros = await axios.get(`${URL}/contabilidad/operaciones`, { withCredentials: true });
            const datos = transformarDatos(registros.data.data);
            if(registros.data.data.length > 0) setDataContabilidad(datos)
        }
        getData(URL).catch(console.error);


    }, []);

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
                <h3>Filtro:</h3>
                <div id='opciones'>
                    <Icon name="plus" className="button" strokeWidth="3" size="25" color="blue" onClick={CrearNuevoRegistro} />
                    <Icon name="chevron-up" className="button" strokeWidth="3" size="25" color="blue" onClick={CrearNuevoArchivoSAT} />
                    <Icon name="eye" className="button" strokeWidth="3" size="25" color="blue" />

                    <div>
                        Añadir
                    </div>

                    <div>
                        subir PDF SAT
                    </div>
                    <div>
                        Analisis
                    </div>
                </div>
            </div>

            <TableDisplay titles={titlesTablaContabilidad} rawData={dataContabilidad} link={'contabilidad/abrir/'} paginacion={true} />


            <Modal
                show={PDFSAT}
                onHide={CanelarNuevoArchivoSAT}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Archivo</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={onSubmitHandlerDocumento}>
                        <label>Nombre del documento:</label>

                        <input type="file" name="file" style={{ width: '100%', marginTop: '20px' }} onChange={(e) => changeFile(e.target.files)} required />

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
                        <select style={styles.input} name="tipo"  onChange={(e) => onChangeOperacion(e)} required>
                            <option value="Ingreso" selected="selected">Ingreso</option>
                            <option value="Gasto">Gasto</option>
                        </select>
                        
                        <label>Categoría:</label>
                        <select style={styles.input} name="categoria"  onChange={(e) => onChangeOperacion(e)} required>
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