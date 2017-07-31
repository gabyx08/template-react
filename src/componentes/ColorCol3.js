import React, { Component } from 'react';
import { Col , Jumbotron } from 'react-bootstrap';
import '../App.css';

export default class ColorCol3 extends Component {
  render() {
    return(
      <Col xs={3}>
        <Jumbotron>
          <div className='peque' style={{background : this.props.color}}>
            <p className='letra--blanca'>{this.props.info}</p>
            <p className='letra--blanca'>{this.props.datos}</p>
          </div>
          <div className='peque'></div>
        </Jumbotron>
      </Col>
    )
  }
}
