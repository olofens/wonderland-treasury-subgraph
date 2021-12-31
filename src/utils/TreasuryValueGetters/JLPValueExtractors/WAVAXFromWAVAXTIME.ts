import { getWAVAXUSDValue } from "./../../USDValueGetters/WAVAX";
import { getWAVAXDecimals } from "./../../DecimalGetters/WAVAX";
import { WAVAX_TIME_CONTRACT } from "./../../Constants";
import { JoePair } from "./../../../../generated/Memories/JoePair";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { toDecimal } from "../../Decimals";
import { getPairShare } from "./JLPHelper";

export const getWAVAXFromWAVAXTIME = (): BigDecimal => {
  const pairContract = JoePair.bind(Address.fromString(WAVAX_TIME_CONTRACT));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // avax

  const totWavax = toDecimal(reserve0, getWAVAXDecimals());

  const share = getPairShare(pairContract);
  const myWAVAX = totWavax.times(share);
  return getWAVAXUSDValue().times(myWAVAX);
};
