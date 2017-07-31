import React, { Component } from 'react';
import { Row, Col , Jumbotron } from 'react-bootstrap';
import '../App.css';

export default class Col9 extends Component {
  render(){
    return(
      <Col xs={9}>
        <Jumbotron>
          <div className='grande' style={{background : this.props.color}}> </div>
          <div className='fondo--gris'>
            <Row className="show-grid">
              <Col xs={4} className='text-center'>
                <p className='letra--blanca'>15080</p>
                <p className='letra--blanca'>Show Views</p>
              </Col>
              <Col xs={4} className='text-center'>
                <p className='letra--blanca'>12000</p>
                <p className='letra--blanca'>Likes</p>
              </Col>
              <Col xs={4} className='text-center'>
                <p className='letra--blanca'>5100</p>
                <p className='letra--blanca'>Comments</p>
              </Col>
            </Row>
          </div>
        </Jumbotron>
      </Col>
    )
  }
}
