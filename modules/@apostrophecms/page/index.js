// This configures the @apostrophecms/page module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
  
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },

      {
        name: 'media-page',
        label: 'media'
      },
      
      {
        name: 'publication-page',
        label: 'publication'
      },
      {
        name: 'events-page',
        label: 'events'
      },
      { name: 'calendar-page', label: 'Calendar Page' } 
    ],


  },
 
};
