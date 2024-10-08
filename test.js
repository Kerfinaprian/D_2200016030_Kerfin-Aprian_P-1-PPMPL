const { expect } = require('chai');
const { penjumlahan, perkalian, pengurangan, pembagian } = require('./math');

describe('Pengujian Fungsi Matematika', function() {
    it('seharusnya mengembalikan 4 saat penjumlahan 2 + 2', function() {
        expect(penjumlahan(2, 2)).to.equal(4);
    });

    it('seharusnya mengembalikan 0,12 saat perkalian 0,3 * 0.4', function() {
        expect(perkalian(0,3, 0.4)).to.equal(0,12);
    });

    it('seharusnya mengembalikan -1 saat pengurangan 2.5 - 3.5', function() {
        expect(pengurangan(2.5, 3.5)).to.equal(-1);
    });

    it('seharusnya mengembalikan 1 saat pembagian 2 / 2', function() {
        expect(pembagian(2, 2)).to.equal(1);
    });
});
