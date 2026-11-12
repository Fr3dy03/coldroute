# Deployments

Target networks:
- Testnet (Bohr): chain ID 968 — RPC https://rpc.bohr.life — Explorer https://scan.bohr.life/
- Mainnet: chain ID 677 — RPC https://rpc.botchain.ai — Explorer https://scan.botchain.ai/

Contract: ConditionCaseRegistry
Artifacts: contracts/out/ConditionCaseRegistry.sol/ConditionCaseRegistry.json
ABI included in build artifacts.

Deploy using Foundry:
  forge script script/Deploy.s.sol:DeployScript --rpc-url <RPC> --broadcast

Transaction hashes and receipts are recorded in backend `Transaction` table for
independent receipt verification (per product spec section 14).
