/**
 * Created by john on 12/11/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/IOTApp';

it('Component renders without crashing', () => {
    shallow(<App />);
});

it('Starting state is correct', () => {
    const app = shallow(<App/>);
    expect(app.state('streets')).toEqual( [{
        id: '1',
        street: 'Red street',
        airQuality: '6',
        airQualityRange: false,
        light: '750',
        lightRange: false,
        noise: '30',
        noiseRange: false
    },
        {
            id: '2',
            street: 'Blue street',
            airQuality: '6',
            airQualityRange: false,
            light: '750',
            lightRange: false,
            noise: '30',
            noiseRange: false
        }
    ]);
});

it('Starting state is correct length', () => {
    const app = shallow(<App/>);
    expect(app.find('List')).toHaveLength(1);
});

it('State can be changed', () => {
    const app = shallow(<App/>);
    app.setState( [{
        id: '1',
        street: 'Green street',
        airQuality: '6',
        airQualityRange: false,
        light: '750',
        lightRange: false,
        noise: '30',
        noiseRange: false
    },
        {
            id: '2',
            street: 'Blue street',
            airQuality: '6',
            airQualityRange: false,
            light: '750',
            lightRange: false,
            noise: '30',
            noiseRange: false
        }
    ]);
    expect(app.state('names')).toEqual([{
        id: '1',
        street: 'Green street',
        airQuality: '6',
        airQualityRange: false,
        light: '750',
        lightRange: false,
        noise: '30',
        noiseRange: false
    },
        {
            id: '2',
            street: 'Blue street',
            airQuality: '6',
            airQualityRange: false,
            light: '750',
            lightRange: false,
            noise: '30',
            noiseRange: false
        }
    ]);
});