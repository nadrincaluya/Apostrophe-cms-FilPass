
const { fullConfig } = require('../../../lib/area');
module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      topArea: {
        type: 'area',
        label: 'Top Area',
        options: {
         
            
              widgets: 
                fullConfig
              //add custom widgets here
          
            
          
        }
      },
      bottomArea: {
        type: 'area',
        label: 'Bottom Area',
        options: {
         
            
              widgets: 
                fullConfig
              //add custom widgets here
          
            
          
        }
      },
      fullSize:{
        type: 'area',
        label: 'Bottom Area',
        options: {
         widgets: fullConfig

         
               
            
          
        }
      }
    }
  }
};
