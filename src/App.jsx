import React from 'react';
import { Link } from 'react-router';

import './App.less';


const App = React.createClass({
    render() {
        return (
            <div className="app">             
                
                    {this.props.children}
                
            </div>
        );
    }
});

export default App;