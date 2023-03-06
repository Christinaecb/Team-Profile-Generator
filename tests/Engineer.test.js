const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Christina', 3, 'ChristinaB@gmail.com', 'Christinaecb');

describe("Engineer class", () => {
    it("new Engineer instance has 4 properties", () => {
        const engineerProperties = Object.keys(engineer);
        expect(engineerProperties.length).toEqual(4);
    });

    describe("getName()", () => {
        it("returns Engineer name", () => {
            const engineerName = engineer.getName();
            expect(engineerName).toEqual('Christina');
        });
    });

    describe("getId()", () => {
        it("returns Engineer ID", () => {
            const engineerId = engineer.getId();
            expect(engineerId).toEqual(3);
        });
    });

    describe("getEmail()", () => {
        it("returns Engineer email", () => {
            const engineerEmail = engineer.getEmail();
            expect(engineerEmail).toEqual('ChristinaB@gmail.com');
        });
    });

    describe("getGithub()", () => {
        it("returns Engineer GitHub username", () => {
            const engineerGithub = engineer.getGithub();
            expect(engineerGithub).toEqual('Christinaecb');
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Engineer'", () => {
            const engineerRole = engineer.getRole();
            expect(engineerRole).toEqual('Engineer');
        });
    });
});