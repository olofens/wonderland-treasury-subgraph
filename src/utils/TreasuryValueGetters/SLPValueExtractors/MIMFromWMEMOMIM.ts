import { UniswapV2Pair } from "./../../../../generated/Memories/UniswapV2Pair";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { WMEMO_MIM_CONTRACT } from "../../Constants";
import { toDecimal } from "../../Decimals";
import { getMIMDecimals } from "../../DecimalGetters/MIM";
import { getUniV2PairShare } from "./SLPHelper";

export const getMIMValueFromWMEMOMIM = (): BigDecimal => {
  const pairContract = UniswapV2Pair.bind(Address.fromString(WMEMO_MIM_CONTRACT));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve1 = result.value.value1; // mim
  const totMim = toDecimal(reserve1, getMIMDecimals());
  const share = getUniV2PairShare(pairContract);
  const myMim = totMim.times(share);
  return myMim;
};
