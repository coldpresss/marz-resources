/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { ERC721, ERC721Interface } from '../ERC721'

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'owners',
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
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162001622380380620016228339810160408190526200003491620001c5565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b82805462000076906200022f565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200012057600080fd5b81516001600160401b03808211156200013d576200013d6200026c565b604051601f8301601f19908116603f011681019082821181831017156200016857620001686200026c565b816040528381526020925086838588010111156200018557600080fd5b600091505b83821015620001a957858201830151818301840152908201906200018a565b83821115620001bb5760008385830101525b9695505050505050565b60008060408385031215620001d957600080fd5b82516001600160401b0380821115620001f157600080fd5b620001ff868387016200010e565b935060208501519150808211156200021657600080fd5b5062000225858286016200010e565b9150509250929050565b600181811c908216806200024457607f821691505b602082108114156200026657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61139080620002926000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101f7578063b88d4fde1461020a578063c87b56dd1461021d578063e985e9c51461023057600080fd5b80636352211e146101bb57806370a08231146101ce57806395d89b41146101ef57600080fd5b8063081812fc116100c8578063081812fc1461016d578063095ea7b31461018057806323b872dd1461019557806342842e0e146101a857600080fd5b806301ffc9a7146100ef578063025e7c271461011757806306fdde0314610158575b600080fd5b6101026100fd36600461113c565b61026c565b60405190151581526020015b60405180910390f35b610140610125366004611176565b6002602052600090815260409020546001600160a01b031681565b6040516001600160a01b03909116815260200161010e565b6101606102be565b60405161010e9190611226565b61014061017b366004611176565b610350565b61019361018e366004611112565b6103ea565b005b6101936101a3366004610fbe565b610500565b6101936101b6366004610fbe565b610587565b6101406101c9366004611176565b6105a2565b6101e16101dc366004610f70565b61062d565b60405190815260200161010e565b6101606106c7565b6101936102053660046110d6565b6106d6565b610193610218366004610ffa565b61079b565b61016061022b366004611176565b610829565b61010261023e366004610f8b565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061029d57506001600160e01b03198216635b5e139f60e01b145b806102b857506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102cd906112a8565b80601f01602080910402602001604051908101604052809291908181526020018280546102f9906112a8565b80156103465780601f1061031b57610100808354040283529160200191610346565b820191906000526020600020905b81548152906001019060200180831161032957829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103ce5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103f5826105a2565b9050806001600160a01b0316836001600160a01b031614156104635760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103c5565b336001600160a01b038216148061047f575061047f813361023e565b6104f15760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103c5565b6104fb838361091f565b505050565b61050a338261099a565b61057c5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016103c5565b6104fb838383610a91565b6104fb8383836040518060200160405280600081525061079b565b6000818152600260205260408120546001600160a01b0316806102b85760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016103c5565b60006001600160a01b0382166106ab5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016103c5565b506001600160a01b031660009081526003602052604090205490565b6060600180546102cd906112a8565b6001600160a01b03821633141561072f5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103c5565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6107a5338361099a565b6108175760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016103c5565b61082384848484610c52565b50505050565b6000818152600260205260409020546060906001600160a01b03166108b65760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016103c5565b60006108cd60408051602081019091526000815290565b905060008151116108ed5760405180602001604052806000815250610918565b806108f784610cdb565b6040516020016109089291906111bb565b6040516020818303038152906040525b9392505050565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610961826105a2565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610a135760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103c5565b6000610a1e836105a2565b9050806001600160a01b0316846001600160a01b03161480610a595750836001600160a01b0316610a4e84610350565b6001600160a01b0316145b80610a8957506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610aa4826105a2565b6001600160a01b031614610b205760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016103c5565b6001600160a01b038216610b825760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103c5565b610b8d60008261091f565b6001600160a01b0383166000908152600360205260408120805460019290610bb6908490611265565b90915550506001600160a01b0382166000908152600360205260408120805460019290610be4908490611239565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610c5d848484610a91565b610c6984848484610df1565b6108235760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016103c5565b606081610cff5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610d295780610d13816112e3565b9150610d229050600a83611251565b9150610d03565b60008167ffffffffffffffff811115610d4457610d44611354565b6040519080825280601f01601f191660200182016040528015610d6e576020820181803683370190505b5090505b8415610a8957610d83600183611265565b9150610d90600a866112fe565b610d9b906030611239565b60f81b818381518110610db057610db061133e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610dea600a86611251565b9450610d72565b60006001600160a01b0384163b15610f4957604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610e359033908990889088906004016111ea565b602060405180830381600087803b158015610e4f57600080fd5b505af1925050508015610e7f575060408051601f3d908101601f19168201909252610e7c91810190611159565b60015b610f2f573d808015610ead576040519150601f19603f3d011682016040523d82523d6000602084013e610eb2565b606091505b508051610f275760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016103c5565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a89565b506001949350505050565b80356001600160a01b0381168114610f6b57600080fd5b919050565b600060208284031215610f8257600080fd5b61091882610f54565b60008060408385031215610f9e57600080fd5b610fa783610f54565b9150610fb560208401610f54565b90509250929050565b600080600060608486031215610fd357600080fd5b610fdc84610f54565b9250610fea60208501610f54565b9150604084013590509250925092565b6000806000806080858703121561101057600080fd5b61101985610f54565b935061102760208601610f54565b925060408501359150606085013567ffffffffffffffff8082111561104b57600080fd5b818701915087601f83011261105f57600080fd5b81358181111561107157611071611354565b604051601f8201601f19908116603f0116810190838211818310171561109957611099611354565b816040528281528a60208487010111156110b257600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156110e957600080fd5b6110f283610f54565b91506020830135801515811461110757600080fd5b809150509250929050565b6000806040838503121561112557600080fd5b61112e83610f54565b946020939093013593505050565b60006020828403121561114e57600080fd5b81356109188161136a565b60006020828403121561116b57600080fd5b81516109188161136a565b60006020828403121561118857600080fd5b5035919050565b600081518084526111a781602086016020860161127c565b601f01601f19169290920160200192915050565b600083516111cd81846020880161127c565b8351908301906111e181836020880161127c565b01949350505050565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261121c608083018461118f565b9695505050505050565b602081526000610918602083018461118f565b6000821982111561124c5761124c611312565b500190565b60008261126057611260611328565b500490565b60008282101561127757611277611312565b500390565b60005b8381101561129757818101518382015260200161127f565b838111156108235750506000910152565b600181811c908216806112bc57607f821691505b602082108114156112dd57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156112f7576112f7611312565b5060010190565b60008261130d5761130d611328565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461138057600080fd5b5056fea164736f6c6343000806000a'

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {})
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721
  }
}