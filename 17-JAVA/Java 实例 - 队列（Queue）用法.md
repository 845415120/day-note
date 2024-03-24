https://leetcode.cn/problems/implement-stack-using-queues/

`Queue<Integer>` 表示这个队列只能存储整数类型的元素。

![225_fig1](C:\desktop\225_fig1.gif)

`queue1 = new LinkedList<Integer>();` 实例化了一个泛型队列 `queue1`，并将其实现为 `LinkedList` 类的对象。



`offer(x)` 方法将整数 `x` 添加到队列中，使其成为队列中的下一个元素。



# Java 实例 - 队列（Queue）用法

offer 添加

poll 返回第一个元素，并在队列中删除

element   返回第一个元素 

peek  返回第一个元素 



`isEmpty()` 方法是用于检查数据结构（例如队列、集合、栈等）是否为空的方法





## 评论代码块

`<pre><code> 标签`



# 78.子集

给你一个整数数组 `nums` ，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

```Java
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        result.add(new ArrayList<Integer>());    // 加入空集

        for(int num :nums){
            List<List<Integer>> newSubsets = new ArrayList<>();
             for(List<Integer> subset :result){
                 List<List<Integer>> newSubset = new ArrayList<>Integer(subset);
                 newSubset.add(num);//加入当前数字
                 newSubsets.add(newSubset);//加入到结果
             }
             result.addAll(newSubsets)
        }
        return result;
    }
}
```

1.初始化一个ArrayList类型的result集合，用于存储所有子集。

2.首先将空集添加进result集合中，然后对数组中的每一个元素进行遍历。

3.对于每一个元素，我们先创建一个新的ArrayList类型的newSubsets集合，用于存放以该元素为结尾的新的子集。

4.然后我们遍历[ for（int num : nums）] result集合中的每一个子集，对于每一个子集，我们创建一个新的ArrayList类型的newSubset集合，这个新的集合包含原来子集中所有的元素，并且在末尾增加当前正在处理的元素。然后我们将这个新的子集添加进newSubsets集合中。



```javascript
var subsets = function(nums) {
    let result = []
    let path = []
    function backtracking (startIndex){
        result.push([...path])
        for (let i= startIndex; i<nums.length;i++){
            path.push(nums[i])
            backtracking (i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return result
};
```



1. 定义了一个名为subsets的方法，用于生成给定数组nums的所有子集。

2. 在方法内部声明了一个名为result的变量，用于保存生成的所有子集。

3. 声明了一个名为path的变量，用于保存当前正在生成的子集路径。

4. 定义了一个名为backtracking的函数，用于进行深度优先搜索（DFS），该函数接受一个起始索引作为参数。

   a. 首先将当前的path添加到结果中。 

   b. 然后遍历从起始索引开始的剩余元素，对每个元素进行以下操作： - 将该元素添加到path中； - 调用自身，参数为下一个元素的位置； - 移除刚刚添加的元素。

5. 最后调用backtracking函数，参数为0（表示从第一个元素开始）。

    

   a. 当所有可能的子集都被找到后，返回结果数组。