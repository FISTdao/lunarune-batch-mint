import { LCDClient, MnemonicKey, MsgExecuteContract, Coins, Fee } from "@terra-money/feather.js";

//设置链接的LCD
const luna = {
  'phoenix-1': {
    chainID: 'phoenix-1',
    lcd: 'https://terra-lcd.publicnode.com', //LCD Link 注意是LCD 不是 RPC 
    gasAdjustment: 1.01,   //gas 倍数设置,设置1.02使用最低标准gas ,大概4分一张，如果不成功调高即可
    gasPrices: { uluna: 0.15 },
    prefix: 'terra',
  }
};

const lcd = new LCDClient(luna); // 使用新的配置创建 LCDClient 实例

// 导入24字注记词
const mnemonic = new MnemonicKey({
    mnemonic: "你的注记词"
});

const mintAddr = mnemonic.accAddress("terra");
const wallet = lcd.wallet(mnemonic);
const contractAddr = "terra1k7qcmehexltntug3ypp4q2h6egc0gunwm6d55qtrpcc7cculeuhqfteu8q";

// 创建一个异步函数执行合约操作
const executeContract = async () => {
    try {
        // 构建MINT信息
        const msgExecute = new MsgExecuteContract(
            mintAddr,
            contractAddr,
            {
                "mint": {
                    "to": mintAddr, // 使用mintAddr作为接收地址
                    "id": 1,  //符文ID
                    "amount": 1000  //数量1000一张
                }
            }
        );
        // 填写memo字符
        const tx = await wallet.createAndSignTx({
            msgs: [msgExecute],
            chainID: "phoenix-1",
            memo: "{\"p\":\"Luru-20\",\"op\":\"mint\",\"tick\":\"LURU\",\"amt\":\"1000\"}",
         
        });

        const result = await lcd.tx.broadcastSync(tx, "phoenix-1");
        console.log("Mint Transaction Hash:", result.txhash);
    } catch (e) {
        console.error("Error:", e);
    }
};

// 设置间隔时间，每2秒执行一次executeContract函数 2000毫秒 2秒一次 ，luna网络需要上一个交易确认才能执行下一个,有需求多打的可以多开脚本

setInterval(executeContract, 2000);

