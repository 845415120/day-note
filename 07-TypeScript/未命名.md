```js
const p1 = new Promise((resolve,reject)=>{
  resolve("任务成功得到的数据")
  // reject()
})
p1.then(data =>{
  console.log(data);
  return new Promise((resolve,reject)=>{
    reject('失败的信息')
  })
})
.catch(err =>{
  console.log(err);
})
p1.then().then()
```



