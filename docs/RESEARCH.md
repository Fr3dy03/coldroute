# ColdRoute Research Standards

This document records the external standards, regulations, and technical references
that inform the ColdRoute design. ColdRoute does not copy any unrelated project on
this machine; every reference below is a public standard or official documentation
source cited for interoperability and regulatory alignment.

## 1. Cold Chain & Pharmaceutical Storage Standards

### World Health Organization (WHO) Good Storage and Distribution Practices
- Source: https://www.who.int/publications/m/item/trs-1025-annex-7/
- Use: Defines good storage and distribution practices for pharmaceutical products,
  including temperature monitoring, cold-chain equipment requirements, and excursion
  handling expectations that inform the quality-review workflow.

### WHO Cold-Chain Equipment and Dry-Store Temperature Mapping Tool
- Source: https://www.who.int/publications/m/item/cold-chain-equipment-and-dry-store-temperature-mapping-tool
- Use: Reference for temperature mapping methodology, sensor placement, and the
  concept of acceptable temperature bands during storage and transport.

### Kenya Pharmacy and Poisons Board
- Source: https://web.pharmacyboardkenya.org/
- Use: National pharmaceutical regulator referenced as an example of the regulatory
  context in which ColdRoute evidence may be reviewed. ColdRoute does not integrate
  with this board and makes no claim of endorsement.

## 2. Supply-Chain Event & Evidence Standards

### GS1 EPCIS (Electronic Product Code Information Services)
- Standard artefacts: https://ref.gs1.org/standards/epcis/artefacts
- EPCIS 2.0.0: https://ref.gs1.org/standards/epcis/2.0.0/
- Use: Interoperability reference for supply-chain events. ColdRoute maps shipment
  lifecycle events (create, dispatch, handoff, receive, excursion) to EPCIS event
  patterns where suitable. See docs/EPCIS_MAPPING.md.

### OGC SensorThings API
- Source: https://www.ogc.org/standards/sensorthings/
- Use: Reference for the observation model (Sensor, ObservedProperty, Datastream,
  Observation, FeatureOfInterest). ColdRoute aligns its SensorObservation data model
  to the SensorThings observation pattern where it provides a suitable fit.
  See docs/SENSOR_INTEGRATIONS.md.

## 3. BOT Chain (Blockchain of Things)

ColdRoute records evidence commitments on BOT Chain. Raw telemetry is never stored
on-chain.

### Documentation
- Developer documentation: https://dev-docs.botchain.ai/docs/intro/
- Developer quick guide: https://dev-docs.botchain.ai/docs/Developers/quick-guide/
- JSON-RPC endpoint: https://dev-docs.botchain.ai/docs/Developers/json-rpc-endpoint/
- Node configuration best practices: https://dev-docs.botchain.ai/docs/Developers/bot-chain-node-configuration-best-practices/
- Node types: https://dev-docs.botchain.ai/docs/Developers/node-types/
- Blob API: https://dev-docs.botchain.ai/docs/Developers/blob-api/

### GitHub & Ecosystem
- GitHub organisation: https://github.com/bl-BOHR
- Website: https://www.botchain.ai/en/
- Ecosystem / project party: https://www.botchain.ai/en/project-party/
- Support programme: https://www.botchain.ai/en/ecosystem-support/

### Networks
| Network | Chain ID | RPC | Explorer |
|---------|----------|-----|----------|
| Mainnet | 677 | https://rpc.botchain.ai | https://scan.botchain.ai/ |
| Testnet (Bohr) | 968 | https://rpc.bohr.life | https://scan.bohr.life/ |

### Brand Assets
- Brand kit: https://www.botchain.ai/static/BOT%20Chain%20Assets/BOT%20Chain%20Brand%20Kit.zip
- Brand guideline: https://www.botchain.ai/static/BOT%20Chain%20Assets/BOT%20Chain%20Brand%20Guideline.pdf

## 4. Data Elements Studied

ColdRoute data model is built around these studied elements:
- Temperature observations (value, unit, sensor, timestamp)
- Supply-chain events (type, actor, location, timestamp)
- Product and shipment identifiers
- Sensor identity (serial, model, provider, calibration reference)
- Measurement timestamp (when the sensor measured)
- Ingestion timestamp (when ColdRoute received the observation)
- Event correction (supersede, amend, annotate)
- Chain of evidence (commitments, digests, references)
- Good storage practices (thresholds, bands, review, disposition)

## 5. What ColdRoute Does NOT Do

- Does not make automatic pharmaceutical safety decisions.
- Does not implement payment escrow.
- Does not implement shipment custody transfer.
- Does not store continuous temperature telemetry on-chain.
- Does not claim actual sensor-provider compatibility without testing.
- Does not reuse or inspect unrelated projects on this machine.

## 6. Design Constraints Derived from Research

| Constraint | Source | Rationale |
|------------|--------|-----------|
| Evidence commitments on-chain, raw telemetry off-chain | BOT Chain usage guidance | On-chain storage is expensive and unsuitable for high-frequency telemetry |
| EPCIS as interoperability reference | GS1 | Enables exchange with existing supply-chain systems |
| SensorThings observation model | OGC | Standardised observation representation |
| No automatic safety label | Product definition | Quality disposition is a human reviewer responsibility |
| Organisation boundaries | Security requirements | Multi-tenant cold-chain data must be isolated per organisation |
