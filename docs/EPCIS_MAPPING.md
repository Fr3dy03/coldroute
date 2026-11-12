# EPCIS Mapping Reference

ColdRoute uses GS1 EPCIS as an interoperability reference for supply-chain events.
This document maps ColdRoute concepts to EPCIS 2.0 event patterns. ColdRoute does
not create an incompatible proprietary data structure without a documented reason;
where EPCIS provides a suitable event model, ColdRoute aligns to it.

## Core EPCIS Concepts Used

| EPCIS Concept | ColdRoute Equivalent | Notes |
|---------------|----------------------|-------|
| `EPCISEvent` | Shipment / Excursion / Acknowledgement event | Core event wrapper |
| `eventTime` | Event timestamp | When the event occurred |
| `recordTime` | Ingestion timestamp | When ColdRoute recorded the event |
| `eventType` | OBSERVATION / TRANSFORMATION / etc. | ColdRoute extends with EXCURSION, ACKNOWLEDGEMENT |
| `bizStep` | Shipment stage | e.g. LOADING, TRANSIT, RECEIVING |
| `disposition` | Quality disposition | e.g. ACCEPTED, REJECTED, QUARANTINED |
| `bizLocation` | Origin / destination / warehouse | Location context |
| `readPoint` | Sensor / checkpoint | Specific reading point |
| `epcList` | Shipment / product identifiers | Shipment references and product IDs |
| `childEpcs` / `parentEpcs` | Shipment-product relationships | Hierarchical packaging |

## ColdRoute Event → EPCIS Mapping

| ColdRoute Event | EPCIS eventType | bizStep | disposition | Key fields |
|-----------------|-----------------|---------|-------------|------------|
| Shipment created | CREATE | LOADING | — | shipmentId, origin, expectedDelivery |
| Sensor registered | ADD | — | — | sensorId, model, serial, calibrationRef |
| Shipment dispatched | TRANSPORT | TRANSIT | — | shipmentId, carrier |
| Temperature observation | OBSERVATION | TRANSIT | — | sensorId, value, unit, measurementTime |
| Excursion detected | EXCEPTION | TRANSIT | EXCURSION | excursionId, threshold, duration |
| Handoff acknowledged | TRANSFER | RECEIVING | — | shipmentId, receiver, acknowledgementId |
| Quality review completed | REVIEW | — | QUALIFIED | reviewerId, disposition |
| Evidence superseded | CORRECTION | — | — | originalId, supersedingId |

## What ColdRoute Does NOT Map to EPCIS

- Continuous temperature telemetry is not represented as individual EPCIS events
  per reading (volume would be prohibitive). Instead, aggregated observation
  summaries and excursion events are mapped.
- On-chain commitments are stored on BOT Chain, not in EPCIS XML. EPCIS serves
  as the event-schema reference; BOT Chain provides the commitment layer.

## Extension Approach

ColdRoute extends EPCIS with cold-chain-specific fields:
- `temperatureThresholdMin` / `temperatureThresholdMax`
- `unit` (C / F)
- `sensorConnectionStatus`
- `missingDataInterval`
- `onChainReference` (BOT Chain transaction hash)

These extensions are documented so that implementers can produce EPCIS-aligned
events consumable by GS1-compatible supply-chain systems.

## Validation Status

EPCIS alignment is a design reference. Producing and consuming valid EPCIS XML
requires validation against a specific GS1 implementation; ColdRoute does not
claim EPCIS certification without conformance testing.
