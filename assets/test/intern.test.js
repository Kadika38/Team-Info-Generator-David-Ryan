const Intern = require("../intern");

jest.mock("../setID");

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
            setID.mockReturnValue(66);
            const obj = new Intern("mail", "ucsd");

            expect(obj.id).toEqual(66);
        });

        it("should set 'email' when created", () => {

        });

        it("should set 'school' when created", () => {

        });
    });
});