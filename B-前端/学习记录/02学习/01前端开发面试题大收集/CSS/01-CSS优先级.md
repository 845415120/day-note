8. Q: 如下代码中文本“Sausage”的颜色是?
    
    ```
    <ul class="shopping-list" id="awesome">
        <li><span>Milk</span></li>
        <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
    </ul>
    ```
    
    ```
    ul {color:red;}
    li {color:blue;}
    ```
    
    A: blue。
    
9. Q: 如下代码中文本“Sausage”的颜色是?
    
    ```
    <ul class="shopping-list" id="awesome">
        <li><span>Milk</span></li>
        <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
    </ul>
    ```
    
    ```
    ul {color:red;}
    #must-buy {color:blue;}
    ```
    
    A: blue。
    
10. Q: 如下代码中文本“Sausage”的颜色是?
    
    ```
    <ul class="shopping-list" id="awesome">
        <li><span>Milk</span></li>
        <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
    </ul>
    ```
    
    ```
    .shopping-list .favorite {
        color: red;
    }
    #must-buy {
        color: blue;
    }
    ```
    
    A: blue。
    
11. Q: 如下代码中文本“Sausage”的颜色是?
    
    ```
    <ul class="shopping-list" id="awesome">
        <li><span>Milk</span></li>
        <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
    </ul>
    ```
    
    ```
    ul#awesome {
        color: red;
    }
    ul.shopping-list li.favorite span {
        color: blue;
    }
    ```
    
    A: blue。
    
12. Q: 如下代码中文本“Sausage”的颜色是?
    
    ```
    <ul class="shopping-list" id="awesome">
        <li><span>Milk</span></li>
        <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
    </ul>
    ```
    
    ```
    ul#awesome #must-buy {
        color: red;
    }
    .favorite span {
        color: blue!important;
    }
    ```
    
    A: blue。
    
13. Q: 如下代码中文本“Sausage”的颜色是?
    
    ```
    <ul class="shopping-list" id="awesome">
        <li><span>Milk</span></li>
        <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
    </ul>
    ```
    
    ```
    ul.shopping-list li .highlight {
        color: red;
    }
    ul.shopping-list li .highlight:nth-of-type(odd) {
        color: blue;
    }
    ```
    
    A: blue。
    
14. Q: 如下代码中文本“Sausage”的颜色是?
    
    ```
    <ul class="shopping-list" id="awesome">
        <li><span>Milk</span></li>
        <li class="favorite" id="must-buy"><span class="highlight">Sausage</span></li>
    </ul>
    ```
    
    ```
    #awesome .favorite:not(#awesome) .highlight {
        color: red;
    }
    #awesome .highlight:nth-of-type(1):nth-last-of-type(1) {
        color: blue;
    }
    ```
    
    A: blue。