import React, { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (


            <div className={`notification is-${alert.type}`}>
            { alert.msg }
            </div>
        )
    )
}

export default Alert