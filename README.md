# node express 團購網站

## Requirement 
node.js v8.11 以上

## Getting Started
專案安裝步驟

```shell
# 安裝
$ npm install # Or yarn install

# 功能指令

# 啟動 server
$ npm run start
# 啟動 browsersync 開發模式 （要先開 server !!!）
$ npm run bs

```

## Project Structure

專案目錄結構

```shell

├─public         
│  ├─css       #樣式
│  ├─images    #圖片
│  └─js        #前端的js
├─views        #頁面及組件
├─index.js     #專案進入點
└─package.json #專案設定檔

```

## Used Packages

| 套件名稱                     | 簡介                  | 網址                                                                |
| ---------------------------- | --------------------- | ------------------------------------------------------------------- |
| bodyparser                 | 把資料傳到 view 頁面用         | [Github](https://github.com/expressjs/body-parser#readme)                   |
| browser-sync                 | 瀏覽器同步            | [官網](https://browsersync.io/)                                     |
| express | node.js 框架 | [官網](http://expressjs.com/)|
| ejs     | node.js view 模板 | [官網](https://ejs.co/) |
| nodemon | node.js 自動重啟 |  [github](https://github.com/remy/nodemon)|