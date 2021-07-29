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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AuctionHouseInterface extends ethers.utils.Interface {
  functions: {
    "auctions(uint256)": FunctionFragment;
    "cancelAuction(uint256)": FunctionFragment;
    "createAuction(uint256,address,uint256,uint256,address,uint8,address)": FunctionFragment;
    "createBid(uint256,uint256)": FunctionFragment;
    "endAuction(uint256)": FunctionFragment;
    "minBidIncrementPercentage()": FunctionFragment;
    "setAuctionApproval(uint256,bool)": FunctionFragment;
    "setAuctionReservePrice(uint256,uint256)": FunctionFragment;
    "timeBuffer()": FunctionFragment;
    "wethAddress()": FunctionFragment;
    "zora()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "auctions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAuction",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createBid",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "endAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minBidIncrementPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAuctionApproval",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuctionReservePrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timeBuffer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "zora", values?: undefined): string;

  decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endAuction", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minBidIncrementPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuctionApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuctionReservePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timeBuffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zora", data: BytesLike): Result;

  events: {
    "AuctionApprovalUpdated(uint256,uint256,address,bool)": EventFragment;
    "AuctionBid(uint256,uint256,address,address,uint256,bool,bool)": EventFragment;
    "AuctionCanceled(uint256,uint256,address,address)": EventFragment;
    "AuctionCreated(uint256,uint256,address,uint256,uint256,address,address,uint8,address)": EventFragment;
    "AuctionDurationExtended(uint256,uint256,address,uint256)": EventFragment;
    "AuctionEnded(uint256,uint256,address,address,address,address,uint256,uint256,address)": EventFragment;
    "AuctionReservePriceUpdated(uint256,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionApprovalUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionBid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionDurationExtended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionReservePriceUpdated"): EventFragment;
}

export class AuctionHouse extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AuctionHouseInterface;

  functions: {
    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokenId: BigNumber;
      tokenContract: string;
      approved: boolean;
      amount: BigNumber;
      duration: BigNumber;
      firstBidTime: BigNumber;
      reservePrice: BigNumber;
      curatorFeePercentage: number;
      tokenOwner: string;
      bidder: string;
      curator: string;
      auctionCurrency: string;
      0: BigNumber;
      1: string;
      2: boolean;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: number;
      8: string;
      9: string;
      10: string;
      11: string;
    }>;

    "auctions(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokenId: BigNumber;
      tokenContract: string;
      approved: boolean;
      amount: BigNumber;
      duration: BigNumber;
      firstBidTime: BigNumber;
      reservePrice: BigNumber;
      curatorFeePercentage: number;
      tokenOwner: string;
      bidder: string;
      curator: string;
      auctionCurrency: string;
      0: BigNumber;
      1: string;
      2: boolean;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: number;
      8: string;
      9: string;
      10: string;
      11: string;
    }>;

    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createAuction(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentage: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentage: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createBid(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "createBid(uint256,uint256)"(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    endAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "endAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    minBidIncrementPercentage(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "minBidIncrementPercentage()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    setAuctionApproval(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAuctionApproval(uint256,bool)"(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    timeBuffer(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "timeBuffer()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    wethAddress(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "wethAddress()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    zora(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "zora()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  auctions(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    tokenId: BigNumber;
    tokenContract: string;
    approved: boolean;
    amount: BigNumber;
    duration: BigNumber;
    firstBidTime: BigNumber;
    reservePrice: BigNumber;
    curatorFeePercentage: number;
    tokenOwner: string;
    bidder: string;
    curator: string;
    auctionCurrency: string;
    0: BigNumber;
    1: string;
    2: boolean;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: number;
    8: string;
    9: string;
    10: string;
    11: string;
  }>;

  "auctions(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    tokenId: BigNumber;
    tokenContract: string;
    approved: boolean;
    amount: BigNumber;
    duration: BigNumber;
    firstBidTime: BigNumber;
    reservePrice: BigNumber;
    curatorFeePercentage: number;
    tokenOwner: string;
    bidder: string;
    curator: string;
    auctionCurrency: string;
    0: BigNumber;
    1: string;
    2: boolean;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: number;
    8: string;
    9: string;
    10: string;
    11: string;
  }>;

  cancelAuction(
    auctionId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelAuction(uint256)"(
    auctionId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createAuction(
    tokenId: BigNumberish,
    tokenContract: string,
    duration: BigNumberish,
    reservePrice: BigNumberish,
    curator: string,
    curatorFeePercentage: BigNumberish,
    auctionCurrency: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
    tokenId: BigNumberish,
    tokenContract: string,
    duration: BigNumberish,
    reservePrice: BigNumberish,
    curator: string,
    curatorFeePercentage: BigNumberish,
    auctionCurrency: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createBid(
    auctionId: BigNumberish,
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "createBid(uint256,uint256)"(
    auctionId: BigNumberish,
    amount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  endAuction(
    auctionId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "endAuction(uint256)"(
    auctionId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  minBidIncrementPercentage(overrides?: CallOverrides): Promise<number>;

  "minBidIncrementPercentage()"(overrides?: CallOverrides): Promise<number>;

  setAuctionApproval(
    auctionId: BigNumberish,
    approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAuctionApproval(uint256,bool)"(
    auctionId: BigNumberish,
    approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAuctionReservePrice(
    auctionId: BigNumberish,
    reservePrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAuctionReservePrice(uint256,uint256)"(
    auctionId: BigNumberish,
    reservePrice: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;

  "timeBuffer()"(overrides?: CallOverrides): Promise<BigNumber>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  "wethAddress()"(overrides?: CallOverrides): Promise<string>;

  zora(overrides?: CallOverrides): Promise<string>;

  "zora()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokenId: BigNumber;
      tokenContract: string;
      approved: boolean;
      amount: BigNumber;
      duration: BigNumber;
      firstBidTime: BigNumber;
      reservePrice: BigNumber;
      curatorFeePercentage: number;
      tokenOwner: string;
      bidder: string;
      curator: string;
      auctionCurrency: string;
      0: BigNumber;
      1: string;
      2: boolean;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: number;
      8: string;
      9: string;
      10: string;
      11: string;
    }>;

    "auctions(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      tokenId: BigNumber;
      tokenContract: string;
      approved: boolean;
      amount: BigNumber;
      duration: BigNumber;
      firstBidTime: BigNumber;
      reservePrice: BigNumber;
      curatorFeePercentage: number;
      tokenOwner: string;
      bidder: string;
      curator: string;
      auctionCurrency: string;
      0: BigNumber;
      1: string;
      2: boolean;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: number;
      8: string;
      9: string;
      10: string;
      11: string;
    }>;

    cancelAuction(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createAuction(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentage: BigNumberish,
      auctionCurrency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentage: BigNumberish,
      auctionCurrency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createBid(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createBid(uint256,uint256)"(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endAuction(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "endAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    minBidIncrementPercentage(overrides?: CallOverrides): Promise<number>;

    "minBidIncrementPercentage()"(overrides?: CallOverrides): Promise<number>;

    setAuctionApproval(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAuctionApproval(uint256,bool)"(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;

    "timeBuffer()"(overrides?: CallOverrides): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<string>;

    "wethAddress()"(overrides?: CallOverrides): Promise<string>;

    zora(overrides?: CallOverrides): Promise<string>;

    "zora()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    AuctionApprovalUpdated(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      tokenContract: string | null,
      approved: null
    ): EventFilter;

    AuctionBid(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      tokenContract: string | null,
      sender: null,
      value: null,
      firstBid: null,
      extended: null
    ): EventFilter;

    AuctionCanceled(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      tokenContract: string | null,
      tokenOwner: null
    ): EventFilter;

    AuctionCreated(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      tokenContract: string | null,
      duration: null,
      reservePrice: null,
      tokenOwner: null,
      curator: null,
      curatorFeePercentage: null,
      auctionCurrency: null
    ): EventFilter;

    AuctionDurationExtended(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      tokenContract: string | null,
      duration: null
    ): EventFilter;

    AuctionEnded(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      tokenContract: string | null,
      tokenOwner: null,
      curator: null,
      winner: null,
      amount: null,
      curatorFee: null,
      auctionCurrency: null
    ): EventFilter;

    AuctionReservePriceUpdated(
      auctionId: BigNumberish | null,
      tokenId: BigNumberish | null,
      tokenContract: string | null,
      reservePrice: null
    ): EventFilter;
  };

  estimateGas: {
    auctions(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "auctions(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createAuction(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentage: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentage: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createBid(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "createBid(uint256,uint256)"(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    endAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "endAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    minBidIncrementPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "minBidIncrementPercentage()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAuctionApproval(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAuctionApproval(uint256,bool)"(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;

    "timeBuffer()"(overrides?: CallOverrides): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "wethAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    zora(overrides?: CallOverrides): Promise<BigNumber>;

    "zora()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "auctions(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createAuction(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentage: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createAuction(uint256,address,uint256,uint256,address,uint8,address)"(
      tokenId: BigNumberish,
      tokenContract: string,
      duration: BigNumberish,
      reservePrice: BigNumberish,
      curator: string,
      curatorFeePercentage: BigNumberish,
      auctionCurrency: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createBid(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "createBid(uint256,uint256)"(
      auctionId: BigNumberish,
      amount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    endAuction(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "endAuction(uint256)"(
      auctionId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    minBidIncrementPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minBidIncrementPercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAuctionApproval(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAuctionApproval(uint256,bool)"(
      auctionId: BigNumberish,
      approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAuctionReservePrice(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAuctionReservePrice(uint256,uint256)"(
      auctionId: BigNumberish,
      reservePrice: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    timeBuffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timeBuffer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wethAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zora(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "zora()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
