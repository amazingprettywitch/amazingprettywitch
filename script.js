
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




  var option1 = document.querySelector("p1");
  var option1Content = document.getElementById("option1-content");
  var closeBtn = document.getElementById("close-btn");

  option1.addEventListener("click", function() {
    option1Content.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    option1Content.style.display = "none";
  });
  


  var option2 = document.querySelector("p2");
  var option2Content = document.getElementById("option2-content");
  var close1Btn = document.getElementById("close1-btn");

  option2.addEventListener("click", function() {
    option2Content.style.display = "block";
  });

  close1Btn.addEventListener("click", function() {
    option2Content.style.display = "none";
  });
