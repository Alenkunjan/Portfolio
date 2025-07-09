function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function sendMail(){

  var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
  };

  const serviceID = "service_ykwps1r";
  const templateID = "template_di0iqun";

      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById('name').value="";
          document.getElementById('email').value="";
          document.getElementById('subject').value="";
          document.getElementById('message').value="";
          alert("Your message was sent successfully");
      })
      .catch(err=>console.log(err));

}