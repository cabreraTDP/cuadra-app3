import '../../../CSS/gridLayout.css'
import inputsEmpleado from "../../../Constants/inputsEmpleado"
import InputForm from "./InputForm"
import TableDisplay from "../../TableDisplay"
import { titles, data } from '../../../dataModal';

import { useState, useEffect } from 'react'
import { Post } from '../../../utils/axiosUtils'
import { useNavigate } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import { render } from 'react-dom';


const id = "62452af649ab979c3136a2f1";


//Tratar de abstraer una estructura del json para el llenado del formulario
const mapa = {


}


const NuevoEmpleado = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [datos, setDatos] = useState({})
  const [datosTrabajador, setDatosTrabajador] = useState({});

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await Post('/trabajadores/add', datos);
    navigate('/app/empleados');
  };

  const onChangeHandler = async (e) => {
    const { name, value } = e.target;
    await setDatos({
      ...datos,
      [name]: value
    });

  };



  useEffect(() => {
    const getDatos = async (id) => {
      const data = {
        idTrabajador: id
      }
      const trabajador = await Post('/trabajadores/getTrabajador', data);
      setDatosTrabajador(trabajador.data.data);
      console.log(trabajador.data.data);
    };

    getDatos(id);

  }, []);

  return (
    <div>
      <h1>Nuevo Empleado</h1>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <div style={{ width: '25%', height: '400px', float: 'left' }}>
          <div style={{ width: '200px', height: '200px', backgroundColor: 'gray', position: 'absolute', margin: '45px 0 0 70px', borderRadius: '50%' }}>
            <div style={{ textAlign: 'center', lineHeight: '150px' }}>
              <h3>Añadir Foto</h3>
            </div>
          </div>



        </div>
        <div style={{ width: '30px', height: '400px', float: 'left' }}>

        </div>
        <div >
          <form className="grid-layout" onSubmit={onSubmitHandler}>
            {
              inputsEmpleado.map((input) => (
                console.log(datosTrabajador[input.name]),
                < InputForm
                  etiqueta={input.etiqueta}
                  placeholder={input.placeholder}
                  tipo={input.tipo}
                  name={input.name}
                  onChangeHandler={(e) => onChangeHandler(e)}
                  value={datosTrabajador[input.name]}
                />)
              )}
            <button className="submitButtonEmpleado" type="submit" style={{ width: '100%' }} >Dar de Alta </button>
          </form>
        </div>

      </div>

      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <Button variant="primary" onClick={handleShow}>
          Expediente Digital
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Expediente Digital</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            {/* 
              -Eliminar filtro de la
              -Agregar las opciones de borrar y descargar 
              */}
            <TableDisplay titles={titles} rawData={data} filtro={false} />
          </Modal.Body>
          <Modal.Footer>
                {/* 
              Tratar de que el botón subir archivo ejecute 2 cambios de estado para hacer el cambio de modal 
              */}
            <Button variant="primary" onClick={handleClose, handleShow2}>Subir archivo</Button>
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


            {/* 
              -Eliminar filtro de la
              -Agregar las opciones de borrar y descargar 
              */}

          </Modal.Body>
          <Modal.Footer>

            <Button variant="primary">Subir archivo</Button>
          </Modal.Footer>
        </Modal>
      </>



    </div>
  )

}

export default NuevoEmpleado