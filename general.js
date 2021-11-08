/**document.querySelector('#levelBox').addEventListener("change", function() {
    createLeaderboard(this.value);
});**/

/* Switches page */
function switchPage(page) {
    // hide all pages; then show the current one
    document.querySelectorAll('.page').forEach(function(p) {
      p.style.display = 'none';
    });
    document.getElementById(page).style.display = 'block';

    // highlight the active page-button
    document.querySelectorAll('nav button').forEach(function(n) {
      n.classList.remove('selected');
    });
    document.getElementById(page + "Button").classList.add('selected');
};

// display Homepage onload
switchPage('menu');
