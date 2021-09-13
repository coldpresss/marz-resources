/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Plot, PlotInterface } from '../Plot'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'FREE_PLOTS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GRID_HEIGHT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GRID_WIDTH',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_PLOTS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PUBLIC_CLAIM_FEE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PUBLIC_PLOTS_RESERVED',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'plotID',
        type: 'uint256',
      },
    ],
    name: 'claimTo',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'lootID',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'plotID',
        type: 'uint256',
      },
    ],
    name: 'claimWithLoot',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'plotID',
        type: 'uint256',
      },
    ],
    name: 'exists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'x',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'y',
        type: 'uint256',
      },
    ],
    name: 'getPlotID',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'plotID',
        type: 'uint256',
      },
    ],
    name: 'getXY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'plotID',
        type: 'uint256',
      },
    ],
    name: 'hasAdjacentPlot',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'lootNFT_',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'towns',
        type: 'uint256[]',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lootNFT',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'lootPlotsCalimed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'publicPlotsAvailable',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50612bfd806100206000396000f3fe60806040526004361061024f5760003560e01c80636352211e11610138578063bde5a68e116100b0578063d61c870d1161007f578063e985e9c511610064578063e985e9c51461066b578063ed18e4ec146106b4578063f2fde38b146106ca57600080fd5b8063d61c870d1461062b578063e72728661461064b57600080fd5b8063bde5a68e146105c0578063c1bb4a30146105e0578063c87b56dd146105f6578063d294f0931461061657600080fd5b80638da5cb5b11610107578063a22cb465116100ec578063a22cb4651461054b578063b1e30f1f1461056b578063b88d4fde146105a057600080fd5b80638da5cb5b1461051857806395d89b411461053657600080fd5b80636352211e146104ad57806370a08231146104cd578063715018a6146104ed5780638934934e1461050257600080fd5b8063345aef4c116101cb5780634f558e791161019a578063575813dd1161017f578063575813dd146104475780635c59433b146104675780635eae1f2b1461049757600080fd5b80634f558e79146103ef5780634f6ccce71461042757600080fd5b8063345aef4c1461038c57806342842e0e146103a75780634600d1b5146103c75780634bf11ad2146103da57600080fd5b80631204fe0c11610222578063235e78eb11610207578063235e78eb1461033757806323b872dd1461034c5780632f745c591461036c57600080fd5b80631204fe0c1461030557806318160ddd1461031857600080fd5b806301ffc9a71461025457806306fdde0314610289578063081812fc146102ab578063095ea7b3146102e3575b600080fd5b34801561026057600080fd5b5061027461026f3660046128f8565b6106ea565b60405190151581526020015b60405180910390f35b34801561029557600080fd5b5061029e610715565b6040516102809190612a04565b3480156102b757600080fd5b506102cb6102c6366004612932565b6107a7565b6040516001600160a01b039091168152602001610280565b3480156102ef57600080fd5b506103036102fe3660046128cc565b610841565b005b6103036103133660046128cc565b610957565b34801561032457600080fd5b506099545b604051908152602001610280565b34801561034357600080fd5b5061032960c881565b34801561035857600080fd5b506103036103673660046126d2565b610a3e565b34801561037857600080fd5b506103296103873660046128cc565b610ac5565b34801561039857600080fd5b506103296658d15e1762800081565b3480156103b357600080fd5b506103036103c23660046126d2565b610b6d565b6103036103d536600461294b565b610b88565b3480156103e657600080fd5b50610329606481565b3480156103fb57600080fd5b5061027461040a366004612932565b6000908152606760205260409020546001600160a01b0316151590565b34801561043357600080fd5b50610329610442366004612932565b610cad565b34801561045357600080fd5b50610274610462366004612932565b610d51565b34801561047357600080fd5b50610274610482366004612932565b60fc6020526000908152604090205460ff1681565b3480156104a357600080fd5b506103296107c781565b3480156104b957600080fd5b506102cb6104c8366004612932565b610e99565b3480156104d957600080fd5b506103296104e836600461265f565b610f24565b3480156104f957600080fd5b50610303610fbe565b34801561050e57600080fd5b50610329612ed781565b34801561052457600080fd5b5060c9546001600160a01b03166102cb565b34801561054257600080fd5b5061029e611024565b34801561055757600080fd5b50610303610566366004612899565b611033565b34801561057757600080fd5b5061058b610586366004612932565b6110f8565b60408051928352602083019190915201610280565b3480156105ac57600080fd5b506103036105bb366004612713565b61111a565b3480156105cc57600080fd5b506103296105db36600461294b565b6111a8565b3480156105ec57600080fd5b50610329614e2081565b34801561060257600080fd5b5061029e610611366004612932565b6111c6565b34801561062257600080fd5b506103036112e0565b34801561063757600080fd5b5060fb546102cb906001600160a01b031681565b34801561065757600080fd5b506103036106663660046127d7565b611369565b34801561067757600080fd5b50610274610686366004612699565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b3480156106c057600080fd5b5061032960fd5481565b3480156106d657600080fd5b506103036106e536600461265f565b611502565b60006001600160e01b0319821663780e9d6360e01b148061070f575061070f826115e1565b92915050565b60606065805461072490612aed565b80601f016020809104026020016040519081016040528092919081815260200182805461075090612aed565b801561079d5780601f106107725761010080835404028352916020019161079d565b820191906000526020600020905b81548152906001019060200180831161078057829003601f168201915b5050505050905090565b6000818152606760205260408120546001600160a01b03166108255760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b600061084c82610e99565b9050806001600160a01b0316836001600160a01b031614156108ba5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161081c565b336001600160a01b03821614806108d657506108d68133610686565b6109485760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161081c565b6109528383611631565b505050565b60fd546109a65760405162461bcd60e51b815260206004820152601a60248201527f506c6f743a204e6f206d6f7265207075626c696320706c6f7473000000000000604482015260640161081c565b600060fd54612ed76109b89190612a93565b90506107c78110610a1a576658d15e17628000341015610a1a5760405162461bcd60e51b815260206004820152601860248201527f506c6f743a20436c61696d206665652072657175697265640000000000000000604482015260640161081c565b610a24838361169f565b60fd8054906000610a3483612ad6565b9190505550505050565b610a4833826117c3565b610aba5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161081c565b6109528383836118ba565b6000610ad083610f24565b8210610b445760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161081c565b506001600160a01b03919091166000908152609760209081526040808320938352929052205490565b6109528383836040518060200160405280600081525061111a565b600082815260fc602052604090205460ff1615610c0d5760405162461bcd60e51b815260206004820152602860248201527f506c6f743a20506c6f7420616c726561647920636c61696d6564206279206c6f60448201527f6f74206f776e6572000000000000000000000000000000000000000000000000606482015260840161081c565b60fb546040516331a9108f60e11b815260048101849052610c91916001600160a01b031690636352211e9060240160206040518083038186803b158015610c5357600080fd5b505afa158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8b919061267c565b8261169f565b50600090815260fc60205260409020805460ff19166001179055565b6000610cb860995490565b8210610d2c5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161081c565b60998281548110610d3f57610d3f612b99565b90600052602060002001549050919050565b6000808080610d62600160c8612a93565b90506000610d7260016064612a93565b9050600080600080600080610d868c6110f8565b9095509150898514610da257610d9d600186612a93565b610da4565b895b9550878514610dbd57610db8856001612a48565b610dbf565b875b9350888214610dd857610dd3600183612a93565b610dda565b885b9250868214610df357610dee826001612a48565b610df5565b865b9050610e0461040a87856111a8565b80610e175750610e1761040a87846111a8565b80610e2a5750610e2a61040a87836111a8565b80610e3d5750610e3d61040a86856111a8565b80610e505750610e5061040a86836111a8565b80610e635750610e6361040a85856111a8565b80610e765750610e7661040a85846111a8565b80610e895750610e8961040a85836111a8565b9c9b505050505050505050505050565b6000818152606760205260408120546001600160a01b03168061070f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161081c565b60006001600160a01b038216610fa25760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161081c565b506001600160a01b031660009081526068602052604090205490565b60c9546001600160a01b031633146110185760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161081c565b6110226000611a79565b565b60606066805461072490612aed565b6001600160a01b03821633141561108c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161081c565b336000818152606a602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60008061110660c884612b43565b61111160c885612a60565b91509150915091565b61112433836117c3565b6111965760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161081c565b6111a284848484611acb565b50505050565b60006111b58260c8612a74565b6111bf9084612a48565b9392505050565b6000818152606760205260409020546060906001600160a01b03166112535760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161081c565b600061128f60408051808201909152601c81527f68747470733a2f2f6170692e6d61727a2e6661726d2f746f6b656e2f00000000602082015290565b905060008151116112af57604051806020016040528060008152506111bf565b806112b984611b54565b6040516020016112ca929190612999565b6040516020818303038152906040529392505050565b60c9546001600160a01b0316331461133a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161081c565b60405133904780156108fc02916000818181858888f19350505050158015611366573d6000803e3d6000fd5b50565b600054610100900460ff1680611382575060005460ff16155b6113e55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161081c565b600054610100900460ff16158015611407576000805461ffff19166101011790555b6114626040518060400160405280600d81526020017f506c6f7473206f6e204d41525a0000000000000000000000000000000000000081525060405180604001604052806004815260200163141313d560e21b815250611c6a565b61146a611d38565b611472611e02565b60fb80546001600160a01b0319166001600160a01b038516179055612ed760fd5560005b82518110156114eb5760008382815181106114b3576114b3612b99565b602002602001015190506114d86114d260c9546001600160a01b031690565b82611eb0565b50806114e381612b28565b915050611496565b508015610952576000805461ff0019169055505050565b60c9546001600160a01b0316331461155c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161081c565b6001600160a01b0381166115d85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161081c565b61136681611a79565b60006001600160e01b031982166380ac58cd60e01b148061161257506001600160e01b03198216635b5e139f60e01b145b8061070f57506301ffc9a760e01b6001600160e01b031983161461070f565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061166682610e99565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b614e2081106116f05760405162461bcd60e51b815260206004820152601860248201527f506c6f743a20506c6f74206f7574206f6620626f756e64730000000000000000604482015260640161081c565b6000818152606760205260409020546001600160a01b0316156117555760405162461bcd60e51b815260206004820152601a60248201527f506c6f743a20506c6f7420616c726561647920636c61696d6564000000000000604482015260640161081c565b61175e81610d51565b6117b55760405162461bcd60e51b815260206004820152602260248201527f506c6f743a20506c6f74206e6f742061636365737369626c6520746f20636c61604482015261696d60f01b606482015260840161081c565b6117bf8282611eb0565b5050565b6000818152606760205260408120546001600160a01b031661183c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161081c565b600061184783610e99565b9050806001600160a01b0316846001600160a01b031614806118825750836001600160a01b0316611877846107a7565b6001600160a01b0316145b806118b257506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166118cd82610e99565b6001600160a01b0316146119495760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161081c565b6001600160a01b0382166119ab5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161081c565b6119b6838383611ffe565b6119c1600082611631565b6001600160a01b03831660009081526068602052604081208054600192906119ea908490612a93565b90915550506001600160a01b0382166000908152606860205260408120805460019290611a18908490612a48565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60c980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b611ad68484846118ba565b611ae2848484846120b6565b6111a25760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161081c565b606081611b785750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611ba25780611b8c81612b28565b9150611b9b9050600a83612a60565b9150611b7c565b60008167ffffffffffffffff811115611bbd57611bbd612baf565b6040519080825280601f01601f191660200182016040528015611be7576020820181803683370190505b5090505b84156118b257611bfc600183612a93565b9150611c09600a86612b43565b611c14906030612a48565b60f81b818381518110611c2957611c29612b99565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611c63600a86612a60565b9450611beb565b600054610100900460ff1680611c83575060005460ff16155b611ce65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161081c565b600054610100900460ff16158015611d08576000805461ffff19166101011790555b611d10612219565b611d18612219565b611d2283836122ca565b8015610952576000805461ff0019169055505050565b600054610100900460ff1680611d51575060005460ff16155b611db45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161081c565b600054610100900460ff16158015611dd6576000805461ffff19166101011790555b611dde612219565b611de6612219565b611dee612219565b8015611366576000805461ff001916905550565b600054610100900460ff1680611e1b575060005460ff16155b611e7e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161081c565b600054610100900460ff16158015611ea0576000805461ffff19166101011790555b611ea8612219565b611dee61238f565b6001600160a01b038216611f065760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161081c565b6000818152606760205260409020546001600160a01b031615611f6b5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161081c565b611f7760008383611ffe565b6001600160a01b0382166000908152606860205260408120805460019290611fa0908490612a48565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0383166120595761205481609980546000838152609a60205260408120829055600182018355919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000155565b61207c565b816001600160a01b0316836001600160a01b03161461207c5761207c8382612436565b6001600160a01b03821661209357610952816124d3565b826001600160a01b0316826001600160a01b031614610952576109528282612582565b60006001600160a01b0384163b1561220e57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906120fa9033908990889088906004016129c8565b602060405180830381600087803b15801561211457600080fd5b505af1925050508015612144575060408051601f3d908101601f1916820190925261214191810190612915565b60015b6121f4573d808015612172576040519150601f19603f3d011682016040523d82523d6000602084013e612177565b606091505b5080516121ec5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161081c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506118b2565b506001949350505050565b600054610100900460ff1680612232575060005460ff16155b6122955760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161081c565b600054610100900460ff16158015611dee576000805461ffff19166101011790558015611366576000805461ff001916905550565b600054610100900460ff16806122e3575060005460ff16155b6123465760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161081c565b600054610100900460ff16158015612368576000805461ffff19166101011790555b825161237b9060659060208601906125c6565b5081516114eb9060669060208501906125c6565b600054610100900460ff16806123a8575060005460ff16155b61240b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161081c565b600054610100900460ff1615801561242d576000805461ffff19166101011790555b611dee33611a79565b6000600161244384610f24565b61244d9190612a93565b6000838152609860205260409020549091508082146124a0576001600160a01b03841660009081526097602090815260408083208584528252808320548484528184208190558352609890915290208190555b5060009182526098602090815260408084208490556001600160a01b039094168352609781528383209183525290812055565b6099546000906124e590600190612a93565b6000838152609a60205260408120546099805493945090928490811061250d5761250d612b99565b90600052602060002001549050806099838154811061252e5761252e612b99565b6000918252602080832090910192909255828152609a9091526040808220849055858252812055609980548061256657612566612b83565b6001900381819060005260206000200160009055905550505050565b600061258d83610f24565b6001600160a01b039093166000908152609760209081526040808320868452825280832085905593825260989052919091209190915550565b8280546125d290612aed565b90600052602060002090601f0160209004810192826125f4576000855561263a565b82601f1061260d57805160ff191683800117855561263a565b8280016001018555821561263a579182015b8281111561263a57825182559160200191906001019061261f565b5061264692915061264a565b5090565b5b80821115612646576000815560010161264b565b60006020828403121561267157600080fd5b81356111bf81612bc5565b60006020828403121561268e57600080fd5b81516111bf81612bc5565b600080604083850312156126ac57600080fd5b82356126b781612bc5565b915060208301356126c781612bc5565b809150509250929050565b6000806000606084860312156126e757600080fd5b83356126f281612bc5565b9250602084013561270281612bc5565b929592945050506040919091013590565b6000806000806080858703121561272957600080fd5b843561273481612bc5565b935060208581013561274581612bc5565b935060408601359250606086013567ffffffffffffffff8082111561276957600080fd5b818801915088601f83011261277d57600080fd5b81358181111561278f5761278f612baf565b6127a1601f8201601f19168501612a17565b915080825289848285010111156127b757600080fd5b808484018584013760008482840101525080935050505092959194509250565b600080604083850312156127ea57600080fd5b82356127f581612bc5565b915060208381013567ffffffffffffffff8082111561281357600080fd5b818601915086601f83011261282757600080fd5b81358181111561283957612839612baf565b8060051b915061284a848301612a17565b8181528481019084860184860187018b101561286557600080fd5b600095505b8386101561288857803583526001959095019491860191860161286a565b508096505050505050509250929050565b600080604083850312156128ac57600080fd5b82356128b781612bc5565b9150602083013580151581146126c757600080fd5b600080604083850312156128df57600080fd5b82356128ea81612bc5565b946020939093013593505050565b60006020828403121561290a57600080fd5b81356111bf81612bda565b60006020828403121561292757600080fd5b81516111bf81612bda565b60006020828403121561294457600080fd5b5035919050565b6000806040838503121561295e57600080fd5b50508035926020909101359150565b60008151808452612985816020860160208601612aaa565b601f01601f19169290920160200192915050565b600083516129ab818460208801612aaa565b8351908301906129bf818360208801612aaa565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526129fa608083018461296d565b9695505050505050565b6020815260006111bf602083018461296d565b604051601f8201601f1916810167ffffffffffffffff81118282101715612a4057612a40612baf565b604052919050565b60008219821115612a5b57612a5b612b57565b500190565b600082612a6f57612a6f612b6d565b500490565b6000816000190483118215151615612a8e57612a8e612b57565b500290565b600082821015612aa557612aa5612b57565b500390565b60005b83811015612ac5578181015183820152602001612aad565b838111156111a25750506000910152565b600081612ae557612ae5612b57565b506000190190565b600181811c90821680612b0157607f821691505b60208210811415612b2257634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612b3c57612b3c612b57565b5060010190565b600082612b5257612b52612b6d565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461136657600080fd5b6001600160e01b03198116811461136657600080fdfea164736f6c6343000806000a'

export class Plot__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<Plot> {
    return super.deploy(overrides || {}) as Promise<Plot>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Plot {
    return super.attach(address) as Plot
  }
  connect(signer: Signer): Plot__factory {
    return super.connect(signer) as Plot__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): PlotInterface {
    return new utils.Interface(_abi) as PlotInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Plot {
    return new Contract(address, _abi, signerOrProvider) as Plot
  }
}