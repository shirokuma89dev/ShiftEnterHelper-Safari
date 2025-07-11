// content.js (Cmd+Enterを許可する修正版)

window.addEventListener('keydown', (event) => {
    // 監視対象はテキストエリア、またはリッチテキストエディタ（role="textbox"）のみ
    const target = event.target;
    const isTextArea = target.tagName.toLowerCase() === 'textarea';
    const isTextboxRole = target.getAttribute('role') === 'textbox';

    if (!isTextArea && !isTextboxRole) {
        // 対象外の場所でのキー操作は何もしない
        return;
    }

    // CmdキーやCtrlキーが押されている場合は、送信ショートカットなので何もしない
    if (event.metaKey || event.ctrlKey) {
        return;
    }

    // 押されたキーがEnterで、Shiftキーが押されていない場合のみ処理
    if (event.key === 'Enter' && !event.shiftKey) {

        // 日本語の変換確定のためのEnterキーの場合（isComposingがtrue）
        if (event.isComposing) {
            // ClaudeのWebページにこのEnterキーイベントが伝わるのを完全に阻止する
            event.stopPropagation();
            console.log("IME確定のEnterを検知。Claudeへの伝達を停止しました。");
            return;
        }

        // --- 通常の処理（変換確定ではないEnter） ---
        // デフォルトのEnterキーの動作（メッセージ送信）をキャンセル
        event.preventDefault();
        event.stopPropagation();

        // Shift+Enterのキーイベントをプログラムで作成して実行する
        const shiftEnterEvent = new KeyboardEvent('keydown', {
            key: 'Enter',
            code: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true,
            cancelable: true,
            shiftKey: true // Shiftキーが押された状態にする
        });

        target.dispatchEvent(shiftEnterEvent);
        console.log("通常のEnterをShift+Enterに変換しました。");
    }
}, true);
