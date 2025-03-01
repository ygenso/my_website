<<<<<<< HEAD
//ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', function() {
    //ボタン要素を取得
    const selected = document.getElementById('Cu_button');

    //ボタンがクリックされた時のイベントリスナーを追加
    selected.addEventListener('click', function() {
        //セレクトボックスから選択された要素を取得
        const selected_cuo = document.getElementById('Cu_select').value;
        //選択された要素を表示
        alert(selected_cuo);
    }
    );
}
);
=======
function CuOm() {
    alert();
    // ラジオボタンの選択値を取得
    let elements = document.getElementsById("Cu_select");
    alert(elements);
    alert(elements.length);
    alert(elements.value);

    // テキストボックスの値を取得
    let CuO = document.getElementById("CuO").value;
    let O = document.getElementById("O").value;
    let Cu = document.getElementById("Cu").value;

    // テキストボックスの値を数値に変換
    CuO = Number(CuO);
    O = Number(O);
    Cu = Number(Cu);

    if (checkValue === "CuO") {
        let one = CuO / 5;
        let O = one * 2;
        let Cu = one * 3;
        document.getElementById('CuOm').textContent = CuO;
        document.getElementById('Om').textContent = O;
        document.getElementById('Cum').textContent = Cu;
    }

}
>>>>>>> 605cce124d75b42069f44eb0ea36d2ce78f20f51
