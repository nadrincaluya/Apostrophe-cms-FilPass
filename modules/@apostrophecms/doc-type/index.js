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
        help: 'Enter a custom description for social sharing.'
      },
      openGraphType: {
        label: 'Content Type',
        type: 'string',
        htmlHelp: 'Specify the type of content for sharing.'
      },
      _openGraphImage: {
        label: 'Thumbnail Image',
        type: 'relationship',
        withType: '@apostrophecms/image',
        help: 'Select an image for social sharing.'
      },
      seoTitle: {
        label: 'Title for Search Engine',
        type: 'string',
        help: 'Enter a title for search engines.'
      },
      seoDescription: {
        label: 'Description for Search Engine',
        type: 'string',
        textarea: true,
        help: 'Enter a description for search engines.'
      },
      seoKeywords: {
        label: 'SEO Keywords',
        type: 'string',
        help: 'Comma-separated list of keywords for this page'
      }
    },
    group: {
      openGraph: {
        label: 'Social Sharing',
        fields: [
          'openGraphTitle',
          'openGraphDescription',
          'openGraphType',
          '_openGraphImage'
        ]
      },
      seo: {
        label: 'SEO',
        fields: [
          'seoTitle',
          'seoDescription',
          'seoKeywords'  // Grouped under the SEO group
        ]
      }
    }
  }
};
