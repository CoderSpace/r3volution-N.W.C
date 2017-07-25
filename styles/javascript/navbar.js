// JavaScript File

var navToggle = document.getElementById('nav-toggle');

//identify nav items

var navItems = document.getElementById('nav-items');

//button waiting to be clicked

navToggle.addEventListener('click', function(){
  
  //the button will get clicked.
// when the button gets clicked, the nav shows.
  

// when the button is clicked again, the nav will disappear.
  
  navItems.classList.toggle('mobile-nav-hidden');

});