module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Empty Space'
  },
  fields: {
    add: {
      height: {
        type: 'integer',
        label: 'Height (px)',
        min: 0,
        def: 100
      },
      width: {
        type: 'select',
        label: 'Content Width',
        choices: [
          { label: 'Full Width', value: 'full' },
          { label: '75%', value: 'three-quarters' },
          { label: '50%', value: 'half' },
          { label: '25%', value: 'quarter' }
        ]
      },
    }
  }
};