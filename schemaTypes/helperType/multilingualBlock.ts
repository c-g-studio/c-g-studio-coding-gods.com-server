import {defineType} from 'sanity'
import {EN, UK, RU} from '../../constants/languages'

export const multilingualBlock = defineType({
  name: 'multilingualBlock',
  type: 'object',
  fields: [
    {name: EN.code, type: 'array', of: [{type: 'block'}], title: EN.name},
    {name: UK.code, type: 'array', of: [{type: 'block'}], title: UK.name},
    {name: RU.code, type: 'array', of: [{type: 'block'}], title: RU.name},
  ],
})
