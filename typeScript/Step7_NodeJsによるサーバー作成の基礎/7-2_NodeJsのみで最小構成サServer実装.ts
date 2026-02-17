// ◆Node.jsのみで最小構成のサーバーを実装
// ・基本的に実務においてはほぼ使用しない

// サーバー軌道のためのhttpモジュールをインポート
// "http"でコンパイルエラーが発生する場合、
// Node.jsの中にhttpの型定義が含まれていない可能性があるため
// 以下のコマンドをプロジェクトフォルダに対して実行する。
// npm install --save-dev @types/node
import http from "http";

// httpモジュールを使用したServerオブジェクトの作成
// Serverを起動したURLへのアクセスRequestに対して
// Hello ServerというResponseを返す
const server = http.createServer((req, res) =>
{
    // サーバーのURL(宛先)に対してアクセスがあった際に返すもの
    res.write("Hello Server");
    res.end();
});

// 作成したサーバーオブジェクトを使ってサーバーを起動する
// 今回は自PCのポート3000番で受信待機するサーバーを起動
server.listen(3000,() => 
{
    // サーバー起動時にコンソールに出力する文字列
    console.log("Server running on http://localhost:3000");
});