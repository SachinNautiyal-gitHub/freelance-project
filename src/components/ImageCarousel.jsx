// components/ImageCarousel.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from  './styles/ImageCarousel.module.css'; 


import img6 from '../images/img6.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item  >
        <img
         className={styles.image}
          src={img6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide Label</h3>
          <p>Some description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
         className={styles.image}
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide Label</h3>
          <p>Some description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img
          className={styles.image}
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide Label</h3>
          <p>Some description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
