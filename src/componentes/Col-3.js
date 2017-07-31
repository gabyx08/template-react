import React, {Component} from 'react';
import { Col, Jumbotron} from 'react-bootstrap';

export default class Col3 extends Component {
  render(){
    return(
      <Col xs={3}>
        <Jumbotron>
          <h1>20</h1>
          <p>New follower added this month</p>
        </Jumbotron>
      </Col>
    )
  }
}
