function myfunc() {
    // 入力された値を取得
    const inputElement = document.getElementById('inputs');
    const num = parseInt(inputElement.value, 10);

    // 判定と計算処理
    const result = checkPrimeAndDivisors(num);

    // 結果をHTMLに反映
    document.getElementById('numb').textContent = result.number;
    document.getElementById('YNan').textContent = result.isPrime ? 'Yes' : 'No';
    document.getElementById('divisor').textContent = result.divisors.join(', ');
}

function checkPrimeAndDivisors(num) {
    if (num <= 1) {
        return {
            number: num,
            isPrime: false,
            divisors: [num],
        };
    }

    let divisors = [];
    let isPrime = true;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== 1 && i !== num) {
                isPrime = false; // 素数ではない
            }
        }
    }

    return {
        number: num,
        isPrime: isPrime,
        divisors: divisors,
    };
}
