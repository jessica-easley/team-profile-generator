const Engineer = require("./lib/Engineer");
const {test, expect} = require("@jest/globals");


test("Engineer", function () {
const data = {
    name: "Sarah",
    id: "1",
    email:"SarahCodingQueen@email.com",
    github: "sarah-thayer",
};
const engineer = new Engineer(data.name, data.id, data.email, data.github);
expect(engineer.name).toBe(data.name);
expect(engineer.id).toBe(data.id);
expect(engineer.email).toBe(data.email);
expect(engineer.github).toBe(data.github);
});