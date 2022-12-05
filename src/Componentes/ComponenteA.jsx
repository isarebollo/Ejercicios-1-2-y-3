import React from "react";
import { ComponenteB } from "./ComponenteB.jsx";
import { Contacto } from "./Contacto.class.js";

export const ComponenteA = () => {

    
    let contact = new Contacto("pepito", "pepe", "pepe@prueba.es", true)

    return (

        <>
            <div>
                <ComponenteB Nombre={contact.nombre} Apellidos={contact.apellido} Email={contact.email} Estado={contact.estado}></ComponenteB>

            </div>
        </>
    )


}
