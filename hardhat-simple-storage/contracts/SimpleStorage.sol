// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// contract NewStorage  {
//     // boolean, uint, int, address, bytes
//     bool hasFavoriteNumber = true;
//     uint favoriteNumber = 123;
//     string favoriteNumberInText = "five";
//     address myAddress = 0x53D3469E661570cdDE083fC23eD605e59FA4262A;
//     bytes32 favoriteBytes = "cat";
// }

contract SimpleStorage {
    uint256 public favoriteNumber;

    // People public person = People({favoriteNumber: 2, name: 'Chuck Joshua'});

    mapping(string => uint256) public nameToFavoriteNumber;
    mapping(uint => string) public favoriteNumberToName;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public val;

    //This cost gas
    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    // Does not cost gas. It is commonly used in view, pure
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        // People memory item = People({ favoriteNumber: _favoriteNumber, name: _name})
        // People memory item = People(_favoriteNumber, _name);
        // val.push(People(_favoriteNumber, _name));
        val.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
        favoriteNumberToName[_favoriteNumber] = _name;
    }
}

// 0xd9145CCE52D386f254917e481eB44e9943F39138