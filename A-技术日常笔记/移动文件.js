const fs = require('fs')
const path = require('path')

// 定义源目录和目标目录
const sourceDirectory = '../江/O-电影2010'
const destinationDirectory = '../江/O-电影2000'

// 要移动的文件列表
const filesToMove = [
  "画皮.md",
  "机器人总动员.md",
  "即使这样也不是我做的.md",
  "记忆碎片.md",
  "加菲猫.md",
  "加勒比海盗.md",
  "加勒比海盗2亡灵的宝藏.md",
  "加勒比海盗3世界的尽头.md",
  "家园.md",
  "假如爱有天意.md",
  "尖峰时刻2.md",
  "尖峰时刻3.md",
  "江湖告急.md",
  "僵尸新娘.md",
  "叫我第一名.md",
  "金刚.md",
  "金刚狼.md",
  "金赛性学教授.md",
  "靖大爷和他的老主顾们.md",
  "就是这样.md",
  "居家男人.md",
  "狙击电话亭.md",
  "举起手来.md",
  "飓风营救.md",
  "卡拉是条狗.md",
  "看车人的七月.md",
  "康斯坦丁.md",
  "可可西里.md",
  "恐怖游轮.md",
  "蜡笔小新呼风唤雨猛烈大人帝国的反击.md",
  "朗读者.md",
  "浪潮.md",
  "老男孩.md",
  "理发师陶德.md",
  "连城诀.md",
  "恋爱假期.md",
  "恋恋笔记本.md",
  "两小无猜.md",
  "卢旺达饭店.md",
  "陆小凤传奇之大金鹏王.md",
  "陆小凤传奇之凤舞九天.md",
  "陆小凤传奇之陆小凤前传.md",
  "陆小凤传奇之铁鞋传奇.md",
  "陆小凤传奇之绣花大盗.md",
  "落叶归根.md",
  "马达加斯加.md",
  "玛丽和马克思.md",
  "麦兜响当当.md",
  "满城尽带黄金甲.md",
  "漫长的婚约.md",
  "猫鼠游戏.md",
  "美丽心灵.md",
  "美食总动员.md",
  "门徒.md",
  "蒙古草原，天气晴.md",
  "蒙娜丽莎的微笑.md",
  "梦之安魂曲.md",
  "迷失东京.md",
  "秒速5厘米.md",
  "名侦探柯南瞳孔中的暗杀者.md",
  "摩托日记.md",
  "母亲.md",
  "穆赫兰道.md",
  "娜娜.md",
  "南极料理人.md",
  "女孩梦三十.md",
  "暖暖内含光.md",
  "潘神的迷宫.md",
  "庞贝古城最后的一天.md",
  "贫民窟的百万富翁.md",
  "平凡岁月的魅力.md",
  "七龙珠.md",
  "千年女优.md",
  "千与千寻.md",
  "枪王.md",
  "窃听风暴.md",
  "窃听风云.md",
  "亲爱的伽利略.md",
  "情色片编年史.md",
  "求求你，表扬我.md",
  "求生存的艰难岁月~韩国公务员考试实态.md",
  "人工智能.md",
  "日本的穷忙族（一）劳而固穷-日本社会的贫困阶层.md",
  "入殓师.md",
  "弱点.md",
  "三傻大闹宝莱坞.md",
  "三峡好人.md",
  "色，戒.md",
  "杀人回忆.md",
  "杀死比尔.md",
  "杀死比尔2.md",
  "上车走吧.md",
  "上帝之城.md",
  "少林足球.md",
  "神话.md",
  "神奇四侠.md",
  "神探.md",
  "生化危机.md",
  "生化危机2启示录.md",
  "生化危机3灭绝.md",
  "胜者为王.md",
  "十月围城.md",
  "拾穗者.md",
  "食品公司.md",
  "史密斯夫妇.md",
  "史前一万年.md"]

// 循环处理每个文件
filesToMove.forEach((filePath) => {
  // 构建源文件和目标文件的完整路径
  const sourcePath = path.join(sourceDirectory, filePath)
  const destinationPath = path.join(destinationDirectory, filePath)

  // 移动文件
  fs.rename(sourcePath, destinationPath, (moveErr) => {
    if (moveErr) {
      console.error(`移动文件 ${filePath} 时发生错误:`, moveErr)
    } else {
      console.log(`文件 ${filePath} 成功移动。`)
    }
  })
})
