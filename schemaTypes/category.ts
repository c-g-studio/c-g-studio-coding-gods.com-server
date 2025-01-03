import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category name',
  type: 'document',
  fields: [
    defineField({
      name: 'categoryName',
      title: 'Category',
      type: 'array',
      of: [{type: 'multilingualBlock'}],
    }),
    defineField({
      name: 'categoryIdentifier',
      title: 'Category identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'categoryIdentifier',
    },
    prepare(selection) {
      return {
        title: selection.title || 'No Identifier',
      };
    },
  },
});
