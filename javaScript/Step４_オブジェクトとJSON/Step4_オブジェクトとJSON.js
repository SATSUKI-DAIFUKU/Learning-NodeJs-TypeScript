/// Step4_オブジェクトと JSON ///

// 要点
//
//・オブジェクト：複数のキーとそれに対応する値のまとまり、以下は記述方法
//  ➡const object = {
//                     key1:value1,
//                     key2:value2
//                   };
//
//・オブジェクト内の値を変更する方法：object.key1 = value3;
//
//・オブジェクトに新しい値を追加：object.key3 = value4;
//
//・オブジェクトの配列宣言：const objects = [
//						{key1:value1,key2:value2},
//						{key1:value1,key2:value2}
//					    ];
//
//・JSON文字列：データの送信・交換・保存などによく用いられるテキスト形式、
//		ファイルなどでは.json拡張子であらわされることが多い
//
//・JSON形式：JSON文字列は以下のような形式で構成される
//  {
//     "key1":"value2",
//     "key2":"value2",
//     ...
//  }
//
//・オブジェクトからJSON文字列への変換
//  const jsonString = JSON.stringify(object);
//
//・JSON文字列からオブジェクトへの変換
//  const object = JSON.parse(jsonString);


// Q1. あなたを表すオブジェクト myInfo を作りましょう。
//   項目：name, age, hobby（文字列でOK）**

const myInfo = {
    name:'Tsukasa',	// 名前
    age:'21',		// 年齢
    hobby:'Programing'	// 趣味
};

// Q2. myInfo の hobby を console.log で表示してください。

console.log(myInfo.hobby);

// Q3. myInfo に favoriteDrink（好きな飲み物）を追加してください。

myInfo.favoriteDrink = 'GreenTea';

// Q4. myInfo を JSON.stringify で文字列化して console.log してください。

const myInfo_JSON = JSON.stringify(myInfo);
console.log(myInfo_JSON);

// Q5. JSON.stringify した結果を JSON.parse で元に戻し、
//   name を console.log で表示してください。**

const myInfo_OBJECT = JSON.parse(myInfo_JSON);
console.log(myInfo_OBJECT);
