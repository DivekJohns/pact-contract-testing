const path = require('path');
const { Verifier } = require('@pact-foundation/pact');


(async function test(){
    try {
        await new Verifier({
          providerBaseUrl: 'http://localhost:3000',
          pactUrls: [path.resolve(__dirname, './pacts/productconsumer-productprovider.json')],
        }).verifyProvider()
      } catch (error) {
        console.error('Error: ' + error.message)
        process.exit(1)
      }
 })()

