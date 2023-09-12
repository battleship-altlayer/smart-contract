/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface SigVerifierInterface extends utils.Interface {
  functions: {
    "RecoverSigner(bytes32,uint8,bytes32,bytes32)": FunctionFragment;
    "SplitSignature(bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "RecoverSigner" | "SplitSignature"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "RecoverSigner",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "SplitSignature",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "RecoverSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SplitSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SigVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SigVerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    RecoverSigner(
      _hashedMessage: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    SplitSignature(
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number, string, string] & { v: number; r: string; s: string }>;
  };

  RecoverSigner(
    _hashedMessage: PromiseOrValue<BytesLike>,
    _v: PromiseOrValue<BigNumberish>,
    _r: PromiseOrValue<BytesLike>,
    _s: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  SplitSignature(
    sig: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[number, string, string] & { v: number; r: string; s: string }>;

  callStatic: {
    RecoverSigner(
      _hashedMessage: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    SplitSignature(
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number, string, string] & { v: number; r: string; s: string }>;
  };

  filters: {};

  estimateGas: {
    RecoverSigner(
      _hashedMessage: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    SplitSignature(
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    RecoverSigner(
      _hashedMessage: PromiseOrValue<BytesLike>,
      _v: PromiseOrValue<BigNumberish>,
      _r: PromiseOrValue<BytesLike>,
      _s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SplitSignature(
      sig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}