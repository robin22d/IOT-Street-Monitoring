import React from 'react';

import {Table, Row, Col, Button} from 'react-bootstrap';

export default class ItemList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            badAir: false,
            badLight: false,
            badNoise: false
        };
    }


    render() {

        const { street, airQuality, airQualityRange, light, lightRange, noise, noiseRange } = this.props;

        const airStyle = {
            backgroundColor: airQualityRange ? 'green' : 'red',
            cursor: 'pointer'
        };

        const lightStyle = {
            backgroundColor: lightRange ? 'green' : 'red',
            cursor: 'pointer'
        };

        const noiseStyle = {
            backgroundColor: noiseRange ? 'green' : 'red',
            cursor: 'pointer'
        };


        return (

            <tr>
                <td>{street}</td>
                <td style={airStyle}>{airQuality}</td>
                <td style={lightStyle}>{light}</td>
                <td style={noiseStyle}>{noise}</td>
            </tr>

        );
    };
}
