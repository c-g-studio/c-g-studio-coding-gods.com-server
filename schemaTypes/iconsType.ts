import {defineField, defineType} from 'sanity'

export const iconsType = defineType({
  name: 'iconName',
  title:'Icon identifier',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'technologies name',
      type: 'string',
      validation: Rule => Rule.required().custom( value => {
        if(value &&  value !== value.toLowerCase()){
          return 'Value must be in lowercase letters only.'
        }
        return  true
      })
    })
  ]
})