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
      imageAlignment: {
        type: 'select',
        label: 'Image Alignment',
        choices: [
          { label: 'Left', value: 'image-left' },
          { label: 'Center', value: 'image-center' },
          { label: 'Right', value: 'image-right' }
        ],
        def: 'center'  // Default alignment is center
      },
      textAlignment: {
        type: 'select',
        label: 'Text Alignment',
        choices: [
          { label: 'Top Left', value: 'overlay-top-left' },
          { label: 'Top Center', value: 'overlay-top-center' },
          { label: 'Top Right', value: 'overlay-top-right' },
          { label: 'Center Left', value: 'overlay-center-left' },
          { label: 'Center', value: 'overlay-center' },
          { label: 'Center Right', value: 'overlay-center-right' },
          { label: 'Bottom Left', value: 'overlay-bottom-left' },
          { label: 'Bottom Center', value: 'overlay-bottom-center' },
          { label: 'Bottom Right', value: 'overlay-bottom-right' }
        ],
        def: 'overlay-center' // Default alignment is center
      },
      buttonAlignment: {
        type: 'select',
        label: 'Button Alignment',
        choices: [
          { label: 'Top Left', value: 'overlay-top-left' },
          { label: 'Top Center', value: 'overlay-top-center' },
          { label: 'Top Right', value: 'overlay-top-right' },
          { label: 'Center Left', value: 'overlay-center-left' },
          { label: 'Center', value: 'overlay-center' },
          { label: 'Center Right', value: 'overlay-center-right' },
          { label: 'Bottom Left', value: 'overlay-bottom-left' },
          { label: 'Bottom Center', value: 'overlay-bottom-center' },
          { label: 'Bottom Right', value: 'overlay-bottom-right' }
        ],
        def: 'overlay-center' // Default alignment is center
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
    },
    group: {
      content: {
        label: 'Content',
        fields: [ 'image', 'title', 'description', 'buttonText', 'buttonUrl' ]
      },
      style: {
        label: 'Style',
        fields: [ 'style', 'textColor', 'imageWidth', 'imageHeight' ]
      },
      alignment: {
        label: 'Alignment',
        fields: [ 'imageAlignment', 'textAlignment', 'buttonAlignment' ]
      }
    }
  
  }
};
