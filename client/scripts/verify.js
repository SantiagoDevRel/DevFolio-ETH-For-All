const hre = require("hardhat")

async function main() {

    const circuitId = "credentialAtomicQuerySig";
    const validatorAddress = "0xb1e86C4c687B85520eF4fd2a0d14e81970a15aFB";

    // Grab the schema hash from Polygon ID Platform
    const schemaHash = "564876160ac2101e9277bdce2bbf896f"

    const schemaEnd = fromLittleEndian(hexToBytes(schemaHash))

    const ageQuery = {
    schema: hre.ethers.BigNumber.from(schemaEnd),
    slotIndex: 2,
    operator: 1,
    value: [1, ...new Array(63).fill(0).map(i => 0)], // the value must be 1 = true
    circuitId,
    };

    // add the address of the contract just deployed
    let ERC20VerifierAddress = "0xb361147AD9718242EEFD74600AFdCdD9C2786e7c"

    let erc20Verifier = await hre.ethers.getContractAt("BlextickPassv1", ERC20VerifierAddress)

    const requestId = await erc20Verifier.TRANSFER_REQUEST_ID();

    try {
        await erc20Verifier.setZKPRequest(
        requestId,
        validatorAddress,
        ageQuery
        );
        console.log("Request set");
    } catch (e) {
        console.log("error: ", e);
    }
}

function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

function fromLittleEndian(bytes) {
    // eslint-disable-next-line no-undef
    const n256 = BigInt(256);
    // eslint-disable-next-line no-undef
    let result = BigInt(0);
    // eslint-disable-next-line no-undef
    let base = BigInt(1);
    bytes.forEach((byte) => {
    // eslint-disable-next-line no-undef
      result += base * BigInt(byte);
      base = base * n256;
    });
    return result;
}

main()