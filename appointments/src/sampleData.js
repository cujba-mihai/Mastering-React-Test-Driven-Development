import { faker } from "@faker-js/faker";


const today = new Date();

const at = hours => today.setHours(hours, 0);

export const sampleAppointments = [
  { startsAt: at(9), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } },
  { startsAt: at(10), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } },
  { startsAt: at(11), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } },
  { startsAt: at(12), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } },
  { startsAt: at(13), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } },
  { startsAt: at(14), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } },
  { startsAt: at(15), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } },
  { startsAt: at(16), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } },
  { startsAt: at(17), customer: { firstName: faker.name.firstName(), phoneNumber: faker.phone.phoneNumber(), stylist: faker.name.firstName(), service: faker.commerce.productName(), notes: faker.commerce.productDescription() } }
];
