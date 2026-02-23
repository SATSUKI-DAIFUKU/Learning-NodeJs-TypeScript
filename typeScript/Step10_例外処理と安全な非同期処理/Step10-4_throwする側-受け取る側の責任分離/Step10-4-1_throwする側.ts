// Step10-4-1：throwする側

/*
  ◆ポイント：こちらの処理はあくまで処理の結果を呼び出し元に伝えること
　　　　　　　それは例外の発生であっても同じである。
*/

// 引数に渡された文字列を数値に変換する関数
// 変換できない文字列の場合は例外をthrowする
export function parseNumber(value:string):number
{
  const num = Number(value);
  if(Number.isNaN(num))
  {
    throw new Error("数値に変換できません");
  }

  return num;
}