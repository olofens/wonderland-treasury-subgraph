import { Address, BigInt } from "@graphprotocol/graph-ts";

export interface BalanceOfable {
  balanceOf(param0: Address): BigInt;
}
