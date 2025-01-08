import {defineField, defineType} from 'sanity'

export const imageFormatType = defineType({
  name: 'imageFormatType',
  type: 'object',
  fields: [
    defineField({
      name: 'mobile',
      title: 'mobile',
      type: 'image',
    }),
    defineField({
      name: 'tablet',
      title: 'tablet',
      type: 'image',
    }),
    defineField({
      name: 'desktop',
      title: 'desktop',
      type: 'image',
    }),
  ]
})