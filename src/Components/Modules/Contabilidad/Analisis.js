import '../../../CSS/analisis.css'

const Analisis = () => {


    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <h1>Analisis financiero</h1>
            <div style={{ width: '500px' }}>
                <div id='fecha'>
                    <h5 >
                        Del: 13 de marzo del 2012
                    </h5>
                    <h5>
                        Al: 14 de marzo del 2012
                    </h5>
                </div>
            </div>
            <div id='contenido'>
                <div >
                    <table id='tabla'>
                        <tr >
                            <td rowSpan={2} id='tabla' style={{width:'80px'}}>
                                Icono
                            </td>
                            <td id='tabla'>
                                <h5>Ingresos</h5>
                            </td>

                        </tr>

                        <tr>
                            <td id='tabla'>

                            </td>


                            <td id='tabla'>
                                <h6>$305,238.20</h6>
                            </td>

                        </tr>
                        <tr>
                            <td id="tabla" >
                                Pagos de Clientes
                            </td>
                            <td id='tabla' colSpan={2} >
                                $304,214.20
                            </td>

                        </tr>
                        <tr>
                            <td id="tabla">
                                Intereses Financieros
                            </td>
                            <td id='tabla' colSpan={2}>
                                $1,024.00
                            </td>

                        </tr>
                    </table>
                </div>
                <div>
                    <table id='tabla'>
                        <tr >
                            <td rowSpan={2} id='tabla'>
                                Icono
                            </td>
                            <td id='tabla'>
                                <h5>Gastos</h5>
                            </td>

                        </tr>

                        <tr>
                            <td id='tabla'>

                            </td>
                            <td id='tabla'>
                                <h6>$272,621.19</h6>
                            </td>

                        </tr>
                        <tr>
                            <td id="tabla" >
                                Sueldos
                            </td>
                            <td id='tabla' colSpan={2} >
                                $91,137.22
                            </td>

                        </tr>
                        <tr>
                            <td id="tabla">
                                Impuestos
                            </td>
                            <td id='tabla' colSpan={2}>
                                $6,037.14
                            </td>

                        </tr>
                        <tr>
                            <td id="tabla">
                                Operativo
                            </td>
                            <td id='tabla' colSpan={2}>
                                $175,446.83
                            </td>

                        </tr>
                    </table>
                </div>
                <div >
                    <table id='tabla'>
                        <tr >
                            <td rowSpan={2} id='tabla' >
                                Icono
                            </td>
                            <td id='tabla'>
                                <h5>Utilidad</h5>
                            </td>

                        </tr>

                        <tr>

                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div id='utilidad'>
                                    
                                        $32,617.01
                                    
                                </div>
                            </td>
                        </tr>


                    </table>
                </div>
            </div>
        </div>
    )
}
export default Analisis;
