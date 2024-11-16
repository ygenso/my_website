var myfunc = function(){
    //取得
    let num = document.getElementById("inputs").value;
    alert(num)
    //調べる
    if (num <= 1){
        return{
            rumber: num,
            isPrime: false,
            isComposite: false,
            divisors: [num],
        };
    }

    let divisors = [];
    let isPrime = true;

    for (let i = 1; i <= num; i++){
        if (num % i === 0){
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
    alert(num)
    alert(isPrime)
    alert(isComposite)
    alert(divisors)

    //表示
    var mydiv = document.getElementById("YNan");
    mydiv.innerHTML = answer;
    var mydiv = document.getElementById("divisor");
    mydiv.innerHTML = divi;
}
