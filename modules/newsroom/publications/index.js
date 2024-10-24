module.exports = {
    extend: `@apostrophecms/piece-type`,
    options: {
      alias: 'publication',
      label: 'Publication',
    },
    fields: {
      add: {
        blogTitle: {
          type: 'string',
          label: 'Enter your Publication Title'
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