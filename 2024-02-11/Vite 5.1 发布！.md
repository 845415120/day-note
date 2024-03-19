---
标题: 
图片: https://vitejs.dev/og-image-announcing-vite5-1.png
链接: 
时时: 
评价:
---
## Vite Runtime API  Vite 运行时 API[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#vite-runtime-api)

Vite 5.1 adds experimental support for a new Vite Runtime API. It allows running any code by processing it with Vite plugins first. It is different from `server.ssrLoadModule` because the runtime implementation is decoupled from the server. This lets library and framework authors implement their own layer of communication between the server and the runtime. This new API is intended to replace Vite's current SSR primitives once it is stable.  
Vite 5.1 增加了对新 Vite 运行时 API 的实验性支持。它允许通过首先使用 Vite 插件处理任何代码来运行它。它不同于 `server.ssrLoadModule` 因为运行时实现与服务器分离。这允许库和框架作者在服务器和运行时之间实现自己的通信层。这个新的 API 旨在取代 Vite 当前的 SSR 原语，一旦它稳定下来。

The new API brings many benefits:  
新的 API 带来了许多好处：

- Support for HMR during SSR.  
    在 SSR 期间支持 HMR。
- It is decoupled from the server, so there is no limit on how many clients can use a single server - every client has its own module cache (you can even communicate with it how you want - using message channel/fetch call/direct function call/websocket).  
    它与服务器分离，因此对可以使用单个服务器的客户端数量没有限制 - 每个客户端都有自己的模块缓存（您甚至可以随心所欲地与它通信 - 使用消息通道/fetch 调用/直接函数调用/websocket）。
- It doesn't depend on any node/bun/deno built-in APIs, so it can run in any environment.  
    它不依赖于任何 node/bun/deno 内置 API，因此它可以在任何环境中运行。
- It's easy to integrate with tools that have their own mechanism to run code (you can provide a runner to use `eval` instead of `new AsyncFunction` for example).  
    它很容易与具有自己的运行代码机制的工具集成（例如，您可以提供一个运行器来使用 `eval` `new AsyncFunction` ）。

The initial idea [was proposed by Pooya Parsa](https://github.com/nuxt/vite/pull/201) and implemented by [Anthony Fu](https://github.com/antfu) as the [vite-node](https://github.com/vitest-dev/vitest/tree/main/packages/vite-node#readme) package to [power Nuxt 3 Dev SSR](https://antfu.me/posts/dev-ssr-on-nuxt) and later also used as the base for [Vitest](https://vitest.dev/). So the general idea of vite-node has been battle-tested for quite some time now. This is a new iteration of the API by [Vladimir Sheremet](https://github.com/sheremet-va), who had already re-implemented vite-node in Vitest and took the learnings to make the API even more powerful and flexible when adding it to Vite Core. The PR was one year in the makings, you can see the evolution and discussions with ecosystem maintainers [here](https://github.com/vitejs/vite/issues/12165).  
最初的想法是由 Pooya Parsa 提出的，并由 Anthony Fu 作为 vite-node 包实现，为 Nuxt 3 Dev SSR 提供动力，后来也被用作 Vitest 的基础。因此，vite-node 的一般思想已经经过了相当长的一段时间的实战测试。这是 Vladimir Sheremet 对 API 的新迭代，他已经在 Vitest 中重新实现了 vite-node，并在将 API 添加到 Vite Core 时吸取了教训，使其更加强大和灵活。PR酝酿了一年，你可以在这里看到生态系统维护者的演变和讨论。

Read more in the [Vite Runtime API guide](https://vitejs.dev/guide/api-vite-runtime) and [give us feedback](https://github.com/vitejs/vite/discussions/15774).  
在 Vite 运行时 API 指南中阅读更多内容，并向我们提供反馈。

## Features  特征[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#features)

### Improved support for `.css?url`  
改进了对 `.css?url`[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#improved-support-for-css-url)

Import CSS files as URLs now works reliably and correctly. This was the last remaining hurdle in Remix's move to Vite. See ([#15259](https://github.com/vitejs/vite/issues/15259)).  
将 CSS 文件导入为 URL 现在可以可靠且正确地工作。这是 Remix 转向 Vite 的最后一个障碍。请参阅 （ #15259）。

### `build.assetsInlineLimit` now supports a callback  
`build.assetsInlineLimit` 现在支持回调[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#build-assetsinlinelimit-now-supports-a-callback)

Users can now [provide a callback](https://vitejs.dev/config/build-options#build-assetsinlinelimit) that returns a boolean to opt-in or opt-out of inlining for specific assets. If `undefined` is returned, the defalt logic applies. See ([#15366](https://github.com/vitejs/vite/issues/15366)).  
用户现在可以提供一个回调，该回调返回一个布尔值，以选择加入或选择退出特定资产的内联。如果 `undefined` 返回，则应用 defalt 逻辑。请参阅 （#15366）。

### Improved HMR for circular import  
改进了循环导入的 HMR[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#improved-hmr-for-circular-import)

In Vite 5.0, accepted modules within circular imports always triggered a full page reload even if they can be handled fine in the client. This is now relaxed to allow HMR to apply without a full page reload, but if any error happens during HMR, the page will be reloaded. See ([#15118](https://github.com/vitejs/vite/issues/15118)).  
在 Vite 5.0 中，循环导入中接受的模块总是会触发整页重新加载，即使它们可以在客户端中正常处理。现在放宽了此功能，允许 HMR 在不重新加载整页的情况下应用，但如果在 HMR 期间发生任何错误，页面将被重新加载。请参阅 （ #15118）。

### Support `ssr.external: true` to externalize all SSR packages  
支持 `ssr.external: true` 将所有 SSR 包外部化[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#support-ssr-external-true-to-externalize-all-ssr-packages)

Historically, Vite externalizes all packages except for linked packages. This new option can be used to force externalize all packages including linked packages too. This is handy in tests within monorepos where we want to emulate the usual case of all packages externalized, or when using `ssrLoadModule` to load an arbitrary file and we want to always external packages as we don't care about HMR. See ([#10939](https://github.com/vitejs/vite/issues/10939)).  
从历史上看，Vite 将除链接包之外的所有包外部化。这个新选项也可用于强制外部化所有包，包括链接包。这在 monorepos 中的测试中很方便，我们想要模拟所有包外部化的通常情况，或者当用于 `ssrLoadModule` 加载任意文件并且我们希望始终使用外部包时，因为我们不关心 HMR。请参阅 （#10939）。

### Expose `close` method in the preview server  
预览服务器中的 Expose `close` 方法[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#expose-close-method-in-the-preview-server)

The preview server now exposes a `close` method, which will properly teardown the server including all opened socket connections. See ([#15630](https://github.com/vitejs/vite/issues/15630)).  
预览服务器现在公开了一个 `close` 方法，该方法将正确拆除服务器，包括所有打开的套接字连接。请参阅 （#15630）。

## Performance improvements  
性能改进[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#performance-improvements)

Vite keeps getting faster with each release, and Vite 5.1 is packed with performance improvements. We measured the loading time for 10K modules (25 level deep tree) using [vite-dev-server-perf](https://github.com/yyx990803/vite-dev-server-perf) for all minor versions from Vite 4.0. This is a good benchmark to meassure the effect of Vite's bundle-less approach. Each module is a small TypeScript file with a counter and imports to other files in the tree, so this mostly meassuring the time it takes to do the requests a separate modules. In Vite 4.0, loading 10K modules took 8 seconds on a M1 MAX. We had a breakthrough in [Vite 4.3 were we focused on performance](https://vitejs.dev/blog/announcing-vite4-3), and we were able to load them in 6.35 seconds. In Vite 5.1, we managed to do another performance leap. Vite is now serving the 10K modules in 5.35 seconds.  
Vite 在每次发布时都变得越来越快，Vite 5.1 充满了性能改进。我们使用 vite-dev-server-perf 测量了 Vite 4.0 中所有次要版本的 10K 模块（25 级深树）的加载时间。这是一个很好的基准，可以衡量 Vite 的无捆绑包方法的效果。每个模块都是一个带有计数器的小型 TypeScript 文件，并导入到树中的其他文件，因此这主要是为了衡量在单独的模块中执行请求所需的时间。在 Vite 4.0 中，在 M1 MAX 上加载 10K 模块需要 8 秒。我们在 Vite 4.3 中取得了突破，因为我们专注于性能，我们能够在 6.35 秒内加载它们。在 Vite 5.1 中，我们实现了另一个性能飞跃。Vite 现在可以在 5.35 秒内为 10K 模块提供服务。

![Vite 10K Modules Loading time progression](https://vitejs.dev/vite5-1-10K-modules-loading-time.png)

The results of this benchmark run on Headless Puppeteer and are a good way to compare versions. They don't represent the time as experienced by users though. When running the same 10K modules in an Incognito window is Chrome, we have:  
此基准测试的结果在 Headless Puppeteer 上运行，是比较版本的好方法。但是，它们并不代表用户所经历的时间。当在隐身窗口中运行相同的 10K 模块是 Chrome 时，我们有：

|10K Modules 10K 模块|Vite 5.0|Vite 5.1|
|---|---|---|
|Loading time 加载时间|2892ms 2892毫秒|2765ms 2765毫秒|
|Loading time (cached) 加载时间（缓存）|2778ms 2778毫秒|2477ms 2477毫秒|
|Full reload 完全重载|2003ms 2003毫秒|1878ms 1878毫秒|
|Full reload (cached) 完全重新加载（缓存）|1682ms 1682毫秒|1604ms 1604毫秒|

### Run CSS preprocessors in threads  
在线程中运行 CSS 预处理器[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#run-css-preprocessors-in-threads)

Vite now has opt-in support for running CSS preprocessors in threads. You can enable it using [`css.preprocessorMaxWorkers: true`](https://vitejs.dev/config/shared-options#css-preprocessormaxworkers). For a Vuetify 2 project, dev startup time was reduced by 40% with this feature enabled. There is [performance comparison for others setups in the PR](https://github.com/vitejs/vite/pull/13584#issuecomment-1678827918). See ([#13584](https://github.com/vitejs/vite/issues/13584)). [Give Feedback](https://github.com/vitejs/vite/discussions/15835).  
Vite 现在支持在线程中运行 CSS 预处理器。您可以使用 `css.preprocessorMaxWorkers: true` 启用它。对于 Vuetify 2 项目，启用此功能后，开发启动时间减少了 40%。PR 中还有其他设置的性能比较。请参阅 （#13584）。提供反馈。

### New options to improve server cold starts  
改进服务器冷启动的新选项[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#new-options-to-improve-server-cold-starts)

You can set `optimizeDeps.holdUntilCrawlEnd: false` to switch to a new strategy for deps optimization that may help in big projects. We're considering switching to this strategy by default in the future. [Give Feedback](https://github.com/vitejs/vite/discussions/15834). ([#15244](https://github.com/vitejs/vite/issues/15244))  
您可以设置为 `optimizeDeps.holdUntilCrawlEnd: false` 切换到新的 deps 优化策略，这可能对大型项目有所帮助。我们正在考虑将来默认切换到此策略。提供反馈。( #15244)

### Faster resolving with cached checks  
使用缓存检查更快地解析[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#faster-resolving-with-cached-checks)

The `fs.cachedChecks` optimization is now enabled by default. In Windows, `tryFsResolve` was ~14x faster with it, and resolving ids overall got a ~5x speed up in the triangle benchmark. ([#15704](https://github.com/vitejs/vite/issues/15704))  
现在，默认情况下， `fs.cachedChecks` 优化处于启用状态。在 Windows 中，它的速度提高了 ~14 倍，在三角形基准测试中， `tryFsResolve` 解析 id 的整体速度提高了 ~5 倍。( #15704)

### Internal performance improvements  
内部性能改进[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#internal-performance-improvements)

The dev server had several incremental performance gains. A new middleware to short-circuit on 304 ([#15586](https://github.com/vitejs/vite/issues/15586)). We avoided `parseRequest` in hot paths ([#15617](https://github.com/vitejs/vite/issues/15617)). Rollup is now properly lazy loaded ([#15621](https://github.com/vitejs/vite/issues/15621))  
开发服务器有几项增量性能提升。用于在 304 上短路的新中间件 （#15586）。我们避免 `parseRequest` 了热路径 （#15617）。Rollup 现在已正确延迟加载 （ #15621）

## Deprecations  弃用[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#deprecations)

We continue to reduce Vite's API surface where possible to make the project manintainable long term.  
我们继续尽可能减少 Vite 的 API 表面，以使项目长期可维护。

### Deprecated `as` option in `import.meta.glob`  
中已 `as` 弃用的 `import.meta.glob` 选项[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#deprecated-as-option-in-import-meta-glob)

The standard moved to [Import Attributes](https://github.com/tc39/proposal-import-attributes), but we don't plan to replace `as` with a new option at this point. Instead, it is recommended that the user switches to `query`. See ([#14420](https://github.com/vitejs/vite/issues/14420)).  
该标准已移至“导入属性”，但我们目前不打算替换 `as` 为新选项。相反，建议用户切换到 `query` 。请参阅 （#14420）。

### Removed experimental build-time pre-bundling  
删除了实验性的构建时预捆绑[​](https://vitejs.dev/blog/announcing-vite5-1?ref=dailydev#removed-experimental-build-time-pre-bundling)

Build-time pre-bundling, an experimental feature added in Vite 3, is removed. With Rollup 4 switching its parser to native, and Rolldown being worked on, both the performance and the dev-vs-build inconsistency story for this feature are no longer valid. We want to continue improving dev/build consistency, and have concluded that using Rolldown for "prebundling during dev" and "production builds" is the better bet moving forward. Rolldown may also implement caching in a way that is a lot more efficient during build than deps prebundling. See ([#15184](https://github.com/vitejs/vite/issues/15184)).  
删除了 Vite 3 中添加的实验性功能——构建时预捆绑。随着 Rollup 4 将其解析器切换到本机，并且正在处理 Rolldown，此功能的性能和开发与构建不一致的故事都不再有效。我们希望继续提高开发/构建的一致性，并得出结论，使用 Rolldown 进行“开发期间的预捆绑”和“生产构建”是更好的选择。Rolldown 还可以以一种在构建过程中比 deps 预捆绑更有效的方式实现缓存。请参阅 （#15184）。
