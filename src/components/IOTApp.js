import React from 'react';
import Header from './layout/header'
import AddStreet from './containers/addStreet.js'
import StreetList from './containers/streetList.js'

import {Grid, Row} from 'react-bootstrap';

import {sendStreet, connected, getStreets} from "../utils/socketEvents";



export default class IOTApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            streets:[],
        };

        connected();
        getStreets((err, data)  => this.setState({
            streets: data
        }));
    }

    render() {

        return (
            <Grid>
                <Row className="show-grid">
                    <Header/>
                </Row>
                <Row className="show-grid">
                    <AddStreet
                        names = {this.state.streets}
                        createStreet={this.createStreet.bind(this)}
                    />
                </Row>
                <Row className="show-grid">
                    <StreetList
                        names = {this.state.streets}

                    />
                </Row>
            </Grid>
        );
    };

    createStreet(id, street) {

        sendStreet(id, street);

        this.state.streets.push({
            id,
            street
        });
        this.setState({ streets: this.state.streets });
    }

}
