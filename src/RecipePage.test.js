import React from "react";
import { render } from "@testing-library/react";
import Breakfast from "./Breakfast";
import SoupSalad from "./SoupSalad";
import MainEntree from "./MainEntree";
import Vegetarian from "./Vegetarian";
import Dessert from "./Dessert";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

//Making sure state is working, if it works here is works for all
describe("<Breakfast />", () => {
    it("reading from state", () => {
        const wrapper = shallow(<Breakfast />);
        wrapper.setState({ recipes: ["test"] });
        console.log(wrapper.state("recipes"));
        expect(wrapper.state("recipes").length).toBe(1);
    });
});

//Making sure each header is rendered for the given page
test("Breakfast header", () => {
    const { getByText } = render(<Breakfast />);
    getByText("Breakfast Page!")
});
test("SoupSalad header", () => {
    const { getByText } = render(<SoupSalad />);
    getByText("Soup and Salad Page!")
});
test("MainEntree header", () => {
    const { getByText } = render(<MainEntree />);
    getByText("Main Entree Page!")
});
test("Vegetarian header", () => {
    const { getByText } = render(<Vegetarian />);
    getByText("Vegetarian Page!")
});
test("Dessert header", () => {
    const { getByText } = render(<Dessert />);
    getByText("Dessert Page!")
});