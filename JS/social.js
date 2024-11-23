<button id="myButton">クリックして文字を表示</button>
    <div id="output"></div>

    <script>
        // ボタンを取得
        const button = document.getElementById('myButton');

        // 出力先のdiv要素を取得
        const output = document.getElementById('output');

        // ボタンがクリックされたときのイベントリスナーを設定
        button.addEventListener('click', () => {
            // 表示する文字
            const message = "こんにちは！ボタンが押されました。";
            
            // メッセージをHTMLに表示
            output.textContent = message;
        });
    </script>