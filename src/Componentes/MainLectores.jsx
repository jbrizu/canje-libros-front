import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const MainLectores = () => {
  
  
  const URL = 'https://canje-libros-back.herokuapp.com/lectores'

  const [lector, setLectores] = useState([]);

  useEffect( () => {
    axios.get(URL).then((response) => {
     setLectores(response.data.lector);
   });

  }, []); 

  return (
  
      <div className="container text-center m-4">

          <h3 className="m-4">Catálogo de Libros en existecia.</h3>

          <Table className="table m-4">
          <thead className="m-4">
          <tr>
            <th>ID</th> 
            <th>Nombre</th>
            <th>Apellido</th>
            <th>email</th>
          </tr>
          </thead>
          <tbody>
              {         
                lector.map (item => (
                      <tr key={item._id}>
                          <td>{item._id}</td>
                          <td>{item.nombre}</td>
                          <td>{item.apellido}</td>
                          <td>{item.correo}</td>
                      </tr>
                      )) 
                }
          </tbody> 
          </Table>	  
        </div>
        )
}

export default MainLectores