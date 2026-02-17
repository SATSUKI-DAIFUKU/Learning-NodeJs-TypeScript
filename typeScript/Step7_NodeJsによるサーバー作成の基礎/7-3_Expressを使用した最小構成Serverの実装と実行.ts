// ◆Expressの特徴
// ・実務でよく使う
// ・Node.jsでServerを実装する際のフレームワーク
// ・Node.jsのみのServer実装と比べてAPIの記述が簡単になる
// ◆Expressのインストール
//  1.以下のコマンドをプロジェクトフォルダに対して実行し
//    Expressをインストールする
//    npm install express

// ◆Expressを使用した最小構成サーバーの実装
// ※機能としては7‐2で作成したServerとほぼ同じでアクセス時の表示が違うのみ


// インストールしたExpressのインポート
// httpのインポート時と同じで"express"の部分で
// 型未定義エラーが発生する場合は以下のコマンドを実行する
// npm install --save-dev @types/express
import express from "express";

// インポートしたExpressのオブジェクトを作成
const app = express();
// Serverを開くポート番号を定義
const port = 3000;

// ServerのURL(宛先)に対して
// アクセス(GETリクエスト)があった場合の挙動を
// 実装するためのメソッド
app.get("/",(req,res) => 
{
    // アクセスされた際のレスポンスでHello Express!を
    // アクセス元のクライアントに対してレスポンスとして送信(表示)
    res.send("Hello Express!");
});

app.get("/json",(req,res) =>
{
    res.json(
        {
            message:"Hello JSON"
        }
    );
})

// 定義したポートでServerを起動する
app.listen(port,() => 
{
    // サーバーを起動した際にコンソールへ出力する文字列
    // 文字列の中で変数を使用する場合は""ではなく``で囲み変数は${}で囲む
    console.log(`Server started at http://localhost:${port}`);
});