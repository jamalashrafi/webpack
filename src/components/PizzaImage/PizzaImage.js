import React from 'react';
import classes from './PizzaImage.css';
import PizzaImagee from '../../assests/pizza.jpg';

const pizzaImage = (props) => {
  return (
    <div className={classes.PizzaImage}>
      <img src={PizzaImagee} className={classes.PizzaImg} />
    </div>
  );
};

export default pizzaImage;
