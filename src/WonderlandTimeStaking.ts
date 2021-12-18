import { Address } from "@graphprotocol/graph-ts";
import { MIM } from "../generated/MIM/MIM";
import { RebaseCall } from "./../generated/WonderlandTimeStaking/WonderlandTimeStaking";
import { MIM_CONTRACT, TREASURY_ADDRESS_1 } from "./utils/Constants";
import { toDecimal } from "./utils/Decimals";
import { loadOrCreateProtocolMetric } from "./utils/ProtocolMetrics";

export function handleRebase(call: RebaseCall): void {
  let timestamp = call.block.timestamp;
  let protocolMetric = loadOrCreateProtocolMetric(timestamp);

  let mimContract = MIM.bind(Address.fromString(MIM_CONTRACT));
  const mimBalance = mimContract.balanceOf(
    Address.fromString(TREASURY_ADDRESS_1)
  );

  protocolMetric.treasuryMIMMarketValue = toDecimal(mimBalance);

  protocolMetric.save();
}
