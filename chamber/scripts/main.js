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
  
  