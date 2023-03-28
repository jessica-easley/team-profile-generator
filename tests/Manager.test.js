const Manager = require("./lib/Manager");
const {test, expect} = require("@jest/globals");


test("Manager", function () {
const data = {
    name: "Jessica",
    id: "1",
    email:"jess@gmail.com",
    officeNumber: 6,
};
const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
expect(manager.name).toBe(data.name);
expect(manager.id).toBe(data.id);
expect(manager.email).toBe(data.email);
expect(manager.officeNumber).toBe(data.officeNumber);
});