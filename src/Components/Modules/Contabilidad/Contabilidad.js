import React from 'react'
import TableDisplay from "../../TableDisplay"
import axios from "axios";
import '../../../CSS/Contabilidad.css'
import Icon from "awesome-react-icons";
import { Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react'



const URL = process.env.REACT_APP_URL_URI;

const titleArchivos = ['Factura', 'Fecha', 'Tipo', 'Tamaño'];


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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [NuevoRegistro, setNuevoRegistro] = useState(false);

    const CancelarNuevoRegistro = () => setNuevoRegistro(false);
    const CrearNuevoRegistro = () => setNuevoRegistro(true);


    const [datosDocumento, setDatosDocumento] = useState({});
    const [archivo, setArchivo] = useState();

    const changeFile = (e) => {
        setArchivo(e);
    }

    const onChangeHandlerDocumento = (e) => {
        const { name, value } = e.target;
        setDatosDocumento({
            ...datosDocumento,
            [name]: value
        });
    }

    //falta crear funcion que use setArchivos, para el llenado de la tabla de archivos subidps
    const [archivos, setArchivos] = useState([
        {
            'Factura': '',
            'Fecha': '',
            'Tipo': '',
            'Tamaño': ''
        }
    ])
//Crear un segundo metodo parecido a este que procesa el archivo, pero que sólo procese el formulario de registro nuevo
    const onSubmitHandlerDocumento = async (e) => {
        e.preventDefault();

        const f = new FormData();
        f.append('file', archivo[0]);
        f.append('title', datosDocumento.title)
        console.log(f.get('file'))
        const res = await axios.post(`${URL}/trabajadores/uploadFile`, f);
        console.log(res)
        setShow2(false);
    };



    useEffect(() => {
        const getData = async (URL) => {
            //Ajustar Dirección y obj json de contabilidad ya que cuenta con información de la tabla trabajadores
            const registros = await axios.get(`${URL}/trabajadores`, { withCredentials: true });
            setDataContabilidad(registros.data.data.map((registro) => (
                registro.dataContabilidadJson ? {
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
                    <Icon name="plus" strokeWidth="3" size="25" color="blue" onClick={CrearNuevoRegistro}/>
                    <Icon name="chevron-up" strokeWidth="3" size="25" color="blue" onClick={handleShow} />
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
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Icon name="plus" strokeWidth="3" size="25" color="blue" />
                    <Modal.Title>Subir PDF SAT</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {/* 
              -Eliminar filtro de la
              -Agregar las opciones de borrar y descargar 
              */}
                    {<TableDisplay titles={titleArchivos} rawData={archivos} filtro={false} paginacion={false} link={`${URL}/trabajadores/downloadFile/`} target="_blank" />}
                </Modal.Body>
                <Modal.Footer>
                    {/* 
              Tratar de que el botón subir archivo ejecute 2 cambios de estado para hacer el cambio de modal 
              */}
                    <Button id="btn" variant="primary" onClick={() => { handleClose(); handleShow2(); }}>Subir archivo</Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={show2}
                onHide={handleClose2}
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
                    {/* 
              -Eliminar filtro de la
              -Agregar las opciones de borrar y descargar 
              */}

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

                    <form onSubmit={onSubmitHandlerDocumento}>
                        <label>Categoría:</label>
                        <input type="text" name="categoria" style={{ width: '100%', marginTop: '10px' }} onChange={(e) => onChangeHandlerDocumento(e)} required />
                        <label>Tipo:</label>
                        <input type="text" name="tipo" style={{ width: '100%', marginTop: '10px' }} onChange={(e) => onChangeHandlerDocumento(e)} required />
                        <label>Título:</label>
                        <input type="text" name="titulo" style={{ width: '100%', marginTop: '10px' }} onChange={(e) => onChangeHandlerDocumento(e)} required />
                        <label>Monto:</label>
                        <input type="number" name="monto" style={{ width: '100%', marginTop: '10px' }} onChange={(e) => onChangeHandlerDocumento(e)} required />
                        <label>Fecha Operación:</label>
                        <input type="date" name="fechaOperacion" style={{ width: '100%', marginTop: '10px' }} onChange={(e) => onChangeHandlerDocumento(e)} required />
                        <label>Descripción:</label>
                        <input type="text" name="descripcion" style={{ width: '100%', marginTop: '10px' }} onChange={(e) => onChangeHandlerDocumento(e)} required />
                        <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '20px' }} >Añadir Registro</Button>

                    </form>
                    {/* 
              -Eliminar filtro de la
              -Agregar las opciones de borrar y descargar 
              */}

                </Modal.Body>
                <Modal.Footer>


                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Contabilidad

