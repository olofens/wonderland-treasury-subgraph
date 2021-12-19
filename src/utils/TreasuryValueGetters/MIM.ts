import { AVAX_TREASURY_1, AVAX_TREASURY_2 } from "./../Constants";
import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { MIM } from "../../../generated/MIM/MIM";
import { MIM_CONTRACT } from "../Constants";
import { toDecimal } from "../Decimals";
import { ERC20 } from "../../../generated/Memories/ERC20";

export const getMIMValue = (): BigDecimal => {
  let mimContract = ERC20.bind(Address.fromString(MIM_CONTRACT));
  const mimDecimals = mimContract.decimals();
  const bal1 = mimContract.balanceOf(Address.fromString(AVAX_TREASURY_1));
  const bal2 = mimContract.balanceOf(Address.fromString(AVAX_TREASURY_2));
  const mimBalance = bal1.plus(bal2);
  return toDecimal(mimBalance, mimDecimals);
};
