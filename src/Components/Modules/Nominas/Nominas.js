import TableDisplay from "../../TableDisplay"
import { titles, data, options } from '../../../datafake';

const Nominas = () => {

    return (
        <div >
            <h1>Nominas</h1>
            <TableDisplay titles={titles} rawData={data} options={options}/>
        </div>
    )
}

export default Nominas