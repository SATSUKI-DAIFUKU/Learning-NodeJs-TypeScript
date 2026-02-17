// Q1（実行）
// Express サーバーを起動してください
// ブラウザでアクセスしてください

// expressのインポート
import express from "express";
// expressオブジェクトのインスタンスを作成
const app = express();
// サーバーを開くポートを定義
const port = 3000;
// localhost:3000に対するアクセスへのレスポンスを実装
app.get("/",(req,res) => 
{
    // アクセスされた際のレスポンスでHello Express!を
    // アクセス元のクライアントに対してレスポンスとして送信(表示)
    res.send("Hello Express!");
});
// サーバーを起動する
app.listen(port, () =>
{
    console.log(`Serverが${port}番のポートで正常に起動しました。`);
});


// 
// 📝 Q2（コード）
// 次のルートを追加してください：
// GET /hello
// 返す内容：
// Hello Tsukasa

// localhost:3000/helloへのアクセスに対する挙動を実装
app.get("/hello",(req,res) =>
{
    res.send("Hello Tsukasa");
});

// 📝 Q3（理解）
// 次の質問に文章で答えてください：
// なぜ Express を使うと Node.js 単体より楽になるのか？

// A：Node.jsのみでの実装に比べてAPIの記述が簡単になるため