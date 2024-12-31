import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'languageType',
      title: 'title',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'descriptionMultilingualBlock'}],
      title: "description"
    }),
    defineField({
      name:'image',
      type: 'image'
    })
  ]
})