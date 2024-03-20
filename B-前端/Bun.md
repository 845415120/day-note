### Bun 为什么会出现？

Bun的目标很简单，就是要消除JavaScript工具链的缓慢和复杂性，但同时保留JavaScript本身的优点。Bun希望让开发者继续使用喜欢的库和框架，并且无需放弃已经熟悉的规范和约定。

为了实现这个目标，可能需要放弃一些在使用Bun之后变得不再必要的工具：

- **Node.js**：Bun 的一个可以直接替代的工具，因此不再需要以下工具：
    
- `node`
- `npx`：Bun 的 `bunx` 命令比 `npx` 快5倍。
- `nodemon`：Bun 内置了监听模式，无需使用 `nodemon`。
- `dotenv`、`cross-env`：Bun 默认支持读取`.env`文件的配置。
    

- **转译器**：Bun 可以运行`.js`、`.ts、``.cjs`、`.mjs`、`.jsx`和`.tsx`文件，因此不再需要以下工具：
    
- `tsc`：仍然可以保留它用于类型检查！
- `babel`、`.babelrc`、`@babel/preset-*`：不再需要使用 Babel 进行转译。
- `ts-node`、`ts-node-esm`：Bun 可以直接运行 TypeScript 文件。
- `tsx`：Bun可以直接运行 TypeScript 的 JSX 文件。
    

- **构建工具**：Bun 具有一流的性能和与esbuild兼容的插件API，因此不再需要以下工具：
- `esbuild`
- `webpack`
- `parcel`, `.parcelrc`
- `rollup`, `rollup.config.js`
    

- **包管理器**：Bun 是一个与 npm 兼容的包管理器，可以使用熟悉的命令。它可以读取 `package.json`文件并将依赖写入`node_modules`目录，与其他包管理器的行为类似，因此可以替换以下工具：
    
- `npm`, `.npmrc`, `package-lock.json`
- `yarn`,`yarn.lock`
- `pnpm`, `pnpm.lock`, `pnpm-workspace.yaml`
- `lern`
    

- **测试库**：Bun是一个支持Jest的测试运行器，具有快照测试、模拟和代码覆盖率等功能，因此不再需要以下测试相关的工具：
    
- `jest`, `jest.config.js`
- `ts-jest`, `@swc/jest`, `babel-jest`
- `jest-extended`
- `vitest`, `vitest.config.ts`