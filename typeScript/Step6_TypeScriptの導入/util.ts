// TypeScriptで util.ts を作る

// 外部ファイルからimportできるようにexportをつける
// 関数 wait(ms: number): Promise<void>
// setTimeoutを使う
export function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
}
