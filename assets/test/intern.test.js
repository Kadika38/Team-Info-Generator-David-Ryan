const Intern = require("../js/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing an 'name' property when called with the 'new' keyword", () => {
            const obj = new Intern("Phil", 4, "mail", "ucsd");

            expect("name" in obj).toEqual(true);
        });

        it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Intern("Phil", 4, "mail", "ucsd");

            expect("id" in obj).toEqual(true);
        });

        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Intern("Phil", 4, "mail", "ucsd");

            expect("email" in obj).toEqual(true);
        });

        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const obj = new Intern("Phil", 4, "mail", "ucsd");

            expect("school" in obj).toEqual(true);
        });

        it("should set 'name' when created", () => {
            const obj = new Intern("Phil", 4, "mail", "ucsd");

            expect(obj.name).toEqual("Phil");
        });

        it("should set 'id' when created", () => {
            const obj = new Intern("Phil", 4, "mail", "ucsd");

            expect(obj.id).toEqual(4);
        });

        it("should set 'email' when created", () => {
            const obj = new Intern("Phil", 4, "mail", "ucsd");

            expect(obj.email).toEqual("mail");
        });

        it("should set 'school' when created", () => {
            const obj = new Intern("Phil", 4, "mail", "ucsd");

            expect(obj.school).toEqual("ucsd");
        });
    });
});