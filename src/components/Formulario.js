import React,{Fragment, useState} from 'react';
const Formulario = () => {
    const [datos,setDatos] = useState({
        nombre: '',
        edad: ''
    })

    const [edad, setEdad] = useState("")

    const [ocupacion, setOcupacion] = useState("");

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log("Al " + edad +  " " + datos.nombre + " de " +datos.edad+" como "+ocupacion)
    }

    const handleOcupacion=(ocupacion)=>{
        setOcupacion(ocupacion.target.value)
    }

    const handleEdad = (edad) => {
        if(edad.target.value >= 51){
            setEdad("Mayor")
        } else if(edad.target.value >= 31 && edad.target.value <= 50){
            setEdad("Adulto")
        } else if(edad.target.value >= 13 && edad.target.value <= 30){
            setEdad("Joven")
        } else {
            setEdad("Niño")
        }
        
    }

    return ( 
        <div className="container mt-5">
            <Fragment>
                <h1>Formulario</h1>
                <form className="row" onSubmit={enviarDatos}>
                    <div className="col-md-3">
                        <input 
                        placeholder="Ingrese Nombre" 
                        className="form-control" 
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <input 
                        placeholder="Ingrese Edad" 
                        className="form-control" 
                        type="number"
                        name="edad"
                        onChange={handleEdad,handleInputChange}
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <select className="form-select" aria-label="Default select example" onChange={handleOcupacion}>
                            <option selected>Selecciona su ocupacion</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Empleado">Empleado</option>
                            <option value="Jubilado">Jubilado</option>
                        </select>
                    </div>
                    
                    <div className="col-md-3">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
            </Fragment>
            
        </div>
            
        
     );
}
 
export default Formulario;