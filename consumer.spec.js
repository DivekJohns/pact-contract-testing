const assert = require('assert')
const { Pact, Matchers } = require('@pact-foundation/pact')
const { fetchOrders } = require('./consumer')
const path = require("path")
const { eachLike } = Matchers

describe('Pact with Order API', () => {
  const provider = new Pact({
    port: 8080,
    log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    spec: 2,
    consumer: "ProductConsumer",
    provider: "ProductProvider",
    pactfileWriteMode: "merge",
  })

  before(() => provider.setup())

  after(() => provider.finalize())

  describe('when a call to the API is made', () => {
    before(async () => {
      return provider.addInteraction({
        state: 'there are orders',
        uponReceiving: 'a request for orders',
        withRequest: {
          path: '/orders',
          method: 'GET',
        },
        willRespondWith: {
          body: eachLike({
            id: 1,
            items: eachLike({
              name: 'burger',
              quantity: 2,
              value: 100
            }),
          }),
          status: 200
        },
      })
    })

    it('will receive the list of current orders', async () => {
      const result = await fetchOrders()
      assert.ok(result.length)
    })
  })
})
