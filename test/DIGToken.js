const { expect } = require("chai");

describe("Token Contract", () => {
    let Token, token, owner, addr2, addrs;

    beforeEach(async () => {
        Token = await ethers.getContractFactory("DIGToken");
        [owner, addr2, ...addrs] = await ethers.getSigners();
        token = await Token.deploy();
    });

    describe("Deployment", () => {
        it("deploys successfully", async () => {
            const address = await token.address;
            expect(address).to.be.not.null;
            expect(address).to.be.not.undefined;
            expect(address).to.be.not.undefined;
            expect(address).to.be.not.equal(0x0);
            expect(address).to.be.a("string");
        })

        it("admin address", async () => {
            const admin = await token.admin();
            expect(admin).to.be.equal(owner.address);
        })

        it("admin balance", async () => {
            const balance = await token.balanceOf(owner.address);
            expect(balance).to.be.equal(10000000);
        })

        it("total supply", async () => {
            expect(await token.totalSupply()).to.be.equal(10000000);
        })

        it("has a name", async () => {
            expect(await token.name()).to.be.equal("Digvijay");
        })

        it("has a symbol", async () => {
            expect(await token.symbol()).to.be.equal("DIG");
        })
    })
});