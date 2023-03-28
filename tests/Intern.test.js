const Intern = require("./lib/Intern");
const {test, expect} = require("@jest/globals");


test("Intern", function () {
const data = {
    name: "Billy",
    id: "1",
    email:"internBilly@email.com",
    school: "SMU Coding Bootcamp",
};
const intern = new Intern(data.name, data.id, data.email, data.school);
expect(intern.name).toBe(data.name);
expect(intern.id).toBe(data.id);
expect(intern.email).toBe(data.email);
expect(intern.school).toBe(data.school);
});