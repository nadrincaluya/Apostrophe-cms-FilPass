
module.exports = {
    extend: `@apostrophecms/piece-type`,
    options: {
      
      label: 'Media Release',
      publicApiProjection: {
        title: 1,
        slug: 1,
        image: 1
    }
    },
    fields: {
      add: {
        image: {
          label: 'Featured image',
          type: 'area',
          options: {
            max: 1,
            widgets: {
              '@apostrophecms/image': {}
            }
          }
        },
        content: {
          label: 'Content',
          type: 'area',
          options: {
            widgets: {
              // enable the rich-text editor
              '@apostrophecms/rich-text': {},
              
              '@apostrophecms/video': {}
            }
          }
        }
      },
      group: {
        blogFields: {
          label: 'Add Contents',
          fields: [ 'content' ,'image',]
        }
      }
    }
  }