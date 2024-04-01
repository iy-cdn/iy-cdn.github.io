 
// dark mode
let darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
function mode() { darkMode = !darkMode; updateDarkMode(); localStorage.setItem('darkMode', JSON.stringify(darkMode)); }
function updateDarkMode() { document.body.classList.toggle('dark', darkMode); }
document.addEventListener('DOMContentLoaded', updateDarkMode);





$.includeHTML(myCallback); function myCallback() {
 $.displayObject("app", data);
 $.slideshow(".slid");
};


function attr(element, attribute, value) {
 element.addEventListener("click", function() {
  element.setAttribute(attribute, value);
 });
}

