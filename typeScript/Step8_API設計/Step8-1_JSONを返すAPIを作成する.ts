// Step8-1：クライアントからのRequestに対して
//          Json形式でResponseを返すServerを作成

// 1.とりあえずExpressをimportして最小構成のサーバーを作成
import express from "express";
const server = express();
const port = 3000;

// 2.起動したServerの/api/statusというURLへ
// 　Clientからアクセス(GETリクエスト)があった際にResponseとして
// 　以下のJson文字列を返す処理を記述
// ・Response:{
//              success:true,
//              message:"Server is running"
//            }
server.get("/api/status",(req,res) =>
{
    res.json({
        success:true,
        message:"Server is running"
    });
});

server.listen(port,() =>
{
    console.log(`ServerをPORT:${port}番で起動しました。`);
})