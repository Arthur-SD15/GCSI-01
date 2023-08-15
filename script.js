document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById('result').innerHTML = 'Por favor, digite valores válidos.';
        return;
    }
    
    const bmi = weight / (height * height);
    const bmiFormatted = bmi.toFixed(2);

    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Abaixo do peso';
    } else if (bmi < 24.9) {
        bmiCategory = 'Peso normal';
    } else if (bmi < 29.9) {
        bmiCategory = 'Sobrepeso';
    } else {
        bmiCategory = 'Obesidade';
    }

    const resultText = `Seu IMC é ${bmiFormatted} (${bmiCategory}).`;
    document.getElementById('result').innerHTML = resultText;
});