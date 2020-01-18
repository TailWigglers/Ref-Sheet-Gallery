$(function() {
  $("#toggle-boi").change(function() {
    var character = window.location.pathname.slice(1, -1);
    var overEighteen = sessionStorage.getItem("over_eighteen");

    if ($(this).prop("checked")) {
      if (overEighteen === "true") {
        switchNSFW(character);
      } else {
        if (!confirm("You must be at least 18 years old to view this content!")) {
          $("#toggle-event").bootstrapToggle("off");
        } else {
          switchNSFW(character);
          sessionStorage.setItem("over_eighteen", "true");
        }
      }
    } else {
      switchSFW(character);
    }
  });
});

function switchNSFW(character) {
  document.getElementById("character-bg").style.backgroundImage =
    "url(../img/" + character.toLowerCase() + "_nsfw.png)";
  document.getElementById("character-img").src = "../img/" + character.toLowerCase() + "_nsfw.png";
  document.getElementById("character-dl").href = "../dwn/" + character + "NSFW.png";
  document.getElementById("character-dl").download = character + "NSFW.png";

  var elements = document.getElementsByClassName("hideable");
  Array.prototype.forEach.call(elements, function(element) {
    element.style.visibility = "visible";
    element.style.display = "flex";
  });
}

function switchSFW(character) {
  document.getElementById("character-bg").style.backgroundImage = "url(../img/" + character.toLowerCase() + "_sfw.png)";
  document.getElementById("character-img").src = "../img/" + character.toLowerCase() + "_sfw.png";
  document.getElementById("character-dl").href = "../dwn/" + character + "SFW.png";
  document.getElementById("character-dl").download = character + "SFW.png";

  var elements = document.getElementsByClassName("hideable");
  Array.prototype.forEach.call(elements, function(element) {
    element.style.visibility = "hidden";
    element.style.display = "none";
  });
}
