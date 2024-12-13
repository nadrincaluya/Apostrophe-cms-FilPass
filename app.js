require('apostrophe')({
  shortName: 'apostrophe_cms_project',
  db: {
    uri: 'mongodb://localhost:27017/apostrophe_cms_project'
  },
  bundles: [
    '@bodonkey/rich-text-enhancement' // Example bundle
  ],
  baseUrl: 'http://localhost:3000', // Change to http domain in production
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
    'row-widget': {},

    // Events and Calendar
    events: {},
    'events-page': {},
    'calendar-page': {},

    // SEO and Metadata
    '@apostrophecms/open-graph': {
      options: {
        baseUrl: 'http://localhost:3000', // Change to http domain in production
        '@apostrophecms/page-type': true,
        '@apostrophecms/piece-type': true,
      }
    },

    '@apostrophecms/seo': {
      options: {
        'keywords-seo': {},
        '@apostrophecms/page-type': true,
        '@apostrophecms/piece-type': true,
      }
    },
    '@apostrophecms/sitemap': {},

    // Overrides and Assets
    'admin-ui-overrides': {}, // For UI overrides (e.g., logo)
    'asset': {},

    // Default Page Type
    'default-page': {},
    'pieces-tags': {},

    '@apostrophecms/file': {},
    '@apostrophecms/image': {},
    '@apostrophecms/file-tag': {},
    '@apostrophecms/image-tag': {},
    '@apostrophecms/user': {},
    '@apostrophecms/group': {},
    '@apostrophecms/global': {},

    'admin-bar': {},
    'custom-admin-bar': {},

    // Custom Form Widget (Ensure it is correctly defined and registered)
    'custom-form-widget': {},

    // Form Module Configuration
    // The main form module
    '@apostrophecms/form': {
      options: {
        shortcut: 'a,f'
      }
    },
    // The form widget module, allowing editors to add forms to content areas
    '@apostrophecms/form-widget': {},
    // Form field widgets, used by the main form module to build forms.
    '@apostrophecms/form-text-field-widget': {},
    '@apostrophecms/form-textarea-field-widget': {},
    '@apostrophecms/form-select-field-widget': {},
    '@apostrophecms/form-radio-field-widget': {},
    '@apostrophecms/form-file-field-widget': {},
    '@apostrophecms/form-checkboxes-field-widget': {},
    '@apostrophecms/form-boolean-field-widget': {},
    '@apostrophecms/form-conditional-widget': {},
  },
  '@apostrophecms/email': {
      options: {
        nodemailer: {
          host: "smtp.gmail.com", // Replace with your SMTP server
          port: 587,
          secure: false, // Set to true for port 465, false for other ports
          service: 'gmail',
          auth: {
            user: 'nadrincaluya@gmail.com', // Set in your .env file
            pass: 'xppv fgax sjsb niry'  // Set in your .env file
          }
        }
      }
    }
});
