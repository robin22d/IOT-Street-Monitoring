
import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

import ListItems from '../components/containers/streetListItem';

it('Component renders without crashing', () => {
    shallow(<ListItems />);
});

it('Starting state is correct', () => {
    const app = shallow(<ListItems/>);
    expect(app.state('badAir')).toEqual('false');
});
