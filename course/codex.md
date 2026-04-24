# MFIN7049 Codex Study Control File

本文件用于统一管理 `MFIN7049 Money, Financial Institutions and Markets` 的分阶段复习流程、输出格式、掌握度追踪和错题回炉。

默认规则：
- 主语言为中文，保留必要英文术语、模型名和公式符号。
- 复习按主题模块推进，默认不跳步；内容过大时可在同一模块内拆成 `A/B` 两回合。
- 每轮输出保持约 `70% 选择/判断/解释 + 30% 计算/推导`。
- 呈现方式默认采用 `HTML-first`：优先生成可直接打开的单文件 HTML 页面；若只需快速回复，也沿用同样结构。
- 每轮结束后必须更新 `掌握度追踪` 和 `错题与误区日志`。
- 当前默认起点：`模块 1：课程大图景与金融体系基础`。

## 1. 课程地图

| 模块 | 主题 | 核心材料 | 复习目标 |
| --- | --- | --- | --- |
| 模块 1 | 课程大图景与金融体系基础 | `mfin7049/MFin Course Outline 2025-2026.pdf`、`mfin7049/Slides - Introduction.pdf`、`mfin7049/Slides - 1.pdf`、`mfin7049/Slides - 2.pdf`、`mfin7049/Slides - 3.pdf`、`mfin7049/Teaching Notes-1.pdf` | 建立整门课的 institution-level 框架，理解 finance 的作用、money 的功能、债权/股权差异、一级/二级市场关系 |
| 模块 2 | 利率、期限结构与估值引擎 | `mfin7049/Slides - 4.pdf`、`mfin7049/Slides - 5.pdf`、`mfin7049/Slides - 6.pdf`、`mfin7049/Teaching Notes - 4.pdf`、`HW1/Assignment 1.pdf` | 打通 `PV / YTM / term structure / duration / DCF / tracking portfolio / certainty equivalent` |
| 模块 3 | 风险定价、预期与价格发现 | `mfin7049/Slides - 7.pdf`、`mfin7049/Teaching Notes - 5.pdf`、`mfin7049/Teaching Notes - 6.pdf`、`HW2/Assignment 2.pdf` 第 2 题 | 掌握风险厌恶、风险溢价、Grossman-Miller、Benhabib-Liu-Wang、价格如何聚合信息、`REE` 与 `noisy REE` |
| 模块 4 | 融资结构与逆向选择 | `mfin7049/Slides - 8.pdf`、`mfin7049/Teaching Notes-2.pdf`、`mfin7049/Teaching Notes - 7.pdf` | 理解金融结构为何存在、adverse selection、equity vs debt 在信息不对称下的差异、asset substitution、debt overhang |
| 模块 5 | 道德风险、契约设计与融资效率 | `mfin7049/Teaching Notes - 8.pdf`、`mfin7049/Slides - 10.pdf`、`HW2/Assignment 2.pdf` 第 1、3 题 | 掌握 moral hazard、激励相容、为什么 debt 在某些环境下更能缓解道德风险、监管与融资摩擦的连接 |
| 模块 6 | 银行、金融机构与监管 | `mfin7049/Slides - 9.pdf`、`mfin7049/Slides - 10.pdf`、`mfin7049/Slides - 11.pdf`、`mfin7049/Teaching Notes - 9.pdf` | 掌握银行作为特殊金融机构、`tradability / redeemability`、`banknote / bond / loan`、bank run 与监管逻辑 |
| 模块 7 | 危机机制与市场异常 | `mfin7049/Slides - 12.pdf`、`mfin7049/Slides - 13.pdf`、`mfin7049/Teaching Notes-3.pdf`、`mfin7049/Teaching Notes - 10.pdf`、`mfin7049/Teaching Notes - 11.pdf` | 掌握 credit cycle、twin crises、ambiguity aversion、liquidity spirals、panic runs、beauty contest、limits to arbitrage、portfolio insurance crash |
| 模块 8 | 央行、货币供给与政策框架 | `mfin7049/Slides - 14.pdf`、`mfin7049/Slides - 15.pdf`、`mfin7049/Slides - 16.pdf`、`mfin7049/Slides - 17.pdf`、`mfin7049/Slides - Chinese Bond Markets and Interbank Market.pdf`、`mfin7049/Teaching Notes-3.pdf` 中 inflation/QE 内容 | 掌握 central bank、money supply process、policy tools、policy strategy、中国债券市场与 interbank market 的制度背景 |
| 模块 9 | 综合选择题冲刺 | 前 8 个模块全部材料 | 抽取高频判断题、机制题、比较题，按考试中约 `70%` 的客观题比例做连续互动闯关 |
| 模块 10 | 综合计算题冲刺 | `HW1/Assignment 1.pdf`、`HW2/Assignment 2.pdf`、`Teaching Notes - 4.pdf`、`Teaching Notes - 5.pdf`、`Teaching Notes - 7.pdf`、`Teaching Notes - 8.pdf` | 聚焦估值题、融资激励题、信息/风险溢价推导题，并做参数变形训练 |

默认推进顺序：
`模块 1 -> 模块 2 -> 模块 3 -> 模块 4 -> 模块 5 -> 模块 6 -> 模块 7 -> 模块 8 -> 模块 9 -> 模块 10`

## 2. 考试蓝图

考试结构基准：
- 选择题、判断题、解释题约 `70%`
- 计算题、推导题约 `30%`

高频题型族：

| 题型族 | 关键词 | 常见出题方式 | 对应模块 |
| --- | --- | --- | --- |
| 估值三法 | `DCF`、`tracking portfolio`、`certainty equivalent` | 比较三种方法、证明等价、计算 `PV / NPV / required return / beta` | 模块 2、模块 10 |
| 风险溢价 | risk aversion、risk premium、`Rf`、expected return | 已知分布或信号，推导 `E(R)`、`Rf`、risk premium，并做经济直觉解释 | 模块 3、模块 10 |
| 信息与价格 | `REE`、`noisy REE`、price discovery | 解释价格为何能或不能反映信息，比较 informed/uninformed agents 行为 | 模块 3 |
| 逆向选择 | adverse selection、pooling、separating | 判断哪类融资/交易会出现 pooling 或 separating equilibrium，并解释低效率来源 | 模块 4 |
| 道德风险 | hidden action、incentive compatibility | 比较 equity/debt 对 effort incentives 的影响，求效率区间或 equilibrium | 模块 5、模块 10 |
| 债务替代与 debt overhang | risk-shifting、underinvestment | 解释为何股东可能偏离最大化 firm value，或拒绝正 NPV 项目 | 模块 4 |
| 银行挤兑 | bank run、redeemability、deposit insurance | 机制解释题，比较不同合同设计、存款保险和流动性提供 | 模块 6 |
| 危机机制 | liquidity spiral、ambiguity aversion、panic run、twin crises | 机制辨析、历史事件映射、图形直觉与文字解释 | 模块 7 |
| 央行与货币供给 | central bank、money creation、policy tools、QE | 区分工具与目标、解释 transmission mechanism、比较传统政策与 QE | 模块 8 |

答题优先级：
1. 先判断题目属于哪一类 friction 或 pricing problem。
2. 再判断是要 `解释机制` 还是 `代入公式/做推导`。
3. 若出现融资合同，优先分清 `firm value / debt value / equity value / entrepreneur payoff`。
4. 若出现风险资产估值，优先分清 `cash flow beta / return beta / actual return / required return`。

## 3. 单轮输出模板

每轮正式复习必须严格按下列顺序输出：

1. `主题鸟瞰`
   用 `5-8` 句解释该模块在整门课里的位置、它承上启下的逻辑、为什么考试会考。
2. `核心概念`
   给出 `4-8` 个概念或机制对比，优先处理边界最容易混淆的项。每个核心概念默认展开为：`定义 / 直觉 / 考试问法 / 常见误区`。
3. `必会公式/推导`
   只保留考试会直接使用的公式、推导链和符号解释。
4. `1 道完整例题`
   优先选 assignment 同构题或其参数变形题，给出完整解题路径。
5. `互动题组`
   固定为：
   - `2-3` 个概念判断题
   - `1` 个推导填空题
   - `1` 个小算题
   - `1` 个“如果参数改了会怎样”迁移题
6. `即时反馈与错因`
   先定位障碍层级：`概念 / 公式 / 计算 / 直觉 / 题意`，再决定是否回炉。
7. `下轮连接`
   用 `1` 行说明下一模块如何建立在本轮内容上。

交互规则：
- 每轮必须同时包含客观题训练和计算题训练，不能变成单向讲义。
- 每轮结束必须回收上一轮薄弱点，再开始新内容。
- 若某模块过大，允许拆成 `A/B` 两轮，但两轮都必须沿用同一模板。

HTML 输出规范：
- 使用自包含单文件 HTML，不依赖外部 CDN、图片或字体。
- 页面结构固定为：页头摘要、主题鸟瞰、核心概念、必会公式/推导、完整例题、互动题组、即时反馈、下轮连接。
- 核心概念区必须比速记卡更详细；每个概念至少包含定义、经济直觉、考试识别方式和易错点。
- 互动题默认隐藏答案，使用 `details` 或轻量原生 JS 做展开，不引入复杂框架。
- 页面需兼顾桌面和移动端阅读，代码块与公式符号用等宽字体突出。
- 页头应显示：模块编号、主题名称、对应材料、当前状态。

即时反馈模板：

```text
即时反馈：
- 如果你判断题错得多，问题大概率在“概念边界”。
- 如果公式会背但不会代，问题大概率在“题意识别”或“变量映射”。
- 如果方向对但数值错，问题大概率在“计算细节”。
- 如果会算但不会解释经济含义，问题大概率在“经济直觉”。
- 若同一类错误重复两次，该点进入“待回炉”并在下一轮开头优先复盘。
```

## 4. 掌握度追踪

状态标签：
`未开始 / 能复述 / 能判断 / 能计算 / 能迁移 / 待回炉`

| 模块 | 主题 | 当前状态 | 最近薄弱点 | 下次动作 |
| --- | --- | --- | --- | --- |
| 模块 1 | 课程大图景与金融体系基础 | 未开始 | 待首次复习 | 启动模块 1 |
| 模块 2 | 利率、期限结构与估值引擎 | 未开始 | 待首次复习 | 完成模块 1 后推进 |
| 模块 3 | 风险定价、预期与价格发现 | 未开始 | 待首次复习 | 完成模块 2 后推进 |
| 模块 4 | 融资结构与逆向选择 | 未开始 | 待首次复习 | 完成模块 3 后推进 |
| 模块 5 | 道德风险、契约设计与融资效率 | 未开始 | 待首次复习 | 完成模块 4 后推进 |
| 模块 6 | 银行、金融机构与监管 | 未开始 | 待首次复习 | 完成模块 5 后推进 |
| 模块 7 | 危机机制与市场异常 | 未开始 | 待首次复习 | 完成模块 6 后推进 |
| 模块 8 | 央行、货币供给与政策框架 | 未开始 | 待首次复习 | 完成模块 7 后推进 |
| 模块 9 | 综合选择题冲刺 | 未开始 | 待首次复习 | 完成模块 1-8 后推进 |
| 模块 10 | 综合计算题冲刺 | 未开始 | 待首次复习 | 完成模块 1-8 后推进 |

状态更新规则：
- `能复述`：可以用自己的话讲出核心机制。
- `能判断`：可以稳定做对概念判断和机制比较题。
- `能计算`：可以独立完成本模块典型计算或推导。
- `能迁移`：参数变化或题面变形后仍能独立作答。
- `待回炉`：同类错误连续出现两次以上，或出现“会背不会用”。

## 5. 错题与误区日志

初始高频误区：

| 编号 | 易错点 | 典型误区 | 修正提醒 | 当前状态 |
| --- | --- | --- | --- | --- |
| E1 | `cash-flow beta` vs `return beta` | 把现金流 beta 直接当收益率 beta 用 | 先分清 beta 所附着的是 `cash flow` 还是 `return` | 待监控 |
| E2 | `IRR` vs `required return` | 把项目真实回报和市场要求回报混为一谈 | `IRR` 是项目按投资成本算出的回报；`required return` 是按系统性风险要求的回报 | 待监控 |
| E3 | equity vs debt incentives | 只看 firm value，不看股东/债权人 payoff | 任何融资题都要分别算 `firm / debt / equity / entrepreneur` | 待监控 |
| E4 | `WE` vs `REE` | 只会写需求函数，不会解释价格里的信息含量 | 先问价格是否只是 clearing，还是同时承担了 information aggregation | 待监控 |
| E5 | pooling vs separating | 只比较结果，不检查 belief consistency | 必须验证“给定 belief 的最优行为”是否反过来支持 belief | 待监控 |
| E6 | moral hazard under equity | 以为 equity 一定最优 | 在 hidden action 下，equity 常常弱化 effort incentives | 待监控 |
| E7 | debt overhang | 以为正 NPV 项目一定会被接受 | 如果新增价值主要流向旧债，股东可能拒绝投资 | 待监控 |
| E8 | bank run logic | 只记结论，不记合同结构 | 要把 `redeemability`、`liquidation value`、`belief coordination` 放在一起看 | 待监控 |

回炉规则：
- 某误区在一轮中重复出现两次以上，则把相关模块状态调为 `待回炉`。
- 下一轮开始前先用 `1-2` 个小题回收对应误区，再进入新内容。

## 6. 作业映射表

| 作业 | 题目 | 对应模块 | 映射原因 | 后续使用方式 |
| --- | --- | --- | --- | --- |
| `HW1/Assignment 1.pdf` | Q1(i)(ii)(iii) | 模块 2、模块 10 | 系统训练 `direct tracking / certainty equivalent / DCF / beta / IRR / required return` | 作为估值模块主例题和计算冲刺母题 |
| `HW1/Assignment 1.pdf` | Q2 | 模块 2、模块 10 | 证明 `DCF` 与 replicating valuation 的等价性 | 作为估值理论压轴推导题 |
| `HW2/Assignment 2.pdf` | Q1 | 模块 5、模块 10 | 借债融资下的 project substitution / shareholder incentives / lender anticipation | 作为 moral hazard 与融资激励主例题 |
| `HW2/Assignment 2.pdf` | Q2 | 模块 3、模块 10 | 在 Benhabib-Liu-Wang 模型中加入 signal，求 `E(R)`、`Rf`、risk premium 并解释直觉 | 作为风险定价与信息模块的推导母题 |
| `HW2/Assignment 2.pdf` | Q3 | 模块 5、模块 10 | 比较 equity 与 debt 在不同 effort cost `c` 下能否实现效率 | 作为激励相容区间题和参数变形训练题 |

使用约束：
- `HW1` 只放在估值主线中使用，不提前拆散到 institution 部分。
- `HW2 Q2` 只在风险定价/信息主线中使用，强调信号如何改变 posterior variance 与 risk premium。
- `HW2 Q1/Q3` 只在融资摩擦主线中使用，强调行为激励和 contract design。
