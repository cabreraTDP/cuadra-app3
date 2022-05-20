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
                <div id='separador'>
                    <div>
                        <h5>Ingresos</h5>
                    </div>
                    <div>
                        <div>
                            pago de clientes $304,214.20
                        </div>
                        <div>
                            Intereses Financieros $1,024.00
                        </div>

                    </div>
                </div>
                <div id='separador'>
                    <div>
                        <h5>Gastos</h5>
                    </div>
                    <div>
                        <div>
                            Sueldos $91,137.22
                        </div>
                        <div>
                            Impuestos  $,037.14
                        </div>
                        <div>
                            Operativos  $175,446.83
                        </div>

                    </div>
                </div>
                <div id='separador'>
                    <div>
                        <h5>Utilidad</h5>
                    </div>
                    <div id='utilidad'>
                        <div>
                            $000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Analisis;
