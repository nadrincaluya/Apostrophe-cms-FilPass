// lib/modules/navigation-widget/index.js
module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Navigation Widget'
  },
  fields: {
    add: {
      links: {
        label: 'Navigation Links',
        type: 'array',
        fields: {
          add: {
            label: {
              label: 'Label',
              type: 'string',
              required: true
            },
            url: {
              label: 'URL',
              type: 'url',
              required: true
            },
           
      
          
          }
        }
      },
      navigationSpacingTop: {
        type: 'integer',
        label: 'Vertical Spacing Top (px)'
      },
      navigationSpacingBottom: {
        type: 'integer',
        label: 'Vertical Spacing Bottom (px)'
      }
    },
    group:{
      content: {
        label: 'Content',
        fields: ['links']
      },
      spacing: {
        label: 'Vertical Spacing',
        fields: ['navigationSpacingTop', 'navigationSpacingBottom']
      }

    }
  }
};
