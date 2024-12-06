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
      },
      category: {
        type: 'select',
        label: 'Category',
        required: true,
        choices: [
          { label: 'Vehicle', value: 'vehicle' },
          { label: 'Home & Garden', value: 'home-garden' },
          { label: 'Appliances', value: 'appliances' },
          { label: 'Electronics', value: 'electronics' },
          { label: 'Toys', value: 'toys' }
        ]
      },
      _tags: {
        type: 'relationship',
        withType: 'pieces-tags',
        label: 'Tags',
        builders: {
          project: {
            title: 1,
            slug: 1
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'date', 'image', 'description']
      },
      category:{
        label: 'Category and Tags',
        fields: ['category', '_tags']
      },
      banner: {
        label: 'Banner',
        fields: [ 'bannerArea' ]
      },
    }
  },
  filters: {
    add: {
      category: {
        label: 'Category'
      },
      _tags: {
        label: 'Tags',
        component: 'AposArrayColumn'
      }
    }
  },
  columns: {
    add: {
      category: {
        label: 'Category'
      },
      _tags: {
        label: 'Tags',
        component: 'AposArrayColumn', // Use AposArrayColumn to show the list of tags
        builders: {
          project: {
            name: 1 // Show only the title field of the tag
          }
        }
      }
    }
  }
};
