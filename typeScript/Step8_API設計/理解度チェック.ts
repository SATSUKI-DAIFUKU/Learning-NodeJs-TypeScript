// Step8:理解度チェック

// 前提：localhost:3000でアクセス可能でリクエストに対して
// 　　　JSONを返すServerを実装
import express from "express";

const server = express();
const port = 3000;

server.get("/",(req,res) =>
{
    res.json(
        {
            "response":"アクセスされました。"
        }
    );
});

// Q1:サーバーにlocalhost:3000/api/pingでアクセスした際に
//    JSONで{"pong":true}を返す処理を実装
server.get("/api/ping",(req,res) =>
{
    res.json({
        "pong":true
    });
});

// Q2:サーバーにlocalhost:3000/api/echo?test=xxxでアクセスしリクエストをした際に
// 　 JSONで{"echo":"xxx"}を返す処理を実装
server.get("/api/echo",(req,res) =>
{
    const test = req.query.test ?? "";
    res.json({
        "echo":test
    });
});

// Q3:なぜAPIの設計においてリクエストに対するレスポンスを
//    文字列ではなくJSONで返すことが推奨されるのか？
// A:文字列は良くも悪くもルールがなく自由に決定できるため人間からしたらわかりやすい可能性があるが、
//   ルール化されていないためにシステム的には扱いにくいのでルール化されパラメータごとに
//   値の取得などがしやすいJSONが推奨されている


server.listen(port,() =>
{
    console.log(`serverを${port}番号のポートで起動しました。`);
})