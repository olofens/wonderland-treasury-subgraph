import { getWETHDecimals } from "./../../DecimalGetters/WETH";
import { JoePair } from "./../../../../generated/Memories/JoePair";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { WETH_MIM_CONTRACT } from "../../Constants";
import { toDecimal } from "../../Decimals";
import { getMIMDecimals } from "../../DecimalGetters/MIM";
import { getPairShare } from "./JLPHelper";

export const getWETHValueFromMIMWETH = (): BigDecimal => {
  const pairContract = JoePair.bind(Address.fromString(WETH_MIM_CONTRACT));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // mim
  const reserve1 = result.value.value1; // weth

  const totWeth = toDecimal(reserve1, getWETHDecimals());
  const totMim = toDecimal(reserve0, getMIMDecimals());

  const wethRate = totMim.div(totWeth);

  const share = getPairShare(pairContract);
  const myWETH = totWeth.times(share);
  return wethRate.times(myWETH);
};
