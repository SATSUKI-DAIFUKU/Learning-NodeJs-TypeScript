// Step10-3:非同期処理での例外処理
// ※重要※

/*
  ◆ ポイント:
    1. 非同期処理内や関数内で例外を処理せずthrowした場合は、
       発生した例外は関数の呼び出し元へ投げられる
    
    2. async/awaitを使用して同期的な記述にしないと
       非同期処理からの例外を取得できない
     
     ※ ダメな例
     try
     {
        fetchData();
     }
     catch(e)
     {
        // ここには処理が入らない。
     }
*/

/* ◆ 非同期で例外が発生した際の処理 */

// この関数で非同期処理Promiseを使用し、意図的にrejectさせる
async function fetchData(): Promise<string> 
{
　// 関数内では例外を処理せず呼び出し元の処理へ例外をthrowする
  throw new Error("通信失敗");
}

// メイン関数で上記の関数をawaitで呼び出す。
async function main() 
{
  try 
  {
    // 非同期関数の呼び出しをtryの内部で呼び出す。
    const data = await fetchData();

　　// 非同期処理が成功すれば返り値をコンソールへ出力
    console.log(data);
  } 
  catch (e) 
  {
    // 非同期処理で発生した例外を処理
    console.error("非同期エラー:", e);
  }
}

// メイン関数の実行
main();
