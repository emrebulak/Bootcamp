let number = Number(prompt("Bir bitiş değeri giriniz"));

let sumNumbers = (number) => {
    if (number == 44) {
        return;
    }
    let sum = 0;

    let odd = [];
    let oddTotal = 0;

    let even = [];
    let evenTotal = 0;

    for (let i = 0; i <= number; i++) {
        if (i == 7) {
            odd.push(i);
            oddTotal += i;
            continue;
        }
        if (i > 50) {
            break;
        }

        if (i % 2 == 0) {
            even.push(i);
            evenTotal += i;
        } else {
            odd.push(i);
            oddTotal += i;
        }

        sum += i;

    }

    console.log("Sum : ", sum);
    console.log("Total Odd : ", odd.join(","), oddTotal);
    console.log("Total Even : ", even.join(","), evenTotal);
}

sumNumbers(number);