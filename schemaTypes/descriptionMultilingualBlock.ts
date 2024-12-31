import {defineType} from 'sanity'
import {EN, UK, RU} from '../constants/languages'

export const descriptionMultilingualBlock = defineType({
  name: 'descriptionMultilingualBlock',
  type: 'object',
  fields: [
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      options: {
        list: [
          {title: EN.name, value: EN.code},
          {title: UK.name, value: UK.code},
          {title: RU.name, value: RU.code},
        ],
      },
      validation: (Rule) => Rule.required().valid([EN.code, UK.code, RU.code]),
    },
    {
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      title: 'content',
    },
  ],
})
