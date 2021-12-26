import { getWETHDecimals } from "./../DecimalGetters/WETH";
import {
  WETH_CONTRACT,
  AVAX_TREASURY_2,
  AVAX_TREASURY_1,
} from "./../Constants";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../generated/Memories/ERC20";
import { toDecimal } from "../Decimals";
import { getWETHUSDValue } from "../USDValueGetters/WETH";

export const getWETHValue = (): BigDecimal => {
  let wethContract = ERC20.bind(Address.fromString(WETH_CONTRACT));
  const wethDecimals = getWETHDecimals();
  const bal1 = wethContract.balanceOf(Address.fromString(AVAX_TREASURY_1));
  const bal2 = wethContract.balanceOf(Address.fromString(AVAX_TREASURY_2));
  const wethBalance = toDecimal(bal1.plus(bal2), wethDecimals);
  const wethValue = wethBalance.times(getWETHUSDValue());
  return wethValue;
};
