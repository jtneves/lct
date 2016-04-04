$(document).ready(function() {
  $.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
  });

  jQuery.validator.addMethod("areDifferent", function() {
      var cnumber = $("#cnumber").val();
      var lnumber = $("#lnumber").val();
      if(cnumber == "" || lnumber == ""){
        return true;
      }
      return cnumber != lnumber;
  }, "Numbers must be different");

  $("#linkedForm").validate({
    rules: {
      lnumber: {
        required: true,
        number:   true,
        min:      1,
        max:      9,
        areDifferent : true
      },
      cnumber: {
        required: true,
        number:   true,
        min:      1,
        max:      9,
        areDifferent : true
      }
    }
  });

});