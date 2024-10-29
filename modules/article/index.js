module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article',
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
            // allow multimedia files
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'content', 'image' ]
      }
    }
  }
};