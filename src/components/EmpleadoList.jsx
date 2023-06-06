import EmpleadoRow from './EmpleadoRow';
import { ListGroup } from 'react-bootstrap';

const EmpleadoList = ({listaEmpleados}) => {
    return (
        <ListGroup>
            {
                listaEmpleados.map((lineaEmpleado, indiceEmpleado)=>
                <EmpleadoRow lineaEmpleado={lineaEmpleado} key={indiceEmpleado}></EmpleadoRow>)
            }
        </ListGroup>
    );
};

export default EmpleadoList;