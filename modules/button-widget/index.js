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
      buttonSpacingTop: {
        type: 'integer',
        label: 'Vertical Spacing Top (px)'
      },
      buttonSpacingBottom: {
        type: 'integer',
        label: 'Vertical Spacing Bottom (px)'
      },
      openInNewTab: {
        type: 'boolean',
        label: 'Open in New Tab',
        def: false
      }
    },
    group: {
      content: {
        label: 'Content',
        fields: ['text', 'url', 'style', 'openInNewTab']
      },
      spacing: {
        label: 'Vertical Spacing',
        fields: ['buttonSpacingTop', 'buttonSpacingBottom']
      }
    }
  }
};
