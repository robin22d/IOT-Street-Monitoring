import React, { Component } from 'react';
import IOTApp from './components/IOTApp.js';

import {connected} from "./utils/socketEvents";

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state =

        connected();
    }


    render()
    {
        return (
            <div>
                <IOTApp/>
            </div>
        );
    }
}

export default App;
