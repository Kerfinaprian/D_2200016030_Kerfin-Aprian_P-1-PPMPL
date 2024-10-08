function penjumlahan(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Masukkan nilai berupa angka';
    }
    return a + b;
}

function perkalian(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Masukkan nilai berupa angka';
    }
    return a * b;
}

function pengurangan(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Masukkan nilai berupa angka';
    }
    return a - b;
}

function pembagian(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Masukkan nilai berupa angka';
    }
    if (b === 0) {
        return 'Tidak bisa membagi dengan nol';
    }
    return a / b;
}

module.exports = { penjumlahan, perkalian, pengurangan, pembagian };
