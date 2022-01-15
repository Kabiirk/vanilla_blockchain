# **Vanilla Blockchain**
A basic Blockchain implementation with [crypto-js](https://www.npmjs.com/package/crypto-js).

This project is aimed at Learning the basics of blockchain by implementing it ourselves.

There are 3 main classes to simulate a basic blockchain :
* **Block** : Acts as the building block (pun intended) of the blockchain and holds all the information(Transaction amount, To/From address).
* **Blockchain** : Holds all the blocks and takes care of mining transactions as well as maintain integrity of the chain, among other functions.
* **Transaction** : Simulates transaction between 2 entities in the blockchain.

> **Note :** The Proof-of-Work has been purposely chosen as something fast for testing purposes but can be modified to take longer by modifying the ```difficulty``` parameter in ```Blockchain``` class or in it's ```minePendingTransactions()``` class function.
 
### Directory Structure
```
vanilla_blockchain (Root folder)
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
└───src
        blockchain.js
        keygen.js
        main.js
```
 
### Get started !

> **NOTE :** Make sure you have Node.js and npm installed
which can be done following instructions from [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). 
 
* **STEP 1: Clone the Repository**

    ```
    git clone https://github.com/Kabiirk/vanilla_blockchain.git
    ```
 
* **STEP 2: Install Node Packages** 

    This project uses mainly 2 dependencies ```crypto-js```(for encryption) & ```elliptic```(for key generation) which can be installed from `package.json` or `package-lock.json` by navigating to the root of the project & running :
    ```
    npm install
    ``` 

* **STEP 3: First Run of the Project** 

    The entry-point of this project is ```src/main.js```, the project can be run by typing :
    ```
    node src/main.js
    ```

    Which should show the following output on your terminal :
    ```
    Start Miner
    Block Mined --> s0m3Ha5h
    Block Mined !
    balance of our wallet is :  90
    ```

* **STEP 4: Way Forward**
 
    There are 2 main files which are to be worked with :
    * `blockchain.js` which contains the logic of this project which controls the behaviour of the blockchain. This is where new components/operation for the blockchain can be defined and exported/used.

    * `main.js` contains the driver code which implements a basic blockchain & it's various operations by using classes defined in `blockchain.js`.

### All Done :sparkles: