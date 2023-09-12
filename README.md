
> Find the article in the Chainstack developer portal []()

## Quick start

Original repor was taked from chainstacklab:

```sh
git clone https://github.com/chainstacklabs/zk-battleship-game-hardhat.git
```

Install dependencies:

```shell
npm install
```

Run tests:

```shell
npx hardhat test
```

Add environment variables to `.env.sample` and rename to `.env`:


> In this specific version we specify the account playing by taking the private key from the environment variable. Develop this further by adding a user interface.

```env
ALT_ENDPOINT="ALT_ENDPOINT"
PRIVATE_KEY="PRIVATE_KEY_1"
PRIVATE_KEY_2="PRIVATE_KEY_2"
```
Deploy the smart contract:

```sh
npx hardhat run scripts/deploy.ts --network alt
```

or 

```sh
npx hardhat run scripts/deploy.ts --network alt
```

Now the contract will be deployed and verified on Etherscan.

## Example response

```sh
Compiled 3 Solidity files successfully
Deploying contract...
BattleShipGame was deployed at: 0x27F1a73dB2aCD037B9AeAA993F1A2D6c5606456B
```
