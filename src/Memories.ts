import { getMIMValueFromMIMWETH } from "./utils/TreasuryValueGetters/JLPValueExtractors/MIMFromMIMWETH";
import { getWAVAXValue } from "./utils/TreasuryValueGetters/WAVAX";
import { LogRebase } from "./../generated/Memories/Memories";
import { loadOrCreateProtocolMetric } from "./utils/ProtocolMetrics";
import { getMIMValue } from "./utils/TreasuryValueGetters/MIM";
import { getWETHValue } from "./utils/TreasuryValueGetters/WETH";
import { getMIMValueFromMIMTIME } from "./utils/TreasuryValueGetters/JLPValueExtractors/MIMFromMIMTIME";
import { getWETHValueFromMIMWETH } from "./utils/TreasuryValueGetters/JLPValueExtractors/WETHFromMIMWETH";

export function handleLogRebase(event: LogRebase): void {
  let timestamp = event.block.timestamp;
  let protocolMetric = loadOrCreateProtocolMetric(timestamp);

  protocolMetric.treasuryMIMMarketValue = getMIMValue();
  protocolMetric.treasuryWAVAXMarketValue = getWAVAXValue();
  protocolMetric.treasuryWETHMarketValue = getWETHValue();
  protocolMetric.treasuryMIMFromTIMEMIMJLP = getMIMValueFromMIMTIME();
  protocolMetric.treasuryMIMFromWETHMIMJLP = getMIMValueFromMIMWETH();
  protocolMetric.treasuryWETHValueFromWETHMIMJLP = getWETHValueFromMIMWETH();

  protocolMetric.save();
}
