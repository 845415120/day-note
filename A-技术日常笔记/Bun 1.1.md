Bun 现在是一个跨平台的 shell——就像 bash 一样，但在 Windows 上也是如此。

JavaScript 是世界上最流行的脚本语言。那么，为什么运行 shell 脚本如此复杂呢？

不同的平台也有不同的 shell，每个 shell 的语法规则、行为甚至命令都略有不同。例如，如果要在 Windows 上运行 `cmd` shell 脚本：

- `rm -rf` doesn't work.  `rm -rf` 不起作用。
- `FOO=bar <command>` doesn't work.  `FOO=bar <command>` 不起作用。
- `which` doesn't exist. (it's called `where` instead)  
    `which` 不存在。（ `where` 它被称为）
    
Bun Shell 是一个词法分析器、解析器和解释器，它实现了一种类似 bash 的编程语言，以及一系列核心实用程序，如 `ls` 、 `rm` 和 `cat` 。

shell 也可以使用 `Bun.$` API 从 JavaScript 和 TypeScript 运行。

```js
import { $ } from "bun";

// pipe to stdout:
await $`ls *.js`;

// pipe to string:
const text = await $`ls *.js`.text();
```