import React from 'react';
import { Link } from 'react-router';




const App = React.createClass({
    render() {
        return (
            <div className="app">
               app
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default App;