const seledrex = "Seledrex";
const czero = "Czero";

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
  if (character === "Couple") {
    document.getElementById("seledrex-bg").style.backgroundImage =
      "url(../img/" + seledrex.toLowerCase() + "_nsfw.png)";
    document.getElementById("seledrex-img").src = "../img/" + seledrex.toLowerCase() + "_nsfw.png";
    document.getElementById("seledrex-dl").href = "../dwn/" + seledrex + "NSFW.png";
    document.getElementById("seledrex-dl").download = seledrex + "NSFW.png";
    document.getElementById("czero-bg").style.backgroundImage = "url(../img/" + czero.toLowerCase() + "_nsfw.png)";
    document.getElementById("czero-img").src = "../img/" + czero.toLowerCase() + "_nsfw.png";
    document.getElementById("czero-dl").href = "../dwn/" + czero + "NSFW.png";
    document.getElementById("czero-dl").download = czero + "NSFW.png";
  } else {
    document.getElementById("character-bg").style.backgroundImage =
      "url(../img/" + character.toLowerCase() + "_nsfw.png)";
    document.getElementById("character-img").src = "../img/" + character.toLowerCase() + "_nsfw.png";
    document.getElementById("character-dl").href = "../dwn/" + character + "NSFW.png";
    document.getElementById("character-dl").download = character + "NSFW.png";
  }

  var elements = document.getElementsByClassName("hideable");
  Array.prototype.forEach.call(elements, function(element) {
    element.style.visibility = "visible";
    element.style.display = "flex";
  });
}

function switchSFW(character) {
  if (character === "Couple") {
    document.getElementById("seledrex-bg").style.backgroundImage = "url(../img/" + seledrex.toLowerCase() + "_sfw.png)";
    document.getElementById("seledrex-img").src = "../img/" + seledrex.toLowerCase() + "_sfw.png";
    document.getElementById("seledrex-dl").href = "../dwn/" + seledrex + "SFW.png";
    document.getElementById("seledrex-dl").download = seledrex + "SFW.png";
    document.getElementById("czero-bg").style.backgroundImage = "url(../img/" + czero.toLowerCase() + "_sfw.png)";
    document.getElementById("czero-img").src = "../img/" + czero.toLowerCase() + "_sfw.png";
    document.getElementById("czero-dl").href = "../dwn/" + czero + "SFW.png";
    document.getElementById("czero-dl").download = czero + "SFW.png";
  } else {
    document.getElementById("character-bg").style.backgroundImage =
      "url(../img/" + character.toLowerCase() + "_sfw.png)";
    document.getElementById("character-img").src = "../img/" + character.toLowerCase() + "_sfw.png";
    document.getElementById("character-dl").href = "../dwn/" + character + "SFW.png";
    document.getElementById("character-dl").download = character + "SFW.png";
  }

  var elements = document.getElementsByClassName("hideable");
  Array.prototype.forEach.call(elements, function(element) {
    element.style.visibility = "hidden";
    element.style.display = "none";
  });
}
