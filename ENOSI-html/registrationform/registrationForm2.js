let Submit_Btn = document.querySelector(".Submit-btn"),
  Email = document.querySelector("#Email"),
  Phone_Number = document.querySelector("#Phone_Number"),
  City = document.querySelector('#City');
  Address = document.querySelector('#Address');
  small = document.querySelector("small");
//Email.classList.contains("error");
Submit_Btn.addEventListener("click", (event) => {
    event.preventDefault();
    if(checkInputs())
    window.location.href = "registrationForm3.html";
  
});

function checkInputs() {
    // get the values from the inputs
    const EmailValue = Email.value.trim();
    const Phone_NumberValue = Phone_Number.value.trim();
    const CityValue = City.value.trim();
    const AddressValue = Address.value.trim();
    let City_check = false;
    let Address_check = false;
    let Phone_check = false;
    let Email_check = false;
      if (AddressValue === "") {
        setErrorFor(Address, "Address cannot be blank");
      } else {
        setSuccessFor(Address);
        Address_check = true;
      }
      if (CityValue === "") {
        setErrorFor(City, "City cannot be blank");
      } else {
        setSuccessFor(City);
        City_check = true;
      }
      if (Phone_NumberValue === "") {
        setErrorFor(Phone_Number, "Phone Number cannot be blank");
      } else if (!isPhone_Number(Phone_NumberValue)) {
        setErrorFor(Phone_Number, "Phone Number is not valid");
      } else {
        setSuccessFor(Phone_Number);
        Phone_check = true;
      }
      if (EmailValue === "") {
        setErrorFor(Email, "Email cannot be blank");
      } else if (!isEmail(EmailValue)) {
        setErrorFor(Email, "Email is not valid");
      } else {
        setSuccessFor(Email);
        Email_check = true;
      }
    // Updated validation logic
    return City_check && Address_check && Email_check && Phone_check;
  }
  

function setErrorFor(input, message) {
    // add error message inside small
    small.innerText = message;
  
    // add error class
    if (input.classList.contains("success")) input.classList.remove("success");
  
    input.classList.add("error");
  }
  
  function setSuccessFor(input) {
    if (input.classList.contains("error")) input.classList.remove("error");
    input.classList.add("success");
  }
  
function isEmail(Email) {
  return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
    Email
  );
}

function isPhone_Number(Phone_Number) {
  return /^([0]{1}[5-7]{1}[0-9]{8})$/.test(Phone_Number);
}