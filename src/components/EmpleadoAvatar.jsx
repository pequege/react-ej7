import React from 'react';

const EmpleadoAvatar = ({empleadoAvatar}) => {
    return (
        <>
            <img src={empleadoAvatar.pic} alt="" />
            <i class="bi bi-person-circle display-3"></i>
        </>
    );
};

export default EmpleadoAvatar;