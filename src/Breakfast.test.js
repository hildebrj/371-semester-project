import React from 'react';
//import { render } from '@testing-library/react';
import Breakfast from './Breakfast';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Breakfast />', () => {
    it('reading from state', () => {
        const wrapper = shallow(<Breakfast />);
        wrapper.setState({recipes: ["test"]});
        console.log(wrapper.state('recipes'));
        expect(wrapper.state('recipes').length).toBe(1);
    });

});
