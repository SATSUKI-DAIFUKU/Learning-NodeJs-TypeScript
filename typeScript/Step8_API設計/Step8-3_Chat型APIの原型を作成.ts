// ◆ Step8-3:Chat型APIの原型

// ・現在のAPI設計は以下のようになっている
import express from "express";
const server = express();
const port = 3000;
server.get("/api",(req,res) =>
{
    // 1.クライアントからのアクセスリクエストの中から
    //   パラメータに格納されている値を取得
    const message = req.query.message ?? "NoneMessage";
    res.json(
        {
            // 2.取得した値を使用してレスポンスJsonを作成しクライアントへ返す。
            reply:`あなたは${message}といいました。`

            // 上述部分のレスポンス用メッセージ作成をLLMに担わせるようにする
            // イメージとしては以下
            /*
            res.json(
            {
                // このレスポンス用メッセージをLLMに担当させる
                // イメージ：クライアントからのリクエストmessageをLLMに渡し、
                // 返り値としてLLMからの返答を受け取る関数を作成し使用する
                reply:callLLM(message)
            });
            */
        }
    );
});
server.listen(port,() =>
{
    console.log(`ServerをPORT:${port}番で起動しました。`);
});