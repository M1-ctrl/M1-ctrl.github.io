document.addEventListener("DOMContentLoaded",()=>{
    const paragraph = document.getElementById('responsive-paragraph-content');

// Add an event listener to the window resize event
window.addEventListener('resize', () => {
  // Get the current window width
  const windowWidth = window.innerWidth;

  // Adjust the font size based on the window width
  if (windowWidth <= 768) {
    paragraph.style.fontSize = '16px';
  } else if (windowWidth <= 480) {
    paragraph.style.fontSize = '14px';
  } else {
    paragraph.style.fontSize = '18px';
  }
});
/* menu toggle */
$("#menu").on("click",()=>{
    $("nav").slideToggle(500)
})
/*to toggle the display of certain power words and child boxes*/

$(".pw-protocol").click(()=>{
    $(".pwp-exp").slideToggle(500)
})
$(".pw-subDomain").click(()=>{
    $(".pwsd-exp").slideToggle(500)
})
$(".pw-domainName").click(()=>{
    $(".pwdn-exp").slideToggle(500)
})
$(".pw-topLevelDomain").click(()=>{
    $(".pwtld-exp").slideToggle(500)
})

$(".one").click(function(){
    $(".rpone").slideToggle(500)
})
$(".two").click(function(){
    $(".rptwo").slideToggle(500)
})
$(".three").click(function(){
    $(".rpthree").slideToggle(500)
})
$(".four").click(function(){
    $(".rpfour").slideToggle(500)
})
$(".five").click(function(){
    $(".rpfive").slideToggle(500)
})
$(".six").click(function(){
    $(".rpsix").slideToggle(500)
})
$(".seven").click(function(){
    $(".rpseven").slideToggle(500)
})
$(".eight").click(function(){
    $(".rpeight").slideToggle(500)
})
$(".nine").click(function(){
    $(".rpnine").slideToggle(500)
})
$(".ten").click(function(){
    $(".rpten").slideToggle(500)
})


 //Lazy loaded Images
    const blurry = document.querySelectorAll(".images");
    blurry.forEach((bdiv)=>{
        const bimgs = bdiv.querySelector("img");
        function loaded(){
            bdiv.classList.add("blurClass")
        }
        if (bimgs.complete) {
            loaded()
        }
        else{
            bimgs.addEventListener("load",loaded)
        }
    })
    $("header"). click(()=>{
        $("#nav-bar").slideToggle(500)
    })
    //box animating in
  /* const divBoxes = document.querySelectorAll(".child-box");
  const io = new IntersectionObserver((boxes)=>{
      boxes.forEach((bxs)=>{
          if(bxs.isIntersecting){
       bxs.target.classList.add("animate")
      }
      
      })
      
  })
 divBoxes.forEach((bs)=>{
     io.observe(bs)
 }) */
   
    /* menu toggle */
$(".menu-btn").on("click",()=>{
    $("nav").slideToggle(500)
})
// Get the menu button element
    
const menuBtn = document.getElementById('menu-btn');

// Add an event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the 'clicked' class on the menu button
  menuBtn.classList.toggle('clicked');
});

 /* Email send function */
let mail = document.getElementById("mail");
let msg = document.getElementById("msg");
let submit = document.getElementById("submit");
let mailR = document.getElementById("mailR");
submit.onclick = ()=>{
    let valid = validator.isEmail(mail.value);
    if(mail.value!=""&&msg.value!=""&&valid==true){
    $(".loading").css("display","block");
    var templateParams = {
  myname:"Clinton",
  name: mail.value,
  message: msg.value
};
//emailjs.send(' your service_key','your template id')
emailjs.send('service_alk8kvm', 'template_ql3bx4s', templateParams)

  .then(function (response) {
    /*console.log('SUCCESS!', response.status, response.text);*/
    swal("Email Sent Successfully","","success");
    $(".loading").css("display","none");
    $("#reset").trigger("click");
  }, function (error) {
    /* console.log('FAILED...', error); */
    swal("Email couldn't send","Check your network connection","error")
     $(".loading").css("display","none");
  })
  }
  else{
      /* alert("Please fill essential details") */
      swal("Please fill essential details","","warning")
  }
}
quicklink.listen({
    timeout:2000
});
})