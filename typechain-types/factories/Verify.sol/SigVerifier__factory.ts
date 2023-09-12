/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SigVerifier,
  SigVerifierInterface,
} from "../../Verify.sol/SigVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hashedMessage",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "RecoverSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "SplitSignature",
    outputs: [
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106aa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806359130f291461003b5780638e49b4631461006b575b600080fd5b61005560048036038101906100509190610251565b61009d565b60405161006291906102f9565b60405180910390f35b6100856004803603810190610080919061045a565b610166565b604051610094939291906104c1565b60405180910390f35b6000806040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509050600081876040516020016100ed92919061058a565b60405160208183030381529060405280519060200120905060006001828888886040516000815260200160405260405161012a94939291906105b2565b6020604051602081039080840390855afa15801561014c573d6000803e3d6000fd5b505050602060405103519050809350505050949350505050565b600080600060418451146101af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a690610654565b60405180910390fd5b6020840151915060408401519050606084015160001a92509193909250565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6101f5816101e2565b811461020057600080fd5b50565b600081359050610212816101ec565b92915050565b600060ff82169050919050565b61022e81610218565b811461023957600080fd5b50565b60008135905061024b81610225565b92915050565b6000806000806080858703121561026b5761026a6101d8565b5b600061027987828801610203565b945050602061028a8782880161023c565b935050604061029b87828801610203565b92505060606102ac87828801610203565b91505092959194509250565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102e3826102b8565b9050919050565b6102f3816102d8565b82525050565b600060208201905061030e60008301846102ea565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103678261031e565b810181811067ffffffffffffffff821117156103865761038561032f565b5b80604052505050565b60006103996101ce565b90506103a5828261035e565b919050565b600067ffffffffffffffff8211156103c5576103c461032f565b5b6103ce8261031e565b9050602081019050919050565b82818337600083830152505050565b60006103fd6103f8846103aa565b61038f565b90508281526020810184848401111561041957610418610319565b5b6104248482856103db565b509392505050565b600082601f83011261044157610440610314565b5b81356104518482602086016103ea565b91505092915050565b6000602082840312156104705761046f6101d8565b5b600082013567ffffffffffffffff81111561048e5761048d6101dd565b5b61049a8482850161042c565b91505092915050565b6104ac81610218565b82525050565b6104bb816101e2565b82525050565b60006060820190506104d660008301866104a3565b6104e360208301856104b2565b6104f060408301846104b2565b949350505050565b600081519050919050565b600081905092915050565b60005b8381101561052c578082015181840152602081019050610511565b60008484015250505050565b6000610543826104f8565b61054d8185610503565b935061055d81856020860161050e565b80840191505092915050565b6000819050919050565b61058461057f826101e2565b610569565b82525050565b60006105968285610538565b91506105a28284610573565b6020820191508190509392505050565b60006080820190506105c760008301876104b2565b6105d460208301866104a3565b6105e160408301856104b2565b6105ee60608301846104b2565b95945050505050565b600082825260208201905092915050565b7f496e76616c6964205369676e6174757265000000000000000000000000000000600082015250565b600061063e6011836105f7565b915061064982610608565b602082019050919050565b6000602082019050818103600083015261066d81610631565b905091905056fea26469706673582212200143139b535e58b57ba862899e5a0b0dc6ee3d8755596f9631fa16725d95f22564736f6c63430008110033";

type SigVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SigVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SigVerifier__factory extends ContractFactory {
  constructor(...args: SigVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SigVerifier> {
    return super.deploy(overrides || {}) as Promise<SigVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SigVerifier {
    return super.attach(address) as SigVerifier;
  }
  override connect(signer: Signer): SigVerifier__factory {
    return super.connect(signer) as SigVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SigVerifierInterface {
    return new utils.Interface(_abi) as SigVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SigVerifier {
    return new Contract(address, _abi, signerOrProvider) as SigVerifier;
  }
}
