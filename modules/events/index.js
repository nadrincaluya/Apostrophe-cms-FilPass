module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Event',
    pluralLabel: 'Events',
    publicApiProjection: {
      title: 1,
      date: 1,
      time: 1,
      description: 1,
      _url: 1,
      bannerImage: 1
    }
  
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Event Title',
        required: true,
      },
      date: {
        type: 'date',
        label: 'Event Date',
        required: true,
      },
      time: {
        type: 'time',
        label: 'Event Time',
        required: true,
      },
      description: {
        type: 'string',
        label: 'Short Description',
        textarea: true,
      },
      bannerImage: {
        type: 'area',
        label: 'Thumbnail Image',
        options: {
          widgets: {
            '@apostrophecms/image': {},
          },
        },
      },
     
    },
  },
  apiRoutes(self) {
    return {
      get: {
        async getEvents(req) {
          const events = await self.find(req).sort({ date: 1 }).toArray();
          return events.map(event => ({
            title: event.title,
            date: event.date,
            time: event.time,
            description: event.description,
            _id: event._id
          }));
        }
      }
    };
  }
 

};
