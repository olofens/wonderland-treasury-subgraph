import { Address } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../generated/Memories/ERC20";
import { WETH_CONTRACT } from "./../Constants";

export const getWETHDecimals = (): number => {
  const contract = ERC20.bind(Address.fromString(WETH_CONTRACT));
  return contract.decimals();
};
