//chrome links js page


//listens for button click for flags
document.addEventListener('DOMContentLoaded', function() {
    var linkflags = document.getElementById('flags');
    // onClick's logic below:
    linkflags.addEventListener('click', function() {
        openFlagsPage();
    });
});

// flags
function openFlagsPage() {
  //opens chrome flags Page
  chrome.tabs.create({url: "chrome://flags"});

}
