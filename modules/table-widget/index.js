// modules/table-widget/index.js
module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Table'
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'Table Title',
        required: true
      },
      rows: {
        type: 'array',
        label: 'Table Rows',
        titleField: 'cells',
        fields: {
          add: {
            rowBackgroundColor: {  // Add this field for row background color
              type: 'color',
              label: 'Row Background Color',
              required: false
            },
            cells: {
              type: 'array',
              label: 'Cells',
              titleField: 'content',
              fields: {
                add: {
                  content: {
                    type: 'string',
                    label: 'Cell Content',
                    required: true
                  },
                  backgroundColor: {
                    type: 'color', // Background color for each cell
                    label: 'Cell Background Color',
                    required: false
                  },
                  textColor: {
                    type: 'color', // Text color for each cell
                    label: 'Cell Text Color',
                    required: false
                  },
                  fontSize: {
                    type: 'string',
                    label: 'Font Size (e.g., 14px, 1em)',
                    required: false,
                    def: '14px' // Default font size
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
