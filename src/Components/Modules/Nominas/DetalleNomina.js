import '../../../CSS/nuevoNomina.css'
import TableDisplay from "../../TableDisplay"

import { titles, data, options } from '../../../dataDetalleNomina';

const NuevoNomina = () => {

    return (
        <div>
            <h1>Detalle Nómina</h1>
            <div style={{ marginLeft: '50px', marginRight: '50px', marginBottom:'30px' }}>

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
            <button type="button"
                style={{
                    float:'right',
                    backgroundColor: '#dae6eb',
                    border: '3px solid',
                    borderColor: '#2400ff',
                    color: '#8d8d99',
                    height: '35px',
                    width: '170px',
                    borderRadius: '6px',
                    fontSize: '20px',
                }}>Crear</button>
        </div>
    )
}

export default NuevoNomina