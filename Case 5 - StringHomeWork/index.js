// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

let fullname = prompt("İsminizi giriniz");

let masking = (name) => {

    let tempName = name.trim().toLocaleUpperCase('tr-TR');
    let resultName = "";

    for (let i = 0; i < tempName.length; i++) {

        if (i == 0 || tempName[i - 1] == " ") {
            resultName += tempName[i];
        }else if(tempName[i]==" "){
            resultName += " ";
        }
         else {
            resultName += "*";
        }

    }

    console.log("Name : ", resultName);

}

masking(fullname);