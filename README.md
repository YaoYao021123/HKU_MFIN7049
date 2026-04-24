# HKU MFIN7049 Study Review / 港大 MFIN7049 复习站

> Static HTML review site for HKU `MFIN7049 Money, Financial Institutions and Markets`
>
> 面向 HKU `MFIN7049 Money, Financial Institutions and Markets` 的静态 HTML 复习站点

Language:
[中文](#中文) | [English](#english)

<details open>
<summary><strong>中文</strong></summary>

## 中文

### 项目简介

这个仓库用于承载 `MFIN7049` 的模块化复习内容。站点采用静态 HTML 形式，不依赖后端，也不需要数据库。当前内容围绕课程主线展开：从金融体系的大图景出发，逐步进入利率、期限结构、估值、风险定价、信息摩擦、融资激励、银行挤兑、金融危机与货币政策。

它的目标不是简单堆讲义摘要，而是把课程内容组织成更适合考前复盘的结构。每个模块都按照统一模板编排，强调三件事：

1. 概念边界要清楚。
2. 公式链要能直接用于题目。
3. 例题和互动题要能把“会看”和“会做”连起来。

### 当前已完成内容

- 模块 1：课程大图景与金融体系基础
- 模块 2：利率、期限结构与估值引擎

后续模块将继续覆盖：

- 风险定价、预期与价格发现
- 融资结构与逆向选择
- 道德风险、契约设计与融资效率
- 银行、金融机构与监管
- 危机机制与市场异常
- 央行、货币供给与政策框架
- 综合选择题冲刺
- 综合计算题冲刺

### 页面组织方式

复习页全部收束在 `course/` 目录中：

- `course/index.html`
  课程站点入口页，支持中英介绍切换，并跳转到已完成模块。
- `course/module-1-review.html`
  模块 1 复习页，聚焦金融系统基础、money、债权/股权、一级/二级市场与课程方法论。
- `course/module-2-review.html`
  模块 2 复习页，聚焦 `PV`、`YTM`、`return`、利率结构与 `HW1` 对应的估值框架。
- `course/codex.md`
  复习控制文件，定义模块顺序、输出规范、掌握度追踪和错题回炉规则。

根目录文件职责如下：

- `index.html`
  GitHub Pages 根入口，自动跳转到 `course/`。
- `.github/workflows/jekyll-gh-pages.yml`
  GitHub Pages 自动部署 workflow。
- `.gitignore`
  排除课程原始 PDF、作业原件和不适合公开发布的文件。

### 内容设计原则

每一模块统一包含以下部分：

- 主题鸟瞰：先建立这一讲在整门课中的位置。
- 核心概念：默认按 `定义 / 直觉 / 考试问法 / 易错点` 展开。
- 必会公式 / 推导：只保留考试高频且可直接调用的式子。
- 完整例题：优先对齐作业题型或其参数变形。
- 互动题组：兼顾判断题、填空题、小算题和迁移题。
- 即时反馈：帮助定位卡点在概念、公式、计算、直觉还是题意。
- 下轮连接：说明这一模块如何进入下一模块。

整体题型分配遵循期末结构，尽量贴近：

- `70%` 选择/判断/解释
- `30%` 计算/推导

### 为什么原始课件不在仓库里

本仓库只发布生成后的复习站点，不公开纳入：

- 课程原始 PDF 课件
- 作业原题 PDF
- 课程内部讲义原件

这样做有两个原因：

1. 避免把教学原始材料直接公开到仓库。
2. 保持仓库内容聚焦在你自己整理后的复习产物，而不是原始输入材料。

### 访问与部署

GitHub Pages 地址：

```text
https://yaoyao021123.github.io/HKU_MFIN7049/
```

课程主页实际入口：

```text
https://yaoyao021123.github.io/HKU_MFIN7049/course/
```

部署方式：

- 仓库推送到 `main`
- GitHub Actions 执行 `.github/workflows/jekyll-gh-pages.yml`
- Pages 从 workflow artifact 发布静态站点

### README 中英切换说明

GitHub README 不支持自定义 JavaScript，因此做不了真正的按钮式语言切换。这个页面采用的是 GitHub 支持的单页双语结构：同一份 `README.md` 中放置中文和英文两个折叠区块，并提供顶部语言跳转链接。

这意味着：

- 语言内容在同一个页面里
- 不需要再打开单独的 `README.en.md`
- 但它不是前端意义上的动态按钮切换

### 后续扩展方向

- 继续补完模块 3 到模块 10
- 为每个模块增加更多同构题与参数变形题
- 增加综合冲刺页
- 在 `course/index.html` 上加入模块状态、预计完成度和入口卡片

</details>

<details>
<summary><strong>English</strong></summary>

## English

### Overview

This repository hosts a static HTML review site for HKU `MFIN7049 Money, Financial Institutions and Markets`. The content is organized as topic-based review modules rather than raw lecture dumps. It starts from the big picture of the financial system and then moves into interest rates, term structure, valuation, risk pricing, information frictions, financing incentives, bank runs, financial crises, and monetary policy.

The goal is to turn course material into a more exam-oriented review format. Each module is designed around three priorities:

1. Clear conceptual boundaries
2. Formula chains that can be used directly in problem solving
3. Worked examples and interactive questions that connect recognition to execution

### Current Scope

Completed so far:

- Module 1: Big Picture and Financial-System Foundations
- Module 2: Interest Rates, Term Structure, and Valuation Engine

Planned next:

- Risk Pricing, Expectations, and Price Discovery
- Financing Structure and Adverse Selection
- Moral Hazard, Contract Design, and Financing Efficiency
- Banks, Financial Institutions, and Regulation
- Crisis Mechanisms and Market Anomalies
- Central Banks, Money Supply, and Policy Framework
- Multiple-Choice Review Sprint
- Quantitative Problem Review Sprint

### Repository Layout

All course-facing pages are grouped under `course/`:

- `course/index.html`
  Entry page for the review site, with a Chinese/English intro toggle and links to completed modules.
- `course/module-1-review.html`
  Module 1 review page, focused on the structure of the financial system, money, debt vs equity, primary vs secondary markets, and the course lens.
- `course/module-2-review.html`
  Module 2 review page, focused on `PV`, `YTM`, returns, interest-rate structure, and the valuation logic behind `HW1`.
- `course/codex.md`
  The study control file defining module sequence, output format, mastery tracking, and review loops.

Root-level files:

- `index.html`
  Redirect entry for GitHub Pages, forwarding traffic to `course/`.
- `.github/workflows/jekyll-gh-pages.yml`
  GitHub Pages deployment workflow.
- `.gitignore`
  Excludes raw course PDFs, assignment originals, and other files that should not be published.

### Content Design Rules

Each module follows the same review structure:

- Topic overview
- Core concepts
- Must-know formulas / derivations
- One fully worked example
- Interactive question set
- Instant feedback and error diagnosis
- Bridge to the next module

Core concepts are expanded by default with:

- definition
- intuition
- exam pattern
- common mistake

The overall question balance is meant to stay close to the exam structure:

- `70%` multiple-choice / judgment / explanation
- `30%` calculation / derivation

### Why Raw Course Materials Are Excluded

This repository publishes the generated review site, not the raw teaching inputs. It intentionally excludes:

- original course PDFs
- original assignment PDFs
- lecture-note source documents distributed in class

That keeps the repository focused on the derived review product and avoids publishing the underlying course materials directly.

### Access and Deployment

GitHub Pages URL:

```text
https://yaoyao021123.github.io/HKU_MFIN7049/
```

Actual course homepage:

```text
https://yaoyao021123.github.io/HKU_MFIN7049/course/
```

Deployment flow:

- push to `main`
- GitHub Actions runs `.github/workflows/jekyll-gh-pages.yml`
- Pages publishes the generated static artifact

### README Language Switching

GitHub README rendering does not support custom JavaScript, so a true button-based runtime language switch is not possible inside `README.md`.

This repository uses the closest GitHub-supported alternative:

- both languages live in the same `README.md`
- top links jump to the Chinese or English section
- each language block is wrapped in a collapsible section

So the README is now single-page and bilingual, but not a JavaScript-style dynamic toggle.

### Next Steps

- complete Modules 3 through 10
- add more parameter-variation exercises for each module
- create integrated review pages for final sprint practice
- expand `course/index.html` with richer module navigation and progress tracking

</details>
