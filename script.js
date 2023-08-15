document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('result').innerHTML = 'Por favor, digite valores válidos.';
        return;
    }
    
    const bmi = weight / (height * height);
    const bmiFormatted = bmi.toFixed(2);

    console.log(bmiFormatted)
});