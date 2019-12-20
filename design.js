module.exports = {
  name: 'design',
  description: `A component for running a sub design`,
  version: '0.0.1',
  color: '#5D9CEC',
  props: {
    enabled: { type: 'bool', default: true }
  },
  mounted: async ({ send, on, Runtime, runtime, instance, options }) => {
    // console.log('Design', Runtime)
    const subRuntime = new Runtime()

    // Link current components with subRuntime
    subRuntime.allComponents = runtime.components
    // await runtime.setComponents(runtime.components)

    await subRuntime.run({
      title: 'Sub design',
      nodes: instance.nodes
    })
  }
}
