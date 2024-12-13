module.exports = {
  options: {
    refreshOnRestart: true,
    breakpointPreviewMode: {
      enable: true,
      debug: false,
      groups: {
        desktop: {
          label: 'Desktop',
          screens: ['desktop']
        },
        tablet: {
          label: 'Tablet',
          screens: ['tablet']
        },
        mobile: {
          label: 'Mobile',
          screens: ['mobile1', 'mobile2', 'mobile3']
        }
      },
      screens: {
        desktop: {
          label: 'apostrophe:breakpointPreviewDesktop',
          width: '1440px',
          height: '900px',
          icon: 'monitor-icon',
          shortcut: true
        },
        tablet: {
          label: 'apostrophe:breakpointPreviewTablet',
          width: '1024px',
          height: '768px',
          icon: 'tablet-icon',
          shortcut: true
        },
        mobile1: {
          label: 'iPhone SE',
          width: '375px',
          height: '667px',
          icon: 'cellphone-icon',
          shortcut: true
        },
        mobile2: {
          label: 'Samsung Galaxy S8',
          width: '360px',
          height: '740px',
          icon: 'cellphone-icon',
          shortcut: true
        },
        mobile3:{
          label: 'Custom Dimension',
          width: '300px',
          height: '740px',
          icon: 'cellphone-icon',
          shortcut: true
        }
      },
      transform: null
    }
  },
};