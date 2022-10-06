
const Manager = require('../library/manager');

describe("Employee", () => {
    describe("Manager", () => {
        it("should return an office", () => {
            const man = new Manager("Dave", 1, 'me@me.com', 17);
            expect(man.name).toBe("Dave");
            expect(man.id).toBe(1);
            expect(man.email).toBe('me@me.com');
        });
        it("should return the office 17", () => {
            const man = new Manager("Dave", 1, 'me@me.com', 17);
            expect(man.getOffice()).toBe(17);
        });
        it("should return the role 'Manager'", () => {
            const man = new Manager();
            expect(man.getRole()).toBe("Manager");
        });
    });
})