# Holly+ Artist Minting Contract

Features:
1. Content and metadata URIs with hashes, ability to update (hashes are sha256)
3. Updatable URL info by artist (can be used if IPFS provider needs to change etc, enforced by on-chain hash).
4. Ability to resign ownership of minter ability (uses roles: 1. maintainer, 2. minter, and 3. admin, resigning from admin "locks" the contract)
5. Royalties through new EIP2981 standard - payout addresses can be changed per mint, but the BPS cannot be changed.

How to customize and use for yourself:
1. update deployment in `deploy/00_hollyplus.ts`
2. update contract name and information in `contracts/HollyPlus.sol`.
3. run `yarn run test`
4. setup `networks.private.json`, see hardhat networks config for format
5. run `yarn run deploy --network rinkeby` to deploy to rinkeby
6. run `yarn run deploy --network mainnet` to deploy to mainnet

See deployed:

Current canoical deployment is at `0x6688Ee4E6e17a9cF88A13Da833b011E64C2B4203`

