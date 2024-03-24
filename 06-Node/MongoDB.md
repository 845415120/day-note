<a name="vsb3G"></a>
# MongoDB
MongoDB 是一个基于分布式文件存储的数据库

操作语法与 JavaScript 类似，容易上手，学习成本低

Mongodb 中有三个重要概念需要掌握

- 数据库（database） 数据库是一个数据仓库，数据库服务下可以创建很多数据库，数据库中可以存放很多集合
- 集合（collection） 集合类似于 JS 中的数组，在集合中可以存放很多文档
- 文档（document） 文档是数据库中的最小单位，类似于 JS 中的对象

![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687927977446-5da6d2de-df12-4d7c-aea1-7d68d656c87b.png#averageHue=%23ededed&clientId=ude6276b7-61b8-4&from=paste&id=ubdbfdec7&originHeight=682&originWidth=1026&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=280039&status=done&style=none&taskId=u4f2898bf-b9c1-46e3-9979-cdcf33eb464&title=)
<a name="Hoouv"></a>
## <br />下载安装与启动
下载地址： [https://www.mongodb.com/try/download/community](https://gitee.com/link?target=https%3A%2F%2Fwww.mongodb.com%2Ftry%2Fdownload%2Fcommunity)<br />建议选择 zip 类型， 通用性更强<br />配置步骤如下:<br />1> 将压缩包移动到 C:\Program Files 下，然后解压<br />2> 创建 C:\data\db 目录，mongodb 会将数据默认保存在这个文件夹<br />3> 以 mongodb 中 bin 目录作为工作目录，启动命令行<br />4> 运行命令 mongod<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687928867922-e87f3bd0-9043-420b-b6a2-99922c98f466.png#averageHue=%2332312b&clientId=ub5fb0524-0ae8-4&from=paste&id=ue8d25798&originHeight=638&originWidth=1743&originalType=url&ratio=1.2200000286102295&rotation=0&showTitle=false&size=1895879&status=done&style=none&taskId=u8c13cd23-b948-416b-a062-98d007d092a&title=)<br />看到最后的 waiting for connections 则表明服务 已经启动成功<br />然后可以使用 mongo 命令连接本机的 mongodb 服务<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/34220974/1687929091172-c5c18c20-cc9e-42f5-8c6d-e1e542b168f8.png#averageHue=%231b1b1b&clientId=ub5fb0524-0ae8-4&from=paste&height=520&id=u466909df&originHeight=635&originWidth=1129&originalType=binary&ratio=1.2200000286102295&rotation=0&showTitle=false&size=95610&status=done&style=none&taskId=u0136da6c-8249-474b-ab1d-6594ccda7b6&title=&width=925.409814363781)

<a name="foGGB"></a>
## <br />数据库命令

1. 显示所有的数据库

`show dbs`

2. 切换到指定的数据库，如果数据库不存在会自动创建数据库

`use 数据库名`

3. 显示当前所在的数据库

`db`

4. 删除当前数据库

`use 库名`<br />`db.dropDatabase()`

<a name="tIIa1"></a>
### 集合命令

1. 创建集合`**db.createCollection('集合名称')**`
2. 显示当前数据库中的所有集合`**show collections**`
3. 删除某个集合`**db.集合名.drop()**`
4. 重命名集合`**db.集合名.renameCollection('newName')**`
<a name="hYC2h"></a>
### <br />文档命令

1. 插入文档`**db.集合名.insert(文档对象);**`
2. 查询文档`**db.集合名.find(查询条件)**`

_id 是 mongodb 自动生成的唯一编号，用来唯一标识文档

3. 更新文档

`**db.集合名.update(查询条件,新的文档)**`<br />`** db.集合名.update({name:'张三'},{$set:{age:19}})**`

4. 删除文档`**db.集合名.remove(查询条件)**`

<a name="EeuT8"></a>
## <br />Mongoose
Mongoose是一个JavaScript面向对象的编程库，用于在MongoDB和Node.js JavaScript运行时环境之间创建连接
<a name="w2QJJ"></a>
### 安装 `npm i mongoose`

```javascript
//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose')
//3. 连接数据库                              数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
//4.设置回调
mongoose.connection.on('open', () => {
  console.log('连接成功')
})
mongoose.connection.on('error', () => {
  console.log('连接失败')
})
mongoose.connection.on('close', () => { 
  console.log('连接关闭')
})
```
该代码使用了mongoose.connection.on('open', callback)方法来监听数据库的连接事件<br />`mongoose.connection.on`<br />`mongoose.connection.once 只执行一次`

```javascript
 //1. 安装 mongoose
 //2. 导入 mongoose
 const mongoose = require('mongoose');

 //3. 连接数据库                              数据库名称
 mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

 //4. 设置连接回调
 //连接成功   once 一次   事件回调函数只执行一次
mongoose.connection.on('open', () => {
	console.log('连接成功');
 	//5. 创建文档结构对象
    // 设置集合中 文档的属性以及属性值得类型
 	let BookSchema = new mongoose.Schema({
 		title: String,
 		author: String,
 		price: Number
 	});
     
 	//6. 创建文档模型对象  对文档操作的封装对象  mongoose会使用集合名称的复数，创建集合
 	let BookModel = mongoose.model('book', BookSchema);
	
     //7. 插入文档
 	BookModel.create({
 		title: '西游记',
 		author: '吴承恩',
		price: 19.9
 	}, (err, data) => {
        // 判断是否有错误
 		if (err) throw err;
        //输出 data 对象  如果没有出错，则输出插入后的文档对象
 		console.log(data);
 		//8. 断开连接  关闭数据链接 (项目运行过程中，不会添加该代码)
 		mongoose.disconnect();
 	});
});

//连接出错
mongoose.connection.on('error', () => {
	console.log('连接出错~~');
})

//连接关闭
mongoose.connection.on('close', () => {
	console.log('连接关闭');
})
```
`mongoose会使用集合名称的复数，创建集合`<br />book ---books
<a name="nKWen"></a>
## mongoose.Schema
`mongoose.Schema` 是 Mongoose 库中的一个类，用于定义 MongoDB 数据库中集合（Collections）的结构，也就是数据模型（Data Model）。通过定义 Schema，可以确定集合中每个文档（Document）的字段及其类型、验证规则、默认值等信息。

使用 `mongoose.Schema`，可以创建一个模式（Schema）对象，然后使用该模式对象来创建 Mongoose 模型（Model），从而进行数据的增删改查操作。

下面是一个简单的示例，展示了如何使用 `mongoose.Schema` 来定义一个用户数据模型：
```javascript
const mongoose = require('mongoose');

// 定义用户模式（Schema）
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  email: String
});

// 创建用户模型（Model）
const User = mongoose.model('User', userSchema);

// 使用用户模型进行数据库操作
// ...
```

在上面的示例中，`mongoose.Schema` 被用来定义了一个包含 `name`、`age` 和 `email` 字段的用户模式。其中，`name` 是必需的，而 `age` 有一个默认值为 18。最后，通过 `mongoose.model()` 方法，将定义的模式转换为一个用户模型（User Model），可以通过该模型进行数据库的操作。

总结一下，`mongoose.Schema` 是 Mongoose 中用于定义 MongoDB 集合结构的类，通过定义模式对象，可以创建数据模型，从而实现对数据库的操作。
<a name="NWblP"></a>
## 使用用户模型进行数据库基本操作
使用用户模型进行数据库操作需要先连接到 MongoDB 数据库，然后可以使用用户模型进行数据的增删改查操作。以下是一些常见的数据库操作示例：
<a name="yHOPp"></a>
### 连接到 MongoDB 数据库：
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
```

<a name="KDrka"></a>
### 创建用户模型：
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  email: String
});

const User = mongoose.model('User', userSchema);
```
```javascript
//导入 mongoose
const mongoose = require('mongoose')
//创建文档的结构对象
//设置集合中文档的属性以及属性值的类型
let AccountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // 设置必填项
  },
  time: {
    type: Date,
    required: true
  },
  //  类型
  type: {
    type: Number,
    default: -1 //默认值
  },
  // 金额
  account: {
    type: Number,
    required: true
  },
  // 备注
  remarks:{
    type:String,
    
  }

})

//创建模型对象  对文档操作的封装对象
let AccountModel = mongoose.model('accounts', AccountSchema)

//暴露模型对象
module.exports = AccountModel

```
<a name="akyo5"></a>
### 创建一个用户文档并保存到数据库：
```javascript
const user = new User({
  name: 'John Doe',
  age: 25,
  email: 'john@example.com'
});

user.save().then(() => {
  console.log('User saved successfully');
}).catch((err) => {
  console.error('Error saving user:', err);
});
```

<a name="Fp7kP"></a>
### 查询所有用户：
```javascript
User.find().then((users) => {
  console.log('All users:', users);
}).catch((err) => {
  console.error('Error fetching users:', err);
});
```

<a name="RSREF"></a>
### 根据条件查询用户：
```javascript
User.findOne({ name: 'John Doe' }).then((user) => {
  console.log('User found:', user);
}).catch((err) => {
  console.error('Error fetching user:', err);
});
```

<a name="FuYIx"></a>
### 更新用户信息：
```javascript
User.findOneAndUpdate({ name: 'John Doe' }, { age: 30 }).then((user) => {
  console.log('User updated successfully');
}).catch((err) => {
  console.error('Error updating user:', err);
});
```

<a name="QYerd"></a>
### 删除用户：
```javascript
User.findOneAndDelete({ name: 'John Doe' }).then((user) => {
  console.log('User deleted successfully');
}).catch((err) => {
  console.error('Error deleting user:', err);
});
```
以上是一些基本的数据库操作示例，你可以根据具体需求进行相应的操作。请确保在执行数据库操作之前已经成功连接到 MongoDB 数据库。
<a name="z0INr"></a>
## <br />字段类型
文档结构可选的常用字段类型列表

| **类型** | **描述** |
| --- | --- |
| String | 字符串 |
| Number | 数字 |
| Boolean | 布尔值 |
| Array | 数组，也可以使用 [] 来标识 |
| Date | 日期 |
| Buffer | Buffer 对象 |
| Mixed | 任意类型，需要使用 mongoose.Schema.Types.Mixed 指定 |
| ObjectId | 对象 ID，需要使用 mongoose.Schema.Types.ObjectId 指定 |
| Decimal128 | 高精度数字，需要使用 mongoose.Schema.Types.Decimal128 指定 |

<a name="BUNpF"></a>
### <br />字段值验证
Mongoose 有一些内建验证器，可以对字段值进行验证
<a name="Eh0y2"></a>
#### 必填项
```javascript
title: {
	type: String,
 	required: true // 设置必填项
},
```
<a name="lNgs4"></a>
#### 默认值
```javascript
author: {
 	type: String,
 	default: '匿名' //默认值
},
```
<a name="rkElB"></a>
#### 枚举值
```javascript
gender: {
	type: String,
	enum: ['男','女'] //设置的值必须是数组中的
},
```
<a name="RW59X"></a>
#### 唯一值
```javascript
username: {
	type: String,
 	unique: true
},
```
unique 需要 重建集合 才能有效果<br />永远不要相信用户的输入
<a name="UMVhb"></a>
## 增删改查
<a name="WXLAD"></a>
## <br />增加
插入一条<br />create
```javascript
SongModel.create({
	title:'给我一首歌的时间',
 	author: 'Jay'
}, function(err, data){
	//错误
	console.log(err);
	//插入后的数据对象
	console.log(data);
});
```
批量插入<br />insertMany
```javascript
//1.引入mongoose
const mongoose = require('mongoose');

//2.链接mongodb数据库 connect 连接
mongoose.connect('mongodb://127.0.0.1:27017/project');

//3.设置连接的回调
mongoose.connection.on('open',()=>{
	//4.声明文档结构
	const PhoneSchema = new mongoose.Schema({
		brand:String,
		color:String,
		price:Number,
 		tags:Array
	})
 	//6.创建模型对象
 	const PhoneModel = mongoose.model('phone',PhoneSchema);
 	PhoneModel.insertMany([
 		{
 			brand:'华为',
 			color:'灰色',
 			price:2399,
 			tags:['电量大','屏幕大','信号好']
 		},
 		{
 			brand:'小米',
 			color:'白色',
 			price:2099,
 			tags:['电量大','屏幕大','信号好']
         }
	],(err,data)=>{
		if(err) throw err;
         console.log('写入成功');
         mongoose.connection.close();
	})
})
```
<a name="qWV9z"></a>
## <br />删除
deleteOne<br />deleteMany
```javascript
//删除一条数据
SongModel.deleteOne({_id:'5dd65f32be6401035cb5b1ed'}, function(err){
 	if(err) throw err;
 	console.log('删除成功');
	mongoose.connection.close();
});
// 批量删除
SongModel.deleteMany({author:'Jay'}, function(err){
 	if(err) throw err;
 	console.log('删除成功');
	mongoose.connection.close();
});
```
<a name="vJWNM"></a>
## <br />更新
updateOne<br />updateMany
```javascript
SongModel.updateOne({author: 'JJ Lin'}, {author: '林俊杰'}, function (err) {
	if(err) throw err;
	mongoose.connection.close();
});
SongModel.updateMany({author: 'Leehom Wang'}, {author: '王力宏'}, function (err) {
	if(err) throw err;
	mongoose.connection.close();
});
```
<a name="GSoAW"></a>
## <br />查询
findOne<br />find
```javascript
SongModel.findOne({author: '王力宏'}, function(err, data){
	if(err) throw err;
	console.log(data);
	mongoose.connection.close();
```
```javascript
//不加条件查询
SongModel.find(function(err, data){
	if(err) throw err;
	console.log(data);
	mongoose.connection.close();
});
//加条件查询
SongModel.find({author: '王力宏'}, function(err, data){
	if(err) throw err;
	console.log(data);
	mongoose.connection.close();
});
```
<a name="PIu0p"></a>
# <br />条件控制
<a name="GlNut"></a>
#### 运算符
在 mongodb 不能 > < >= <= !== 等运算符，需要使用替代符号

- >使用 $gt
- < 使用 $lt
- = 使用 $gte
- <= 使用 $lte
- !== 使用 $ne
<a name="M21Jz"></a>
#### <br />逻辑运算
$or 逻辑或的情况<br />$and 逻辑与的情况
<a name="cVKJ9"></a>
#### <br />正则匹配
条件中可以直接使用 JS 的正则语法，通过正则可以进行模糊查询<br />`name: new RegExp('三')`
<a name="u7WSE"></a>
## <br />个性化读取
<a name="jrHhP"></a>
#### <br />字段筛选
select
```javascript
//0:不要的字段
//1:要的字段
SongModel.find().select({_id:0,title:1}).exec(function(err,data){
	if(err) throw err;
	console.log(data);
	mongoose.connection.close();
});
```
<a name="TmbVs"></a>
#### <br />数据排序
```javascript
// sort 排序
// 1:升序
// -1:倒序
SongModel.find().sort({hot:1}).exec(function(err,data){
	if(err) throw err;
	console.log(data);
	mongoose.connection.close();
});
```
<a name="c8Vac"></a>
#### <br />数据截取
```javascript
//skip 跳过   limit 限定
SongModel.find().skip(10).limit(10).exec(function(err,data){
	if(err) throw err;
	console.log(data);
	mongoose.connection.close();
});
```
<a name="oDJu7"></a>
## <br />图形化管理工具
我们可以使用图形化的管理工具来对 Mongodb 进行交互，这里演示两个图形化工具

- Robo 3T 免费 [https://github.com/Studio3T/robomongo/releases](https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2FStudio3T%2Frobomongo%2Freleases)
- Navicat 收费 [https://www.navicat.com.cn/](https://gitee.com/link?target=https%3A%2F%2Fwww.navicat.com.cn%2F)
