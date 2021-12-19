import { getWAVAXDecimals } from "./../DecimalGetters/WAVAX";
import {
  WAVAX_CONTRACT,
  AVAX_TREASURY_2,
  AVAX_TREASURY_1,
} from "./../Constants";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../generated/Memories/ERC20";
import { toDecimal } from "../Decimals";
import { getWAVAXUSDValue } from "../USDValueGetters/WAVAX";

export const getWAVAXValue = (): BigDecimal => {
  let wavaxContract = ERC20.bind(Address.fromString(WAVAX_CONTRACT));
  const wavaxDecimals = getWAVAXDecimals();
  const bal1 = wavaxContract.balanceOf(Address.fromString(AVAX_TREASURY_1));
  const bal2 = wavaxContract.balanceOf(Address.fromString(AVAX_TREASURY_2));
  const wavaxBalance = toDecimal(bal1.plus(bal2), wavaxDecimals);
  const wavaxValue = wavaxBalance.times(getWAVAXUSDValue());
  return wavaxValue;
};
