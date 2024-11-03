require('apostrophe')({ 
  shortName: 'ApostropheCMS-sample',
  modules: {
    'apostrophe-headless': {},

    // Configuration for apostrophe-pieces-pages to support the blog page type
    'apostrophe-pieces-pages': {
      options: {
        addPageTypes: [
          {
            name: 'blog',
            label: 'Blog Page'
          }
        ]
      }
    },

    // Other module configurations
    'newsroom/media-release': {},
    'newsroom/publications': {},
   
   
    'asset': {},
    'default-page': {},
    'row-widget': {},
    'deal-widget': {},
    'review': {},
    'review-page': {},
    'button-widget': {},
    'article': {},
    'media': {},
    'publications': {},
    'color': {},
  }
});
