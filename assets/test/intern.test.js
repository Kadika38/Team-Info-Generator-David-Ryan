const Intern = require("../intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Intern("mail", "ucsd");

            expect("id" in obj).toEqual(true);
        });

        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Intern("mail", "ucsd");

            expect("email" in obj).toEqual(true);
        });

        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const obj = new Intern("mail", "ucsd");

            expect("school" in obj).toEqual(true);
        });

        it("should set 'id' when created", () => {
            const obj = new Intern("mail", "ucsd");

            expect()
        });

        it("should set 'email' when created", () => {

        });

        it("should set 'school' when created", () => {

        });
    });
});