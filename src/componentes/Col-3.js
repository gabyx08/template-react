import React, {Component} from 'react';
import { Col, Jumbotron} from 'react-bootstrap';

export default class Col3 extends Component {
  render(){
    return(
      <Col xs={3}>
        <Jumbotron className='tarjeta' style={{background : this.props.color , color : this.props.letra}}>
          <h2>{this.props.numero}</h2>
          <p>{this.props.texto}</p>
        </Jumbotron>
      </Col>
    )
  }
}
