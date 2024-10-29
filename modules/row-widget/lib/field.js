const { fullConfig } = require('../../../lib/area');

const fields = {
  columns: {
    label: 'Column layout',
    type: 'select',
    help: 'How many columns should this row have?',
    choices: [
      {
        label: 'One full-width column',
        value: 1
      },
      {
        label: 'Two equal-width columns',
        value: 2
      },
      {
        label: 'Three equal-width columns',
        value: 3
      },
      {
        label: 'Four equal-width columns',
        value: 4
      },
      {
        label: 'Five equal-width columns',
        value: 5  // New option for five columns
      },
      {
        label: 'Six equal-width columns',
        value: 6  // New option for six columns
      },
      {
        label: 'Two columns, 33% and 66%',
        value: '4-8'
      },
      {
        label: 'Two columns, 66% and 33%',
        value: '8-4'
      },
      {
        label: 'Two columns, 25% and 75%',
        value: '3-9'
      },
      {
        label: 'Two columns, 75% and 25%',
        value: '9-3'
      }
    ]
  }
};

// Update this array to include conditions for 6 columns
const colsIf = [ 
  null, 
  false, 
  [ 2, 3, 4, 5, 6, '4-8', '8-4', '3-9', '9-3' ], 
  [ 3, 4, 5, 6 ], 
  [ 4, 5, 6 ], 
  [ 5, 6 ], 
  [ 6 ] 
];

for (let i = 1; i <= 6; i++) {
  fields[`area${i}`] = {
    label: `Area ${i}`,
    type: 'area',
    contextual: true,
    options: {
      widgets: fullConfig
    },
    ...(colsIf[i] && {
      if: {
        $or: colsIf[i].map((colName) => {
          return {
            columns: colName
          };
        })
      }
    })
  };
}

module.exports = {
  fields
};
