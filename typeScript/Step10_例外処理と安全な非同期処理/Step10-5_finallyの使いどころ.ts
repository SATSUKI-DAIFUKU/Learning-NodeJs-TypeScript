// Step10-5:finallyの使いどころ

/*
    ◆ ポイント
    　1. finallyは例外の発生・未発生に関わらず必ず実行される

      2. 1より開いたStreamのクローズや
      　 例外が発生した際のログ出力などに活用できる
*/

try 
{
    // 例外の発生する可能性がある処理
    console.log("処理開始");
    throw new Error("失敗");
}
catch
{
    // 例外が発生した際の処理
    console.log("エラー処理");
} 
finally 
{
    // 例外の発生・未発生に関わらず必ずされる処理
    console.log("後始末（必ず実行）");
}