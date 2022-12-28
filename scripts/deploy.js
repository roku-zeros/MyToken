async function main() {

    const [deployer] = await ethers.getSigners();


    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy();
    console.log(token.address);
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      
      process.exit(1);
    });