var myfunc = function () {

    //調べる定義
    function checkPrimeAndDivisors(num) {
        if (num <= 1) {
            return {
                rumber: num,
                isPrime: false,
                isComposite: false,
                divisors: [num],
            };
        }

        let divisors = [];
        let isPrime = true;

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisors.push(i);
                if (i !== 1 && i !== num) {
                    isPrime = false; //素数ではない
                }
            }
        }

        return {
            number: num,
            isPrime: isPrime,
            isComposite: !isPrime,
            divisors: divisors,
        };
    }
    //取得
    const number = document.getElementById("inputs").value;
    alert(number);
    const result = checkPrimeAndDivisors(number);
    alert(result);
    //表示
    //var mydiv = document.getElementById("YNan");
    //mydiv.innerHTML = answer;
    //var mydiv = document.getElementById("divisor");
    //mydiv.innerHTML = divi;
}
