/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface HollyPlusCuratorFactoryInterface extends ethers.utils.Interface {
  functions: {
    "logic()": FunctionFragment;
    "startAuction(uint256,uint8,address,uint8,uint256,uint256,uint8)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "logic", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startAuction",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "logic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startAuction",
    data: BytesLike
  ): Result;

  events: {};
}

export class HollyPlusCuratorFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: HollyPlusCuratorFactoryInterface;

  functions: {
    logic(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "logic()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    startAuction(
      _tokenId: BigNumberish,
      _tokenCreatorPercentage: BigNumberish,
      _artistPayout: string,
      _artistPercentage: BigNumberish,
      auctionDuration: BigNumberish,
      reservePrice: BigNumberish,
      curatorFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "startAuction(uint256,uint8,address,uint8,uint256,uint256,uint8)"(
      _tokenId: BigNumberish,
      _tokenCreatorPercentage: BigNumberish,
      _artistPayout: string,
      _artistPercentage: BigNumberish,
      auctionDuration: BigNumberish,
      reservePrice: BigNumberish,
      curatorFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  logic(overrides?: CallOverrides): Promise<string>;

  "logic()"(overrides?: CallOverrides): Promise<string>;

  startAuction(
    _tokenId: BigNumberish,
    _tokenCreatorPercentage: BigNumberish,
    _artistPayout: string,
    _artistPercentage: BigNumberish,
    auctionDuration: BigNumberish,
    reservePrice: BigNumberish,
    curatorFeePercentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "startAuction(uint256,uint8,address,uint8,uint256,uint256,uint8)"(
    _tokenId: BigNumberish,
    _tokenCreatorPercentage: BigNumberish,
    _artistPayout: string,
    _artistPercentage: BigNumberish,
    auctionDuration: BigNumberish,
    reservePrice: BigNumberish,
    curatorFeePercentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    logic(overrides?: CallOverrides): Promise<string>;

    "logic()"(overrides?: CallOverrides): Promise<string>;

    startAuction(
      _tokenId: BigNumberish,
      _tokenCreatorPercentage: BigNumberish,
      _artistPayout: string,
      _artistPercentage: BigNumberish,
      auctionDuration: BigNumberish,
      reservePrice: BigNumberish,
      curatorFeePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "startAuction(uint256,uint8,address,uint8,uint256,uint256,uint8)"(
      _tokenId: BigNumberish,
      _tokenCreatorPercentage: BigNumberish,
      _artistPayout: string,
      _artistPercentage: BigNumberish,
      auctionDuration: BigNumberish,
      reservePrice: BigNumberish,
      curatorFeePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    logic(overrides?: CallOverrides): Promise<BigNumber>;

    "logic()"(overrides?: CallOverrides): Promise<BigNumber>;

    startAuction(
      _tokenId: BigNumberish,
      _tokenCreatorPercentage: BigNumberish,
      _artistPayout: string,
      _artistPercentage: BigNumberish,
      auctionDuration: BigNumberish,
      reservePrice: BigNumberish,
      curatorFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "startAuction(uint256,uint8,address,uint8,uint256,uint256,uint8)"(
      _tokenId: BigNumberish,
      _tokenCreatorPercentage: BigNumberish,
      _artistPayout: string,
      _artistPercentage: BigNumberish,
      auctionDuration: BigNumberish,
      reservePrice: BigNumberish,
      curatorFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    logic(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "logic()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startAuction(
      _tokenId: BigNumberish,
      _tokenCreatorPercentage: BigNumberish,
      _artistPayout: string,
      _artistPercentage: BigNumberish,
      auctionDuration: BigNumberish,
      reservePrice: BigNumberish,
      curatorFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "startAuction(uint256,uint8,address,uint8,uint256,uint256,uint8)"(
      _tokenId: BigNumberish,
      _tokenCreatorPercentage: BigNumberish,
      _artistPayout: string,
      _artistPercentage: BigNumberish,
      auctionDuration: BigNumberish,
      reservePrice: BigNumberish,
      curatorFeePercentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}