// util.ts から import して使う
import { wait } from "./util";

async function main() {
    // Q2 引数ms待って "done" を表示
    await wait(5000);
    console.log("done");

    // Q3：型エラーをわざと起こす
    //await wait("1000");   // wait("1000") を書いて
    //console.log("done");
}

main();