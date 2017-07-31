import React, { Component } from 'react';
import { Row, Col , Jumbotron } from 'react-bootstrap';
import '../App.css';

export default class Col9 extends Component {
  render(){
    return(
      <Col xs={9}>
        <Jumbotron>
          <div className='fondo--azul grande'> </div>
          <div>
            <Row className="show-grid">
              <Col xs={4}>
                <p>15080</p>
                <p>Show Views</p>
              </Col>
              <Col xs={4}>
                <p>12000</p>
                <p>Likes</p>
              </Col>
              <Col xs={4}>
                <p>5100</p>
                <p>Comments</p>
              </Col>
            </Row>
          </div>
        </Jumbotron>
      </Col>
    )
  }
}
