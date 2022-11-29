import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import Swal from "sweetalert2";


const FormularioLibro = () => {
    
  
    const URL = 'https://canje-libros-back.up.railway.app/crearLibro';

    const [inputs, setInputs] = useState({
      titulo: "",
      autor: "",
      editorial: "",
      estado:"",
      cantidad:"",
    });
  
    const handleChange = (e) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      })
    };
  
    const handleClick = async () => {
      await axios.post(URL, inputs)
      setInputs({
            titulo: "",
            autor: "",
            editorial: "",
            estado:"",
            cantidad:"",
      })
      Swal.fire(
        '¡Muchas Gracias!',
         '¡El libro ha sido catalogado con éxito!',
         'success'      
     )
    };

    
    return (
      <div className="d-flex flex-column align-items-center">
          {Object.keys(inputs).map((key, index) => (
            <Form.Group className="pt-3" key={index} style={{ maxWidth: "200px" }}>
                <Form.Label id="form">
                    {key === "dni" ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)}
                </Form.Label>
                <Form.Control
                    name={key}
                    value={inputs[key]}
                    onChange={handleChange}
              />
            </Form.Group>
          ))}
            <Button className="mt-3" onClick={handleClick}>Catalogar</Button>
      </div>
    );
  };

export default FormularioLibro;