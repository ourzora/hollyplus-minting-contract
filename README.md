# Hollyplus minting contract

Features:
1. content and metadata URIs with hashes, ability to update
2. updatable gateway info
3. ability to resign ownership of minter ability
4. royalties through new EIP2981 standard

How to use:
1. update deployment in `deploy/00_hollyplus.ts`
2. update contract name and information in `contracts/HollyPlus.sol`.
3. run `yarn run test`
4. setup `networks.private.json`, see hardhat networks config for format
5. run `yarn run deploy --network rinkeby` to deploy to rinkeby
6. run `yarn run deploy --network mainnet` to deploy to mainnet

See deployed:
Current canoical deployment is at `0x6688Ee4E6e17a9cF88A13Da833b011E64C2B4203`
