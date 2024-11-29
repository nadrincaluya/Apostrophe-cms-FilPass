module.exports = {
  // extending a core module creates a new instance of that module type
  // with a new name, but all the same functions
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Deal Widget'
  },
  fields: {
    add: {
      image: {
        type: 'area',
        label: 'Deal Image',
        max: 1,
        required: true,
        options: {
          widgets: {
            '@apostrophecms/image': {
              aspectRatio: [ 16, 9 ],
              minSize: [ 1200, 675 ]
            }
          }
        }
      }
    }
  }
};