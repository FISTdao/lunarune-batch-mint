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
