let current_date = new Date();
let current_year = current_date.getFullYear();

document.querySelector("span").textContent = current_year;
document.getElementById("updated").textContent = "Last Updated: " + document.lastModified;

let text = document.lastModified;
            document.getElementById("currentdate").innerHTML = `Last Updated: <span id="currentdate">${text}</span>`