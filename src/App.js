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
          <Col3 numero={20} texto={'New follower added this month'}/>
          <Col3 numero={'$ 1250'} texto={'Average Monthly Income'}/>
          <Col3 numero={'$ 13865'} texto={'Yearly Income Goal'}/>
          <Col3 numero={'18°'} texto={'Paris'}/>
        </Row>
        <Row className="show-grid">
          <Col9 />
          <ColorCol3 info={'New visitors'} datos={'1.5k'} />
          <ColorCol3 info={'Bounce Rate'} datos={'50%'} />
        </Row>
        <Row className="show-grid">
          <Col9 /> 
          <ColorCol3 info={'Searchs'} datos={'28%'} />
          <ColorCol3 info={'Traffic'} datos={'140.5 kb'} />
        </Row>
      </Grid>
    );
  }
}

export default App;
