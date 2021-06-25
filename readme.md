
## Simple pact testing poc

The main motive of the poc is to explore pact and establish contract between the consumer and producer

## Setting up

-  Run `npm i` for installing dependencies
  \**Important for windows users. A know bug in pact, running pact verifier from  a non shallow path does not work, make sure you clone this project in root like D:/*

## Pact Testing

-  Run `npm start-provider` for starting provider

-  Run `npm test-consumer` (generates pact json file and tests consumer using mocha and pact

-  Run `npm verify-provider` verify provider using generated json contract from the consumer (npm test-consumer is required to before executing this command
