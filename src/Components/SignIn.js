import '../CSS/SignIn.css'
import InputForm from './Modules/Empleados/InputForm'
const SignIn = () => {

    return (
        <div id='principal'>
            <div >
            </div>
            <div className='contenedor'>
                <h1 style={{color:'blue'}}>Bienvenido(a) a <b style={{color:'black'}}>CUADRA</b> </h1>
                <h2 style={{color:'blue'}}><b> Ingresa aquí</b></h2>
                <div id='inputs'>
                    <label style={{fontSize:'23px'}}><b>Usuario</b></label >
                    <input />
                </div>

                <div id='inputs' >
                    <label style={{fontSize:'23px'}}><b>Contraseña</b></label >
                    <input />

                    <a href="https://www.mozilla.org/es-ES/" id='a'>Olvidé mi contraseña</a>.

                </div>
                <div style={{
                    marginTop: '50px',
                    paddingLeft: '200px',

                }}>
                    <button type="button"
                        style={{
                            backgroundColor: 'blue',
                            border: 0,
                            color: 'white',
                            height: '35px',
                            width: '170px',
                            borderRadius: '6px',
                            fontSize:'20px'
                        }}

                    >Iniciar Sesion</button>
                </div>


            </div>
        </div>
    )
}

export default SignIn