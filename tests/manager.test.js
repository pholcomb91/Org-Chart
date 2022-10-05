
const Manager = require('../library/manager');

describe("Employee", () => {
    describe("Manager", () => {
        it("should return an office", () => {
            const man = new Manager("Dave", 1, 'me@me.com', 17);
            expect(man.name).toBe("Dave");
            expect(man.id).toBe(1);
            expect(man.email).toBe('me@me.com');
            expect(man.office).toBe(17);
      });
        it("should return the role 'Manager'", () => {
            expect(getRole()).toBe("Manager");
        });
    });
})