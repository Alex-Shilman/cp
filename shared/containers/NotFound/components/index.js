import React, {
    Component
} from 'react';


class NotFound extends Component {
    render(){
        return(
          <div
                className="at-NotFound"
                title="404 - Page not found">
                <p>The page you are looking for cannot be found!</p>
          </div>
        );
    }
}

module.exports = NotFound;