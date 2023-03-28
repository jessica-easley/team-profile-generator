const Engineer = require("./lib/Employee");
const {test, expect} = require("@jest/globals");
const Employee = require("../lib/Employee");


test("Employee", function () {
const data = {
    name: "Jessica",
    id: "1",
    email:"jess@gmail.com",
};
const employee = new Employee(data.name, data.id, data.email);
expect(employee.name).toBe(data.name);
expect(employee.id).toBe(data.id);
expect(employee.email).toBe(data.email);
});