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
            isHighlighted: {
              label: 'Highlight Link',
              type: 'boolean',
              help: 'Check this box to highlight the link'
            }
          }
        }
      }
    }
  }
};
