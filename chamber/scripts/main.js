/* Formatted Date Header */
const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  }).format(new Date());
  const year = new Date(document.lastModified).getFullYear();
  
  const yearSelector = document.querySelector('#year');
  if (yearSelector) yearSelector.innerHTML = year;
  document.querySelector("#currentDate").innerHTML = currentDate;
  
  
  /*Hamburger Button */
  const hamButton = document.querySelector('#menu');
  const navigation= document.querySelector('.navigation');
  
  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
  });
  
  const date = new Date(document.lastModified).toLocaleString();
  
  document.querySelector("#last-updated").innerHTML = date;
  
  const hero = new Date();
  const day = hero.getDay();
  if (day < 1 || day > 2) {
    const x = document.querySelector('.topbar');
    x.remove();
  }
  
const modeButton = document.querySelector("#mode");
const body = document.body;
const darkH1 = document.querySelector("#title-page");
const darkH2 = document.querySelector("h2");
const darkH3 = document.querySelector(".footer-p-1");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const darkT = document.querySelector(".home-grid");
const darkF = document.querySelector("footer");
const darkP1 = document.querySelector(".footer-p-1");
const darkP2 = document.querySelector(".footer-p-2");
const darkP3 = document.querySelector(".footer-p-3");
const darkP4 = document.querySelector(".footer-p-4");
const darkP5 = document.querySelector(".last-p");

// #00303F
modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        body.style.background = "#000";
        body.style.color = "#fff";
        modeButton.textContent = "🔆";
        modeButton.style.background = "#4F5165";
        darkH1.style.color = "#ff8c00";
        darkH2.style.color = "#ff8c00";
        darkH3.style.color = "#ff8c00";
        header.style.color = "#000";
        nav.style.color = "#27374D"
        darkT.style.background = "#000";
        darkF.style.background = "#27374D";
        darkP1.style.color = "#ff8c00";
        darkP2.style.color = "#ff8c00";
        darkP3.style.color = "#ff8c00";
        darkP4.style.color = "#ff8c00";
        darkP5.style.color = "#ff8c00";
    } else {
        body.style.background = "#eee";
        body.style.color = "#000";
        modeButton.textContent = "🕶️";
        darkH1.style.color = "#474044";
        darkH2.style.color = "#474044";
        darkH3.style.color = "#474044";
        header.style.color = "#474044";
        nav.style.color = "#27374D"
        darkT.style.background = "white";
        modeButton.style.background = "white";
        darkF.style.background = "#02254b";
        darkP1.style.color = "white";
        darkP2.style.color = "white";
        darkP3.style.color = "white";
        darkP4.style.color = "white";
        darkP5.style.color = "white";
    }
});
