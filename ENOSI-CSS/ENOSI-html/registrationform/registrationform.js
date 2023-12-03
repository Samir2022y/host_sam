let Submit_Btn = document.querySelector("#Submit_Btn"),
  First_Name = document.querySelector("#First_Name"),
  Last_Name = document.querySelector("#Last_Name"),
  NIN = document.querySelector("#NIN"),
  Confirm_NIN = document.querySelector("#Confirm_NIN"),
  Birthdate = document.querySelector("#Birthdate"),
  small = document.querySelector("small");
//Email.classList.contains("error");
Submit_Btn.addEventListener("click", (event) => {
  event.preventDefault();
  if(checkInputs())
  window.location.href = "registrationForm2.html";

});

function checkInputs() {
  // get the values from the inputs
  const First_NameValue = First_Name.value.trim();
  const Last_NameValue = Last_Name.value.trim();
  const NINValue = NIN.value.trim();
  const Confirm_NINValue = Confirm_NIN.value.trim();
  const BirthdateValue = Birthdate.value.trim();
  const Today_Date = Date.now();
  const BirthdateValue_MS = Date.parse(BirthdateValue);
  let Birthdate_check = false;
  let Confirm_NIN_check = false;
  let NINValue_check = false;
  let Last_Name_check = false;
  let First_Name_check = false;

  if (First_NameValue === "") {
    // show error
    // add error class
    setErrorFor(First_Name, "Fisrt Name cannot be blank");
  } else {
    // add success class
    setSuccessFor(First_Name);
    First_Name_check = true;
    
  }

  if (Last_NameValue === "") {
    setErrorFor(Last_Name, "Last name cannot be blank");
  } else {
    setSuccessFor(Last_Name);
    Last_Name_check = true;
  }

  if (NINValue === "") {
    setErrorFor(NIN, "NIN cannot be blank");
  } else {
    setSuccessFor(NIN);
    NINValue_check = true;
  }

  if (Confirm_NINValue === "") {
    setErrorFor(Confirm_NIN, "Confirm NIN cannot be blank");
  } else if (NINValue !== Confirm_NINValue) {
    setErrorFor(Confirm_NIN, "NIN does not match");
  } else {
    setSuccessFor(Confirm_NIN);
    Confirm_NIN_check = true;
  }

  if (BirthdateValue === "") {
    setErrorFor(Birthdate, "Birthdate cannot be blank");
  } else if (BirthdateValue_MS > Today_Date) {
    setErrorFor(Birthdate, "You can't be born in the future");
  } else if (
    (Today_Date - BirthdateValue_MS) / (1000 * 60 * 60 * 24 * 365) <
    18
  ) {
    setErrorFor(Birthdate, "You must be 18 years old or older");
  } else {
    setSuccessFor(Birthdate);
    Birthdate_check = true;
  }

  if (Birthdate_check === true && Confirm_NIN_check 
    === true && NINValue_check === true && Last_Name_check === true
    && First_Name_check === true){
    return true;
    }
    else{
      return false;
    }
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


