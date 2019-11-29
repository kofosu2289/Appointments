import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../src/Appointment';
// The describe function defines a test suite(a set of tests with a given name).
// The first argument is the name(or description) of the unit to be tested.
// The second argument is a function that contains the test definition(s).
describe("Appointment", () => {
  let container;
  let customer;
  const render = component => ReactDOM.render(component, container);
  beforeEach(() => {
    container = document.createElement('div');
  });

  // The it function defines a single test.The first argument
  // is the description of the test.
  it('renders the customer first name', () => {
    customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('Jordan');
  });
});