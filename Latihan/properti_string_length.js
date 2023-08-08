//length
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Masukan sebuah kalimat: ", (inputString) => {
//     //contoh property length
//     console.log(`panjang kalimat: ${inputString.length}`);
//     rl.close();
// });

charAt
rl.question("Masukan sebuah kalimat: ", (inputString) => {
    rl.question("Masukan indeks yang ingin Anda cek: ", (index) => {
        //konversi nilai index ke tipe Number
        index = Number(index);
        //periksa apakah index valid(bersama dalam rentang string)
        if (index >= 0 && index < inputString.length) {
            //gunakan method charAt untuk mendapatkan karakter pada indeks yang diminta
            const character = inputString.charAt(index);
            console.log(`Karakter pada indeks ${index}: ${character}`);
        } else {
            console.log("indeks tidak valid!");
        }
        rl.close();
    });
});

// rl.question("Masukan kalimat pertama: ", (kalimat1) => {
//     rl.question("Masukan kalimat kedua: ", (kalimat2) =>{
//         //Menggabungkan kalimat1 dan kalimat2 menggunakan method concat()
//         const kalimatGabungan = kalimat1.concat(kalimat2);
//         console.log(`Hasil penggabungan: ${kalimatGabungan}`);
//         rl.close();
//     });
// });

// rl.question("Masukan sebuah kalimat: ", (kalimat) => {
//     rl.question("Masukan indeks awal: ", (startIndex) => {
//         rl.question("Masukan indeks akhir: ", (endIndex) => {
//             //Konvensi nilai indeks ke tipe number
//             startIndex = Number(startIndex);
//             endIndex = Number(endIndex);
//             //Gunakan method substring untuk mengambil substring dari startIndex hingga endIndex
//             const substringResult = kalimat.substring(startIndex, endIndex);
//             console.log(`Hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult}`);
//             rl.close();
//         });
//     });
// });

// rl.question("Masukan sebuah kalimat: ", (kalimat) => {
//     rl.question("Masukan indeks awal: ", (startIndex) => {
//         rl.question("Masukan panjang substring: ", (length) => {
//             //Konversi nilai indeks dan panjang ke tipe Number
//             startIndex = Number(startIndex);
//             length = Number(length);
//             //Gunakan mehtod substr untuk mengambil substring dari startIndex dengan panjang length
//             const substringResult = kalimat.substr(startIndex, length);
//             console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
//             rl.close();
//         });
//     });
// });

// rl.question("Masukan sebuah kalimat: ", (kalimat) => {
//     rl.question("Masukan indeks awal: ", (startIndex) => {
//         rl.question("Masukan indeks akhir: ", (endIndex) => {
//             //konversi nilai indeks ke tipe Number
//             startIndex = Number(startIndex);
//             endIndex = Number(endIndex);
//             //Gunakan method Slice untuk mengambil substring dari startIndex higga endIndex
//             const slicedSubstring = kalimat.slice(startIndex, endIndex);
//             console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedSubstring}`);
//             rl.close();
//         });
//     });
// });

// rl.question("Masukan sebuah kalimat: ", (kalimat) => {
//     //Gunakan method toUpperCase untuk mengubah kalimat menjadi huruf besar
//     const kalimatUpperCase = kalimat.toUpperCase();
//     console.log(`Kalimat dalam huruf besar: ${kalimatUpperCase}`);
//     rl.close();
// });

// rl.question("Masukan sebuah kalimat: ", (kalimat) => {
//     //Gunakan method toLowerCase untuk mengubah kalimat menjadi huruf kecil
//     const kalimatLowerCase = kalimat.toLowerCase();
//     console.log(`kalimat dalam huruf kecil: ${kalimatLowerCase}`);
//     rl.close();
// });

// rl.question("Masukan sebuah kalimat: ", (kalimat) => {
//     //Gunakan method trim untuk menghapus spasi di awal dan akhir kalimat
//     const kalimatTrimmed = kalimat.trim();
//     console.log(`Kalimat setelah di-trim: ${kalimatTrimmed}`);
//     rl.close();
// });