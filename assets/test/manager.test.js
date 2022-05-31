const Manager = require("../manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing an 'name' property when called with the 'new' keyword", () => {
            const obj = new Manager("Aurora", 4, "mail", 12);

            expect("name" in obj).toEqual(true);
        });

        it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Manager("Aurora", 4, "mail", 12);

            expect("id" in obj).toEqual(true);
        });

        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Manager("Aurora", 4, "mail", 12);

            expect("email" in obj).toEqual(true);
        });

        it("should return an object containing a 'office' property when called with the 'new' keyword", () => {
            const obj = new Manager("Aurora", 4, "mail", 12);

            expect("office" in obj).toEqual(true);
        });

        it("should set 'name' when created", () => {
            const obj = new Manager("Aurora", 4, "mail", 12);

            expect(obj.name).toEqual("Aurora");
        });

        it("should set 'id' when created", () => {
            const obj = new Manager("Aurora", 4, "mail", 12);

            expect(obj.id).toEqual(4);
        });

        it("should set 'email' when created", () => {
            const obj = new Manager("Aurora", 4, "mail", 12);

            expect(obj.email).toEqual("mail");
        });

        it("should set 'office' when created", () => {
            const obj = new Manager("Aurora", 4, "mail", 12);

            expect(obj.office).toEqual(12);
        });
    });
});