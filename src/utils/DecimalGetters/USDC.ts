import { USDC_CONTRACT } from "./../Constants";
import { Address } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../generated/Memories/ERC20";

export const getUSDCDecimals = (): number => {
  const contract = ERC20.bind(Address.fromString(USDC_CONTRACT));
  return contract.decimals();
};
