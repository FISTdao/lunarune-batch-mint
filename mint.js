import { LCDClient, MnemonicKey, MsgExecuteContract, Coins, Fee } from "@terra-money/feather.js";

//设置链接的LCD
const luna = {
  'phoenix-1': {
    chainID: 'phoenix-1',
    lcd: 'https://terra-lcd.publicnode.com', //LCD Link 注意是LCD 不是 RPC 
    gasAdjustment: 1.75,  
    gasPrices: { uluna: 0.015 },
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
const contractAddr = "terra1tq4c74q40n42f296rrnnjrj2avdlcl3kkqhlj4m9h69lzq68z2pq44hz9j";

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
            //fee: new Fee(3500000, "100000uluna"),
			
            // 当前设置使用网络查询gas.需要使用默认gas删除注释符号 fee 前面的 // 用于提速交易
            // 设置默认gas只需要修改 100000uluna 代表支付0.1 luna的 gas费 
		
        });

        const result = await lcd.tx.broadcastSync(tx, "phoenix-1");
        console.log("Mint Transaction Hash:", result.txhash);
    } catch (e) {
        console.error("Error:", e);
    }
};

// 设置间隔时间，每2秒执行一次executeContract函数 2000毫秒 2秒一次 ，luna网络需要上一个交易确认才能执行下一个,有需求多打的可以多开脚本

setInterval(executeContract, 2000);

