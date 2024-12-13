module.exports = {
    improve: '@apostrophecms/admin-bar',
    components(self) {
      return {
        async component(name) {
          if (name === 'TheAposContextBar') {
            return self.apos.modules['@apostrophecms/admin-ui'].components.component('TheAposContextBarCustom');
          }
        }
      };
    }
  };