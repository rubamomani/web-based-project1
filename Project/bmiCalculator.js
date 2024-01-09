<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BMI Calculator</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">  
  
  

  <style> 
    .error-message {
      color: red;
    }
  </style>
</head>
<body>
<h2>BMI Calculator</h2>
<label for="height">Height (in cm):</label>
<input type="text" id="height" name="height"> <span class="error-message" id="invalid1"></span>
<br><br>
<label for="weight">Weight (in kg):</label>
<input type="text" id="weight" name="weight"> <span class="error-message" id="invalid2"></span>
<br><br>
Gender: <input type="radio" name="gender" id="male"> Male <input type="radio" name="gender" id="female"> Female
<span class="error-message" id="genderError"></span>
<br><br>
Lifestyle:
<input type="checkbox" name="lifestyle" id="active" onclick="updateLifestyle()"> Active
<input type="checkbox" name="lifestyle" id="sedentary" onclick="updateLifestyle()"> Sedentary
<span class="error-message" id="lifestyleError"></span>
<br><br>
<button onclick="calculateBMI()">Calculate BMI</button>
<p id="bmiResult"></p>
<textarea name="" id="result" cols="30" rows="10"></textarea>
<script>
  function updateLifestyle() {
    var activeCheckbox = document.getElementById("active");
    var sedentaryCheckbox = document.getElementById("sedentary");

    if (activeCheckbox.checked && sedentaryCheckbox.checked) {
      activeCheckbox.checked = false;
      sedentaryCheckbox.checked = true;
    } else if (!activeCheckbox.checked && !sedentaryCheckbox.checked) {
      sedentaryCheckbox.checked = true;
    }
  }

  function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var active = document.getElementById("active").checked;
    var sedentary = document.getElementById("sedentary").checked;

    
    document.getElementById("invalid1").innerHTML = "";
    document.getElementById("invalid2").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("lifestyleError").innerHTML = "";

    var hasErrors = false;

    if (height === "" || parseFloat(height) < 0) {
      document.getElementById("invalid1").innerHTML = "Enter a valid height!";
      hasErrors = true;
    }

    if (weight === "" || parseFloat(weight) < 0) {
      document.getElementById("invalid2").innerHTML = "Enter a valid weight!";
      hasErrors = true;
    }

    if (!male && !female) {
      document.getElementById("genderError").innerHTML = "Select your gender!";
      hasErrors = true;
    }

    if (!active && !sedentary) {
      document.getElementById("lifestyleError").innerHTML = "Select at least one lifestyle option!";
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    height = parseFloat(height);
    weight = parseFloat(weight);

    var bmi = weight / (height * height) * 10000;
    bmi = bmi.toFixed(2);

    let Status = "";

    if (bmi < 18.5) {
      Status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      Status = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      Status = "Overweight";
    } else {
      Status = "Obese";
    }

    var selectedGender = male ? "Male" : "Female";
    var selectedLifestyle = active ? "Active" : (sedentary ? "Sedentary" : "Not specified");

    document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi + ", indicating that you are " + Status;
    document.getElementById("result").innerHTML = "Height: " + height + " cm \nWeight: " + weight + " kg \nGender: " + selectedGender + "\nLifestyle: " + selectedLifestyle + "\nBMI: " + bmi + "\nStatus: " + Status;
  }
</script>
</body>
</html>