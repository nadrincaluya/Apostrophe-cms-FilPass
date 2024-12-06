(async function () {
    console.log("Script is loaded and running...");
  
    async function waitForElements() {
      return new Promise((resolve) => {
        const interval = setInterval(() => {
          const localTimeElement = document.getElementById('local-time');
          const timezoneElement = document.getElementById('local-timezone');
  
          if (localTimeElement && timezoneElement) {
            clearInterval(interval); // Stop checking once elements are found
            resolve({ localTimeElement, timezoneElement });
          }
        }, 100); // Check every 100ms
      });
    }
  
    async function updateTime() {
      try {
        // Wait for the elements to exist in the DOM
        const { localTimeElement, timezoneElement } = await waitForElements();
  
        console.log("Updating time and timezone..."); // Log to track progress
  
        // Fetch current time and timezone
        const now = new Date();
        const localTime = now.toLocaleString(); // Get local time as a formatted string
        const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get local timezone
  
        // Update the DOM elements
        localTimeElement.textContent = localTime;
        timezoneElement.textContent = localTimezone;
  
        console.log("Time and timezone updated successfully!");
      } catch (error) {
        console.error("Error updating time and timezone:", error);
  
        const localTimeElement = document.getElementById('local-time');
        const timezoneElement = document.getElementById('local-timezone');
  
        if (localTimeElement) {
          localTimeElement.textContent = "Error loading time";
        }
        if (timezoneElement) {
          timezoneElement.textContent = "Error loading timezone";
        }
      }
    }
  
    document.addEventListener('DOMContentLoaded', async () => {
      await updateTime();
    });
  })();
  