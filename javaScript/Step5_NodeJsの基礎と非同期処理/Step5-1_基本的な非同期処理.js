// NodeJsの基礎：非同期処理を理解しよう

// ◆Step1＿同期処理と非同期処理の違い
//
//  ・同期処理　：現在の処理が終了するまで次の処理が待ち状態になる
//  ・非同期処理：現在の処理の終了を待たず指定された処理が始まる。
//
//  同期処理をSync,非同期処理をAsyncと表す。
//  NodeJsには非同期処理を表現するためにAsyncとは別にPromiseがある

// ◆Step2＿Promiseの基本
//
//  ・Promise：非同期処理を表現するために使用されるオブジェクト
//    記述例：const p = new Promise((resolve, reject) =>
//               {
//                  setTimeout(() => {
//                       resolve("完了！");
//                  }, 1000);
//               });
//
//               p.then(msg => console.log(msg));


// ◆Step3_async/awaitの基本
//
// ・Promiseを読みやすく書くためのもの
//   記述例 : function waitOneSecond() {
//                return new Promise(resolve => {
//                    setTimeout(() => resolve("1秒経過"), 1000);
//                });
//            }
//
//            async function main() {
//                const msg = await waitOneSecond(); // 待つ
//                console.log(msg);
//            }
//
//            main();


// Q1：1秒待って「Hello Async!」と表示する関数を async/await で作ってください。
/**
 * Promiseを返す関数
 * @returns 1秒後にresolveを実行するPromise
 */
function wait1sec() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hello Async!"), 1000)
    });
}

// Q2：2つの非同期処理を順番に await して結果を表示してください。
// 1秒待って「A完了」
// 2秒待って「B完了」
function WaitA() {
    return new Promise(resolve => {
        setTimeout(() => resolve("AComplete"), 1000)
    });
}
function WaitB() {
    return new Promise(resolve => {
        setTimeout(() => resolve("BComplete"), 2000)
    });
}

// Q3：Promise.all を使って「同時に」処理を走らせ結果を表示してください。
// 1秒待って A
// 2秒待って B
// Promise.all でまとめて待つ
// → 2秒後に["A", "B"] と表示されればOK
function Q3() {
    const p1 = new Promise(resolve => { setTimeout(() => resolve("A"), 1000) });
    const p2 = new Promise(resolve => { setTimeout(() => resolve("B"), 2000) });

    Promise.all([p1, p2])
        .then(results => {
            console.log(results);
        })
        .catch(error => {
            console.error(error);
        });
}

/** メイン関数 */
async function main() {
    // Q1
    const q1 = await wait1sec();
    console.log(q1);
    // 
    // Q2
    console.log(await WaitA());
    console.log(await WaitB());

    // Q3
    await Q3();
}

main();
