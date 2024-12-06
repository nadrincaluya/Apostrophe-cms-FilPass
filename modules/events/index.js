const moment = require('moment-timezone');

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
      startTime: {
        type: 'time',
        label: 'Start of Event Time',
        required: true,
      },
      endTime:{
        type:'time',
        label:'End of Event Time',
          
      }
      ,
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
     timezone: {
      label: 'Timezone',
      type: 'select',
      choices: [
      { value: 'Asia/Manila', label: 'Asia/Manila' },
      { value: 'America/Chicago', label: 'America/Chicago' },
      { value: 'America/New_York', label: 'America/New_York' },
      { value: 'Europe/London', label: 'Europe/London' },
      { value: 'Asia/Kolkata', label: 'Asia/Kolkata' },
      
        ],
        required: true,
        htmlHelp: `
        <p>
          Select the timezone for this event. Your current local time and timezone are displayed below for reference:
        </p>
        <p>Local Time: <span id="local-time">Loading...</span></p>
        <p>Timezone: <span id="local-timezone">Loading...</span></p>

      `
      },
      category: {
        type: 'select',
        label: 'Category',
        required: true,
        choices: [
          { label: 'Vehicle', value: 'vehicle' },
          { label: 'Home & Garden', value: 'home-garden' },
          { label: 'Appliances', value: 'appliances' },
          { label: 'Electronics', value: 'electronics' },
          { label: 'Toys', value: 'toys' }
        ]
      },
      _tags: {
        type: 'relationship',
        withType: 'pieces-tags',
        label: 'Tags',
        builders: {
          project: {
            title: 1,
            slug: 1
          }
        }
      },
    },
    group:{
      basics: {
        label: 'Basics',
        fields: ['title', 'date', 'bannerImage', 'description','startTime','endTime','timezone', 'category','_tags' ]
      },  
  },
  },

  filters: {
    add: {
      category: {
        label: 'Category'
      },
      _tags: {
        label: 'Tags',
        component: 'AposArrayColumn'
      }
    }
  },
  columns: {
    add: {
      category: {
        label: 'Category'
      },

    }
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
  },

 

};

