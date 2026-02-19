// Step9-3:エラーハンドリングをつける
// 概要：
// postされたデータが既定のフォーマットになっていない場合
// などに問題が発生しないよう事前に対策しておく

import express from "express";

const server = express();
const port:number = 3000;

// 2.リクエストのBodyを受け取るための機能を使用可能にする
server.use(express.json());

// リクエストのbody(内容)部分の構造を定義
interface ChatRequest
{
    message:string;
}

server.get("/",(req,res) =>
{
    res.send("Serverにアクセスされました。");
});

server.post("/api/chat",(req,res) =>
{
    // postで送信されたリクエストのbodyからmessageパラメータを取得
    const message = req.body?.message;

    // messageパラメータが取得できているか判定
    if (!message) 
    {
        // 取得できなければ取得できなかったことを示すメッセージをレスポンスで送信し、処理を終了する
        return res.status(400).json(
        {
            error: "message is required"
        });
    }

    // 種痘できれば取得できたmessageを使用してレスポンスデータを作成し、送信する
    res.json({
      reply: `あなたは「${message}」と言いました`
    });
});

server.listen(port,() =>
{
    console.log(`ServerをPORT:${port}番で起動しました。`);
});