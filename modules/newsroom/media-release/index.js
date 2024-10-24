
module.exports = {
    extend: `@apostrophecms/piece-type`,
    options: {
      alias: 'media',
      label: 'Media Release'
    },
    fields: {
      add: {
        blogTitle: {
          type: 'string',
          label: 'Enter your Media Title'
        }
      },
      group: {
        blogFields: {
          label: 'Blog',
          fields: [ 'blogTitle' ]
        }
      }
    }
  }