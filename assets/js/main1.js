setTimeout(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
    var instance = M.Modal.getInstance(elems);
  });
}, 1000);

// Or with jQuery

$(document).ready(function(){
  $('.modal').modal({
    dismissible: false,
    class: "responsive-video"
  });
});
