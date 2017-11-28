import React from 'react';
import lodash from 'lodash';
import ListItem from './streetListItem.js'

import {Table} from 'react-bootstrap';

export default class List extends React.Component {

    renderItems(){

        const props = lodash.omit(this.props, 'streets');
        return lodash.map(this.props.names, (streets, i) => <ListItem key={i} {...streets} {...props}/>)
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Street Name</th>
                    <th>Air Quality</th>
                    <th>Light</th>
                    <th>Noise</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </Table>
        );
    };

}