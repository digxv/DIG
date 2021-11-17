const { expect } = require("chai");

describe("Token Contract", () => {
    let Token, token, owner, addr2, addrs;

    beforeEach(async () => {
        Token = await ethers.getContractFactory("DIGToken");
        [owner, addr2, ...addrs] = await ethers.getSigners();
        token = await Token.deploy(1000000);
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
            expect(balance).to.be.equal(1000000);
        })

        it("total supply", async () => {
            expect(await token.totalSupply()).to.be.equal(1000000);
        })

        it("has a name", async () => {
            expect(await token.name()).to.be.equal("Digvijay");
        })

        it("has a symbol", async () => {
            expect(await token.symbol()).to.be.equal("DIG");
        })
    })

    describe("Transfer", async () => {
        let ownerBalance, addr2Balance;

        before(async () => {
            await token.transfer(addr2.address, 100);
            ownerBalance = await token.balanceOf(owner.address);
            addr2Balance = await token.balanceOf(addr2.address);
        })
    
        it("check balances", async () => {
            expect(ownerBalance).to.be.equal(999900);
            expect(addr2Balance).to.be.equal(100);
        })
    })

    describe("Mint", async () => {
        let addr2Balance;

        before(async () => {
            await token.mint(addr2.address, 100);
            addr2Balance = await token.balanceOf(addr2.address);
        })

        it("check balances", async () => {
            expect(addr2Balance).to.be.equal(100);
        })
    })

    describe("Burn", async () => {
        let ownerBalance;

        before(async () => {
            await token.burn(100);
            ownerBalance = await token.balanceOf(owner.address);
        })

        it("check balances", async () => {
            expect(ownerBalance).to.be.equal(999900);
        })
    })
});