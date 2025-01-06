// script.js
document.addEventListener("DOMContentLoaded",()=>{
    

function createStars(numStars) {
    const spaceBackground = document.querySelector('.space-background');
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = `${Math.random() * 2 + 1}px`;
        spaceBackground.appendChild(star);
    }
}

createStars(100); // Create 100 stars

 const io = new IntersectionObserver((el)=>{
        if(el[0].isIntersecting){
            
            cta.style.transform="translateX(150%)"
        }
        else{
            
            cta.style.transform="translateX(0%)"
        }
        /* io.disconnect(); */
    })
    io.observe(target)
      var typed = new Typed('#element', {
  strings: ['Welcome To Dukespot', 'Discover Articles and Insights on Modern Technology', 'Click To Explore'],
  typeSpeed: 50,
  onComplete: function() {

    console.log('All strings have been typed!');
    $("#target").css("display","block")
  }
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