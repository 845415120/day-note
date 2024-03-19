---
标题: 
图片: https://cdnd.selectdb.com/images/logo.svg
链接: 
时时: 
评价:
---
Open Source, Real-Time 开源，实时

Data Warehouse 数据仓库

Apache Doris is a modern data warehouse for real-time analytics.  
Apache Doris 是一个用于实时分析的现代数据仓库。

It delivers lightning-fast analytics on real-time data at scale.  
它可大规模提供对实时数据的闪电般快速分析。
# 第1章Doris简介
## 1.1 Doris概述
Apache Doris由百度大数据部研发（之前叫百度Palo,2018年贡献到
Apache社区后，更名为Doris),在百度内部，有超过200个产品线在使用，
部署机器超过1000台，单一业务最大可达到上百TB。
Apache Doris是一个现代化的MPP(Massively Parallel Processing,即
大规模并行处理)分析型数据库产品。仅需亚秒级响应时间即可获得查询结果，
有效地支持实时数据分析。Apache Doris的分布式架构非常简洁，易于运维，
并且可以支持10PB以上的超大数据集。

![](Pasted%20image%2020240207145132.png)

![](Pasted%20image%2020240207145144.png)



# ODS 层



## 同步维度历史数据



20_DIM_flink处理数据的固定流程12:54

21_DIM_baseAPP使用演示09:42

22_DIM_基类添加webUI页面介绍04:05

23_DIM_common模块封装常量类和source方法14:53

24_DIM_动态拆分维度表功能实现的选择介绍17:16

25_DIM_flinkCDC使用介绍及数据展示18:30

26_DIM_核心业务逻辑介绍11:16

27_DIM_对主流数据进行清洗过滤18:54

28_DIM_读取配置表数据11:21

29_DIM_HBase创建关闭连接18:03

30_DIM_HBase创建表格16:51

31_DIM_HBase删除表格API编写04:23

32_DIM_使用配置流信息创建HBase表格13:59

33_DIM_动态拆分维度表基础功能实现24:42

34_DIM_使用JDBC工具预加载配置表信息避免主流数据丢失19:09

35_DIM_预加载配置表信息避免数据丢失功能实现09:55

36_DIM_HBase写入数据和删除数据的方法编写18:51

37_DIM_写出数据到HBase的代码编写05:38

38_DIM_写出数据到HBase的演示04:31

39_DIM_代码与功能回顾17:01