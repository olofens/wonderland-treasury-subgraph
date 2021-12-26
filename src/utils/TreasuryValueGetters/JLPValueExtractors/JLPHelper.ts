import { AVAX_TREASURY_1, AVAX_TREASURY_2 } from "./../../Constants";
import { JoePair } from "./../../../../generated/Memories/JoePair";
import { Address, BigDecimal, log } from "@graphprotocol/graph-ts";

// Given a JLP Pair contract, returns the treasury's share of the pool as a BigDecimal 0-1.
export function getPairShare(pair: JoePair): BigDecimal {
  const attempt = pair.try_totalSupply();
  if (attempt.reverted) {
    return BigDecimal.fromString("0");
  }

  const totalSupply = attempt.value.toBigDecimal();
  const wallet1Share = pair
    .balanceOf(Address.fromString(AVAX_TREASURY_1))
    .toBigDecimal();
  const wallet2Share = pair
    .balanceOf(Address.fromString(AVAX_TREASURY_2))
    .toBigDecimal();
  const share = wallet1Share.plus(wallet2Share);
  const proportion = share.div(totalSupply);
  log.info("JLP SHARE PROPORTION" + proportion.toString(), []);
  return proportion;
}
