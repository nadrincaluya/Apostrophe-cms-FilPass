module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Event',
    pluralLabel: 'Events',
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Event Title',
        required: true
      },
      date: {
        type: 'date',
        label: 'Event Date',
        required: true
      },
      time: {
        type: 'time', // Use 'datetime' instead of 'string'
        label: 'Event Time',
        required: true,
    
      },
      description: {
        type: 'string',
        label: 'Short Description',
        textarea: true
      },
      bannerImage: {
        type: 'area',
        label: 'Thumbnail Image',
        options: {
          widgets: {
            '@apostrophecms/image': {
              // You can add additional image configuration options here if needed
            }
          }
        }
      },

      
    }
  },

};

