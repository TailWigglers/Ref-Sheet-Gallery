$(function() {
  $("#toggle-boi").change(function() {
    var character = window.location.pathname.slice(1, -1);
    if ($(this).prop("checked")) {
      if (!confirm("You must be at least 18 years old to view this content!")) {
        $("#toggle-event").bootstrapToggle("off");
      } else {
        document.getElementById("character-bg").style.backgroundImage =
          "url(../img/" + character.toLowerCase() + "_nsfw.png)";
        document.getElementById("character-img").src = "../img/" + character.toLowerCase() + "_nsfw.png";
        document.getElementById("character-dl").href = "../dwn/" + character + "NSFW.png";
        document.getElementById("character-dl").download = character + "NSFW.png";
      }
    } else {
      document.getElementById("character-bg").style.backgroundImage =
        "url(../img/" + character.toLowerCase() + "_sfw.png)";
      document.getElementById("character-img").src = "../img/" + character.toLowerCase() + "_sfw.png";
      document.getElementById("character-dl").href = "../dwn/" + character + "SFW.png";
      document.getElementById("character-dl").download = character + "SFW.png";
    }
  });
});
