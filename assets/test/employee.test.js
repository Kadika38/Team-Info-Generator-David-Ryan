const Employee = require("../js/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing an 'name' property when called with the 'new' keyword", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect("name" in obj).toEqual(true);
        });

        it("should return an object containing an 'id' property when called with the 'new' keyword", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect("id" in obj).toEqual(true);
        });

        it("should return an object containing an 'email' property when called with the 'new' keyword", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect("email" in obj).toEqual(true);
        });

        it("should set 'name' when created", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect(obj.name).toEqual("Mikasa");
        });

        it("should set 'id' when created", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect(obj.id).toEqual(7);
        });

        it("should set 'email' when created", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect(obj.email).toEqual("mail");
        });
    })

    describe("getName", () => {
        it("should return the employee's name when called", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect(obj.getName()).toEqual("Mikasa");
        });
    });

    describe("getId", () => {
        it("should return the employee's id when called", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect(obj.getId()).toEqual(7);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email when called", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect(obj.getEmail()).toEqual("mail");
        });
    });

    describe("getRole", () => {
        it("should return 'Employee' when called", () => {
            const obj = new Employee("Mikasa", 7, "mail");

            expect(obj.getRole()).toEqual("Employee");
        });
    });
})