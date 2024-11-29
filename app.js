require('apostrophe')({
  shortName: 'apostrophe_cms_project',
  db: {
    uri: 'mongodb://localhost:27017/apostrophe_cms_project'
  },
  bundles: [
    '@bodonkey/rich-text-enhancement' // Example bundle
  ],
  baseUrl: 'http://localhost:3000',//Change to http domain in production
  modules: {
    // Core functionality
    '@apostrophe/headless': {}, // For API support

    
    // Custom Modules
    media: {},
    'media-page': {}, 
    publication: {},
    'publication-page': {},

    // Custom Widgets
    'rich-text-color': {},
    'rich-text-font': {},
    'image-widget': {},
    'button-widget': {},
    'table-widget': {},
    'navigation-widget': {},
    'form-widget': {},
    'row-widget': {},

    // Events and Calendar
    events: {},
    'events-page': {},
    'calendar-page': {},

    // SEO and Metadata
    
    '@apostrophecms/open-graph': {
      options: {
        baseUrl: 'http://localhost:3000' // Change to http domain in production
      }
    },

    '@apostrophecms/seo': {
      options:{
        'keywords-seo':{},
      }
    },
    '@apostrophecms/sitemap': {
     
    },
  

    // Overrides and Assets
    'admin-ui-overrides': {}, // For UI overrides (e.g., logo)
    'asset': {},

    // Default Page Type
    'default-page': {}
  }
});
