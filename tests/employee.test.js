const Employee = require('../library/employee');

describe("Employee", () => {
    it("should return an ID and email", () => {
        const emp = new Employee("Bob", 1, 'me@me.com');
        expect(emp.name).toBe("Bob");
        expect(emp.id).toBe(1);
        expect(emp.email).toBe('me@me.com');
      });
})