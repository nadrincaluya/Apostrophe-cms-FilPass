const {fields} = require('./lib/field');

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Row Widget',
    icon :'view-column-outline',
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
          1: [ 12 ],
          2: [ 6, 6 ],
          3: [ 4, 4, 4 ],
          4: [ 3, 3, 3, 3 ],
          '4-8': [ 4, 8 ],
          '8-4': [ 8, 4 ],
          '3-9': [ 3, 9 ],
          '9-3': [ 9, 3 ]
        };
        return layoutMap[layout] || [ 12 ];
      }
    };
  }
};