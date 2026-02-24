// ◆Step11-1 : 型安全の基礎

/*
◆ nullとundefinedの違い
　・null      : 意図的に代入しない限り基本的に変数には入らない
　・undefined : 値の取得に失敗した際や初期値に自動的にセットされる

◆ Point ◆
　・TypeScriptにおいてUnion型を使用しない限りデータ型を割り当てた変数へ
　　null,undefinedを代入することは基本的にできない。
　　代入できない例）：
　　let g: string = null;      // error
　　let h: number = null;      // error
　　let i: object = null;      // error
    let j: string = undefined; // error
　　※unknown型,void型,any型は例外
　
　・プログラム上で意図的に代入しない限りnullが変数に入ることは基本的にない
　　※C#,Javaでは値が取得できない場合やstringの初期値でnullが入ることがある

　・TypeScriptでは値の取得に失敗した際などはnullではなくundefinedが
　　変数へ代入され、C#,Javaでいうところのnullと同じ扱いになる。

◆ Union型
　・nullやundefinedを変数へ代入するための方法
　　変数へ代入しようとする値が指定のデータ型かnullかを確認し、データ型と合致すれば
　　その型として・nullであればnullを代入する(undefinedでも同様)
　例）let u1:string | null = null;
　　　let u2:string | undefined = undefined;
*/

// ◆ Union型
// データ型を割り当てた変数へnull,undefinedを代入するための型
let a:string | null = null;
let b:string | undefined = undefined;

// ◆ オプショナルプロパティ
//　・オプショナルプロパティはオブジェクト内にそのプロパティが存在しない
//　　可能性を定義するためのもの
//   ※ オブジェクト内のプロパティか関数の引数でしか使用できない ※
// typeを使って型(オブジェクト)を定義
type User = {
    name: string;
    age?: number;

    // age?: number;は内部的には以下と同じ
    // age: number | undefined;
}

// ◆ Optional Chaining
//　・アクセスしようとしているプロパティが含まれるObject自体がnullまたはundefined
//　　か判定し、nullかundefinedであればプロパティの参照に対して即座に
// 　 undefinedを返し、TypeErrorを出さないようにする。
// 　※ よく合わせて使用されるのがNull合体演算子 ※

type Profile = 
{
    user?:User;
}

const profile: Profile = {};

// Optional Chainingを使用しないとここでTypeErrorExceptionが発生するが
// OptionalChainingを使用することでundefinedが返されるため安全に処理可能
// ※ 参照すべきUserオブジェクトが空のためundefinedが表示される ※
console.log(profile.user?.name);

// ◆ Null合体演算子
//　・左辺がnullまたはundefinedの場合に右辺の値をdefault値として使用する

// 例）Userオブジェクト初期化ではageプロパティに値を入れていないため
//     取得しようとするとundefinedが返るが'??'を使用することで
// 　　null又はundefinedの場合は右辺の20が初期値として入る
const user:User = {name:"T"};
const age:number = user.age ?? 20;

console.log(age);