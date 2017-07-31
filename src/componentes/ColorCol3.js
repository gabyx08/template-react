import React, { Component } from 'react';
import { Col , Jumbotron } from 'react-bootstrap';
import '../App.css';

export default class ColorCol3 extends Component {
  render() {
    return(
      <Col xs={3}>
        <Jumbotron>
          <div className='fondo--azul peque'>
            <p>New visitors</p>
            <p>1.5k</p>
          </div>
          <div className='peque'></div>
        </Jumbotron>
      </Col>
    )
  }
}
