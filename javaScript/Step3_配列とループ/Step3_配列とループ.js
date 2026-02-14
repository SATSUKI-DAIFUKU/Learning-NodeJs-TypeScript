/// Step3_配列とループ ///


// 要点
//
//・配列の宣言：const array = [];
//
//・ループはfor文を使用し通常とC#におけるforeachに対応する記述方法がある(以下2種類)
//  ・通常：for(let i = 0;i<繰り返し回数;i++){処理;}
//  ・拡張：for(変数 of 配列){処理;}
//
//・mapメソッド：配列の各要素を変換し、変換した要素の入った別の配列を返す関数


// Q1. 好きな飲み物を3つ入れた配列 drinks を作り、 console.log で全部表示してください。

const drinks = ['Water','GreenTea','Cofee'];
console.log(drinks);

// Q2. for...of を使って drinks を1つずつ表示してください。

for(const drink of drinks)
{
   console.log(drink);
}

// Q3. drinks を全部「大文字」に変換した新しい配列 drinksUpper を map を使って作ってください。

const drinksUpper = drinks.map(d => d.toUpperCase());

// Q4. drinksUpper を console.log で表示してください。

console.log(drinksUpper);
