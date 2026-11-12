# ColdRoute Architecture

## Overview

ColdRoute is a multi-party cold-chain evidence and excursion review platform.
It connects shipment operators, carriers, warehouse operators, receiving
organisations, sensor manufacturers, temperature monitoring systems, and quality
assurance teams through one reviewable evidence case per shipment.

The platform does not make automatic pharmaceutical safety decisions.

## High-Level Architecture

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│  Frontend   │─────▶│   Backend    │─────▶│  PostgreSQL │
│  (Next.js)  │      │  (NestJS)    │      │  + Timescale│
└─────────────┘      └──────────────┘      └─────────────┘
        │                   │                   │
        │                   │                   ▼
        │                   │             ┌─────────────┐
        │                   │             │   Redis     │
        │                   │             │  (BullMQ)   │
        │                   │             └─────────────┘
        │                   │
        ▼                   ▼
   Object Storage   BOT Chain
   (evidence docs)  (commitments)
```

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js, TypeScript, Tailwind | Application UI and marketing site |
| Backend | NestJS, TypeScript | API, business logic, modules |
| Timeseries DB | PostgreSQL + TimescaleDB | Sensor observations, excursions |
| Relational DB | PostgreSQL | Users, orgs, shipments, audit |
| Cache / Queue | Redis + BullMQ | Ingestion jobs, notifications |
| Object Storage | S3-compatible | Evidence documents |
| Blockchain | BOT Chain + viem | Evidence commitments, case status |
| Smart Contract | Solidity (Foundry) | ConditionCaseRegistry |

## Backend Modules

1. **Shipment management** — registration, participants, lifecycle
2. **Sensor management** — registration, calibration, connection state
3. **Sensor integration** — provider adapters, ingestion
4. **Observation ingestion** — normalisation, dedup, persistence
5. **Threshold engine** — policy evaluation
6. **Excursion detection** — excursion event creation
7. **Participant management** — invitations, acknowledgements
8. **Quality review** — excursion review, disposition
9. **Evidence management** — documents, dossier generation
10. **Reports** — evidence dossier PDF/report generation
11. **Blockchain** — BOT Chain commitment submission and verification
12. **Notifications** — email / in-app alerts

## Data Models

User, Organisation, Shipment, ShipmentParticipant, ShipmentProduct,
TemperaturePolicy, Sensor, SensorCalibrationReference, SensorConnection,
SensorObservation, Excursion, EvidenceDocument, Acknowledgement,
QualityReview, Disposition, Notification, Transaction, AuditLog.

## Blockchain Integration

- Network: BOT Chain testnet (968, https://rpc.bohr.life) during development;
  mainnet (677, https://rpc.botchain.ai) for production.
- Contract: ConditionCaseRegistry (see contracts/src/ConditionCaseRegistry.sol)
- On-chain: case commitments, sensor issuer approvals, condition summaries,
  acknowledgements, challenges, supersessions, dispositions, closures.
- Off-chain: raw telemetry, evidence documents, full observation history.
- Reads: direct contract reads and transaction receipt reconciliation.
- Does not assume unrestricted `eth_getLogs`.

## Security Boundaries

- Organisation boundaries isolate multi-tenant data.
- Shipment identities and exact routes are protected (access-controlled).
- Sensor credentials encrypted at rest.
- Evidence documents secured; downloads audited.
- Webhook signature validation.
- Original sensor data preserved; corrections transparent.

## Frontend Routes

Marketing: /, /platform, /cold-chain-monitoring, /shipment-evidence,
/quality-workflows, /sensor-integrations, /logistics-partners, /security,
/faq, /contact, /privacy, /terms

Application: /app, /app/shipments, /app/shipments/new, /app/shipments/[id],
/app/sensors, /app/sensors/[id], /app/exceptions, /app/exceptions/[id],
/app/quality-reviews, /app/quality-reviews/[id], /app/partners, /app/evidence,
/app/reports, /app/integrations, /app/settings

## Design System

Colors: White #FFFFFF, Ice #F2F7FA, Midnight Navy #17334C, Deep Blue #255C81,
Ice Blue #DDECF5, Teal #3B8F91, Warning Amber #E3A13C, Excursion Coral #C95650,
Muted Slate #687A88, Border #DDE6EC

Typography: Inter (interface), IBM Plex Mono (measurements, IDs, timestamps,
shipment refs, evidence hashes).
