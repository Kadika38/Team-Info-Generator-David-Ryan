const Engineer = require("../js/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing an 'name' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Maki", 4, "mail", "github");

            expect("name" in obj).toEqual(true);
        });

        it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Maki", 4, "mail", "github");

            expect("id" in obj).toEqual(true);
        });

        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Maki", 4, "mail", "github");

            expect("email" in obj).toEqual(true);
        });

        it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
            const obj = new Engineer("Maki", 4, "mail", "github");

            expect("github" in obj).toEqual(true);
        });

        it("should set 'name' when created", () => {
            const obj = new Engineer("Maki", 4, "mail", "github");

            expect(obj.name).toEqual("Maki");
        });

        it("should set 'id' when created", () => {
            const obj = new Engineer("Maki", 4, "mail", "github");

            expect(obj.id).toEqual(4);
        });

        it("should set 'email' when created", () => {
            const obj = new Engineer("Maki", 4, "mail", "github");

            expect(obj.email).toEqual("mail");
        });

        it("should set 'github' when created", () => {
            const obj = new Engineer("Maki", 4, "mail", "github");

            expect(obj.github).toEqual("github");
        });
    });
});