import '../../../CSS/analisis.css'
import Icon from "awesome-react-icons";


const Analisis = () => {


    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <h1 style={{paddingBottom:'30px'}}>Analisis financiero</h1>
            <div style={{ width: '500px', paddingBottom:'40px' }}>
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
                <div id='separador' style={{ borderRight: 'solid 2px black'}}>
                    <table id='tabla'>
                        <tr >
                            <td rowSpan={2} style={{ width: '150px' }}>
                                <div id='icono-ingreso' >

                                </div>
                            </td>
                            <td style={{ textAlign: 'left' }}>
                                <h5>Ingresos</h5>
                            </td>
                        </tr>

                        <tr>
                            <td style={{ textAlign: 'right' }}>
                                <h6>$305,238.20</h6>
                            </td>
                        </tr>

                        <tr>
                            <td >
                                <div style={{ width: '100%', height: '30px' }}>

                                </div>
                            </td>
                            <td ><div style={{ width: '100%', height: '30px' }}>

                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                Pagos de Clientes
                            </td>
                            <td style={{ textAlign: 'right' }}>
                                $304,214.20
                            </td>

                        </tr>
                        <tr>
                            <td >
                                Intereses Financieros
                            </td>
                            <td style={{ textAlign: 'right' }}>
                                $1,024.00
                            </td>

                        </tr>
                    </table>
                </div>
                <div id='separador' style={{ borderRight: 'solid 2px black'}}>
                    <table id='tabla'>
                        <tr >
                            <td rowSpan={2} style={{ width: '150px' }}>
                                <div id='icono-gasto' >

                                </div>
                            </td>
                            <td style={{ textAlign: 'left' }}>
                                <h5>Gastos</h5>
                            </td>

                        </tr>

                        <tr>
                            <td >

                            </td>
                            <td style={{ textAlign: 'right' }}>
                                <h6>$272,621.19</h6>
                            </td>

                        </tr>
                        <tr>
                            <td >
                                <div style={{ width: '100%', height: '30px' }}>

                                </div>
                            </td>
                            <td ><div style={{ width: '100%', height: '30px' }}>

                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td  >
                                Sueldos
                            </td>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                $91,137.22
                            </td>

                        </tr>
                        <tr>
                            <td >
                                Impuestos
                            </td>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                $6,037.14
                            </td>

                        </tr>
                        <tr>
                            <td >
                                Operativo
                            </td>
                            <td colSpan={2} style={{ textAlign: 'right' }}>
                                $175,446.83
                            </td>

                        </tr>
                    </table>
                </div>
                <div id='separador'>
                    <table id='tabla'>
                        <tr >
                            <td rowSpan={2}>
                                <div id='icono-utilidad' >

                                </div>
                            </td>
                            <td style={{ textAlign: 'left' }}>
                                <h5>Utilidad</h5>
                            </td>

                        </tr>

                        <tr>
                            <td >
                                <div style={{ width: '100%', height: '30px' }}>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{paddingTop:'40px'}}>
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
