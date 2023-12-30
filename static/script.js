function generateRandomEvenNumber() {
    fetch('/generate_random_even_number')
        .then(response => response.json())
        .then(data => {
            document.getElementById('evenNumber').innerText = `Random Even Number: ${data.evenNumber}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function generateRandomColor() {
    fetch('/generate_random_color')
        .then(response => response.json())
        .then(data => {
            document.getElementById('colorSquare').style.backgroundColor = data.color;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
