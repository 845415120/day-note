# Echarts

echarts 是一个非常强大的数据可视化库，它可以实现各种图表的绘制，从简单的折线图到复杂的热力图和地图。下面是 echarts 基本的设置过程：
## 1.准备数据
首先需要准备好要展示的数据，可以是数组、对象等多种格式。

```javascript
var data = [15,23,41,23,32];
```

## 2.引入 echarts 库
在页面中引入 echarts 库，可以通过下载本地文件或者引入 cdn 地址来使用。

```javascript
<script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
```

## 3.初始化图表
根据需要的图表类型，在页面中创建一个具有宽高的 dom 元素，并使用 echarts 初始化该元素，生成图表实例。需要传递一些基本配置选项。

```javascript
<div id="myChart" style="width: 600px; height: 400px;"></div>

var myChart = echarts.init(document.getElementById('myChart'));

// 基本配置
var option = {
    // ... 具体配置
};

// 使用 option 配置图表实例
myChart.setOption(option);
```

## 4.配置参数
根据图表的类型和展示需求，配置相应的参数，其中包括图表主题、图表类型、坐标轴、数据系列、图例等。

```javascript
var option = {
    // 主题
    tooltip: {},
    // 图表类型
    series: [
        {
            type: 'bar',
            data: [15,23,41,23,32]
        }
    ],
    // 坐标轴
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    yAxis: {
        type: 'value'
    }
};
```

## 5.将数据绑定到图表实例上
最后将数据绑定到图表实例上并渲染出图表即可。

```javascript
// 使用 option 配置图表实例
myChart.setOption(option);
```
