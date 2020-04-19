import React from 'react';
//import { render } from '@testing-library/react';
import Home from './Home';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.recipeName').length).toBe(0);
  });
});
