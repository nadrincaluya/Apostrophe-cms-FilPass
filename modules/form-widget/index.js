module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Contact Form'
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Form Title',
        default: 'Send us a message'
      },
      fields: {
        type: 'array',
        label: 'Form Fields',
        titleField: 'label',
        fields: {
          add: {
            label: {
              type: 'string',
              label: 'Field Label'
            },
            name: {
              type: 'string',
              label: 'Field Name'
            },
            type: {
              type: 'select',
              label: 'Field Type',
              choices: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'tel' },
                { label: 'Dropdown', value: 'select' },
                { label: 'Textarea', value: 'textarea' }
              ]
            },
            required: {
              type: 'boolean',
              label: 'Required'
            },
            choices: {
              type: 'array',
              titleField: 'label',
              label: 'Choices (for Dropdown)',
              if: { type: 'select' },
              fields: {
                add: {
                  label: {
                    type: 'string',
                    label: 'Choice Label'
                  },
                  value: {
                    type: 'string',
                    label: 'Choice Value'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
