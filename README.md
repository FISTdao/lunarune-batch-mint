linux 教程
---------------------------------------------------------------
				
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
				
nvm install 20.10.0

git clone https://github.com/FISTdao/lunarune-batch-mint
				
cd lunarune-batch-mint 
				
npm install
				
打开mint.js 修改成自己注记词,如果节点崩溃 ,自己更换,自己可以修改配置lcd: 'https://terra-lcd.publicnode.com',  中的节点 ，每次执行时间可以自己设置

const mnemonic = new MnemonicKey({
    mnemonic: "你的注记词"
});
mnemonic 中 你的注记词 替换为你的24字注记词
				
运行脚本				
node mint.js
				
出现 Mint Transaction Hash:  就是成功
				
可以前往网站查看余额		


win教程
-----------------------------------------------------------------

自行安装 node 20.10.

下载这个开源库

cd lunarune-batch-mint

npm install

打开mint.js 修改成自己注记词,如果节点崩溃 ,自己更换,自己可以修改配置lcd: 'https://terra-lcd.publicnode.com', 中的节点 ，每次执行时间可以自己设置

const mnemonic = new MnemonicKey({
    mnemonic: "你的注记词"
});
mnemonic 中 你的注记词 替换为你的24字注记词

运行脚本 node mint.js

出现 Mint Transaction Hash: 就是成功

可以前往网站查看余额

Linux Tutorial
---------------------------------------------------------------------------

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

nvm install 20.10.0

git clone https://github.com/FISTdao/lunarune-batch-mint

cd lunarune-batch-mint

npm install

Open mint.js and modify it with your own mnemonic phrase. If the node crashes, replace it yourself. You can change the configuration lcd: 'https://terra-lcd.publicnode.com'  , modify the node here. You can set the execution time yourself.

const mnemonic = new MnemonicKey({
    mnemonic: "your mnemonic phrase"
});

Replace "your mnemonic phrase" in mnemonic with your 24-word mnemonic phrase.

Run the script

node mint.js

When you see Mint Transaction Hash: it means success.

You can go to the website to check your balance.


Windows Tutorial
----------------------------------------------------------
Install node 20.10 on your own.

Download this open-source library.

cd lunarune-batch-mint

npm install

Open mint.js and modify it with your own mnemonic phrase. If the node crashes, replace it yourself. You can change the configuration lcd: 'https://terra-lcd.publicnode.com'  , modify the node here. You can set the execution time yourself.

const mnemonic = new MnemonicKey({
    mnemonic: "your mnemonic phrase"
});
Replace "your mnemonic phrase" in mnemonic with your 24-word mnemonic phrase.

Run the script node mint.js

When you see Mint Transaction Hash: it means success.

You can go to the website to check your balance.

Linux 교육과정
-----------------------------------------------------------------
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

nvm install 20.10.0

git clone https://github.com/FISTdao/lunarune-batch-mint

cd lunarune-batch-mint

npm install

mint.js를 열고 자신의 암기어를 수정하십시오. 노드가 충돌하면 자체적으로 교체하십시오.  lcd: 'https://terra-lcd.publicnode.com'     에서 노드를 변경할 수 있습니다. 각 실행 시간을 자체적으로 설정할 수 있습니다.

const mnemonic = new MnemonicKey({ mnemonic: "당신의 암기어" }); mnemonic에서 당신의 암기어를 당신의 24자 암기어로 교체하십시오.

스크립트 실행 node mint.js

Mint Transaction Hash: 가 나타나면 성공한 것입니다.

웹사이트를 방문하여 잔액을 확인할 수 있습니다.

Windows 교육과정
-------------------------------------------------------------------

스스로 node 20.10을 설치하십시오.

이 오픈소스 라이브러리를 다운로드하십시오.

cd lunarune-batch-mint

npm install

mint.js를 열고 자신의 암기어를 수정하십시오. 노드가 충돌하면 자체적으로 교체하십시오.     lcd: 'https://terra-lcd.publicnode.com'   에서 노드를 변경할 수 있습니다. 각 실행 시간을 자체적으로 설정할 수 있습니다.

const mnemonic = new MnemonicKey({ mnemonic: "당신의 암기어" }); mnemonic에서 당신의 암기어를 당신의 24자 암기어로 교체하십시오.

스크립트 실행 node mint.js

Mint Transaction Hash: 가 나타나면 성공한 것입니다.

웹사이트를 방문하여 잔액을 확인할 수 있습니다.





