import React from "react";
import PropTypes from "prop-types";

export const ComponenteB = (props) => {


    
    return (

        <>
            <h1>Nombre:{props.Nombre}</h1>
            <h1>Apellido:{props.Apellidos}</h1>
            <h1>Email:{props.Email}</h1>
            <h1>Estado:{(props.Estado) ? "Contacto en linea" : "Contacto no disponible"}</h1>

        </>
    )
}



ComponenteB.propTypes = {
    Nombre: PropTypes.string,
    Apellidos: PropTypes.string,
    Email: PropTypes.string,
    Estado: PropTypes.bool

}