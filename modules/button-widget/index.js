module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Button Widget'
  },
  fields: {
    add: {
      text: {
        type: 'string',
        label: 'Button Text',
        required: true
      },
      url: {
        type: 'url',
        label: 'Button URL',
      
      },
      style: {
        type: 'select',
        label: 'Button Style',
        choices: [
          { label: 'Primary', value: 'btn-primary' },
          { label: 'Secondary', value: 'btn-secondary' },
          { label: 'Danger', value: 'btn-danger' }
        ],
        def: 'btn-primary'
      },
      openInNewTab: {
        type: 'boolean',
        label: 'Open in New Tab'
      }
    }
  }
};
