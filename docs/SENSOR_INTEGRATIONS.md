# Sensor Integrations

ColdRoute supports ingestion of temperature observations from multiple sensor
providers and monitoring systems. Integrations are built as provider adapters
behind a common ingestion contract. Raw telemetry is never stored on-chain.

## Supported Integration Patterns

| Pattern | Description | Best For |
|---------|-------------|----------|
| API polling | ColdRoute polls the provider API on a schedule | Providers without webhook support |
| Signed webhooks | Provider pushes observations to ColdRoute webhook | Real-time feeds from modern platforms |
| OGC SensorThings API | Provider exposes a SensorThings-compatible endpoint | Standards-aligned sensor platforms |
| EPCIS event integration | Provider sends EPCIS observation/aggregation events | GS1-aligned supply-chain partners |
| Batch import | CSV/JSONL file upload of historical observations | One-time migration or offline sensors |

## Adapter Requirements

Every provider adapter must implement:

1. **Authentication** — API keys, OAuth tokens, or provider-specific credentials,
   stored encrypted at rest.
2. **Retries** — Exponential backoff with jitter for transient failures.
3. **Rate limiting** — Respect provider rate limits; configurable concurrency caps.
4. **Duplicate detection** — Deduplicate by (sensor_id, measurement_timestamp,
   ingestion_source) before persistence.
5. **Out-of-order timestamps** — Accept observations whose measurement timestamp
   precedes previously ingested values; store both measurement and ingestion
   timestamps.
6. **Sensor clock drift** — Record provider-reported clock offset where available;
   flag observations exceeding a configurable drift threshold.
7. **Missing intervals** — Detect gaps in expected measurement frequency and emit
   missing-data events.
8. **Unit validation** — Validate that observation units match the sensor's
   configured unit (Celsius or Fahrenheit); reject or convert with an audit trail.
9. **Signature verification** — Verify webhook signatures when the provider
   supplies them; reject unsigned or tampered payloads.

## DEMO Mode

A visibly-labelled DEMO mode is provided for development and demonstration.
DEMO mode:
- Generates synthetic temperature readings for a demo sensor.
- Is clearly marked with a "DEMO" badge in the UI.
- Never connects to a real provider.
- Must not be used for production pharmaceutical evidence.

## Data Model Alignment

Observations ingested via any adapter are normalised to the ColdRoute
`SensorObservation` model:

- `sensor_id` — ColdRoute sensor reference
- `measurement_timestamp` — when the sensor measured (ISO 8601)
- `ingestion_timestamp` — when ColdRoute received it (ISO 8601)
- `value` — numeric reading
- `unit` — "C" or "F"
- `source` — provider/adapter name
- `raw_payload` — original provider payload (JSON)
- `correction_of` — optional reference to a superseded observation

## Security Notes

- Sensor credentials are encrypted at rest.
- Webhooks are validated by signature and source IP where possible.
- Document downloads are audited.
- Original sensor data is preserved; corrections create new records rather than
  mutating existing ones.
