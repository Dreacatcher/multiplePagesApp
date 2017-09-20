require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var shell = require('shelljs')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
spinner.start()


// 输出文件的目标文件夹
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

// 递归删除旧的目标文件夹
shell.rm('-rf', assetsPath)

// 重新创建文件夹 
shell.mkdir('-p', assetsPath)
shell.config.silent = true
// 将static文件夹复制到输出的目标文件夹
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false
// webpack编译
webpack(webpackConfig, function (err, stats) {
  spinner.stop() // 停止loading动画
  if (err) throw err
  // 没有出错则输出相关信息
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
