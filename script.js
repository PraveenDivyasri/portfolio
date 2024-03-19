document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  
  var formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    mobile: document.getElementById('mobile').value,
    message: document.getElementById('message').value
  };

  
  var formDataJson = JSON.stringify(formData);

  console.log(formData)
  document.getElementById('formData').value = formDataJson;
  this.submit();
})