# Known Limitations

## General

1. **No automatic pharmaceutical safety decisions.** ColdRoute records evidence
   and supports human quality review; it never labels goods safe or unsafe
   automatically.
2. **No payment escrow or custody transfer.** The smart contract does not hold
   funds or transfer shipment custody.
3. **Raw telemetry is off-chain.** Continuous temperature observations are stored
   in PostgreSQL/TimescaleDB; only evidence commitments are on BOT Chain.
4. **EPCIS and SensorThings alignment is a reference, not certification.**
   ColdRoute aligns to these standards where suitable but does not claim
   conformance certification without testing.
5. **Provider compatibility is unclaimed.** Sensor adapters support defined
   patterns (polling, webhooks, SensorThings, EPCIS, batch) but actual provider
   compatibility requires per-provider testing.
6. **On-chain commitments are public.** Transaction hashes and commitments on
   BOT Chain are visible; raw readings are not.

## BOT Chain Specific

7. **Does not assume unrestricted `eth_getLogs`.** The backend uses direct
   contract reads and transaction receipt reconciliation for verification.
8. **Testnet vs mainnet.** Development targets BOT Chain testnet (chain ID 968).
   Mainnet (chain ID 677) requires separate deployment and key management.
9. **Immutability of on-chain records.** Case status and commitments recorded on
   chain cannot be deleted; off-chain corrections are reflected via supersession
   events rather than mutation.

## Data & Integrity

10. **Clock drift.** Sensor clock drift is recorded where reported by the
    provider but not automatically corrected.
11. **Timezone errors.** All timestamps are stored as UTC ISO 8601; client-side
    timezone rendering is the frontend's responsibility.
12. **Missing data detection.** Depends on configured measurement frequency;
    irregular sensor schedules may produce false gap events.

## UI / UX

13. **No live GPS or map interfaces.** ColdRoute avoids unnecessary maps and
    fake live GPS, per product design identity.
14. **DEMO mode is visibly labelled.** Synthetic demo data is marked and must
    not be used as production evidence.
