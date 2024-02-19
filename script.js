var i=0;
function change(){
    i++;
    if(i%2==1){
        document.body.style.backgroundColor='red';
    }
    else{
        document.body.style.backgroundColor='bisque';
    }    
}
  // Form validation
  document
    .getElementById("submitBtn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission

      var nameInput = document.getElementById("name");
      var emailInput = document.getElementById("email");

      if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        //trim
        alert("Please fill in all required fields.");
      } else {
        alert("Form submitted successfully!");
      }
    });