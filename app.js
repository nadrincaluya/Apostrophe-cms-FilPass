require('apostrophe')({ 
  shortName: 'ApostropheCMS-sample',
  bundles: [ '@bodonkey/rich-text-enhancement' ],
  modules: {
   
    'apostrophe-headless': {},
        '@apostrophecms/form': {},
    '@apostrophecms/form-widget': {}
    ,

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

    'rich-text-color': {},
    'rich-text-font': {},
    'asset': {},
    'default-page': {},
    'row-widget': {},
    'review': {},
    'review-page': {},
    'button-widget': {},
    'article': {},
    'media': {},
    'publications': {},
    'color': {},
    //'imagesize-widget':{},
    'banner-widget':{},
    'table-widget':{},
    'navigation-widget':{},
    'form-widget':{}
    
  }
});
