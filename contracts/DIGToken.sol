pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DIGToken is ERC20 {
    constructor() ERC20("Digvijay", "DIG") {
        _mint(msg.sender, 10000 * 10**18);
    }
}
