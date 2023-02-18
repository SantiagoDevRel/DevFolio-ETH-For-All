import React from 'react'
import styles from "./QR.module.css"
import {QRCodeSVG} from 'qrcode.react';


function QR() {

    // update with your contract address
    const deployedContractAddress = "0xb361147AD9718242EEFD74600AFdCdD9C2786e7c";

    const qrProofRequestJson =
    // Corresponding QR Code
    {
      id: "3b4e76b9-88c2-4957-be83-39c9f0c1279f",
      typ: "application/iden3comm-plain-json",
      type: "https://iden3-communication.io/proofs/1.0/contract-invoke-request",
      body: {
        transaction_data: {
          contract_address: "0xb361147AD9718242EEFD74600AFdCdD9C2786e7c", //replace it with your contract address
          method_id: "b68967e2",
          chain_id: 80001,
          network: "polygon-mumbai"
        },
        reason: "airdrop participation",
        scope: [
          {
            id: 1,
            circuit_id: "credentialAtomicQuerySig",
            rules: {
              query: {
                allowed_issuers: ["*"],
                req: {
                  BlextickMember: {
                    $eq: 1
                  }
                },
                schema: {
                  url:
                    "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/7d139c79-43d5-4c3b-848c-e7180e70623c.json-ld",
                  type: "Blextick"
                }
              }
            }
          }
        ]
      }
    };


  return (
    <div className={styles.root}>
          <h2 className={styles.title}>
            Claim an ERC20 zk airdrop on Polygon Mumbai
          </h2>
          <p>
            Blextick verification: to claim
          </p>
          <p>
            Complete BLEX verification by issuing yourself a Polygon ID claim via{" "}
            <a
              href="https://polygontechnology.notion.site/Issue-yourself-a-KYC-Age-Credential-claim-a06a6fe048c34115a3d22d7d1ea315ea"
              target="_blank"
              rel='noreferrer'
            >
              KYC Age Credentials
            </a>{" "}
            then scan QR code within Polygon ID app to claim tokens
          </p>
  
          <div className={styles.qrcodepolygon} >
            <QRCodeSVG
              level="Q"
              size={300}
              style={{ width: 300 }}
              value={JSON.stringify(qrProofRequestJson)}
            />
          </div>
          
          <br />
          <p>
            Github:{" "}
            <a
              href="https://github.com/oceans404/tutorial-examples/tree/main/on-chain-verification"
              target="_blank"
              rel="noreferrer"
            >
              On-chain verification tutorial
            </a>
          </p>
          <p>
            Polygonscan:{" "}
          {<a
              href={`https://mumbai.polygonscan.com/token/${deployedContractAddress}`}
              target="_blank"
              rel="noreferrer"
            >
              Token ERC20zkAirdrop
            </a>}
          </p>
    </div>
  )
}

export default QR
