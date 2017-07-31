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
          <Col3 numero={'18°'} texto={'Paris'} color={'#fb8e1c'} letra={'#fff'}/>
        </Row>
        <Row className="show-grid">
          <Col9 color={'#2586c4'}/>
          <ColorCol3 info={'New visitors'} datos={'1.5k'} color={'#2586c4'} />
          <ColorCol3 info={'Bounce Rate'} datos={'50%'} color={'#d273e6'} />
        </Row>
        <Row className="show-grid">
          <Col9 color={'#cb29a2'}/>
          <ColorCol3 info={'Searchs'} datos={'28%'} color={'#db321b'}/>
          <ColorCol3 info={'Traffic'} datos={'140.5 kb'} color={'#0fbe30'} />
        </Row>
      </Grid>
    );
  }
}

export default App;
