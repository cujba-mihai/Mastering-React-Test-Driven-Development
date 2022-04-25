import React from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';


describe('CustomerForm', () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  })
  const form = id => container.querySelector(`form[id="${id}"]`)
  const firstNameField = () => form('customer').elements.firstName;

  const expectToBeInputFieldOfTypeText = (field) => {
    expect(field).not.toBeNull();
    expect(field.tagName).toEqual('INPUT');
    expect(field.type).toEqual('text');
  }

  const labelFor = formElement => container.querySelector(`label[for="${formElement}"]`);

  it('should render a label for the first name field', () => {
    render(<CustomerForm />);
    expect(labelFor('firstName')).not.toBeNull();
    expect(labelFor('firstName').textContent).toEqual('First name')

  });

  it('should render a form', () => {
    render(<CustomerForm />);
    expect(form('customer')).not.toBeNull();
  });

  it('should render the first name field as a text box', () => {
    render(<CustomerForm />);
    expectToBeInputFieldOfTypeText(firstNameField());
  });

  it('should include the existing value for the first name', () => {
    render(<CustomerForm firstName="Ashley" />);

    expect(firstNameField().value).toEqual('Ashley');
  });

  it('should assign an id that matches the label id to the first name field', () => {
    render(<CustomerForm />);
    expect(firstNameField().id).toEqual('firstName');
  });

});