# arbitrage-bot

## how to run

1. Clone the repository:
```bash
git clone https://github.com/uncletom29/arbitrage-bot.git
```
2. deploy smart contract using foundry

```bash
$ forge create --rpc-url <your_rpc_url> --private-key <your_private_key> src/blindBackrun.sol:BlindBackrun
```
3. Change to the project directory:
```bash
cd arbitrage-bot/execute
```
4. Install the required dependencies:
```bash
npm install
```
5. Setup your .env file by copying the template and filling it out. 

```makefile
rpcUrl=<YOUR_RPC_URL>
privateKey=<YOUR_PRIVATE_KEY>
executorContractAddress=<CONTRACT_ADDRESS>
```
Replace <YOUR_RPC_URL> with the URL of your Ethereum RPC provider, <YOUR_PRIVATE_KEY> with the private key of the Ethereum address you want to use for executing the transactions, and <CONTRACT_ADDRESS> with the address of the deployed BlindBackrun smart contract from above.

6. To start submitting arbitrage transactions, run the following command:
```bash
node index.js -n <network>
```
Replace <network> with either mainnet or goerli depending on the network you want to use. 