const { expect } = require("chai");

describe("Token Contract", () => {
    let Token, token, ac1, ac2, acs;

    beforeEach(async () => {
        Token = await ethers.getContractFactory("DIGToken");
        token = await Token.deploy(10000000);
        [ac1, ac2, ...acs] = await ethers.getSigners();
    });

    describe("Deployment", () => {
        it("deploys successfully", async () => {
            const address = await token.address;
            expect(address).to.be.not.null;
            expect(address).to.be.not.undefined;
            expect(address).to.be.not.undefined;
            expect(address).to.be.not.equal(0x0);
            expect(address).to.be.a("string");
            expect(acs).to.not.undefined;
            expect(acs).to.be.length.above(0);
        })
    })
});