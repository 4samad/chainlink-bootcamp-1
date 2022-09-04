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
 
 
    
 
  }
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
