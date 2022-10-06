const Engineer = require('../library/engineer');

describe("Employee", () => {
    describe("Engineer", () => {
        it("should return a github user name and the role of engineer", () => {
            const eng = new Engineer ("John", 2, 'me@me.com', "johnwick");
            expect(eng.name).toBe("John");
            expect(eng.id).toBe(2);
            expect(eng.email).toBe('me@me.com');
        });
        it("should return engineers github username", () => {
            const eng = new Engineer ("John", 2, 'me@me.com', "johnwick");
            expect(eng.getGithub()).toBe('johnwick');
        });
        it("should return engineers role", () => {
            const eng = new Engineer ();
            expect(eng.getRole()).toBe('Engineer');
        });
    });
})