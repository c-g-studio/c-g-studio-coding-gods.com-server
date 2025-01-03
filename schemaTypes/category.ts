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
      validation: (Rule) => Rule.required(), // Убедитесь, что значение обязательно
    }),
  ],
  preview: {
    select: {
      title: 'categoryIdentifier', // Выбираем поле, которое будет отображаться
    },
    prepare(selection) {
      return {
        title: selection.title || 'No Identifier', // Показываем значение или сообщение по умолчанию
      };
    },
  },
});
