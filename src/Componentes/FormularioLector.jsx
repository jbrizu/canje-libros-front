import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const FormularioLector = () => {
    
  
    const URL = 'https://canje-libros-back.up.railway.app/crearLector';

    const [inputs, setInputs] = useState({
      nombre: "",
      apellido: "",
      correo: "",
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
        nombre: "",
        apellido: "",
        correo: ""
     })
      Swal.fire({
        title: 'Datos enviados correctamente',
        text: 'Gracias por suscribirse',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    };
    
  
    return (
      <div className="d-flex flex-column align-items-center">
        {Object.keys(inputs).map((key, index) => (
          <Form.Group className="pt-3" key={index} style={{ maxWidth: "300px" }}>
              <Form.Label id="form">
                  {key === "" ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)}
              </Form.Label>
              <Form.Control name={key} value={inputs[key]} onChange={handleChange} />
          </Form.Group>
        ))}
          <Button className="mt-3" onClick={handleClick}>Suscribirse</Button>

      </div>
      
    );
  };

export default FormularioLector;