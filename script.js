document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let resultText = `Your BMI is: ${bmi} - `;
        
        if (bmi < 18.5) {
            resultText += "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += "Overweight";
        } else {
            resultText += "Obese";
        }
        
        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Please enter valid values for weight and height.";
    }
});