import { Address } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../generated/Memories/ERC20";
import { MIM_CONTRACT } from "./../Constants";

export const getMIMDecimals = (): number => {
  const contract = ERC20.bind(Address.fromString(MIM_CONTRACT));
  return contract.decimals();
};
