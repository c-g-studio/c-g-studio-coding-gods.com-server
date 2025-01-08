import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'xqcma0kg',
    dataset: 'production',
  },
  graphql: [
    {
      playground: true,
      tag: 'production',
      workspace: 'default',
      id: 'xqcma0kg',
    },
  ],
  autoUpdates: true,
})
