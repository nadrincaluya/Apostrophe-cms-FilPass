require('apostrophe')({ 
  shortName: 'ApostropheCMS-sample',
  modules: {
    '@apostrophecms/express': {
      options: {
        cors: {
          origin: 'http://localhost:4200', // Your Angular app’s origin
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed HTTP methods
          allowedHeaders: ['Content-Type', 'Authorization'] // Headers your app may send
        }
      }
    },
    // Configuration for apostrophe-blog
    'apostrophe-blog': {
      options: {
        perPage: 10,
        publicApiProjection: {
          title: 1,
          slug: 1,
          _url: 1,
          _author: 1,
          main: 1,
          thumbnail: 1
        },
        addFields: [
          {
            name: 'title',
            label: 'Post Title',
            type: 'string',
            required: true,
            sortify: true
          },
          {
            name: 'content',
            label: 'Post Content',
            type: 'html',
            wysiwyg: true
          }
        ]
      }
    },

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
    'newsroom/media-release': {

    },
    'newsroom/publications': {},
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    asset: {},
    'default-page': {},
    'row-widget': {},
    'deal-widget': {},
    'review': {},
    'review-page': {},
    article: {},
    media:{},
    publications:{}
  
  }
});
