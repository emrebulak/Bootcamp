// Case 1 

let s1 = Number(prompt("Birinci sayıyı giriniz"));
let s2 = Number(prompt("İkinci sayıyı giriniz"));

alert(`Toplam : ${s1 + s2}`);

// Case 2
let valueS = Number(prompt("Sıcaklık değerini giriniz"));
let fahrenhyat = ((valueS * 9) / 5) + 32;
console.log("Fahrenhyat : ",fahrenhyat);

//Case 3
let x = Number(prompt("X değerini giriniz"));
let k = Number(prompt("K değerini giriniz"));
console.log("Y : ", (3 * x) + (4 * k));

// Case 4
console.log("Değer : ", 4 + (3 * 2) * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3)));

// Case 5
let value = -5.9;

console.log("Mutlak : ", Math.abs(value));
console.log("Yuvarlama:", Math.round(Math.abs(value)));
console.log("Karesi:", Math.pow(Math.round(Math.abs(value)), 2));
console.log("Karekök:", Math.sqrt(Math.abs(Math.pow(Math.round(Math.abs(value)), 2))));
console.log("Yuvarlama :", Math.round(Math.sqrt(Math.abs(Math.pow(Math.round(Math.abs(value)), 2)))));

console.log("Sonuç:", Math.round(Math.sqrt(Math.abs(Math.pow(Math.round(Math.abs(value)), 2)))) % 5);


let min = Math.min(1, 5);
min % 2 == 0 ? min += 5 : min += 3;
console.log("Sonuc : ", min);

// Case 6
let num = prompt("Bir sayı giriniz");
console.log(Number(num) > 0 ? "Pozitif" : "Negatif");

// Case 7
let password = prompt("Parola giriniz");
let repassword = prompt("Tekrar Parola giriniz");

console.log(password == repassword ? "Parolalar uyuşuyor": "Parolalar uyuşmuyor");


