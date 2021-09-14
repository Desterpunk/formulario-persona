import React,{Fragment, useState} from 'react';
import Tabla from '../components/Tabla';

const Formulario = () => {
    const [usuarios,setUsuarios] = useState([])


    const handleSubmitData=(event)=>{
        event.preventDefault();
        let usuario = {
            nombre: event.target.nombre.value,
            edad: event.target.edad.value,
            clasificacionEdad : handleClasificacionEdad(event.target.edad.value),
            ocupacion : event.target.ocupacion.value,
            mensaje: null
        }
        usuario.mensaje = handleMessage(usuario.nombre, usuario.edad, 
            usuario.ocupacion, usuario.clasificacionEdad);
        
        setUsuarios((usuarios) => [...usuarios, usuario])
    }

    const handleMessage=(nombre, edad, ocupacion, clasificacionEdad)=>{
        if(usuarios){
            let mensaje = `Al ${clasificacionEdad} ${nombre} de 
            ${edad} años de edad le recomendamos tener presente el compromiso,
            el esfuerzo y el respeto como principales volores para obtener un buen 
            resultado como ${ocupacion}.`;

            return mensaje;
        }
        
    }


    const handleClasificacionEdad = (edad) => {
        if(edad >= 51){
            return "Mayor";
        } else if(edad >= 31 && edad <= 50){
            return "Adulto";
        } else if(edad >= 13 && edad <= 30){
            return "Joven";
        } else {
            return "Niño";
        }
    }

    return ( 
        <div className="container mt-5">
            <Fragment>
                <h1>Formulario</h1>
                <form className="row" onSubmit={(event)=> handleSubmitData(event)}>
                    <div className="col-md-3  m-1">
                        <input 
                        placeholder="Ingrese Nombre" 
                        className="form-control" 
                        type="text"
                        name="nombre"
                        required
                       
                        ></input>
                    </div>
                    <div className="col-md-3  m-1">
                        <input 
                        placeholder="Ingrese Edad" 
                        className="form-control" 
                        type="number"
                        name="edad"
                        required
                        
                        ></input>
                    </div>
                    <div className="col-md-3  m-1">
                        <select className="form-select" name="ocupacion"
                        aria-label="Default select example" 
                        required
                        >
                            <option defaultValue>Selecciona su ocupacion</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Empleado">Empleado</option>
                            <option value="Jubilado">Jubilado</option>
                        </select>
                    </div>
                    
                    <div className="col-md-3">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
                <div className="m-4">
                    <Tabla lista={usuarios}/>
                </div>
            </Fragment>
        </div>
            
        
     );
}
 
export default Formulario;