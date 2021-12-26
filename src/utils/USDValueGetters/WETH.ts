import { getWETHDecimals } from "./../DecimalGetters/WETH";
import { WETH_MIM_CONTRACT } from "./../Constants";
import { JoePair } from "./../../../generated/Memories/JoePair";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { toDecimal } from "../Decimals";
import { getMIMDecimals } from "../DecimalGetters/MIM";

export const getWETHUSDValue = (): BigDecimal => {
  const pairContract = JoePair.bind(Address.fromString(WETH_MIM_CONTRACT));

  const result = pairContract.try_getReserves();
  if (result.reverted) {
    return BigDecimal.fromString("0");
  }

  const reserve0 = result.value.value0; // mim
  const reserve1 = result.value.value1; // weth

  const nWeth = toDecimal(reserve1, getWETHDecimals());
  const nMim = toDecimal(reserve0, getMIMDecimals());

  const wethRate = nMim.div(nWeth);
  return wethRate;
};
