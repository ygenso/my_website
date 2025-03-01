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
