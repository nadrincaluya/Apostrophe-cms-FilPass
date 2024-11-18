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
          widgets: {
            banner:{},

          },
      }
    },
    
    
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'displayCategory' ]
      }
    }
  },
  
 };