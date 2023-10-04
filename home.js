const rsaContainer = document.getElementById("rsa-container");
const focContainer = document.getElementById("foc-container");
const mindleContainer = document.getElementById("mindle-container");
const glyphsContainer = document.getElementById("glyphs-container");
const softContainer = document.getElementById("soft-container");
const platContainer = document.getElementById("plat-container");

const duckContainer = document.getElementById("duck-container");
const clipContainer = document.getElementById("clip-container");

const rsaRectangle = document.getElementById("rsa-expand-rectangle");
const focRectangle = document.getElementById("foc-expand-rectangle");
const mindleRectangle = document.getElementById("mindle-expand-rectangle");
const glyphsRectangle = document.getElementById("glyphs-expand-rectangle");
const softRectangle = document.getElementById("soft-expand-rectangle");
const platRectangle = document.getElementById("plat-expand-rectangle");

const duckRectangle = document.getElementById("duck-expand-rectangle");
const clipRectangle = document.getElementById("clip-expand-rectangle");

const focThumb = document.getElementById("foc-thumbnail");
const glyphsThumb = document.getElementById("glyphs-thumbnail");
const rsaThumb = document.getElementById("rsa-thumbnail");
const mindleThumb = document.getElementById("mindle-thumbnail");
const softThumb = document.getElementById("soft-thumbnail");
const platThumb = document.getElementById("plat-thumbnail");

const duckThumb = document.getElementById("duck-thumbnail");
const clipThumb = document.getElementById("clip-thumbnail");

const rsaTextContainer = document.getElementById("rsa-text-container");
const focTextContainer = document.getElementById("foc-text-container");
const mindleTextContainer = document.getElementById("mindle-text-container");
const glyphsTextContainer = document.getElementById("glyphs-text-container");
const softTextContainer = document.getElementById("soft-text-container");
const platTextContainer = document.getElementById("plat-text-container");

const duckTextContainer = document.getElementById("duck-text-container");
const clipTextContainer = document.getElementById("clip-text-container");

//let portrait = window.matchMedia("(orientation: portrait)");
//let portraitMatch = window.matchMedia("(orientation: portrait)").matches;

portrait.addEventListener("change", function (e) {
  if (e.matches) {
    // Portrait mode
    portraitMatch = true;
    removeImgEventListener();
  } else {
    portraitMatch = false;
    imgEventListener();
  }
});

/* image animation */

if (portraitMatch == false) {
  imgEventListener();
}

function removeImgEventListener() {
  rsaContainer.removeEventListener("mouseover", showRsa);
  focContainer.removeEventListener("mouseover", showFoc);
  mindleContainer.removeEventListener("mouseover", showMindle);
  glyphsContainer.removeEventListener("mouseover", showGlyphs);
  softContainer.removeEventListener("mouseover", showSoft);
  platContainer.removeEventListener("mouseover", showPlat);
  duckContainer.removeEventListener("mouseover", showDuck);
  clipContainer.removeEventListener("mouseover", showClip);

  rsaContainer.removeEventListener("mouseout", hideRsa);
  focContainer.removeEventListener("mouseout", hideFoc);
  mindleContainer.removeEventListener("mouseout", hideMindle);
  glyphsContainer.removeEventListener("mouseout", hideGlyphs);
  softContainer.removeEventListener("mouseout", hideSoft);
  platContainer.removeEventListener("mouseout", hidePlat);
  softContainer.removeEventListener("mouseout", hideDuck);
  platContainer.removeEventListener("mouseout", hideClip);
}

function showRsa() {
  rsaRectangle.style.transform = "scale(6,6)";
  rsaThumb.style.opacity = "0";
  rsaTextContainer.style.opacity = "1";

  focThumb.style.opacity = ".25";
  mindleThumb.style.opacity = ".25";
  glyphsThumb.style.opacity = ".25";
  softThumb.style.opacity = ".25";
  platThumb.style.opacity = ".25";
}

function hideRsa() {
  rsaRectangle.style.transform = "scale(1,1)";
  rsaThumb.style.opacity = "1";
  rsaTextContainer.style.opacity = "0";

  focThumb.style.opacity = "1";
  mindleThumb.style.opacity = "1";
  glyphsThumb.style.opacity = "1";
  softThumb.style.opacity = "1";
  platThumb.style.opacity = "1";
}

function showFoc() {
  focRectangle.style.transform = "scale(6,6)";
  focThumb.style.opacity = "0";
  focTextContainer.style.opacity = "1";

  rsaThumb.style.opacity = ".25";
  mindleThumb.style.opacity = ".25";
  glyphsThumb.style.opacity = ".25";
  softThumb.style.opacity = ".25";
  platThumb.style.opacity = ".25";
}

function hideFoc() {
  focRectangle.style.transform = "scale(1,1)";
  focThumb.style.opacity = "1";
  focTextContainer.style.opacity = "0";

  rsaThumb.style.opacity = "1";
  mindleThumb.style.opacity = "1";
  glyphsThumb.style.opacity = "1";
  softThumb.style.opacity = "1";
  platThumb.style.opacity = "1";
}

function showMindle() {
  mindleRectangle.style.transform = "scale(6,6)";
  mindleThumb.style.opacity = "0";
  mindleTextContainer.style.opacity = "1";

  rsaThumb.style.opacity = ".25";
  focThumb.style.opacity = ".25";
  glyphsThumb.style.opacity = ".25";
  softThumb.style.opacity = ".25";
  platThumb.style.opacity = ".25";
}

function hideMindle() {
  mindleRectangle.style.transform = "scale(1,1)";
  mindleThumb.style.opacity = "1";
  mindleTextContainer.style.opacity = "0";

  rsaThumb.style.opacity = "1";
  focThumb.style.opacity = "1";
  glyphsThumb.style.opacity = "1";
  softThumb.style.opacity = "1";
  platThumb.style.opacity = "1";
}

function showGlyphs() {
  glyphsRectangle.style.transform = "scale(6,6)";
  glyphsThumb.style.opacity = "0";
  glyphsTextContainer.style.opacity = "1";

  rsaThumb.style.opacity = ".25";
  focThumb.style.opacity = ".25";
  mindleThumb.style.opacity = ".25";
  softThumb.style.opacity = ".25";
  platThumb.style.opacity = ".25";
}

function hideGlyphs() {
  glyphsRectangle.style.transform = "scale(1,1)";
  glyphsThumb.style.opacity = "1";
  glyphsTextContainer.style.opacity = "0";

  rsaThumb.style.opacity = "1";
  focThumb.style.opacity = "1";
  mindleThumb.style.opacity = "1";
  softThumb.style.opacity = "1";
  platThumb.style.opacity = "1";
}

function showSoft() {
    softRectangle.style.transform = "scale(6,6)";
    softThumb.style.opacity = "0";
    softTextContainer.style.opacity = "1";

    rsaThumb.style.opacity = ".25";
    focThumb.style.opacity = ".25";
    mindleThumb.style.opacity = ".25";
    glyphsThumb.style.opacity = ".25";
    platThumb.style.opacity = ".25";
}

function hideSoft() {
    softRectangle.style.transform = "scale(1,1)";
    softThumb.style.opacity = "1";
    softTextContainer.style.opacity = "0";

    rsaThumb.style.opacity = "1";
    focThumb.style.opacity = "1";
    mindleThumb.style.opacity = "1";
    glyphsThumb.style.opacity = "1";
    platThumb.style.opacity = "1";
}

function showPlat() {
    platRectangle.style.transform = "scale(6,6)";
    platThumb.style.opacity = "0";
    platTextContainer.style.opacity = "1";

    rsaThumb.style.opacity = ".25";
    focThumb.style.opacity = ".25";
    mindleThumb.style.opacity = ".25";
    glyphsThumb.style.opacity = ".25";
    softThumb.style.opacity = ".25";
}

function hidePlat() {
    platRectangle.style.transform = "scale(1,1)";
    platThumb.style.opacity = "1";
    platTextContainer.style.opacity = "0";

    rsaThumb.style.opacity = "1";
    focThumb.style.opacity = "1";
    mindleThumb.style.opacity = "1";
    glyphsThumb.style.opacity = "1";
    softThumb.style.opacity = "1";
}

function showDuck() {
    duckRectangle.style.transform = "scale(6,6)";
    duckThumb.style.opacity = "0";
    duckTextContainer.style.opacity = "1";

    clipThumb.style.opacity = ".25";
}

function hideDuck() {
    duckRectangle.style.transform = "scale(1,1)";
    duckThumb.style.opacity = "1";
    duckTextContainer.style.opacity = "0";

    clipThumb.style.opacity = "1";
}

function showClip() {
    clipRectangle.style.transform = "scale(6,6)";
    clipThumb.style.opacity = "0";
    clipTextContainer.style.opacity = "1";

    duckThumb.style.opacity = ".25";
}

function hideClip() {
    clipRectangle.style.transform = "scale(1,1)";
    clipThumb.style.opacity = "1";
    clipTextContainer.style.opacity = "0";

    duckThumb.style.opacity = "1";
}

function imgEventListener() {
  rsaContainer.addEventListener("mouseover", showRsa);
  rsaContainer.addEventListener("mouseout", hideRsa);
  focContainer.addEventListener("mouseover", showFoc);
  focContainer.addEventListener("mouseout", hideFoc);
  mindleContainer.addEventListener("mouseover", showMindle);
  mindleContainer.addEventListener("mouseout", hideMindle);
  glyphsContainer.addEventListener("mouseover", showGlyphs);
  glyphsContainer.addEventListener("mouseout", hideGlyphs);
  softContainer.addEventListener("mouseover", showSoft);
  softContainer.addEventListener("mouseout", hideSoft);
  platContainer.addEventListener("mouseover", showPlat);
  platContainer.addEventListener("mouseout", hidePlat);

  duckContainer.addEventListener("mouseover", showDuck);

  duckContainer.addEventListener("mouseout", hideDuck);

  clipContainer.addEventListener("mouseover", showClip);

  clipContainer.addEventListener("mouseout", hideClip);
}
