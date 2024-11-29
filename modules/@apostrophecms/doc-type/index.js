module.exports = {
    fields: {
      add: {
        openGraphTitle: {
          label: 'Social Media Title',
          type: 'string',
          help: 'Enter a custom title for social sharing (was "Open Graph Title").'
        },
        openGraphDescription: {
          label: 'Social Media Description',
          type: 'string',
          textarea: true,
          help: 'Enter a custom description for social sharing .'
        },
        openGraphType: {
          label: 'Content Type',
          type: 'string', 
          htmlHelp: 'Specify the type of content for sharing .'
        },
        _openGraphImage: {
          label: 'Thumbnail Image',
          type: 'relationship',
          withType: '@apostrophecms/image',
          help: 'Select an image for social sharing .'
        },
        seoTitle: {
          label: 'Title for Search Engine',
          type: 'string',
          help: 'Select an title for Search Engine .'
        },
        seoDescription: {
          label: 'Title for Search Engine',
          type: 'string',
          help: 'Description for Search Engine'
        },
        keywords: {
          label: 'Keywords',
          type: 'string',
          help: 'Keywords'
        }

      },
      group: {
        openGraph: {
          label: 'Social Sharing', // Rename the group tab
          fields: [
            'openGraphTitle',
            'openGraphDescription',
            'openGraphType',
            '_openGraphImage'
          ]
        }
      }
    },
    
  };
  