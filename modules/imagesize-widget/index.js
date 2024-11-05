module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: '190 x 350 Image with Text'
  },
  fields: {
    add: {
      image: {
        type: 'area',
        label: 'Image',
        max: 1,
        required: true,
        options: {
          widgets: {
            '@apostrophecms/image': {
              // You can add image size options here if desired
            }
          }
        }
      },
      layout: {
        type: 'select',
        label: 'Layout',
        choices: [
          { label: 'Image Left', value: 'image-left' },
          { label: 'Image Right', value: 'image-right' }
        ],
        def: 'image-left',
      },
      text: {
        type: 'area',
        label: 'Text',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [ 'bold', 'italic', 'link' ] // Add any formatting options you need
            }
          }
        }
      }
    }
  }
};
