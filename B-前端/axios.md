```js
  axios({
        method:'GET',
        url:'http://www.itcbc.com:3006/api/getbooks'
      }).then(result =>{
        console.log(result.data)
      })
```