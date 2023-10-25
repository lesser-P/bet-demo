# Bet hardhat project

这个项目框架使用 hardhat

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/partybet-test.js
```

该项目目前部署在 mubai 网络上，项目中所有账号均无存在任何价值仅供测试使用。

该项目在外部有一个 chainlink 定时触发获得当时 BTC 的价格，以此价格来和竞猜价格比对。

## 流程图

![流程图](img/bet.png)
