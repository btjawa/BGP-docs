const t=JSON.parse('{"key":"v-303b351e","path":"/docs/feature.html","title":"功能及原理（建议阅读！）","lang":"zh-CN","frontmatter":{"title":"功能及原理（建议阅读！）","icon":"feather","order":1,"author":"btjawa","date":"2023-09-17T00:00:00.000Z","category":["使用文档"],"tag":["使用文档","功能及原理"],"sticky":true,"star":true,"footer":"转载时请附上原作者btjawa","copyright":"<a href=\\"https://www.gnu.org/licenses/gpl-3.0.zh-cn.html\\" target=\\"_blank\\">GPL-3.0 协议</a>&nbsp;版权所有 © 2023 <a href=\\"https://github.com/btjawa/BGP-docs\\" target=\\"_blank\\">btjawa</a>","description":"澄清 私服 即 私人服务器，是指玩家或团体私自搭建的、旨在模拟官方游戏服务器功能的服务器。主要特点是不受官方控制（这意味着可以在私服中测试挂、MOD等等） 原神的私服，本质上是违法的，但这东西和梯子一样，只要你不大规模传播，而且只是为了体验一下，再加上官方现在睁一只眼闭一只眼的态度，米哈游是不会上你家送温暖的（） 你可能会在B站上看到许多类似于 \\"单机...","head":[["meta",{"property":"og:url","content":"https://btjawa.github.io/BGP-docs/BGP-docs/docs/feature.html"}],["meta",{"property":"og:site_name","content":"BGP文档"}],["meta",{"property":"og:title","content":"功能及原理（建议阅读！）"}],["meta",{"property":"og:description","content":"澄清 私服 即 私人服务器，是指玩家或团体私自搭建的、旨在模拟官方游戏服务器功能的服务器。主要特点是不受官方控制（这意味着可以在私服中测试挂、MOD等等） 原神的私服，本质上是违法的，但这东西和梯子一样，只要你不大规模传播，而且只是为了体验一下，再加上官方现在睁一只眼闭一只眼的态度，米哈游是不会上你家送温暖的（） 你可能会在B站上看到许多类似于 \\"单机..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-29T10:34:20.000Z"}],["meta",{"property":"article:author","content":"btjawa"}],["meta",{"property":"article:tag","content":"使用文档"}],["meta",{"property":"article:tag","content":"功能及原理"}],["meta",{"property":"article:published_time","content":"2023-09-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-29T10:34:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"功能及原理（建议阅读！）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-29T10:34:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"btjawa\\"}]}"]]},"headers":[{"level":2,"title":"Grasscutter目前实现：","slug":"grasscutter目前实现","link":"#grasscutter目前实现","children":[]},{"level":2,"title":"把这套系统拆解一下","slug":"把这套系统拆解一下","link":"#把这套系统拆解一下","children":[]},{"level":2,"title":"交换数据过程","slug":"交换数据过程","link":"#交换数据过程","children":[]}],"git":{"createdTime":1695136958000,"updatedTime":1695983660000,"contributors":[{"name":"btjawa","email":"2407356083@qq.com","commits":3}]},"readingTime":{"minutes":3.21,"words":964},"filePathRelative":"docs/feature.md","localizedDate":"2023年9月17日","autoDesc":true,"excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">澄清</p>\\n<p>私服 即 私人服务器，是指玩家或团体私自搭建的、旨在模拟官方游戏服务器功能的服务器。主要特点是不受官方控制（这意味着可以在私服中测试挂、MOD等等）</p>\\n<p>原神的私服，本质上是违法的，但这东西和梯子一样，只要你不大规模传播，而且只是为了体验一下，再加上官方现在睁一只眼闭一只眼的态度，米哈游是不会上你家送温暖的（）</p>\\n<p>你可能会在B站上看到许多类似于 \\"单机版\\" \\"破解版\\" 这些字眼，实际大多数都只是搞标题党，扔几个名词让你觉得很牛逼</p>\\n<p>Grasscutter 是仿照、模拟原神服务端逻辑进行的一个<strong>重现（Reimplementation）</strong>，全部功能都是手搓的，包括任务；GC本身支持联机，只是不完善 你只需要把端扔到你的windows/linux服务器上，改些参数，你的朋友就可以通过dispatch和你一起玩；配置要求中等（内存1~4G）</p>\\n<p>真端 有些歧义，但是一般是指 ≈v3.2 <strong>泄漏</strong> 出来的服务端，并可通过 hk4e 登录。拥有与官服完全同步的剧情与交互，但是永远停留在3.2，想更新就等再次泄漏（概率小的不得了）；<strong>理论</strong>上是可以实现联机的，我个人还没有摸索清楚；配置需求比较高（内存20G+）</p>\\n<p>剧情服与指令服：剧情服一般指的是剧情/任务完整且不会卡死，以剧情为主的端（真端是真正意义上的剧情服，但是3.2不动了，GC4.0至今还有任务，只是很容易卡死）指令服指的就是Grasscutter，以指令为主的端（/tp，/spawn 等）</p>\\n<p>我个人的理解可能也有些误差，也欢迎大家来<a href=\\"https://github.com/btjawa/BGP-docs/edit/master/src/docs/feature.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Github</a>修正</p>\\n</div>\\n"}');export{t as data};