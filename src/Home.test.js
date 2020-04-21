import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//Check all fields
describe('<Home />', () => {
  it('initial form fields are empty', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.state('recipeName').length).toBe(0);
    expect(wrapper.state('recipeDescription').length).toBe(0);
    expect(wrapper.state('recipeServings').length).toBe(1);
    expect(wrapper.state('recipePrepTime').length).toBe(2);
    expect(wrapper.state('recipeCookTime').length).toBe(2);
    expect(wrapper.state('recipeIngNum1')).toBe(1);
    expect(wrapper.state('ingredientMeasure1').length).toBe(0);
    expect(wrapper.state('recipeIngredient1').length).toBe(0);
    expect(wrapper.state('recipeDirections').length).toBe(0);
    expect(wrapper.state('recipeCategory')).toBe('breakfast');
    expect(wrapper.state('recipeNumIngredients')).toBe(1);
  });

  it('fill out fields', () => {
    const component = mount(<Home />);
    component.setState({
      recipeName: "",
      recipeDescription: "",
      recipeServings: "1",
      recipePrepTime: "10",
      recipeCookTime: "10",
      recipeIngNum1: 1,
      ingredientMeasure1: "",
      recipeIngredient1: "",
      recipeDirections: "",
      recipeCategory: "breakfast",
      recipeNumIngredients: 1
    });
  });
});

//Test that the header is rendered when the page is
test("Home header", () => {
  const { getByText } = render(<Home />);
  getByText("Welcome to the Community Cookbook!")
});