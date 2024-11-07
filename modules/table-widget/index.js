// modules/table-widget/index.js
module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Table'
  },
  fields: {
    add: {
      width: {
        type: 'select',
        label: 'Content Width',
        choices: [
          { label: 'Full Width', value: '100' },
          { label: '75%', value: '75' },
          { label: '50%', value: '50' },
          { label: '25%', value: '25' }
        ]
      },
      alignment: {
        type: 'select',
        label: 'Content Alignment',
        choices: [
          { label: 'Left', value: 'table-left' },
          { label: 'Center', value: 'table-center' },
          { label: 'Right', value: 'table-right' }
        ],
        def: 'center'  // Default alignment is center
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
