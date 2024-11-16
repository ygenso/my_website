function myfunc() {
    // 入力された値を取得
    const inputElement = document.getElementById('inputs');
    const num = parseInt(inputElement.value, 10);

    // 判定と計算処理
    const result = checkPrimeAndDivisors(num);
    const factorization = getPrimeFactorization(num);

    // 結果をHTMLに反映
    document.getElementById('numb').textContent = result.number;
    document.getElementById('YNan').textContent = result.isPrime ? 'Yes' : 'No';
    document.getElementById('divisor').textContent = result.divisors.join(', ');
    document.getElementById('factorization').textContent = formatPrimeFactorization(factorization);
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


function getPrimeFactorization(num) {
    if (num <= 1) return [[num, 1]];
    
    let factors = [];
    let n = num;
    let divisor = 2;
    
    while (n > 1) {
        let count = 0;
        while (n % divisor === 0) {
            count++;
            n = n / divisor;
        }
        if (count > 0) {
            factors.push([divisor, count]);
        }
        divisor++;
        
        // 最適化: nが素数の場合の処理
        if (divisor * divisor > n) {
            if (n > 1) {
                factors.push([n, 1]);
            }
            break;
        }
    }
    
    return factors;
}

function formatPrimeFactorization(factors) {
    if (factors.length === 1 && factors[0][0] <= 1) {
        return factors[0][0].toString();
    }
    
    return factors.map(([prime, exp]) => {
        if (exp === 1) {
            return prime.toString();
        }
        return `${prime}^${exp}`;
    }).join(' × ');
}