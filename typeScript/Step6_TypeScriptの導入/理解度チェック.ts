// Q1:なぜ Node.js は.ts ファイルをそのまま実行できないのか？
// A:TypeScriptにはNodeJsにはないデータ型の概念がありその記述をNode.jsでは解釈できないため

// Q2:tsx の役割を一言で説明してください。
// A:TypeScriptで記述されたプログラムをNode.jsで解釈できるjsファイルに変換して実行する

// Q3:次の関数に 正しい型を付けてください。
function add(a: number, b: number) {
    return a + b;
}

// Q4:次のコードで TypeScript がエラーを出す理由を説明してください。
// const age: number = "21";
// A:変数ageのデータ型をnumber(数値)としているのに代入しているものが文字列のため

// Q5:オブジェクト User 型を作り、変数 user に代入してください。
// 条件：
// name：string
// age：number

const User: { name:string,age:number } = {
    name: "",	// 名前
    age: 0,		    // 年齢
}

User.name = "Tsukasa";
User.age = 22;