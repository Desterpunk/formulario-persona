const Tabla = (props) => {

    return ( 
        <> 
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Ocupacion</th>
                    <th scope="col">Mensaje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >{props.nombre}</td>
                        <td>{props.edad}</td>
                        <td>{props.ocupacion}</td>
                        <td>{props.mensaje}</td>
                    </tr>
                </tbody>
            </table>
         </>
     );
}
 
export default Tabla;