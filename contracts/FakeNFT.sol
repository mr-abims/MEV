// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract FakeNFT is ERC721 {
    uint256 tokkenId = 1;
    uint256 constant price = 0.001 ether;
    constructor() ERC721("FAKE", "FAKE") {

    }

    function mint() public payablle {
        require(msg.value == price, "Invalid ether amount");
        _mint(msg.sender, tokkenId);
        tokkenId +=1;
    }

}