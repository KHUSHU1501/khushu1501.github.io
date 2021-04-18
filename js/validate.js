function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');
  const form = document.querySelector('form');
  let long = form.longitude.value;
  let lat = form.latitude.value;
  let valid = true;

  let longError = document.querySelector(".long").querySelector("span");
  let latError = document.querySelector(".lat").querySelector("span");

  if(isNaN(long) || long > 180 || long < -180)
  {
    longError.innerText = "* must be a valid Longitude (-180 to 180)";
    return valid;
  }
  else  longError.innerText = "*";
  if(isNaN(lat) || lat > 90 || lat < -90)
  {
    latError.innerText = "* must be a valid Latitude (-90 to 90)";
    return valid;
  }
  else  latError.innerText = "*";

  return valid;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
