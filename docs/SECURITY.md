# Security and Privacy

## Scope

ColdRoute handles sensitive cold-chain evidence for pharmaceutical and regulated
logistics. This document describes the security and privacy controls.

## Data Protection

### Shipment Identities
- Shipment references and exact routes are access-controlled.
- Only organisation members and invited participants can view a shipment.
- Public marketing site contains no shipment data.

### Sensor Credentials
- Provider API keys and OAuth tokens are encrypted at rest (AES-256 or equivalent).
- Credentials are never returned in API responses.

### Evidence Documents
- Evidence documents are stored in object storage with signed, time-limited URLs.
- Document downloads are audited (who, when, which document).
- Access requires organisation membership or participant role on the shipment.

### Quality Records
- Quality reviews and dispositions are restricted to quality reviewers and
  authorised parties.
- Review records are immutable once finalised.

## Access Control

- Organisation boundaries isolate data between organisations.
- Role-based access: operator, sensor issuer, quality reviewer, participant.
- Partner acknowledgement requires explicit participant action.
- Unauthenticated access to /app routes is rejected.

## Integrity Controls

- Webhook signatures verified when providers supply them.
- Original sensor data is preserved; corrections create new records with
  `correction_of` references rather than mutating history.
- Evidence commitments are recorded on BOT Chain for independent verification.
- Audit log records all create, update, delete, and access events.

## Blockchain Security

- Role-based access control on ConditionCaseRegistry via OpenZeppelin AccessControl.
- DEFAULT_ADMIN_ROLE manages role grants.
- No funds held in contract (no escrow, no custody transfer).
- Transaction receipt reconciliation confirms on-chain finality.
- Does not assume unrestricted `eth_getLogs`; uses direct reads and receipts.

## Privacy

- ColdRoute does not sell shipment or sensor data.
- Personal data is limited to what is necessary for shipment administration.
- Users may request deletion of their account data per applicable law; on-chain
  commitments are immutable by design (this is a known limitation).

## Known Security Limitations

- On-chain commitments are public (transaction hashes, addresses, commitments).
  Raw telemetry is not on-chain.
- DEMO mode synthetic data is labelled and not suitable for production evidence.
- Key management for operator wallets is the responsibility of the deploying
  organisation.
