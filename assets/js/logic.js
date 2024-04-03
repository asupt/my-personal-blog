const darkModeButton = document.querySelector('#darkModeButton');
const backButton = document.querySelector('#back');
//toggle darkmode function
function darkMode() {
    var page = document.querySelector('body');
    var footer = document.querySelector('footer');
    page.classList.toggle("darkMode");
    footer.classList.toggle("darkMode");
  }
//click button to toggle darkmode
darkModeButton.addEventListener('click', function() {
  darkMode();
});
//click button to go back to new post page
backButton.addEventListener('click', function() {
  window.location.href="index.html";

});

