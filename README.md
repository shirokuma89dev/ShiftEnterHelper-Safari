# Shift+Enter Helper for Safari

ChatGPTやClaudeなどのAIチャットサイトで、Enter(Return)キーによる意図しない送信を防ぐためのSafari機能拡張です。

## 概要

AIチャットサイトで日本語を入力していると、変換を確定するためのEnterキーがメッセージ送信のトリガーになってしまい、文章の途中で送信されてしまうことがあります。

この機能拡張は、テキストエリア内でのEnterキーの動作を、改行（Shift+Enter）として扱うように変更します。これにより、誤送信のストレスなく、落ち着いて文章を作成できます。

## 特徴

- テキストエリアでのEnterキーが改行になります。
- 日本語入力の変換確定Enterでは、送信されません。
- `Command + Enter` でのメッセージ送信は、これまで通り利用できます。

## 対応サイト

- [ChatGPT](https://chatgpt.com/)
- [Claude](https://claude.ai/)
- [Gemini](https://gemini.google.com/)
- (要望があれば追加します)

## インストール方法

### 方法1：ビルド済みアプリを使う（推奨）

1.  **[リリースページ](https://github.com/shirokuma89dev/ShiftEnterHelper-Safari/releases)から最新の `.dmg` ファイルをダウンロードします。**
2.  中にある `ShiftEnterHelper.app` をMacの「アプリケーション」フォルダに移動します。
3.  アプリを一度起動します。（「開発元が未確認のため開けません」と表示された場合は、右クリックして「開く」を選択してください）
4.  Safariの設定 > 機能拡張 を開き、「Shift+Enter Helper」にチェックを入れて有効化します。

### 方法2：ソースコードからビルドする

1.  このリポジトリをクローンまたはダウンロードします。
2.  Xcodeで `ShiftEnterHelper.xcodeproj` を開きます。
3.  Xcodeの上部でターゲットを `ShiftEnterHelper` と `My Mac` に設定し、ビルド（Cmd+R）を実行します。
4.  Safariの設定から機能拡張を有効化します。
