var myfunc = function(){
    let answer = false
    let divi = []
    //取得
    let num = document.getElementById("inputs").value;
    //調べる
    if ( num == 1 ){
        answer = false
        divi = [1] //一つなのでpushなし
    }else if ( num == 2 ){
        answer = true
        divi = [2] //一つなのでpushなし
    }else{
        for ( i = 2; i == num; i++){
            if( num %  i == 0){
                answer = false
                divi.push(i)
            }
        }
    }

    //表示
    var mydiv = document.getElementById("YNan");
    mydiv.innerHTML = answer;
    var mydiv = document.getElementById("divisor");
    mydiv.innerHTML = divi;
}
