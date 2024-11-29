module.exports = {
    extend: '@apostrophecms/page-type',
    options: {
      label: 'Calendar Page'
    },
    fields: {
      add: {
        heading: {
          type: 'string',
          label: 'Heading'
        },
        bannerArea:{
          type: 'area',
          label: 'Banner Area',
          options:{
            widgets:{
              image:{}
            }
          }


        },
      }
    }
  };