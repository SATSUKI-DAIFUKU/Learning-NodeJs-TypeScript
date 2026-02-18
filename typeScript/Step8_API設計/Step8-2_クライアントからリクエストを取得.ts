// ◆Step8-2:クライアントからのリクエストを受け取る

// リクエストとは
// ・これまではServerのURLへアクセスしかしてこなかったが
// 　以下のようにURLを指定の後にServerに対してRequestをつけることができる
// Request付きアクセス:
//     ・localhost:3000/api/hello?name=Tsukasa

// リクエストの取得について
// ・以下のようにすることでクライアントからのリクエストを
//   取得することができる

import express from "express";

const server = express();
const port = 3000;

server.get("/api/hello",(req,res) =>
{
    // 今回使用するリクエスト
    // ・localhost:3000/api/hello?name=Tsukasa

    // クライアントからのリクエストを取得
    // ・name=req.query.name??"";とは
    // ・req.query：起動しているサーバーに接続するためのURLを含めたリクエストの
    //   　　　　　　全文が格納されているオブジェクト
    // ・.～    　 ：リクエストオブジェクトの中から～に格納されている値を取得
    // ・??""      : リクエストの中に～が含まれない際に??""の""をname変数に格納
    const name = req.query.name ?? "Guest";

    res.json(
        {
            message:`Hello ${name}`
        }
    );
});

server.listen(port,() =>
{
    console.log(`serverを${port}番号で起動しました。`);
})