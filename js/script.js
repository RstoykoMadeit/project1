window.onload = function() {
  var form = document.querySelector('form');
  var error = document.getElementById('speciesError');
  
  form.onsubmit = function(e) {
    var human = document.getElementById('human').checked;
    var turkey = document.getElementById('turkey').checked;
    
    if (!human && !turkey) {
      alert("If not turkey nor human then who are you");
      e.preventDefault();
    }
    else {
      error.textContent = "";
    }
  };
};