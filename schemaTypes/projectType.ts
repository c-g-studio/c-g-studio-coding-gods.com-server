import {defineField, defineType} from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  preview: {
    select: {
      title: 'title.en',
    },
    prepare(selection) {
      return {
        title: selection.title ? `Project name: ${selection.title}` : 'New Project',
      };
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'languageType',
      title: 'title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'multilingualBlock'
    }),
    defineField({
      name: 'shortDescription',
      type: 'multilingualBlock'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageFormatType',
    }),
    defineField({
      name: 'largeImage',
      title: 'Large Image',
      type: 'largeImageFormatType',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'multilingualBlock',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'iconName'}],
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
  ],
});
