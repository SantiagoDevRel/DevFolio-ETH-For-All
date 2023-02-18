# Blextick ZKP - Polygon ID

♾️ This is our repo for the ETHFORALL Hackathon project ♾️

- **Team:** 🥷Ethereum Ninjas🥷
- Santiago Trujillo Zuluaga (dev) https://www.linkedin.com/in/santiagotrujilloz/
- Cristian Richarte Gil(dev) https://www.linkedin.com/in/cristian-richarte-gil/
- Abel Beltran Bonjorn https://www.linkedin.com/in/abel-bertran/
- Eustacio Cabrera https://www.linkedin.com/in/eucabrera/
- James Murillo Longas https://www.linkedin.com/in/jamesmurillolongas/
  
- Smart Contract (Polygon Mumbai): 0xecf178144ccec09417412d66e2ecc8a2841ee228
- BlexTick OpenSea (Mumbai): https://testnets.opensea.io/es/collection/blextick 
- Polygon ID Workshop: https://www.youtube.com/watch?v=PNIOt-ii2Xk&list=PLar2Ti_Qchk6aRRWs0gc4yc10yV6b8em4&index=7
- Docs Polygon ID: https://0xpolygonid.github.io/tutorials/verifier/on-chain-verification/overview/

The protocol uses [Hardhat](https://hardhat.org/) as a development environment and Polygon Mumbai testnet as the network.

## Flowchart User 
![Flow chart](https://raw.githubusercontent.com/strujilloz/DevFolio-ETH-For-All/main/client/src/Components/images/Blextick%20User.png)

## Flowchart Organizer (Events creator)
![Flow chart](https://raw.githubusercontent.com/strujilloz/DevFolio-ETH-For-All/main/client/src/Components/images/Blextick%20Organizer.png)

## Diagram Issuer-Holder-Verifier
![Flow chart](https://raw.githubusercontent.com/strujilloz/DevFolio-ETH-For-All/main/client/src/Components/images/Diagram.png)



## Smart contracts
- Events Fabric contract. (Passing requirements from the organizer to create the Event contract)
- Event contract. (NFT tickets to sell to verified users)

## Workflow Organizer 🏟
1. Request Schema BlextickOrganizer issued by Blextick
2. Polygon ID verifies or refuses if the wallet has the BlextickPass. If verified, the company address will be added to the smartcontract as Organizer.
3. The Organizer can call the function createNewEvent from the EventFabric contract & Pass the Event requirements.
4. The new contract will be listed in our Website for the NFT/Ticket sale.
5. The Organizer verifies that the User owns the NFT/Ticket at the Event gate.


## Workflow User 🙋‍♂
1. Request Schema BlextickPass issued by Blextick.
<img width="480" alt="e" src="https://user-images.githubusercontent.com/102038261/218482231-f1b56ba9-ecd8-46e2-b3fd-465099ffe33c.png">

2. Access to Blextick website & the user connects his wallet.
3. The website will check in the contract if he has already the BlextickPass. (It means he has already shown he passed KYC in Polygon ID  previously - IMPORTANT: that will be a requirement to get the BlextickPass -so we can guarantee 1 user per wallet)
4. EVENTS PAGE: Chooses the event he wants to go.
5. If he is already an user he will be logged in & he will be able to purchase the ticket event. (when he purchases the NFT, the contract will check if the msg.sender holds the BlextickPass)
6. If he is not an user, a Polygon ID QR code will pop up and he will need to authenticate he has the KYC Schema. Once he verifies he has passed the KYC, he will get the BlextickPass and will have free access to our platform.
7. MARKETPLACE PAGE: Here user can exchange their tickets (NFTs)
8. BLEXTICKPLUS PAGE: Here users can get extra Schemas to show their preferences without showing their identity

![QR code](https://user-images.githubusercontent.com/102038261/218482469-62d4c803-9ec0-4709-b02f-4f58ac2799d5.jpg)

## Polygon ID Wallet setup

1. Download the Polygon ID mobile app on the [Google Play](https://play.google.com/store/apps/details?id=com.polygonid.wallet) or [Apple app store](https://apps.apple.com/us/app/polygon-id/id1629870183)

2. Open the app and set a pin for security

3. Follow the [Issue a Polygon ID claim](https://polygontechnology.notion.site/Issue-yourself-a-KYC-Age-Credential-claim-a06a6fe048c34115a3d22d7d1ea315ea) doc to issue yourself a KYC Age Credential attesting your date of birth.

## How are we using PolygonID to improve the ecosystem?
1. We are using Polygon ID as a login credentials/authentication for the users when they want to interact in our platform
2. With BlextickPlus we are creating a transparent on chain data system where users can share their data(in this case, preferences) without showing their identity, with the incentive of getting rewards, this is an unmanipulable system as users cannot create different wallets and get the BlextickPass/Plus to win prizes or pump up the numbers/statistics.


