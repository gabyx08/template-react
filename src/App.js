import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Col3 from './componentes/Col-3.js';
import Col9 from './componentes/Col-9.js';
import ColorCol3 from './componentes/ColorCol3.js';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col3 />
          <Col3 />
          <Col3 />
          <Col3 />
        </Row>
        <Row className="show-grid">
          <Col9 />
          <ColorCol3 />
          <ColorCol3 />
        </Row>
        <Row className="show-grid">
          <Col9 />
          <ColorCol3 />
          <ColorCol3 />
        </Row>
      </Grid>
    );
  }
}

export default App;
