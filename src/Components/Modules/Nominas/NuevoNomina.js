import '../../../CSS/nuevoNomina.css'
import TableDisplay from "../../TableDisplay"

import { titles, data, options } from '../../../dataNomina';

const NuevoNomina = () => {

    return (
        <div>
            <h1>Crear Nómina</h1>
            <div style={{ marginLeft: '50px', marginRight: '50px' }}>

                <div id="contenedorPrincipal">
                    <div id="informacion">

                        <div id="informacionEspecifica">
                            <div id="titulo">
                                Semana
                            </div>
                            <div id="info">
                                8
                            </div>
                        </div>
                        <div id="informacionEspecifica">
                            <div id="titulo">
                                De la fecha:
                            </div>
                            <div id="info">
                                7 de marzo de 2022
                            </div>
                        </div>
                        <div id="informacionEspecifica">
                            <div id="titulo">
                                A la fecha:
                            </div>
                            <div id="info">
                                13 de marzo de 2022
                            </div>
                        </div>
                    </div>

                </div>
                <div >
                    <TableDisplay titles={titles} rawData={data} />
                </div>
            </div>
        </div>
    )
}

export default NuevoNomina