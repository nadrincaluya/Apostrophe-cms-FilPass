module.exports = {
    helpers(self) {
      return {
        getCurrentMonth() {
          const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
          ];
          return months[new Date().getMonth()];
        },
        getCurrentYear() {
          return new Date().getFullYear();  // Get the current year
        }
      };
    }
  };
  