/*
This file provides an easy way to populate any areas in the project with widgets.
*/


const basicConfig = {
  '@apostrophecms/image': {
    options: {
      size: 'original'
    }
    
  },
  '@apostrophecms/form': {},
  '@apostrophecms/form-widget': {},
  '@apostrophecms/video': {},
  '@apostrophecms/html': {},
  '@apostrophecms/rich-text': {
    toolbar: [
      'styles', // This will open a dropdown for both font families and sizes
      '|',
      'bold',
      'italic',
      'strike',
      'link',
      '|',
      'bulletList',
      'orderedList',
      '|',
      'blockquote',
      'codeBlock',
      '|',
      'undo',
      'redo',
      '|',
      'color',
      '|',
      'alignCenter',
      'alignJustify',
      'alignLeft',
      'alignRight',
      'colorButton'
    ],
    styles: [
      // Font Family Options
      { tag: 'p', label: 'Arial', class: 'font-arial' },
      { tag: 'p', label: 'Georgia ', class: 'font-georgia' },
      { tag: 'p', label: 'Times New Roman', class: 'font-times-new-roman' },
      { tag: 'p', label: 'Courier', class: 'font-courier-new' },
      { tag: 'p', label: 'Verdana', class: 'font-verdana' },
      { tag: 'p', label: 'Helvetica', class: 'font-helvetica' },
      { tag: 'p', label: 'Comic Sans MS', class: 'font-comic-sans-ms' },
      { tag: 'p', label: 'Tahoma', class: 'font-tahoma' },
      { tag: 'p', label: 'Impact', class: 'font-impact' },
      { tag: 'p', label: 'Trebuchet MS ', class: 'font-trebuchet-ms' },
      { tag: 'p', label: 'Garamond', class: 'font-garamond' },
      { tag: 'p', label: 'Palatino', class: 'font-palantino' },
      { tag: 'p', label: 'Lucida', class: 'font-lucida' },
      { tag: 'p', label: 'Open Sans', class: 'font-open-sans' },
      { tag: 'p', label: 'Roboto ', class: 'font-roboto' },
      { tag: 'p', label: 'Montserrat', class: 'font-montserrat' },
      { tag: 'p', label: 'Lato', class: 'font-lato' },
      { tag: 'p', label: 'Oswald', class: 'font-oswald' },
      { tag: 'p', label: 'Source Sans Pro', class: 'font-source-sans-pro' },
  

      // Font  Options
      { tag: 'span', label: '6', class: 'font-size-6',  },
      { tag: 'span', label: '8', class: 'font-size-8',  },
      { tag: 'span', label: '10', class: 'font-size-10', },
      { tag: 'span', label: '12', class: 'font-size-12',  },
      { tag: 'span', label: '14', class: 'font-size-14',  },
      { tag: 'span', label: '16', class: 'font-size-16',  },
      { tag: 'span', label: '18', class: 'font-size-18',  },
      { tag: 'span', label: '20', class: 'font-size-20',  },
      { tag: 'span', label: '22', class: 'font-size-22',  },
      { tag: 'span', label: '24', class: 'font-size-24', },
      { tag: 'span', label: '28', class: 'font-size-28',  },
      { tag: 'span', label: '32', class: 'font-size-32',  },
      { tag: 'span', label: '36', class: 'font-size-36',  },
      { tag: 'span', label: '40', class: 'font-size-40',  },
      { tag: 'span', label: '48', class: 'font-size-48',  },
      { tag: 'span', label: '56', class: 'font-size-56',  },
      { tag: 'span', label: '64', class: 'font-size-64',  },
      { tag: 'span', label: '72', class: 'font-size-72',  },
      { tag: 'span', label: '80', class: 'font-size-80',  },
      { tag: 'span', label: '96', class: 'font-size-96', },
    ],
    insert: [
      'table',
      'image',
      'horizontalRule'
    ],
   
  },

 
};

const fullConfig = {
  ...basicConfig,
  deal: {},
  row: {},
  button: {},
  //imagesize:{},
  banner:{},
  table:{},
  navigation:{},
  form:{},
  spacing:{},
  
};

module.exports = {
  basicConfig,
  fullConfig
};
