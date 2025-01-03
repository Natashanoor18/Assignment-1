function convertToF() 
{ const temp = parseFloat(document.getElementById('tempInput').value);
    if (isNaN(temp)) { alert('Please enter a valid temperature');
  return; } const result = (temp * 9/5) + 32;
  document.getElementById('tempResult').textContent = result.toFixed(2) + ' °F'; }
   function convertToC() { const temp = parseFloat(document.getElementById('tempInput').value); 
if (isNaN(temp)) { alert('Please enter a valid temperature');
return; } const result = (temp - 32) * 5/9;  
document.getElementById('tempResult').textContent = result.toFixed(2) + ' °C'; }
