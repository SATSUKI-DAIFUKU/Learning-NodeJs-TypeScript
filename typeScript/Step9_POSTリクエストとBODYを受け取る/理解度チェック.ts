/**
 * Step9 理解度チェック
 * * ------------------------------------------------------------------
 * Q1（実装）
 * 以下の仕様で、文字列を反転させて返すエンドポイントを作成してください。
 * * [仕様]
 * Method: POST
 * Path: /api/reverse
 * Body: { "text": "abc" }
 * Response: { "result": "cba" }
 * ------------------------------------------------------------------
 */

// ここにQ1のコードを実装
import express from "express";

// postで受け取るbodyの型を作成
interface ChatRequest{
    text:string;
}

const port:number = 3000;
const server = express();

// expressでjsonを扱うための機能を有効化
server.use(express.json());

// クライアントからのpostリクエストを受け取るための関数
server.post("/api/reverse",(req,res) =>
{
    // クライアントから受信したデータ内からbodyを取得
    // bodyをChatRequestに変換
    const body = req.body as ChatRequest;

    // bodyが正常に取得できているかを判定
    if(!body)
    {
        // 取得できていない場合はエラーコードとメッセージを返す。
        return res.status(400).json(
            {
                error:"body is required"
            }
        );
    }

    // bodyの中から"text"パラメータに格納されている値を取得
    const text = body.text;

    // textが正常に取得できているかを判定
    if(!text)
    {
        // 取得できていない場合はエラーコードとメッセージを返す。
        return res.status(400).json(
            {
                error:"text is required"
            }
        );
    }

    // textの中身の文字順を反転させる
    let length = text.length-1;
    let reverseText = '';
    for(length;0 <= length;length--)
    {
        reverseText = reverseText + text[length];
    }

    // 反転した文字列をレスポンスとして返す。
    res.json(
        {
            result:reverseText
        }
    );
});

server.listen(port,() =>
{
    console.log(`ServerをPORT:${port}番で起動しました。`);
});


/**
 * ------------------------------------------------------------------
 * Q2（理解）
 * なぜ server.use(express.json()) が必要なのか？
 * ------------------------------------------------------------------
 * [回答欄]
 * expressのインスタンスのみではpostで送信されるjsonリクエストを受信・取得する機能がないため
 * */


/**
 * ------------------------------------------------------------------
 * Q3（理解）
 * GET と POST を チャットAPI（メッセージの取得・送信など）の観点で比較してください。
 * ------------------------------------------------------------------
 * [回答欄]
 * GETはURLに直接付加されているため、実際のアプリケーションでは扱いにくく
 * サーバーへ送信した内容も簡単に見ることができるためセキュリティーの観点でも優れていない。
 * 
 * POSTはGETに比べて秘匿性が高いためセキュリティーの面でGETより優れ、
 * 機能としてもボタン押下時のイベントで送信するなど実際のアプリケーションライクに扱える
 * */