/* Formatted Date Header */
const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full",
  }).format(new Date());
  const year = new Date(document.lastModified).getFullYear();
  
  const yearSelector = document.querySelector('#year');
  if (yearSelector) yearSelector.innerHTML = year;
  document.querySelector("#currentDate").innerHTML = currentDate;
  
  
  
  const date = new Date(document.lastModified).toLocaleString();
  document.querySelector("#last-updated").innerHTML = date;
  