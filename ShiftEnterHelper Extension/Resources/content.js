window.addEventListener('keydown', (event) => {
    const target = event.target;

    // 監視対象の要素かどうかを判定する
    const isTextArea = target.tagName.toLowerCase() === 'textarea';
    const isTextboxRole = target.getAttribute('role') === 'textbox';
    const isChatGPTTextarea = target.id === 'prompt-textarea'; // ChatGPT用の判定

    // 上記のいずれにも当てはまらない場合は、何もしない
    if (!isTextArea && !isTextboxRole && !isChatGPTTextarea) {
        return;
    }
    
    // CmdキーやCtrlキーが押されている場合は、送信ショートカットなので何もしない
    if (event.metaKey || event.ctrlKey) {
        return;
    }

    // 押されたキーがEnterで、Shiftキーが押されていない場合のみ処理
    if (event.key === 'Enter' && !event.shiftKey) {

        // 日本語の変換確定のためのEnterキーの場合
        if (event.isComposing) {
            // イベントの伝達を停止
            event.stopPropagation();
            return;
        }

        // 通常のEnterキーの動作をキャンセル
        event.preventDefault();
        event.stopPropagation();

        // Shift+Enterのキーイベントをプログラムで作成して実行
        const shiftEnterEvent = new KeyboardEvent('keydown', {
            key: 'Enter', code: 'Enter', keyCode: 13, which: 13,
            bubbles: true, cancelable: true, shiftKey: true
        });
        target.dispatchEvent(shiftEnterEvent);
    }
}, true);
