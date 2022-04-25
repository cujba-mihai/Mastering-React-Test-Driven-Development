import React from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';
import ReactTestUtils from 'react-dom/test-utils';

describe('CustomerForm', () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });



  const form = id => container.querySelector(`form[id="${id}"]`);
  const field = name => form('customer').elements[name];
  const firstNameField = () => field('firstName');
  const labelFor = formElement =>
    container.querySelector(`label[for="${formElement}"]`);



  it('renders a form', () => {
    render(<CustomerForm />);
    expect(form('customer')).not.toBeNull();
  });

  const expectToBeInputFieldOfType = (formElement, type) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual('INPUT');
    expect(formElement.type).toEqual(type || "text");
  };

  const itRendersAsATelephoneBox = fieldName => {
    it('renders as a tel box', () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfType(field(fieldName), "tel");
    });
  }

  const itRendersAsATextBox = fieldName => {
    it('renders as a textbox', () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfType(field(fieldName, "text"));
    });
  }

  const itIncludesExistingValue = fieldName => {
    it('includes existing value', () => {
      render(<CustomerForm {...{ [fieldName]: 'Mihai' }} />);
      expect(field(fieldName).value).toEqual('Mihai');
    });
  }

  const itRendersLabel = (fieldName, text = "First name") => {
    it('renders a label', () => {
      render(<CustomerForm />);
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName).textContent).toEqual(text);
    });
  }

  const itAssignsIdMatchingLabel = fieldName => {
    it('assigns an id that matches label id', () => {
      render(<CustomerForm />);
      expect(field(fieldName).id).toEqual(fieldName);
    });
  }

  const itSubmitsExistingValue = (fieldName, value) => {
    it('saves existing value on submit', () => {
      expect.hasAssertions();
      render(<CustomerForm {...{ [fieldName]: value }} onSubmit={() => {
        expect(field(fieldName).value).toEqual(value)
      }} />);

      ReactTestUtils.Simulate.submit(form('customer'))
    })
  }

  const itSubmitsNewValue = (fieldName, value) => {
    it('submits new value', () => {
      expect.hasAssertions();
      render(<CustomerForm {...{ [fieldName]: 'existingValue' }} onSubmit={(props) => {
        expect(props[fieldName]).toEqual(value);
      }} />)

      ReactTestUtils.Simulate.change(field(fieldName), { target: { value, name: fieldName } });
      ReactTestUtils.Simulate.submit(form('customer'));

    });

  }

  describe('First name field', () => {
    itRendersAsATextBox('firstName');
    itIncludesExistingValue('firstName');
    itRendersLabel('firstName');
    itAssignsIdMatchingLabel('firstName');
    itSubmitsExistingValue('firstName', 'Ashley');
    itSubmitsNewValue('firstName', 'Boris Jhonson');
  })

  describe('last name field', () => {
    itRendersAsATextBox('lastName');
    itIncludesExistingValue('lastName');
    itRendersLabel('lastName', "Last name");
    itAssignsIdMatchingLabel('lastName');
    itSubmitsExistingValue('lastName', 'Ashley');
    itSubmitsNewValue('lastName', 'Boris Jhonson');
  });


  describe('phone number field', () => {
    itRendersAsATelephoneBox('phoneNumber');
  });

  it('has a submit button', () => {
    render(<CustomerForm />);
    const submitButton = container.querySelector('input[type="submit"]');
    expect(submitButton).not.toBeNull();
  });
});
