let commandProjectName = 'testB'; //默认启动的项目名称，启动前要么修改这里要么在启动命令上 --pro=项目名称（如npm run dev:h5 --pro=testA，即在原来默认指令加上）
let isNpm = process.env.npm_config_user_agent.split(' ')[0].includes('npm'),
  isYarn = process.env.npm_config_user_agent.split(' ')[0].includes('yarn');
isNpm ? commandProjectName = process.env.npm_config_pro : null;
if (isYarn) {
  let original = JSON.parse(process.env.npm_config_argv).original;
  let litOriginal = original[original.length - 1].split('=')[1];
  commandProjectName = litOriginal;
}
module.exports = {
  projectName: commandProjectName,
  testA_appid: 'wxc1bc398b8f605514', //不同项目配置不同的appid，第一次配置完了即可，以前的保留，每次启动改上面的项目名称即可
  testB_appid: 'wxe10982070733ace7' //规范： 项目名称_appid（必须）
}

