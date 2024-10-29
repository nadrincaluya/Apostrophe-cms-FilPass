const { fields } = require('./lib/field');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Row Widget',
    icon: 'view-column-outline',
    previewIcon: 'view-column-outline'
  },
  icons: {
    'view-column-outline': 'ViewColumnOutline'
  },
  fields: {
    add: fields
  },
  helpers(self) {
    return {
      layoutToColumns(layout) {
        const layoutMap = {
          1: [ 12 ],            // One full-width column
          2: [ 6, 6 ],          // Two equal-width columns
          3: [ 4, 4, 4 ],       // Three equal-width columns
          4: [ 3, 3, 3, 3 ],    // Four equal-width columns
          5: [ 2, 2, 2, 2, 2 ], // Five equal-width columns
          6: [ 2, 2, 2, 2, 2, 2 ], // Six equal-width columns
          '4-8': [ 4, 8 ],      // Two columns, 33% and 66%
          '8-4': [ 8, 4 ],      // Two columns, 66% and 33%
          '3-9': [ 3, 9 ],      // Two columns, 25% and 75%
          '9-3': [ 9, 3 ]       // Two columns, 75% and 25%
        };
        return layoutMap[layout] || [ 12 ];
      }
    };
  }
};
