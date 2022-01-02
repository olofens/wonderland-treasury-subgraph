import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { ProtocolMetric } from "../../generated/schema";

export function loadOrCreateProtocolMetric(date: string, timestamp: BigInt): ProtocolMetric {
  let protocolMetric = ProtocolMetric.load(date);

  if (protocolMetric == null) {
    protocolMetric = new ProtocolMetric(date);
    protocolMetric.timestamp = timestamp;
    protocolMetric.treasuryMIMMarketValue = BigDecimal.fromString("0");
    protocolMetric.treasuryWAVAXMarketValue = BigDecimal.fromString("0");
    protocolMetric.treasuryWETHMarketValue = BigDecimal.fromString("0");
    protocolMetric.treasuryWETHValueFromWETHMIMJLP = BigDecimal.fromString("0");
    protocolMetric.treasuryMIMFromTIMEMIMJLP = BigDecimal.fromString("0");
    protocolMetric.treasuryMIMFromWETHMIMJLP = BigDecimal.fromString("0");
    protocolMetric.treasuryWAVAXValueFromWAVAXTIMEJLP = BigDecimal.fromString("0");
    protocolMetric.treasuryMIMFromWMEMOMIMSLP = BigDecimal.fromString("0");

    protocolMetric.save();
  } else {
    protocolMetric.timestamp = timestamp;
    protocolMetric.save();
  }

  return protocolMetric;
}
