document.getElementById("myLink").addEventListener("click", function(e) {
  

  const about = document.getElementById("about");


  about.classList.remove("slide-in-top");
  void about.offsetWidth; 
  about.classList.add("slide-in-top");
});

