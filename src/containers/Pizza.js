import React, { Component } from 'react';
import PizzaImage from '../components/PizzaImage/PizzaImage.js';

export class Pizza extends Component {
  render() {
    return (
      <div>
        <h1>Pizza Image</h1>
        <PizzaImage />
      </div>
    );
  }
}

export default Pizza;
