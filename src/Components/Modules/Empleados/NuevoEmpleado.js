import '../../../CSS/gridLayout.css'
import FormDisplay from "../../FormDisplay"

const datosInput = [
    {
        etiqueta: "Nombre (s):",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Apellido Paterno",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Apellido Materno",
        placeholder: "----",
        tipo: "text"
    }, {
        etiqueta: "Telefono:",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Edad: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Genero",
        placeholder: "----",
        tipo: "text"
    }, {
        etiqueta: "Calle y No:",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Colonia: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Municipio: ",
        placeholder: "----",
        tipo: "text"
    }, {
        etiqueta: "Ciudad:",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Estado: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "C.P: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "CURP: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "RFC: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "NSS: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "ID Empleado: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Puesto: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Sueldo: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Banco: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "No de Cuenta: ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Clabe Interbancaria : ",
        placeholder: "----",
        tipo: "text"
    },
    {
        etiqueta: "Fecha de ingreso: ",
        placeholder: "----",
        tipo: "date"
    }
]
const NuevoEmpleado = () => {

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
                    <div style={{ paddingTop: '80%' }}>
                        <h3>
                            (Nombres)
                        </h3>
                        <div>
                            ID Empleado:
                        </div>
                        <div>
                            ------
                        </div>
                        <div >
                            Telefono
                        </div>
                        <div>
                            ------
                        </div>
                    </div>
                    

                </div>
                <div style={{ width: '30px', height: '400px', float: 'left' }}>

                </div>
                <div >
                    <form className="grid-layout">
                        <FormDisplay id='id="formu"'
                            datosInput={datosInput}
                        />
                    </form>
                </div>

            </div>
        </div>



    )
}

export default NuevoEmpleado