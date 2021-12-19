import { WAVAX_CONTRACT } from "./../Constants";
import { Address } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../generated/Memories/ERC20";

export const getWAVAXDecimals = (): number => {
  const contract = ERC20.bind(Address.fromString(WAVAX_CONTRACT));
  return contract.decimals();
};
