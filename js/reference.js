$(function() {
  $("#toggle-boi").change(function() {
    if ($(this).prop("checked")) {
      if (!confirm("You must be at least 18 years old to view this content!")) {
        $("#toggle-event").bootstrapToggle("off");
      }
    }
  });
});
