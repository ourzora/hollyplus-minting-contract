/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MintableArtistCollection } from "./MintableArtistCollection";

export class MintableArtistCollectionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<MintableArtistCollection> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<MintableArtistCollection>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): MintableArtistCollection {
    return super.attach(address) as MintableArtistCollection;
  }
  connect(signer: Signer): MintableArtistCollectionFactory {
    return super.connect(signer) as MintableArtistCollectionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableArtistCollection {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MintableArtistCollection;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "URIBaseUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bps",
        type: "uint256",
      },
    ],
    name: "UpdatedRoyalty",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getIPFSCIDs",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getRoyalties",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "value",
            type: "uint96",
          },
        ],
        internalType: "struct LibPart.Part[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getSubmitterPayoutInformation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "metadataCID",
        type: "string",
      },
      {
        internalType: "string",
        name: "contentCID",
        type: "string",
      },
      {
        internalType: "address",
        name: "submitterAddress",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "setIPFSBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "royaltyReceiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyBPS",
        type: "uint256",
      },
    ],
    name: "setRoyaltyInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a4f38038062002a4f833981016040819052620000349162000306565b8151829082906200004d906001906020850190620001a9565b50805162000063906002906020840190620001a9565b505060408051808201909152600780825266697066733a2f2f60c81b6020909201918252620000979250600e9190620001a9565b50620000af600d620000f060201b620010f81760201c565b620000bc600033620000f9565b620000e87f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000f9565b5050620003c3565b80546001019055565b62000105828262000109565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000105576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001653390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b828054620001b79062000370565b90600052602060002090601f016020900481019282620001db576000855562000226565b82601f10620001f657805160ff191683800117855562000226565b8280016001018555821562000226579182015b828111156200022657825182559160200191906001019062000209565b506200023492915062000238565b5090565b5b8082111562000234576000815560010162000239565b600082601f8301126200026157600080fd5b81516001600160401b03808211156200027e576200027e620003ad565b604051601f8301601f19908116603f01168101908282118183101715620002a957620002a9620003ad565b81604052838152602092508683858801011115620002c657600080fd5b600091505b83821015620002ea5785820183015181830184015290820190620002cb565b83821115620002fc5760008385830101525b9695505050505050565b600080604083850312156200031a57600080fd5b82516001600160401b03808211156200033257600080fd5b62000340868387016200024f565b935060208501519150808211156200035757600080fd5b5062000366858286016200024f565b9150509250929050565b600181811c908216806200038557607f821691505b60208210811415620003a757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61267c80620003d36000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80636352211e1161010f578063ba3737cc116100a2578063d539139311610071578063d53913931461044f578063d547741f14610476578063e2e784d514610489578063e985e9c51461049c57600080fd5b8063ba3737cc146103f6578063bb3bafd614610409578063bf1696ce14610429578063c87b56dd1461043c57600080fd5b80639d46de94116100de5780639d46de94146103b5578063a217fddf146103c8578063a22cb465146103d0578063b88d4fde146103e357600080fd5b80636352211e1461037457806370a082311461038757806391d148541461039a57806395d89b41146103ad57600080fd5b80632a55205a1161018757806342842e0e1161015657806342842e0e1461031a57806342966c681461032d5780634b8396f3146103405780634f6ccce71461036157600080fd5b80632a55205a146102af5780632f2ff15d146102e15780632f745c59146102f457806336568abe1461030757600080fd5b8063095ea7b3116101c3578063095ea7b31461025257806318160ddd1461026757806323b872dd14610279578063248a9ca31461028c57600080fd5b806301ffc9a7146101ea57806306fdde0314610212578063081812fc14610227575b600080fd5b6101fd6101f8366004612155565b6104d8565b60405190151581526020015b60405180910390f35b61021a6104e9565b60405161020991906123d9565b61023a610235366004612119565b61057b565b6040516001600160a01b039091168152602001610209565b6102656102603660046120ef565b610615565b005b6009545b604051908152602001610209565b610265610287366004611f76565b61072b565b61026b61029a366004612119565b60009081526020819052604090206001015490565b6102c26102bd3660046121c4565b61075d565b604080516001600160a01b039093168352602083019190915201610209565b6102656102ef366004612132565b61079e565b61026b6103023660046120ef565b6107c4565b610265610315366004612132565b61085a565b610265610328366004611f76565b6108d8565b61026561033b366004612119565b6108f3565b61035361034e366004612119565b61096d565b6040516102099291906123ec565b61026b61036f366004612119565b610ad9565b61023a610382366004612119565b610b6c565b61026b610395366004611f28565b610be3565b6101fd6103a8366004612132565b610c6a565b61021a610c93565b61023a6103c3366004612119565b610ca2565b61026b600081565b6102656103de36600461202e565b610cf5565b6102656103f1366004611fb2565b610dba565b61026561040436600461206a565b610df2565b61041c610417366004612119565b610ed9565b6040516102099190612373565b61026561043736600461218f565b610f90565b61021a61044a366004612119565b610feb565b61026b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610265610484366004612132565b61105b565b6102656104973660046120ef565b611081565b6101fd6104aa366004611f43565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b60006104e382611101565b92915050565b6060600180546104f89061259d565b80601f01602080910402602001604051908101604052809291908181526020018280546105249061259d565b80156105715780601f1061054657610100808354040283529160200191610571565b820191906000526020600020905b81548152906001019060200180831161055457829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b03166105f95760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600560205260409020546001600160a01b031690565b600061062082610b6c565b9050806001600160a01b0316836001600160a01b0316141561068e5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105f0565b336001600160a01b03821614806106aa57506106aa81336104aa565b61071c5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105f0565b6107268383611141565b505050565b610736335b826111af565b6107525760405162461bcd60e51b81526004016105f0906124bb565b6107268383836112a6565b600c5460009081906001600160a01b031661077c620f42406064612524565b600b546107899086612524565b6107939190612524565b915091509250929050565b6000828152602081905260409020600101546107ba8133611451565b61072683836114b5565b60006107cf83610be3565b82106108315760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016105f0565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6001600160a01b03811633146108ca5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016105f0565b6108d48282611539565b5050565b61072683838360405180602001604052806000815250610dba565b6108fc33610730565b6109615760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201526f1b995c881b9bdc88185c1c1c9bdd995960821b60648201526084016105f0565b61096a8161159e565b50565b6060806000600f60008581526020019081526020016000206040518060600160405290816000820180546109a09061259d565b80601f01602080910402602001604051908101604052809291908181526020018280546109cc9061259d565b8015610a195780601f106109ee57610100808354040283529160200191610a19565b820191906000526020600020905b8154815290600101906020018083116109fc57829003601f168201915b50505050508152602001600182018054610a329061259d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5e9061259d565b8015610aab5780601f10610a8057610100808354040283529160200191610aab565b820191906000526020600020905b815481529060010190602001808311610a8e57829003601f168201915b5050509183525050600291909101546001600160a01b03166020918201528151910151909590945092505050565b6000610ae460095490565b8210610b475760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016105f0565b60098281548110610b5a57610b5a612604565b90600052602060002001549050919050565b6000818152600360205260408120546001600160a01b0316806104e35760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105f0565b60006001600160a01b038216610c4e5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105f0565b506001600160a01b031660009081526004602052604090205490565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6060600280546104f89061259d565b6000818152600360205260408120546001600160a01b0316610cd65760405162461bcd60e51b81526004016105f09061246c565b506000908152600f60205260409020600201546001600160a01b031690565b6001600160a01b038216331415610d4e5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105f0565b3360008181526006602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610dc433836111af565b610de05760405162461bcd60e51b81526004016105f0906124bb565b610dec84848484611645565b50505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610e1d8133611451565b610e2f85610e2a600d5490565b611678565b6040518060600160405280858152602001848152602001836001600160a01b0316815250600f6000610e60600d5490565b8152602080820192909252604001600020825180519192610e8692849290910190611ddd565b506020828101518051610e9f9260018501920190611ddd565b5060409190910151600290910180546001600160a01b0319166001600160a01b03909216919091179055600d805460010190555050505050565b60408051600180825281830190925260609160009190816020015b6040805180820190915260008082526020820152815260200190600190039081610ef4575050600c5481519192506001600160a01b0316908290600090610f3d57610f3d612604565b60209081029190910101516001600160a01b039091169052600b5481518290600090610f6b57610f6b612604565b6020908102919091018101516bffffffffffffffffffffffff90921691015292915050565b6000610f9c8133611451565b8151610faf90600e906020850190611ddd565b507ff9d51c28878a42d330df350cf1ab50db1877847217d099ba2d7a0cfe803e59bd82604051610fdf91906123d9565b60405180910390a15050565b6000818152600360205260409020546060906001600160a01b03166110225760405162461bcd60e51b81526004016105f09061246c565b6000828152600f6020908152604091829020915161104592600e929091016122ac565b6040516020818303038152906040529050919050565b6000828152602081905260409020600101546110778133611451565b6107268383611539565b600061108d8133611451565b61271082106110ee5760405162461bcd60e51b815260206004820152602760248201527f526f79616c7479206e6565647320746f206265206c657373207468616e2031306044820152663030302062707360c81b60648201526084016105f0565b61072683836117c6565b80546001019055565b60006001600160e01b03198216631131d2f360e21b148061113257506001600160e01b0319821663152a902d60e11b145b806104e357506104e382611840565b600081815260056020526040902080546001600160a01b0319166001600160a01b038416908117909155819061117682610b6c565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600360205260408120546001600160a01b03166112285760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105f0565b600061123383610b6c565b9050806001600160a01b0316846001600160a01b0316148061126e5750836001600160a01b03166112638461057b565b6001600160a01b0316145b8061129e57506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166112b982610b6c565b6001600160a01b0316146113215760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016105f0565b6001600160a01b0382166113835760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105f0565b61138e838383611865565b611399600082611141565b6001600160a01b03831660009081526004602052604081208054600192906113c2908490612543565b90915550506001600160a01b03821660009081526004602052604081208054600192906113f090849061250c565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61145b8282610c6a565b6108d457611473816001600160a01b03166014611870565b61147e836020611870565b60405160200161148f9291906122c1565b60408051601f198184030181529082905262461bcd60e51b82526105f0916004016123d9565b6114bf8282610c6a565b6108d4576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556114f53390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6115438282610c6a565b156108d4576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006115a982610b6c565b90506115b781600084611865565b6115c2600083611141565b6001600160a01b03811660009081526004602052604081208054600192906115eb908490612543565b909155505060008281526003602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6116508484846112a6565b61165c84848484611a13565b610dec5760405162461bcd60e51b81526004016105f09061241a565b6001600160a01b0382166116ce5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105f0565b6000818152600360205260409020546001600160a01b0316156117335760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105f0565b61173f60008383611865565b6001600160a01b038216600090815260046020526040812080546001929061176890849061250c565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b604080516001600160a01b0384168152602081018390527f2986ba71bad2d7e501cd12434270b726c11e1185611b8e4bc6d28ca145e626ce910160405180910390a1604080518082019091528181526001600160a01b039092166020909201829052600b55600c80546001600160a01b0319169091179055565b60006001600160e01b0319821663780e9d6360e01b14806104e357506104e382611b20565b610726838383611b60565b6060600061187f836002612524565b61188a90600261250c565b67ffffffffffffffff8111156118a2576118a261261a565b6040519080825280601f01601f1916602001820160405280156118cc576020820181803683370190505b509050600360fc1b816000815181106118e7576118e7612604565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061191657611916612604565b60200101906001600160f81b031916908160001a905350600061193a846002612524565b61194590600161250c565b90505b60018111156119bd576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061197957611979612604565b1a60f81b82828151811061198f5761198f612604565b60200101906001600160f81b031916908160001a90535060049490941c936119b681612586565b9050611948565b508315611a0c5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105f0565b9392505050565b60006001600160a01b0384163b15611b1557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611a57903390899088908890600401612336565b602060405180830381600087803b158015611a7157600080fd5b505af1925050508015611aa1575060408051601f3d908101601f19168201909252611a9e91810190612172565b60015b611afb573d808015611acf576040519150601f19603f3d011682016040523d82523d6000602084013e611ad4565b606091505b508051611af35760405162461bcd60e51b81526004016105f09061241a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061129e565b506001949350505050565b60006001600160e01b031982166380ac58cd60e01b1480611b5157506001600160e01b03198216635b5e139f60e01b145b806104e357506104e382611c18565b6001600160a01b038316611bbb57611bb681600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b611bde565b816001600160a01b0316836001600160a01b031614611bde57611bde8382611c4d565b6001600160a01b038216611bf55761072681611cea565b826001600160a01b0316826001600160a01b031614610726576107268282611d99565b60006001600160e01b03198216637965db0b60e01b14806104e357506301ffc9a760e01b6001600160e01b03198316146104e3565b60006001611c5a84610be3565b611c649190612543565b600083815260086020526040902054909150808214611cb7576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b600954600090611cfc90600190612543565b6000838152600a602052604081205460098054939450909284908110611d2457611d24612604565b906000526020600020015490508060098381548110611d4557611d45612604565b6000918252602080832090910192909255828152600a90915260408082208490558582528120556009805480611d7d57611d7d6125ee565b6001900381819060005260206000200160009055905550505050565b6000611da483610be3565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b828054611de99061259d565b90600052602060002090601f016020900481019282611e0b5760008555611e51565b82601f10611e2457805160ff1916838001178555611e51565b82800160010185558215611e51579182015b82811115611e51578251825591602001919060010190611e36565b50611e5d929150611e61565b5090565b5b80821115611e5d5760008155600101611e62565b600067ffffffffffffffff80841115611e9157611e9161261a565b604051601f8501601f19908116603f01168101908282118183101715611eb957611eb961261a565b81604052809350858152868686011115611ed257600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114611f0357600080fd5b919050565b600082601f830112611f1957600080fd5b611a0c83833560208501611e76565b600060208284031215611f3a57600080fd5b611a0c82611eec565b60008060408385031215611f5657600080fd5b611f5f83611eec565b9150611f6d60208401611eec565b90509250929050565b600080600060608486031215611f8b57600080fd5b611f9484611eec565b9250611fa260208501611eec565b9150604084013590509250925092565b60008060008060808587031215611fc857600080fd5b611fd185611eec565b9350611fdf60208601611eec565b925060408501359150606085013567ffffffffffffffff81111561200257600080fd5b8501601f8101871361201357600080fd5b61202287823560208401611e76565b91505092959194509250565b6000806040838503121561204157600080fd5b61204a83611eec565b91506020830135801515811461205f57600080fd5b809150509250929050565b6000806000806080858703121561208057600080fd5b61208985611eec565b9350602085013567ffffffffffffffff808211156120a657600080fd5b6120b288838901611f08565b945060408701359150808211156120c857600080fd5b506120d587828801611f08565b9250506120e460608601611eec565b905092959194509250565b6000806040838503121561210257600080fd5b61210b83611eec565b946020939093013593505050565b60006020828403121561212b57600080fd5b5035919050565b6000806040838503121561214557600080fd5b82359150611f6d60208401611eec565b60006020828403121561216757600080fd5b8135611a0c81612630565b60006020828403121561218457600080fd5b8151611a0c81612630565b6000602082840312156121a157600080fd5b813567ffffffffffffffff8111156121b857600080fd5b61129e84828501611f08565b600080604083850312156121d757600080fd5b50508035926020909101359150565b600081518084526121fe81602086016020860161255a565b601f01601f19169290920160200192915050565b8054600090600181811c908083168061222c57607f831692505b602080841082141561224e57634e487b7160e01b600052602260045260246000fd5b8180156122625760018114612273576122a0565b60ff198616895284890196506122a0565b60008881526020902060005b868110156122985781548b82015290850190830161227f565b505084890196505b50505050505092915050565b600061129e6122bb8386612212565b84612212565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516122f981601785016020880161255a565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161232a81602884016020880161255a565b01602801949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612369908301846121e6565b9695505050505050565b602080825282518282018190526000919060409081850190868401855b828110156123cc57815180516001600160a01b031685528601516bffffffffffffffffffffffff16868501529284019290850190600101612390565b5091979650505050505050565b602081526000611a0c60208301846121e6565b6040815260006123ff60408301856121e6565b828103602084015261241181856121e6565b95945050505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000821982111561251f5761251f6125d8565b500190565b600081600019048311821515161561253e5761253e6125d8565b500290565b600082821015612555576125556125d8565b500390565b60005b8381101561257557818101518382015260200161255d565b83811115610dec5750506000910152565b600081612595576125956125d8565b506000190190565b600181811c908216806125b157607f821691505b602082108114156125d257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461096a57600080fdfea2646970667358221220e12a9d8077f60b45870cc01cf31fd96542f993491a21550c3dcb9bea95113c0964736f6c63430008050033";
