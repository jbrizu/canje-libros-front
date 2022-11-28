import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () => {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img className="d-block w-100" src="./img/img1.jfif" alt="Libros"/>
        <Carousel.Caption>
          <h4>Libros</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./img/img2.jfif" alt="Lectores"/>
        <Carousel.Caption>
          <h4>Lectores</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./img/img3.jfif" alt="Canjear" />
        <Carousel.Caption>
          <h4>Canjear</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;