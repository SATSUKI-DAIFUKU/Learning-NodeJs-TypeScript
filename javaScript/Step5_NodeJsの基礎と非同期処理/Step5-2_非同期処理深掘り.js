function wait1sec() {
    return new Promise(resolve => {
        setTimeout(() => resolve(""), 1000)
    });
}

// 深掘り1 処理の優先度について
function taskPriority() {

    // 通常処理                         優先度1
    console.log("1");

    

    // タスクキューに追加される         優先度3
    setTimeout(() => {
        console.log("2");
    }, 0);

    // マイクロタスクキューに追加される　優先度2
    Promise.resolve().then(() => {
        console.log("3");
    });
}


// 深掘り2 awaitは処理をブロッキングしない！
async function task() {
    await new Promise(r => setTimeout(r, 2000));
    console.log("task done");
}

// 深掘り3 地雷１_ループで順番が保証されず、ループ中のawaitも機能しない
function roupForEach() {
    [1, 2, 3].forEach(async n => {
        await wait1sec();
        console.log(n);
    })
}
// 改善後
async function correctRoup() {
    for (const n of [1, 2, 3]) {
        await wait1sec();
        console.log(n);
    }
}

// 深掘り3 地雷２_Promiseを返し忘れる,undefinedになる
function bad() {
    setTimeout(() => {
        return "NG";
    }, 1000);
}
// 改善後
async function good() {
    return new Promise(resolve =>  {
        setTimeout(() => resolve("OK"), 1000);
    });
}


// Q1 理解チェック
// A➡D➡B➡C

// Q2 地雷回避 配列 ["x","y","z"] を1秒ずつ順番に表示する正しいコードを書いてください。
async function wait1secRoup() {
    for (const s of ["X", "Y", "Z"]) {
        await new Promise(resolve => {setTimeout(() => resolve(s), 1000)});
        console.log(s);
    }
}

// Q3 並列処理 3つの wait を 同時に走らせてすべて終わったら "all done" を表示してください。
async function parallel3process() {
    p1 = new Promise(resolve => { setTimeout(() => resolve("OK"), 1000) });
    p2 = new Promise(resolve => { setTimeout(() => resolve("OK"), 5000) });
    p3 = new Promise(resolve => { setTimeout(() => resolve("OK"), 2000) });

    Promise.all([p1, p2, p3])
        .then(results => {
            console.log("all done");
        })
        .catch(error => {
            console.error(error);
        });
}


async function main() {

    // 深掘り1
    //taskPriority();

    // 深掘り2
    task();
    console.log("main done");

    // 深掘り3_地雷１
    //roupForEach();
    //correctRoup();

    // 深掘り3_地雷2
    /*const pBad = bad();
    console.log(pBad);*/
    //const pGood = await good();
    //console.log(pGood);

}

main();