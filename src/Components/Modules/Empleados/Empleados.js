import TableDisplay from "../../TableDisplay"
import { titles, data, options } from '../../../datafake';



const Empleados = () => {

    return (
        <div >
            <h1>Empleados</h1>
            <TableDisplay titles={titles} rawData={data} options={options}/>
        </div>
    )
}

export default Empleados