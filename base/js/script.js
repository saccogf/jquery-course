$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  const t = 2000;

  function animate() {
    $(".blue-box").animate({
      "margin-left": "+=200px"
    }, t);
  }

  function displays(){
    $(".red-box").fadeToggle(t).fadeIn(t).slideUp(t).slideDown(t);
  $(".green-box").fadeOut(t).fadeIn(t);
  $(".blue-box").fadeOut(t).fadeIn(t);

  $("p").fadeOut(t).slideDown(t)

  }

  function minip() {
    $("p").animate({
      "font-size": "0%"
    }, t, animate)

  }

  // displays();
  // animate();
  minip();



  
});