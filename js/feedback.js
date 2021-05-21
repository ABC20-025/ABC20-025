
function checkForm(){
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First name must be filled out");
    return false;
  }
}

//function checkForm(){
  var x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Last name must be filled out");
    return false;
  }
}

function checkForm(){
  var x = document.forms["myForm"]["emailaddress"].value;
  if (x == "") {
    alert("email address must be filled out");
    return false;
  }
}

function checkForm(){
  var x = document.forms["myForm"]["country"].value;
  if (x == "") {
    alert("Country must be filled out");
    return false;
  }
}

function checkForm(){
  var x = document.forms["myForm"]["region"].value;
  if (x == "") {
    alert("Region must be filled out");
    return false;
  }
}
