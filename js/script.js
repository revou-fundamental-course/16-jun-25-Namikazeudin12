// nganu vscode || mon maap kalau tidak rapi/tdk efisien

// nganu Luas
document.getElementById('areaForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Masukkan nilai alas dan tinggi yang valid!');
        return;
    }
    const area = 0.5 * base * height;
    document.getElementById('areaResult').textContent = area.toFixed(2);
});

// hitung Keliling
document.getElementById('perimeterForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert('Masukkan semua sisi yang valid!');
        return;
    }
    const perimeter = sideA + sideB + sideC;
    document.getElementById('perimeterResult').textContent = perimeter.toFixed(2);
});