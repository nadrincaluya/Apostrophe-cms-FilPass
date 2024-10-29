module.exports = {
  // extending a core module creates a new instance of that module type
  // with a new name, but all the same functions
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Review',
    pluralLabel: 'Reviews',
    i18n: {
      browser: true
    }
  },
  fields: {
    add: {
      author: {
        type: 'string',
        label: 'Author',
        required: true
      },
      featuredImage: {
        type: 'area',
        label: 'Featured Image',
        max: 1,
        options: {
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      content: {
        type: 'area',
        label: 'Content',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            rating: {}
          }
        }
      },
      category: {
        type: 'select',
        label: 'Category',
        required: true,
        choices: [
          {
            label: 'Vehicle',
            value: 'vehicle'
          },
          {
            label: 'Home & Garden',
            value: 'home-garden'
          },
          {
            label: 'Appliances',
            value: 'appliances'
          },
          {
            label: 'Electronics',
            value: 'electronics'
          },
          {
            label: 'Toys',
            value: 'toys'
          }
        ]
      },
      isFeatured: {
        type: 'boolean',
        label: 'Featured',
        def: false
      }
    },
    group: {
      content: {
        label: 'Content',
        fields: [ 'title', 'author', 'featuredImage', 'content' ]
      },
      meta: {
        label: 'Meta',
        fields: [ 'category', 'isFeatured' ]
      }
    }
  },
  filters: {
    add: {
      isFeatured: {
        label: 'featured'
      },
      category: {
        label: 'category'
      }
    }
  },
  columns: {
    add: {
      category: {
        label: 'Category'
      }
    }
  }
};