async function main() {
 
    const [deployer] = await ethers.getSigners();
 
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
 
    console.log("Account balance:", (await deployer.getBalance()).toString());
 
    const ERC20Basic = await ethers.getContractFactory("ERC20Basic");
    const deployedContract = await ERC20Basic.deploy(1000000000);
    console.log("Deployed ERC20Basic contract address:", deployedContract.address);

    console.log("Transfering Tokens...")
    const toAddress = "0x401d57E9c7B6D0881f46a828AC311fedc4b7c07F";
    const tokenAmount = 100000000;
    await deployedContract.transfer(toAddress, tokenAmount);
    console.log(`Transfered ${tokenAmount} Tokens from ${deployer.address} to ${toAddress}`);
 
  }
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
