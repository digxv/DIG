pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DIGToken is ERC20 {
    address public admin;

    constructor(uint256 initialSupply) ERC20("Digvijay", "DIG") {
        _mint(msg.sender, initialSupply);
        admin = msg.sender;
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == admin);
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
