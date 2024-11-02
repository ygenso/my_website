var myfunc = function(){
    alert()
    let answer = 0
    //1は素数、0は合成数
    let divi = []
    //取得
    let num = document.getElementById("inputs").value;
    //調べる
    if ( num == 1 ){
        answer = 0
        divi = [1] //一つなのでpushなし
    }else if ( num == 2 ){
        answer = 1
        divi = [2] //一つなのでpushなし
    }else{
        for ( i = 2; i == num; i++){
            if( num %  i == 0){
                answer = 0
                divi.push(i)
            }
        }
        if ( divi.length == 0){
            answer = 1
        }
    }
    //表示
    alert(divi)
    alert(answer)
    var mydiv = document.getElementById("YNan");
    mydiv.innerHTML = answer;
    var mydiv = document.getElementById("divisor");
    mydiv.innerHTML = divi;
}
