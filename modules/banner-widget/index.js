module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Image with Overlay'
  },
  fields: {
    add: {
      image: {
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        },
        label: 'Background Image'
      },
      title: {
        type: 'string',
        label: 'Title'
      },
      description: {
        type: 'string',
        textarea: true,
        label: 'Description'
      },
      buttonText: {
        type: 'string',
        label: 'Button Text'
      },
      buttonUrl: {
        type: 'string',
        label: 'Button URL'
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
      textColor: {
        type: 'select',
        label: 'Text Color',
        choices: [
          { label: 'Black', value: 'text-black' },
          { label: 'White', value: 'text-white' },
          { label: 'Gray', value: 'text-gray' }
        ],
        def: 'text-black'
      },
      imageWidth: {
        type: 'string',
        label: 'Image Width',
        help: 'Specify the image width (e.g., 100%, 200px).'
      },
      imageHeight: {
        type: 'string',
        label: 'Image Height',
        help: 'Specify the image height (e.g., auto, 300px).'
      }
    }
  }
};
