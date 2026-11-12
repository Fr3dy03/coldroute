# ColdRoute

ColdRoute is a multi-party cold-chain evidence and excursion review platform for
pharmaceutical and regulated logistics. It creates one reviewable evidence case
per shipment, connecting shipment operators, carriers, warehouse operators,
receiving organisations, sensor manufacturers, temperature monitoring systems,
and quality assurance teams.

## Core Principles

- **Shared evidence:** one reviewable case per shipment, not fragmented records.
- **No automatic safety decisions:** quality disposition is a human reviewer responsibility.
- **No payment escrow or custody transfer.**
- **Raw telemetry stays off-chain:** only evidence commitments are recorded on BOT Chain.

## Repository Structure

```
COLDROUTE/
├── docs/                  # Research, architecture, security, sensor, EPCIS, limitations
├── contracts/             # Foundry Solidity project (ConditionCaseRegistry + tests)
├── backend/               # NestJS + TypeScript + Prisma API
├── frontend/              # Next.js marketing site + application UI
├── infra/                 # Deployment scripts
├── README.md
├── .env.example
└── package.json (root)
```

## Smart Contract (BOT Chain)

`contracts/src/ConditionCaseRegistry.sol`

Roles: `DEFAULT_ADMIN_ROLE`, `SHIPMENT_OPERATOR_ROLE`, `SENSOR_ISSUER_ROLE`,
`QUALITY_REVIEWER_ROLE`, `PARTICIPANT_ROLE`.

Functions: `createCase`, `registerSensorIssuer`, `submitConditionSummary`,
`acknowledgeCase`, `challengeEvidence`, `supersedeEvidence`, `recordDisposition`,
`closeCase`, `getCase`, `getCaseStatus`.

Events: `CaseCreated`, `SensorIssuerApproved`, `ConditionEvidenceSubmitted`,
`CaseAcknowledged`, `EvidenceChallenged`, `EvidenceSuperseded`,
`DispositionRecorded`, `CaseClosed`.

### Foundry Tests

```bash
cd contracts
forge build
forge test
```

14 tests pass covering case creation, role gating, evidence submission,
acknowledgement, challenge, disposition, closure, and status reads.

## Backend

NestJS + TypeScript + Prisma (PostgreSQL/TimescaleDB) + viem (BOT Chain).

```bash
cd backend
cp .env.example .env   # edit values
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

Modules: auth, shipment, sensor, integration, observation, excursion,
participant, quality, evidence, reports, blockchain, notification.

## Frontend

Next.js marketing site and pharmaceutical-grade application UI.

Routes (marketing): `/`, `/platform`, `/cold-chain-monitoring`, `/shipment-evidence`,
`/quality-workflows`, `/sensor-integrations`, `/logistics-partners`, `/security`,
`/faq`, `/contact`, `/privacy`, `/terms`.

Routes (app): `/app`, `/app/shipments`, `/app/shipments/new`, `/app/shipments/[id]`,
`/app/sensors`, `/app/sensors/[id]`, `/app/exceptions`, `/app/exceptions/[id]`,
`/app/quality-reviews`, `/app/quality-reviews/[id]`, `/app/partners`, `/app/evidence`,
`/app/reports`, `/app/integrations`, `/app/settings`.

## Design System

- Colours: White `#FFFFFF`, Ice `#F2F7FA`, Midnight Navy `#17334C`, Deep Blue
  `#255C81`, Ice Blue `#DDECF5`, Teal `#3B8F91`, Warning Amber `#E3A13C`,
  Excursion Coral `#C95650`, Muted Slate `#687A88`, Border `#DDE6EC`.
- Typography: Inter (interface), IBM Plex Mono (measurements, IDs, timestamps,
  shipment refs, evidence hashes).

## BOT Chain Integration

Testnet: chain ID 968 — `https://rpc.bohr.life` — `https://scan.bohr.life/`
Mainnet: chain ID 677 — `https://rpc.botchain.ai` — `https://scan.botchain.ai/`

Evidence commitments, case status, participant acknowledgements, and qualified
disposition references are recorded on BOT Chain. Raw telemetry is never stored
on-chain.

## Documentation

- `docs/RESEARCH.md` — standards and references (WHO, GS1 EPCIS, OGC SensorThings, BOT Chain)
- `docs/SENSOR_INTEGRATIONS.md` — provider adapter patterns and DEMO mode
- `docs/EPCIS_MAPPING.md` — GS1 EPCIS event mapping
- `docs/ARCHITECTURE.md` — system architecture and stack
- `docs/SECURITY.md` — security and privacy controls
- `docs/KNOWN_LIMITATIONS.md` — known limitations

## Acceptance Criteria

- A real sensor feed or explicitly labelled demo feed can be ingested.
- An excursion can be detected from configured thresholds.
- An evidence dossier can be generated.
- A partner can acknowledge an event.
- A qualified reviewer can record a disposition.
- Evidence commitments can be independently verified.
- The interface is suitable for pharmaceutical and regulated-logistics professionals.
