import { getWAVAXValue } from "./utils/TreasuryValueGetters/WAVAX";
import { LogRebase } from "./../generated/Memories/Memories";
import { loadOrCreateProtocolMetric } from "./utils/ProtocolMetrics";
import { getMIMValue } from "./utils/TreasuryValueGetters/MIM";

export function handleLogRebase(event: LogRebase): void {
  let timestamp = event.block.timestamp;
  let protocolMetric = loadOrCreateProtocolMetric(timestamp);

  protocolMetric.treasuryMIMMarketValue = getMIMValue();
  protocolMetric.treasuryWAVAXMarketValue = getWAVAXValue();

  protocolMetric.save();
}
