import { MIM_TIME_CONTRACT } from "./../../Constants";
import { JoePair } from "./../../../../generated/Memories/JoePair";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { toDecimal } from "../../Decimals";
import { getMIMDecimals } from "../../DecimalGetters/MIM";
import { getPairShare } from "./JLPHelper";

export const getMIMValueFromMIMTIME = (): BigDecimal => {
  const pairContract = JoePair.bind(Address.fromString(MIM_TIME_CONTRACT));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // mim
  const totMim = toDecimal(reserve0, getMIMDecimals());
  const share = getPairShare(pairContract);
  const myMim = totMim.times(share);
  return myMim;
};
