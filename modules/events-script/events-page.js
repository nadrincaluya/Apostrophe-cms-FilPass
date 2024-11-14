console.log("JavaScript is running");
    
document.addEventListener('DOMContentLoaded', function() {
  const currentDate = new Date();
  const options = { month: 'long' };
  const monthName = currentDate.toLocaleDateString('en-US', options);
  console.log("Current Month:", monthName);  // Log the month
  document.getElementById('currentMonth').innerHTML = monthName;
});

