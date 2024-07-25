document.addEventListener("DOMContentLoaded",()=>{
    $("#menu").on("click",()=>{
    $("nav").slideToggle(500)
})
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