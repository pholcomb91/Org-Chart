const Intern = require('../library/intern');

describe("Employee", () => {
    describe("Intern", () => {
        it("should return a github user name and the role of intern", () => {
            const int = new Intern ("John", 2, 'me@me.com', "UofA");
            expect(int.name).toBe("John");
            expect(int.id).toBe(2);
            expect(int.email).toBe('me@me.com');
            expect(int.school).toBe('UofA');
        });
        it("should return the role of 'intern'", () => {
            const int = new Intern ("John", 2, 'me@me.com', "UofA")
            expect(int.getRole()).toBe("Intern");
        });
        it("should return school UofA", () => {
            const int = new Intern ("John", 2, 'me@me.com', "UofA")
            expect(int.getSchool()).toBe("UofA");
        });
    });
})