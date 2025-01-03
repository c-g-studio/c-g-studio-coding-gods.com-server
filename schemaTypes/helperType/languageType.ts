import {defineType} from 'sanity'
import {EN, UK, RU} from '../../constants/languages'


export const languageType = defineType({
  name: 'languageType',
  type: 'object',
  fields: [
    {name: EN.code, type: 'string', title: EN.name},
    {name: UK.code, type: 'string', title: UK.name},
    {name: RU.code, type: 'string', title: RU.name},
  ],
})