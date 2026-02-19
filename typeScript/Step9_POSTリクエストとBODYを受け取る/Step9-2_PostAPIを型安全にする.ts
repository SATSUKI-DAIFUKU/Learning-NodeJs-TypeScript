// Step9-2:型安全にする
// 概要：
// これまでNode.js的な記述を行っていた部分にしっかりデータ型を定義し、
// 型安全にすることで余計なエラーの発生を抑える

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
    // リクエストの中のbody(内容)部分を取得
    // req.bodyがChatRequestと同じ構造であることを明示する
    const body = req.body as ChatRequest;
    const message = body.message;

    res.json({
        reply:`「${message}を受け取りました。」`
    });
});

server.listen(port,() =>
{
    console.log(`ServerをPORT:${port}番で起動しました。`);
});