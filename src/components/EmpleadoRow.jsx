import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';
import { ListGroup } from 'react-bootstrap';

const EmpleadoRow = ({lineaEmpleado}) => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            <div className="col-2 mx-3">
                <EmpleadoAvatar empleadoAvatar={lineaEmpleado}></EmpleadoAvatar>
            </div>
            <div className="col-10 mx-2">
                <p className='mb-0'>{lineaEmpleado.fullName}</p>
                <p className='text-secondary'>{lineaEmpleado.title} <span className='text-light bg-primary rounded p-1'>{lineaEmpleado.department}</span></p>  
            </div>
        </ListGroup.Item>
    );
};

export default EmpleadoRow;