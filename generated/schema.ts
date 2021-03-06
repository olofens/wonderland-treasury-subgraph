// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ProtocolMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("treasuryMIMMarketValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set(
      "treasuryWAVAXMarketValue",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set(
      "treasuryWETHMarketValue",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set(
      "treasuryMIMFromWETHMIMJLP",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set(
      "treasuryMIMFromTIMEMIMJLP",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set(
      "treasuryWETHValueFromWETHMIMJLP",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set(
      "treasuryWAVAXValueFromWAVAXTIMEJLP",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set(
      "treasuryMIMFromWMEMOMIMSLP",
      Value.fromBigDecimal(BigDecimal.zero())
    );
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProtocolMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ProtocolMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ProtocolMetric", id.toString(), this);
    }
  }

  static load(id: string): ProtocolMetric | null {
    return changetype<ProtocolMetric | null>(store.get("ProtocolMetric", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get treasuryMIMMarketValue(): BigDecimal {
    let value = this.get("treasuryMIMMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryMIMMarketValue(value: BigDecimal) {
    this.set("treasuryMIMMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryWAVAXMarketValue(): BigDecimal {
    let value = this.get("treasuryWAVAXMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryWAVAXMarketValue(value: BigDecimal) {
    this.set("treasuryWAVAXMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryWETHMarketValue(): BigDecimal {
    let value = this.get("treasuryWETHMarketValue");
    return value!.toBigDecimal();
  }

  set treasuryWETHMarketValue(value: BigDecimal) {
    this.set("treasuryWETHMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryMIMFromWETHMIMJLP(): BigDecimal {
    let value = this.get("treasuryMIMFromWETHMIMJLP");
    return value!.toBigDecimal();
  }

  set treasuryMIMFromWETHMIMJLP(value: BigDecimal) {
    this.set("treasuryMIMFromWETHMIMJLP", Value.fromBigDecimal(value));
  }

  get treasuryMIMFromTIMEMIMJLP(): BigDecimal {
    let value = this.get("treasuryMIMFromTIMEMIMJLP");
    return value!.toBigDecimal();
  }

  set treasuryMIMFromTIMEMIMJLP(value: BigDecimal) {
    this.set("treasuryMIMFromTIMEMIMJLP", Value.fromBigDecimal(value));
  }

  get treasuryWETHValueFromWETHMIMJLP(): BigDecimal {
    let value = this.get("treasuryWETHValueFromWETHMIMJLP");
    return value!.toBigDecimal();
  }

  set treasuryWETHValueFromWETHMIMJLP(value: BigDecimal) {
    this.set("treasuryWETHValueFromWETHMIMJLP", Value.fromBigDecimal(value));
  }

  get treasuryWAVAXValueFromWAVAXTIMEJLP(): BigDecimal {
    let value = this.get("treasuryWAVAXValueFromWAVAXTIMEJLP");
    return value!.toBigDecimal();
  }

  set treasuryWAVAXValueFromWAVAXTIMEJLP(value: BigDecimal) {
    this.set("treasuryWAVAXValueFromWAVAXTIMEJLP", Value.fromBigDecimal(value));
  }

  get treasuryMIMFromWMEMOMIMSLP(): BigDecimal {
    let value = this.get("treasuryMIMFromWMEMOMIMSLP");
    return value!.toBigDecimal();
  }

  set treasuryMIMFromWMEMOMIMSLP(value: BigDecimal) {
    this.set("treasuryMIMFromWMEMOMIMSLP", Value.fromBigDecimal(value));
  }
}
