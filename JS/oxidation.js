function CuOm() {
    // ラジオボタンの選択値を取得
    let elements = document.getElementsByName("CuO");
    let len = elements.length;
    let checkValue = "";

    for (let i = 0; i < len; i++) {
        if (elements.item(i).checked) {
            checkValue = elements.item(i).value;
        }
    }

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