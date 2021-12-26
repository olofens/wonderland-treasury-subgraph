import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { ProtocolMetric } from "../../generated/schema";

export function loadOrCreateProtocolMetric(timestamp: BigInt): ProtocolMetric {
  let timestampStr = timestamp.toString();
  let protocolMetric = ProtocolMetric.load(timestampStr);

  if (protocolMetric == null) {
    protocolMetric = new ProtocolMetric(timestampStr);
    protocolMetric.timestamp = timestamp;
    protocolMetric.treasuryMIMMarketValue = BigDecimal.fromString("0");
    protocolMetric.treasuryWAVAXMarketValue = BigDecimal.fromString("0");
    protocolMetric.treasuryWETHMarketValue = BigDecimal.fromString("0");
    protocolMetric.treasuryWETHValueFromWETHTIMEJLP = BigDecimal.fromString(
      "0"
    );
    protocolMetric.treasuryMIMFromTIMEMIMJLP = BigDecimal.fromString("0");
    protocolMetric.treasuryMIMFromWETHMIMJLP = BigDecimal.fromString("0");

    protocolMetric.save();
  }

  return protocolMetric;
}
