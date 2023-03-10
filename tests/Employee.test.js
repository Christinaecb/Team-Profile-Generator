const Employee = require('../lib/Employee');
const employee = new Employee('Christina', 1, 'ChristinaB@gmail.com');

describe("Employee class", () => {
    it("new Employee instance has 3 properties", () => {
        const employeeProperties = Object.keys(employee);
        expect(employeeProperties.length).toEqual(3);
    });

    describe("getName()", () => {
        it("returns Employee name", () => {
            const employeeName = employee.getName();
            expect(employeeName).toEqual('Christina');
        });
    });

    describe("getId()", () => {
        it("returns Employee ID", () => {
            const employeeId = employee.getId();
            expect(employeeId).toEqual(1);
        });
    });

    describe("getEmail()", () => {
        it("returns Employee email", () => {
            const employeeEmail = employee.getEmail();
            expect(employeeEmail).toEqual('ChristinaB@gmail.com');
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Employee'", () => {
            const role = employee.getRole();
            expect(role).toEqual('Employee');
        });
    });
});
