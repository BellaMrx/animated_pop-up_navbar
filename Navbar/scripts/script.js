// switch between darkmode.css and lightmode.css
// Select the button
const btn = document.querySelector(".btn-dark-light-mode");
// Select the stylesheet <link id="mode-link">
const theme = document.querySelector("#mode-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
     // If the current URL contains "darkmode.css"
    if (theme.getAttribute("href") == "styles/darkmode.css") {
        // ... then switch it to "lightmode.css"
        theme.href = "styles/lightmode.css";
    // Otherwise...
    } else {
        // ... switch it to "darkmode.css"
        theme.href = "styles/darkmode.css";
    }
});


// change Icon <i>dark light mode</i> 
function changeIcon (iconID) {
    if (document.getElementById(iconID).className=="fa fa-sun") {
        //switch it to icon2
        document.getElementById(iconID).className = "fa fa-moon";
    } else {
        document.getElementById(iconID).className = "fa fa-sun";
    }
};


