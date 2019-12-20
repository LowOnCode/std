const isCtx = mixed => (mixed.app && mixed.request)

module.exports = {
  name: 'httpresponse',
  title: 'HTTP Response',
  version: '1.0.1',
  color: '#5D9CEC',
  icon: 'file-text-o',
  outputs: [],
  inputs: [
    {
      color: '#666D77',
      description: `ctx`,
      type: `ctx`
    }],
  created ({ on }) {
    on('data', async (message) => {
      // Validation
      if (!message.getContext) {
        // Message to the void (IMPROVE)
        return false
      }

      const ctx = message.getContext()
      ctx.body = message.value
      ctx.next()
    })
  }
}
