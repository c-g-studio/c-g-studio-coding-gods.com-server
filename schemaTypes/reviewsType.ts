import {defineField, defineType} from 'sanity'

export const reviewsType = defineType({
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],
})
