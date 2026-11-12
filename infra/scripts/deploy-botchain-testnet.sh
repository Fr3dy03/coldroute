#!/usr/bin/env bash
# Deploy ConditionCaseRegistry to BOT Chain testnet (Bohr, chain ID 968)
# Usage: source .env && ./infra/scripts/deploy-botchain-testnet.sh

set -euo pipefail

cd contracts

export RPC_URL="${BOT_TESTNET_RPC:-https://rpc.bohr.life}"

forge script script/Deploy.s.sol:DeployScript \
  --rpc-url "$RPC_URL" \
  --broadcast \
  --verify \
  -vvvv

echo "Deployment complete. Verify on: https://scan.bohr.life/"
