import { render, screen } from '@testing-library/react';
import App from './App';
import {ListItems} from './components/Input';
import {Input} from './components/Input';
import { shallow, mount } from "enzyme";

// let items = ["dksl", "dkls", "idwo"]

// test("renders", () => {
//   const wrapper = shallow(<ListItems items={items}/>);
//   expect(typeof ListItems({items})).toBe("object");
// });

describe('isArray', () => {

  it("renders without crashing", () => {
    const items = "items";
    const wrapper = shallow(<Input/>);
    expect(typeof wrapper.find(ListItems).prop(items)).toBe("object");
  });

  // test("renders an header", () => {
  //   const wrapper = shallow(<App />);
  //   const welcome = <h1>Musings...</h1>;
  //   expect(wrapper.contains(welcome)).toEqual(true);
  // });
})