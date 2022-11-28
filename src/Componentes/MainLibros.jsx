import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function MainLibros() {

  const URL ='https://canje-libros-back.herokuapp.com/'

  const [libro, setLibros] = useState([]);

// para pruebas... 
// const LibrosA = [{"_id":"637ace0ba4af40b5939895de","titulo":"Fìsica","autor":"Aguilar Peris","editorial":"Revertè","estado":"MB","cantidad":1},{"_id":"637c0737da04c20932d8ce40","titulo":"Los Pilares de la tierra","autor":"Ken Follett","editorial":"DEBOLSILLO","estado":"E","cantidad":1,"__v":0},{"_id":"637c07f77ae63973ea34937f","titulo":"Una columna de fuego","autor":"Ken Follett","editorial":"Penguin Random House","estado":"E","cantidad":1,"__v":0},{"_id":"637c08477ae63973ea349381","titulo":"Un mundo sin fin","autor":"Ken Follett","editorial":"Sudamericana","estado":"E","cantidad":3,"__v":0},{"_id":"637c108d7a6508b539d80f27","titulo":"Crimen y castigo","autor":"Fiodor Dostovievski","editorial":"Sudamericana","estado":"MB","cantidad":4,"__v":0},{"_id":"637d6e94e52d08dc91ec4a12","titulo":"Pepe grillo","autor":"Maria ELena Walf","editorial":"MG","estado":"B","cantidad":1,"__v":0},{"_id":"637feecdbb6165785138466e","titulo":"Biblia","autor":"JB","editorial":"Sudamericana","estado":"MB","cantidad":1,"__v":0},{"_id":"63812772e844b253a491c273","titulo":"Las Aventuras De Tom Sawyer","autor":"Twain, Mark","editorial":"Estrada","estado":"E","cantidad":10,"__v":0}]

useEffect( () => {
  axios.get(URL).then((response) => {
   setLibros(response.data.libro);
 });

}, []);
  
  return (
    <div className="container text-center m-4">

          <h3 className="m-4">Catálogo de Libros en existecia.</h3>

      <Table className="table m-4">
        <thead className="m-4">
          <tr>
            <th>ID</th> 
            <th>Título</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Estado</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
               {         
                libro.map (item => (
                      <tr key={item._id}>
                          <td>{item._id}</td>
                          <td>{item.titulo}</td>
                          <td>{item.autor}</td>
                          <td>{item.editorial}</td>
                          <td>{item.estado}</td>
                          <td>{item.cantidad}</td>
                      </tr>
                      )) 
                }
          </tbody> 
      </Table>	  
    </div>
  )
}

export default MainLibros












