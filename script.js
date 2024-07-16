let feet = document.getElementById('height-in-feet');
let inch = document.getElementById('height-in-inch');
let weight = document.getElementById('weight');
let age = document.getElementById('age');
let obj = {};
function total() {
    if (feet.value === '' || inch.value === '' || weight.value === '' || age.value === '') {
        alert("Please fill all fields");
        return;
    }

    let ageInYrs = parseInt(age.value);
    let heightInFeet = parseInt(feet.value);
    let weightInKg = parseInt(weight.value);
    let heightInInches = parseInt(inch.value) / 12;

    if (ageInYrs <= 6) {
        alert("Your age is not eligible to claculate BMI");
        return;
    }

    let totalHeightInCm = (heightInFeet + heightInInches) * 30.48;
    let bmiResult = (weightInKg / (totalHeightInCm * totalHeightInCm)) * 10000;
    let bmiVal = bmiResult.toFixed(2);
    result(ageInYrs, bmiVal);
    userDetails(obj);
}

function result(age, bmi) {
    obj.age = age;
    obj.bmi = bmi;
    let bmiCategory = '';
    if (!isNaN(bmi)) {
        document.getElementById('bmi').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        document.getElementById('resultValue').innerHTML = bmi;
        switch (true) {
            case bmi < 18.5:
                bmiCategory = 'Underweight😁'.fontcolor('orange');
                obj.health = "Underweight";
                break;
            case (bmi > 18.5 && bmi < 24.9):
                bmiCategory = 'Healthy🥳'.fontcolor('green');
                obj.health = "Healthy";
                break;
            case (bmi > 30):
                bmiCategory = 'Overweight😥'.fontcolor('red');
                obj.health = "Overweight";
                break;
            default:
                bmiCategory = bmi + "Unknown".fontcolor('red');
        }

        document.getElementById('bmiCategory').innerHTML = bmiCategory;
    } else {

        document.getElementById('bmi').style.display = 'none';
    }
}

function selectGender(gender) {
    if (gender == 'male') {
        obj.gender = 'Male';
        document.getElementById(gender).classList.add('gender-active');
        document.getElementById('female').classList.remove('gender-active');
    } else {
        obj.gender = 'Female';
        document.getElementById(gender).classList.add('gender-active');
        document.getElementById('male').classList.remove('gender-active');
    }
}

function userDetails(obj) {
    document.getElementById('gender').innerHTML = (obj.gender);
    document.getElementById('bmiVal').innerHTML = obj.bmi;
    document.getElementById('ageVal').innerHTML = obj.age;
    document.getElementById('health').innerHTML = obj.health;
}

function shareOnWhatsApp() {
    var message = "Hey, I am " + obj.age + " years old and my BMI is " + obj.bmi + ". I am " + obj.health + ".";
    var url = "whatsapp://send?text=" + message;
    let anchor = document.getElementById('share');
    anchor.setAttribute('href', url);
    window.open(url, '_blank');
}