const { fullConfig } = require('../../lib/area');

module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Publication',
    pluralLabel: 'Publications',
    i18n: {
      browser: true
    },
    sort: { date: -1 }  // -1 for descending, 1 for ascending
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Title',
        required: true
      },
      date: {
        type: 'date',
        label: 'Date',
        required: true
      },
      image: {
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
      description: {
        type: 'string',
        label: 'Description',
        textarea: true
      },
      contentArea: {
        type: 'area',
        label: 'Content Area',
        options: {
          widgets: fullConfig // Add custom widgets or configurations if needed
        },
        readOnly: true
      },
      bannerArea:{
        type: 'area',
        label: 'Banner Area',
        options: {
          widgets: {
            image:{}
          } // Add custom widgets or configurations if needed
        },
        required: true
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'date', 'image', 'description' ]
      },
      banner: {
        label: 'Banner',
        fields: [ 'bannerArea' ]
      },
    }
  },

};
