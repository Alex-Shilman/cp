import React, { Component } from 'react';
import Container from '../../../components/common/Container';

class NotFound extends Component {
    render(){
        return(
          <Container
              className="cp-NotFound"
              title="404 - Page not found">
              <p>The page you are looking for cannot be found!</p>
          </Container>
        );
    }
}

module.exports = NotFound;