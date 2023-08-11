// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
let value = Number(prompt("Bir değer giriniz"));
function negativeOrPositive(number) {
    result = number > 0 ? "Pozitif" : "Negatif";
    return result;
}
console.log(negativeOrPositive(value));


// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.

let oddEvenCalculator = function () {
    let number = prompt('Bir Sayı Giriniz');
    if (number % 2 == 0) {//çift sayı
        console.log(number + " çift sayıdır");
    } else {
        console.log(number + " tek sayıdır");
    }
}
oddEvenCalculator()

let number = Number(prompt("Bir sayı giriniz"));
let oddEvenCalculatorTenary = number % 2 == 0 ? "Çift" : "Tek";
console.log(oddEvenCalculatorTenary);

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?

let day = Number(prompt("Bir gün giriniz"));
let weeksDay = (day) => {
    switch (day) {
        case 1:
            console.log("Pazartesi");
            break;

        case 2:
            console.log("Salı");
            break;

        case 3:
            console.log("Çarşamba");
            break;

        case 4:
            console.log("Perşembe");
            break;

        case 5:
            console.log("Cuma");
            break;

        case 6:
            console.log("Cumartesi");
            break;

        case 7:
            console.log("Pazar");
            break;


        default:
            console.log("Değer belirtilen arakıkta değil");
            break;
    }
}

weeksDay(day);
