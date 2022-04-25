import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from "../src/AppointmentsDayView";
import { sampleAppointments } from "../src/sampleData";


describe('Appointments', () => {
  let container;
  let customer;

  beforeEach(() => {
    container = document.createElement('div');
  })

  const render = component => ReactDOM.render(component, container);

  it('should contain first name, phone number, stylist, service, notes', () => {
    customer = { firstName: 'Mihai' }
    render(<Appointment customer={customer} />)
    expect(container.querySelectorAll('tr > th')[0].textContent).toEqual('Customer')
    expect(container.querySelectorAll('tr > th')[1].textContent).toEqual('Phone number')
    expect(container.querySelectorAll('tr > th')[2].textContent).toEqual('Stylist')
    expect(container.querySelectorAll('tr > th')[3].textContent).toEqual('Service')
    expect(container.querySelectorAll('tr > th')[4].textContent).toEqual('Notes')
  });

  it('should contain customer name', () => {
    customer = { firstName: 'Mihai' }
    render(<Appointment customer={customer} />)
    expect(container.querySelectorAll('tr > td')[0].textContent).toEqual('Mihai')

  });

  it('should contain appointment time 09:00', () => {
    render(<Appointment startsAt={new Date().setHours(9, 0)} customer={customer} />);
    expect(container.querySelector('h1').textContent).toEqual("Today's appointment at 09:00");
  });

  it('should contain appointment time 12:00', () => {
    render(<Appointment startsAt={new Date().setHours(12, 0)} customer={customer} />);
    expect(container.querySelector('h1').textContent).toEqual("Today's appointment at 12:00");
  });

});