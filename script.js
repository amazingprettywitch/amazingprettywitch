
/* function of tabs */
    function openTab(event, tabId) {
  var i, tabContent, tabButton;

  // Hide all tab content
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove "active" class from all tab buttons
  tabButton = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }

  // Show the selected tab content and set the button as active
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " active";
}

// Show the first tab by default
document.getElementById("tab1").style.display = "block";


/* function of poems */
function openPoem(event, poemId) {
  var poemContent = document.getElementById(poemId);
  var allPoemContents = document.getElementsByClassName('poem-content');

  // Hide all other poem contents
  for (var i = 0; i < allPoemContents.length; i++) {
    var currentPoemContent = allPoemContents[i];
    if (currentPoemContent.id !== poemId && currentPoemContent.style.display === "inline") {
      currentPoemContent.style.display = "none";
    }
  }


  // Toggle the display of the selected poem content
  if (poemContent.style.display === "none") {
    poemContent.style.display = "inline";
  } else {
    poemContent.style.display = "none";
  }
}