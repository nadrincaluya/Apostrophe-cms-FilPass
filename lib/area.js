/*
This file provides an easy way to populate any areas in the project with widgets.
*/

const basicConfig = {
  '@apostrophecms/image': {
    className: 'img-fluid image-fit-center-center',
  },
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
      'alignRight'
    ],
    styles: [
      // Font Family Options
      { tag: 'p', label: 'Arial Font', class: 'font-arial' },
      { tag: 'p', label: 'Georgia Font', class: 'font-georgia' },
      { tag: 'p', label: 'Times New Roman Font', class: 'font-times-new-roman' },
      { tag: 'p', label: 'Courier New Font', class: 'font-courier-new' },
      { tag: 'p', label: 'Verdana Font', class: 'font-verdana' },
      { tag: 'p', label: 'Helvetica Font', class: 'font-helvetica' },
      { tag: 'p', label: 'Comic Sans MS Font', class: 'font-comic-sans-ms' },
      { tag: 'p', label: 'Tahoma Font', class: 'font-tahoma' },
      { tag: 'p', label: 'Impact Font', class: 'font-impact' },
      { tag: 'p', label: 'Trebuchet MS Font', class: 'font-trebuchet-ms' },
      { tag: 'p', label: 'Garamond Font', class: 'font-garamond' },
      { tag: 'p', label: 'Palatino Font', class: 'font-palantino' },
      { tag: 'p', label: 'Lucida Font', class: 'font-lucida' },
      { tag: 'p', label: 'Open Sans Font', class: 'font-open-sans' },
      { tag: 'p', label: 'Roboto Font', class: 'font-roboto' },
      { tag: 'p', label: 'Montserrat Font', class: 'font-montserrat' },
      { tag: 'p', label: 'Lato Font', class: 'font-lato' },
      { tag: 'p', label: 'Oswald Font', class: 'font-oswald' },
      { tag: 'p', label: 'Source Sans Pro Font', class: 'font-source-sans-pro' },
  

      // Font Size Options
      { tag: 'span', label: 'Size 6px', class: 'font-size-6',  },
      { tag: 'span', label: 'Size 8px', class: 'font-size-8',  },
      { tag: 'span', label: 'Size 10px', class: 'font-size-10', },
      { tag: 'span', label: 'Size 12px', class: 'font-size-12',  },
      { tag: 'span', label: 'Size 14px', class: 'font-size-14',  },
      { tag: 'span', label: 'Size 16px', class: 'font-size-16',  },
      { tag: 'span', label: 'Size 18px', class: 'font-size-18',  },
      { tag: 'span', label: 'Size 20px', class: 'font-size-20',  },
      { tag: 'span', label: 'Size 22px', class: 'font-size-22',  },
      { tag: 'span', label: 'Size 24px', class: 'font-size-24', },
      { tag: 'span', label: 'Size 28px', class: 'font-size-28',  },
      { tag: 'span', label: 'Size 32px', class: 'font-size-32',  },
      { tag: 'span', label: 'Size 36px', class: 'font-size-36',  },
      { tag: 'span', label: 'Size 40px', class: 'font-size-40',  },
      { tag: 'span', label: 'Size 48px', class: 'font-size-48',  },
      { tag: 'span', label: 'Size 56px', class: 'font-size-56',  },
      { tag: 'span', label: 'Size 64px', class: 'font-size-64',  },
      { tag: 'span', label: 'Size 72px', class: 'font-size-72',  },
      { tag: 'span', label: 'Size 80px', class: 'font-size-80',  },
      { tag: 'span', label: 'Size 96px', class: 'font-size-96', },
    ],
    insert: [
      'table',
      'image',
      'horizontalRule'
    ],
    color: {
      presetColors: ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff']
    }
  },
  'row-widget': {},
  'button-widget': {}
};

const fullConfig = {
  ...basicConfig,
  deal: {},
  row: {},
  button: {},
};

module.exports = {
  basicConfig,
  fullConfig
};
