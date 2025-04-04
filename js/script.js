window.onload = function() {
  var form = document.querySelector('form');
  var error = document.getElementById('speciesError');
  
  form.onsubmit = function(e) {
    var human = document.getElementById('human').checked;
    var turkey = document.getElementById('turkey').checked;
    
    if (!human && !turkey) {
      alert("IF YOU'RE NOT TURKEY NOR HUMAN WHAT ARE YOU!!!!");
      e.preventDefault();
    }
    else {
      error.textContent = "";
    }
  };
};