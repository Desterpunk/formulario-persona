import Mensaje from "./Mensaje";

const Tabla = (props) => {

    let lista = []
    lista.push(props)

    return ( 
        <> 
            <h2>La tabla</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Clasificacion</th>
                    <th scope="col">Ocupacion</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {props.lista &&
                        props.lista.map((data, index)=>{
                            return(
                                <tr key={index}>
                                    <td >{data.nombre}</td>
                                    <td>{data.edad}</td>
                                    <td>{data.clasificacionEdad}</td>
                                    <td>{data.ocupacion}</td>
                                    <td> <Mensaje {...data}/></td>
                                </tr>
                            )
                        })
                        
                    }
                    
                </tbody>
                
            </table>
         </>
     );
}
 
export default Tabla;