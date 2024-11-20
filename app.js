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
    media: {},
    'media-page': {},
    publication:{},
    'publication-page':{}
    ,
    'button-widget': {},
    'article': {},
    'color': {},
    //'imagesize-widget':{},
    'banner-widget':{},
    'table-widget':{},
    'navigation-widget':{},
    'form-widget':{},
    'spacing-widget':{},
    events:{},
    'events-page':{},
    '@apostrophecms/open-graph': {

      options: {
        baseUrl: 'https://1a62-180-190-75-200.ngrok-free.app/'
      }
    },
    'calendar-page':{},
    '@apostrophecms/seo': {}



  }
});
