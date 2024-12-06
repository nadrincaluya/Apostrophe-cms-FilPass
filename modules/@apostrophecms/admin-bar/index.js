module.exports = {
    options: {
      groups: [
        {
          name: 'content',
          label: 'Content',
          items: [
        
            '@apostrophecms/image',
            '@apostrophecms/file',
            '@apostrophecms/image-tag',
            '@apostrophecms/file-tag'
          ]
        },
        {
          name: 'newsroom',
          label: 'Newsroom',
          items: [
            'events',
            'publication',
            'media'
          ]
        }
      ]
    }
};