const { fullConfig } = require('../../lib/area');

module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    label: 'Events Page',
    pluralLabel: 'Events Pages',
  },
  fields: {
    add: {
      bannerArea:{
        type:'area',
        label: 'Content area',
        options: {
          widgets: fullConfig
      }
    },
    bannerImage: {
      type: 'area',
      label: 'Image',
      max: 1,
      options: {
        widgets: {
          '@apostrophecms/image': {
            size: 'one-sixth'
          }
        }
      }
    },
    
    
    },
    
  },
  
 };
 