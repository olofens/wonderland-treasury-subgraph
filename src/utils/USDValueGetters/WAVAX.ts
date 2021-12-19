import { WAVAX_USDC_CONTRACT } from "./../Constants";
import { JoePair } from "./../../../generated/Memories/JoePair";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { getUSDCDecimals } from "../DecimalGetters/USDC";
import { getWAVAXDecimals } from "../DecimalGetters/WAVAX";
import { toDecimal } from "../Decimals";

export const getWAVAXUSDValue = (): BigDecimal => {
  const pairContract = JoePair.bind(Address.fromString(WAVAX_USDC_CONTRACT));

  const reserves = pairContract.getReserves();
  const reserve0 = reserves.value0; // usdc
  const reserve1 = reserves.value1; // wavax

  const nWavax = toDecimal(reserve1, getWAVAXDecimals());
  const nUsdc = toDecimal(reserve0, getUSDCDecimals());

  const wavaxRate = nUsdc.div(nWavax);
  return wavaxRate;
};
