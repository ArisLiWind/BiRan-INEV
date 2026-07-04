/* ============================================
   BiRan INEV - Blog Website Application Logic
   Bilingual: English / Chinese
   ============================================ */

// --- i18n: UI Strings ---
const i18n = {
  en: {
    login: 'Login',
    cancel: 'Cancel',
    username: 'Username',
    password: 'Password',
    logout: 'Logout',
    article: 'Article',
    newPost: 'New Post',
    editPost: 'Edit Post',
    publish: 'Publish',
    published: 'Published',
    titlePlaceholder: 'Article Title',
    contentPlaceholder: 'Start writing...',
    articleNotFound: 'Article Not Found',
    articleNotFoundMsg: 'Sorry, the article you visited does not exist.',
    notFoundTitle: 'Not Found',
    langLabel: '中文',
  },
  zh: {
    login: '登录',
    cancel: '取消',
    username: '用户名',
    password: '密码',
    logout: '退出',
    article: '文章',
    newPost: '新建文章',
    editPost: '编辑文章',
    publish: '发布',
    published: '已发布',
    titlePlaceholder: '文章标题',
    contentPlaceholder: '开始写作...',
    articleNotFound: '文章未找到',
    articleNotFoundMsg: '抱歉，你访问的文章不存在。',
    notFoundTitle: '未找到',
    langLabel: 'EN',
  }
};

// --- Language Manager ---
const Lang = {
  current: 'en',

  init() {
    const saved = localStorage.getItem('biran_inev_lang');
    if (saved && (saved === 'en' || saved === 'zh')) {
      this.current = saved;
    }
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('biran_inev_lang', lang);
  },

  toggle() {
    this.set(this.current === 'en' ? 'zh' : 'en');
  },

  t(key) {
    return (i18n[this.current] && i18n[this.current][key]) || key;
  },

  getArticleField(article, field) {
    if (article[field] && typeof article[field] === 'object') {
      return article[field][this.current] || article[field]['en'] || '';
    }
    return article[field] || '';
  }
};

// --- Article Data (Bilingual) ---
const articles = [
  {
    id: 1,
    title: {
      en: 'The Age of Engineered Intelligence',
      zh: '工程智能时代'
    },
    excerpt: {
      en: 'The coming two decades will witness a defining shift for human civilisation. Intelligence will shed its natural state and evolve into an engineered resource — measurable, modelable, producible, deployable, tradable, and embeddable across every corner of physical and digital realms.',
      zh: '未来二十年，人类文明将迎来一次决定性的转变。智能将从自然状态中蜕变，演变为一种工程化资源——可衡量、可建模、可生产、可部署、可交易、可嵌入物理与数字世界的每一个角落。'
    },
    date: '2026-07-03',
    content: {
      en: `<p>The coming two decades will witness a defining shift for human civilisation. Intelligence will shed its natural state and evolve into an engineered resource measurable, modelable, producible, deployable, tradable, and embeddable across every corner of physical and digital realms.</p><p>For nearly all of human history, intelligence resided solely within biological organisms. Humanity could nurture, learn through and leverage intelligence for collaboration, yet no method existed to manufacture it artificially. Artificial intelligence pioneers an entirely new paradigm: the construction of intelligent systems outside the human biological brain.</p><p>This transformation carries civilisation-level foundational significance, aligning with the timeline of humanity's historic productivity revolutions. Fire granted mastery over energy, electricity democratised motive power, machinery replaced manual labour, and computers unlocked information processing. AI elevates intelligence into a brand-new core factor of production. The 2025 Stanford AI Index records consistent surges in global corporate AI adoption, capital investment and generative AI rollout. AI has woven itself deep into the underlying operational fabric of modern economies, stepping far beyond laboratory research boundaries.</p><p>The first tier of this transformative framework covers the natural substrate: the brain, nervous system, neural signals, cognition, consciousness and behaviour. Biological systems operate on self-contained, complete causal logic. The nervous system generates electrical impulses, neural dynamics shape information processing patterns that underpin human perception, decision-making, physical action and subjective conscious experience. Biological consciousness and cognition emerge exclusively from organic mechanisms. External computational systems power AI to observe, model, forecast and moderately intervene in biological intelligent processes. Core technological priorities for the decades ahead centre on the industrialisation and systematic construction of intelligence.</p><p>The second tier lies in foundational science, anchored by neuroscience and computer science. Neuroscience unpacks the generative mechanisms of biological intelligence, while computer science codifies rules for intelligence's representation, computation, generalisation and control. The frontier of contemporary scientific inquiry continues to shift away from isolated studies of matter and life toward in-depth exploration of universal computational laws governing intelligence.</p><p>Technological frameworks such as AlphaFold deliver revolutionary overhauls to scientific research paradigms, upgrading every link of cutting-edge discovery workflows. Advanced AI condenses decades-long biological and medical research cycles into a handful of years, drastically boosting efficiency across hypothesis generation, experimental design and knowledge accumulation. Judgements from leading industry pioneers quantify the scale of this shift; AI-driven industrial change will outpace traditional industrial revolutions in both speed and scope. These insights stem from hands-on research trailblazers, delivering exceptional reference value for the industry.</p><p>The third tier covers engineering implementation, the primary arena for artificial intelligence's real-world application. An artificially constructed engineering system, AI bears unique traits absent from traditional engineering disciplines, enabling iterative upgrades to engineering workflows across all industries.</p><p>Robotics evolves into embodied intelligent systems. XR hardware transforms into spatial computing interfaces tailored to user demands. Brain-computer interfaces complete a technical leap from simple signal capture to human intent decoding. Aerospace equipment attains autonomous operational capacity amid complex, unknown environments and limited communication bandwidth.</p><p>NVIDIA's AI Factory framework outlines the core form of future computational infrastructure. AI evolves from standalone software functionality into national-grade industrial infrastructure, standing alongside power grids, cloud computing and semiconductor manufacturing as foundational digital infrastructure; intelligence itself becomes shared public infrastructure for society.</p><p>The fourth tier encompasses industrial application landscapes. Healthcare, education, manufacturing, scientific research, aerospace and entertainment represent core channels through which engineered intelligence permeates and reshapes human civilisation.</p><p>Healthcare ecosystems roll out predictive diagnostics, accelerated drug development and fully accessible personalised precision medicine. Intelligent technologies expand premium personalised teaching across education at negligible marginal cost. Manufacturing transitions from experience-led production to standardised, model-driven workflows. Scientific research establishes complete intelligent loops spanning hypothesis generation, simulation, experimentation and validation. Aerospace extends intelligent decision-making to extreme operational environments inaccessible to direct human oversight.</p><p>Microsoft's definition of the Frontier Firm encapsulates structural shifts unfolding within organisations of the new era. Market entities restructure around human-machine collaboration, autonomous agent operations and digital labour pools. Networked collaboration between human and machine intelligence emerges as the core unit of productivity.</p><p>From a holistic framework perspective, AI acts as a universal enabler for scientific exploration, engineering development, organisational governance and human creativity, driving systematic upgrades to capabilities across all societal dimensions.</p><p>Tomorrow's industry-leading enterprises will build competitive advantage through development and integration of three core capabilities: self-developed foundational intelligent infrastructure, deep integration of intelligent technology into high-value physical industries, and end-to-end feedback loops linking data, models, tools, workflows and user behaviour.</p><p>Sam Altman names the coming decades the Intelligence Age, defined fundamentally by the widespread programmability of intelligence. Steep declines in the cost of generating intelligence will trigger structural overhauls across software development, scientific research, robotics, corporate administration, industrial manufacturing and human-computer interaction.</p><p>This trajectory stands as an irreversible certainty of our era.</p><p>Industrial transformation revolves around the universal diffusion of intelligence. Biological brains no longer hold exclusive ownership of intelligence, which steadily spreads into machinery, social organisations and industrial ecosystems before solidifying into foundational infrastructure for human civilisation.</p><p>The most high-impact entrepreneurial opportunities revolve around closed-loop development within high-value industrial systems. Deep integration of human intelligence, machine intelligence and real-world scenario feedback yields continuously iterating industrial cycles.</p><p>Stakeholders mastering these intelligent closed loops will drive cross-industry advancement and spearhead the reconstruction of the fundamental operating systems underpinning human civilisation.</p>`,
      zh: `<p>未来二十年，人类文明将迎来一次决定性的转变。智能将从自然状态中蜕变，演变为一种工程化资源——可衡量、可建模、可生产、可部署、可交易、可嵌入物理与数字世界的每一个角落。</p><p>在人类历史的几乎全部时间里，智能仅存在于生物有机体之中。人类能够培育智能，通过学习利用智能进行协作，但从未存在过人工制造智能的方法。人工智能开创了一个全新的范式：在人类生物大脑之外构建智能系统。</p><p>这场变革具有文明级别的基础性意义，与人类历史上生产力革命的进程相呼应。火让人类掌握了能源，电力使动力民主化，机械取代了体力劳动，计算机释放了信息处理能力。AI将智能提升为全新的核心生产要素。2025年斯坦福AI指数显示，全球企业AI采用率、资本投入和生成式AI部署持续攀升。AI已深度融入现代经济的底层运营结构，远远超越了实验室研究的边界。</p><p>这一变革框架的第一层覆盖自然基底：大脑、神经系统、神经信号、认知、意识和行为。生物系统运行于自包含的完整因果逻辑之上。神经系统产生电脉冲，神经动态塑造信息处理模式，支撑人类的感知、决策、身体行动和主观意识体验。生物意识和认知完全从有机机制中涌现。外部计算系统使AI能够观察、建模、预测和适度干预生物智能过程。未来几十年的核心技术优先事项集中在智能的工业化和系统化构建。</p><p>第二层在于基础科学，以神经科学和计算机科学为支柱。神经科学解构生物智能的生成机制，计算机科学则为智能的表征、计算、泛化和控制编码规则。当代科学探索的前沿正持续从对物质和生命的孤立研究，转向对支配智能的普适计算定律的深入探索。</p><p>AlphaFold等技术框架为科学研究范式带来了革命性变革，升级了前沿发现工作流程的每一个环节。先进AI将长达数十年的生物医学研究周期压缩到短短几年，大幅提升从假设生成、实验设计到知识积累全链条的效率。行业先驱的判断量化了这一转变的规模：AI驱动的产业变革在速度和范围上将超越传统工业革命。这些洞见来自一线研究开拓者，为行业提供了极具价值的参考。</p><p>第三层覆盖工程实现，这是人工智能现实应用的主战场。作为一个被人工构建的工程系统，AI具有传统工程学科所不具备的独特属性，能够对所有行业的工程工作流程进行迭代升级。</p><p>机器人技术进化为具身智能系统。XR硬件转变为用户导向的空间计算接口。脑机接口完成了从简单信号捕获到人类意图解码的技术飞跃。航空航天设备在复杂未知环境和有限通信带宽下获得自主运行能力。</p><p>NVIDIA的AI Factory框架勾勒了未来计算基础设施的核心形态。AI从独立软件功能演变为国家级工业基础设施，与电力网络、云计算和半导体制造并列为数字化基础设施；智能本身成为社会的共享公共基础设施。</p><p>第四层涵盖产业应用格局。医疗健康、教育、制造、科学研究、航空航天和娱乐代表了工程智能渗透并重塑人类文明的核心渠道。</p><p>医疗生态系统推出预测性诊断、加速药物开发和全面可及的个性化精准医疗。智能技术以近乎为零的边际成本，在教育领域扩展高质量的个性化教学。制造业从经验驱动的生产方式转向标准化、模型驱动的工作流程。科学研究建立了从假设生成、仿真、实验到验证的完整智能闭环。航空航天将智能决策延伸到人类无法直接监督的极端运行环境。</p><p>微软对Frontier Firm的定义概括了新时代组织中正在发生的结构性转变。市场主体围绕人机协作、自主智能体运营和数字化劳动力池进行重组。人与机器智能的网络化协作成为核心生产单元。</p><p>从整体框架视角来看，AI作为科学探索、工程开发、组织治理和人类创造力的普适赋能者，推动所有社会维度的能力系统升级。</p><p>未来领先的行业企业将通过开发和整合三种核心能力建立竞争优势：自主建设的基础智能基础设施、智能技术在高价值实体行业的深度融合、以及连接数据、模型、工具、工作流程和用户行为的端到端反馈闭环。</p><p>Sam Altman将未来数十年命名为"智能时代"，其根本定义是智能的广泛可编程化。生成智能成本的急剧下降将引发软件开发、科学研究、机器人技术、企业管理、工业制造和人机交互等领域的结构性变革。</p><p>这一轨迹是我们这个时代不可逆转的确定性。</p><p>产业变革围绕智能的普遍扩散展开。生物大脑不再独占智能的所有权，智能稳步扩散到机器、社会组织和产业生态系统中，最终固化为人类文明的基础设施。</p><p>最具影响力的创业机会围绕高价值产业系统中的闭环开发展开。人类智能、机器智能与现实场景反馈的深度融合，产生持续迭代的产业循环。</p><p>掌握这些智能闭环的利益相关者，将推动跨行业进步，引领人类文明底层操作系统的重构。</p>`
    }
  },
  {
    id: 2,
    title: {
      en: 'The Temperament Over the Intellect',
      zh: '性情胜于智商'
    },
    excerpt: {
      en: 'The most important quality for an outstanding fund manager is temperament, not IQ. You need a stable personality — one that takes no pleasure in following the crowd, nor in going against it. This business is driven by independent thinking, not opinion polls.',
      zh: '优秀基金经理最重要的特质是性情，而不是智商。你需要性格稳定——一种既不以随大流为乐，也不以反潮流为乐的性情。这行靠的是独立思考，而不是民意调查。'
    },
    date: '2026-06-28',
    content: {
      en: `<p>"The first rule of investing is never lose money. The second rule is never forget the first." Just two rules, nothing else — and I mean it. If you can buy at prices far below intrinsic value, and you buy a sufficiently diversified set of assets, you are essentially not going to lose money.</p><p>What is the most important trait of an excellent fund manager? It is more about temperament than intellect. You don't need a high IQ to do this. You need a steady personality — one that takes no pleasure in following the crowd, nor in going against it. Because this business does not run on opinion polls; it runs on independent thinking.</p><p>Benjamin Graham once said: "You are neither right nor wrong because a thousand people agree with you, nor because a thousand people disagree with you. You are right because your facts and your reasoning are sound."</p><p>Most investors focus on where stock prices will go over the next one to two years. They use all kinds of flashy methods to predict prices. They do not truly treat themselves as owners of the business. The real test of whether you are doing value investing is: you do not care whether the stock market opens tomorrow. If you made a wise investment, you should not worry even if the market closed for five years.</p><p>Quotations show me only prices, and I occasionally glance at prices — to see whether something has become absurdly cheap or absurdly expensive. But price itself tells me nothing about the business. Only financial data tells me about the business. I would rather value a business without knowing its price. That way, when I arrive at a valuation, I am not influenced by price. Only then do I look at the price, to see whether it is wildly divergent from what I estimated.</p><p>"Don't you think Omaha is too far away?" I can receive mail here. I can receive reports. All the information we need to make decisions is available. And you will find that unlike Wall Street, there are not fifty people crowding around, whispering in our ears, telling us what to do this afternoon. "Don't you find the lack of stimulation here?" I like the quiet. What I get here are facts, not stimulation.</p><p>"Why did you move away from Wall Street?" If I had stayed on Wall Street, I might be poorer. The atmosphere there is too frenetic. You hear too many things, and it is very easy to become short-sighted. Short-term gain is detrimental to long-term profit. Here, I can focus purely on business value. I do not need to go to Washington to figure out what The Washington Post is worth, nor do I need to go to New York to determine what other companies are worth. This is a process of pure analytical thinking. The less external noise in your environment, the more favourable it is for your work.</p><p>What is this thinking process? It is defining your circle of competence in evaluating businesses, and then finding, within that circle, the investment with the lowest price relative to value. Of course, there are many things I am not capable of evaluating. But some things, I am quite confident about.</p><p>I do not need to clean up in every game. I do not know what cocoa beans will do — there is plenty I do not understand. Perhaps that is regrettable, but why should I? I have not specifically studied it.</p><p>The entire industry has thousands of people quoting you prices every day, and prices change every day. You do not need to rush. Nothing is forced. There is no such thing as striking out in this business. The pitcher just stands there, throwing ball after ball at you. If you were playing real baseball, you would swing at a good pitch, or call a ball. In the stock market, you just watch quietly. You do not even need to justify every offer they throw at you. If you do not understand it, do not rush in. You can wait and see. Watch thousands of great pitches fly by, and then when you see an ideal opportunity — the position you want, the trajectory you know — well, then swing.</p><p>"So you might go half a year without any action?" Even two years without swinging. "Isn't that boring?" For most people, yes. But for most investment managers, it is indeed a problem. If they try to sit on the sidelines, not only will they be restless, but their clients may also object.</p><p>"Why doesn't anyone do what you do when it is so simple?" I think part of the reason is that my method is too simple. Academics focus on complexity. They learn all these plans — buy on Tuesday, sell on Friday, sell before a holiday — all sorts of correlation analyses. In the end, it is like a man with a hammer: to a man with a hammer, everything looks like a nail, and he cannot wait to swing. But none of these methods matter. If someone invited me to participate in a business opportunity, would I care whether I bought it on a Tuesday or in an election year? These are not the things a businessman considers when buying a business. Why should buying stocks be any different? Because stocks themselves are part-ownership in a business.</p>`,
      zh: `<p>投资的第一条规则就是不要亏本；第二条规则就是永远不要忘记第一条。就这两条，没别的了，我是认真的。如果你能以远低于实际价值的价格买入，并且你买的是一组足够分散的标的，那你基本不会亏钱。</p><p>优秀的基金经理最重要的特质是什么？这更多是关乎性情，而不是智商。做这行不需要多高的智商。你需要性格稳定，需要一种既不以随大流为乐，也不以反潮流为乐的性情。因为这行不是靠民意调查来决策，是靠独立思考来决策的。</p><p>本·格雷厄姆说过："你不会因为一千个人赞同你而成为对的，也不会因为一千个人反对你而成为错的，你之所以正确，是因为你的事实和推理站得住脚。"</p><p>大多数投资者关注股价未来1-2年怎么走，他们用各种花哨的办法去预测股价。他们并没有真的把自己当做企业的所有者。检验你做的到底是不是价值投资，真正的标准就是，你不在乎明天股市开不开门。如果你做了一笔明智的投资，就算股市闭市五年，你也不应该担心。</p><p>行情给我显示的只是价格，我偶尔会看看价格，看看它是不是便宜得离谱，或者贵得离谱。但价格本身并不会告诉我关于企业的任何信息。企业的财务数据，才能告诉我企业的信息。我宁愿在不知道价格的情况下，先对企业进行估值。这样在确定估值时，就不会受到价格的影响。然后再去看价格，看看是不是和我估的价格差得离谱。</p><p>"你不觉得奥马哈太远了吗？"我在这里可以收到邮件，也能收到报告，我们做决策所需要的所有信息都能搜到。而且你会发现这边不像华尔街，不会有五十个人凑过来在我们耳边窃窃私语，告诉我们下午该做这做那。"你不觉得这里缺乏刺激吗？""我喜欢这种清净。我在这里得到的是事实，不是刺激。</p><p>"你为什么远离华尔街？"如果我在华尔街，我可能更穷。华尔街的氛围太亢奋了，你会听到太多东西，很容易使得你的目光短浅。短期近利不利于长期获利。而在这里我可以只关注企业价值。我不用去华盛顿，就能弄清楚华盛顿邮报值多少钱；也不用去纽约，就能判断其他公司值多少钱。这就是一个纯粹的分析思考过程。这过程外界杂音越少，对你所处的环境就越有利。</p><p>所谓的思考过程是什么？思考过程就是在评估企业上界定你的能力圈，然后在这个能力圈内，找到相对于价值而言，价格最低的投资标的。当然很多东西我没有能力去评估，不过一些我还是有把握的。</p><p>我不需要每场游戏都盆满钵满。我不懂可可豆会怎么样，我不懂得事多着呢！可能有点遗憾，可是我何必事无巨细呢？我又没特地研究这个。</p><p>整个行业，每天成千上万的人在向你报价，价格每天都在变。你不要急着去做决定，没有任何事情是被迫要做的。这行没有所谓的三振出局。投手只是站在那里不停朝你开球。如果你在打真正的棒球，球放到一个好位置时，你要么挥棒，要么就判一个坏球。股市中，你只需要静静观察他们对你投来的报价，你甚至不着急对每一个进行解释。如果你不够了解，不要贸然进场，你可以静观其变。看着成千上万的好球向你飞来，然后你看到一个理想的机会，是你要的位置，你熟悉的球路——好，那就出手吧！</p><p>"所以你可能半年没有任何操作？"甚至两年不挥棒。"这不无聊吗？"对多数人会。但对多数投资经理来说，确实是个问题。如果试图袖手旁观，不仅自己会坐立不安，客户可能也有异议。</p><p>"为什么你的办法那么简单没人这么做？"我觉得一部分原因就是我的办法太简单了。学者会着重分析，他们学会那么多——周二买入、周五卖出、节前卖出——各种相关分析，最后就好像拿锤子找钉子：对一个拿锤子的人来说，他看什么都像钉子，迫不及待想尝试。但这些办法并不重要。假如有人邀请我参与一个商业机会，我会在乎是周二还是选举年买的吗？这不是商人购买企业时要考虑的事情。买股票何必在意？因为股票本身就是企业的一部分。</p>`
    }
  },
  {
    id: 3,
    title: {
      en: 'Decoding Inner Speech: Three Pillars of Invasive BCI',
      zh: '解码心语：侵入式脑机接口的三根支柱'
    },
    excerpt: {
      en: 'The most exciting paper I have read this month. A Nature Medicine breakthrough on invasive brain-computer interfaces — over 99% word accuracy on a 125,000-word vocabulary. The precision stems from three dimensions: signal source, task design, and model architecture.',
      zh: '这是我这个月看到的最兴奋的文章。Nature Medicine 上关于侵入式脑机接口的突破——在125,000词表上达到99%以上的词准确率。精准之处恰恰在于三个维度：信号源、任务设计和模型结构。'
    },
    date: '2026-07-03',
    content: {
      en: `<p>The most exciting paper I have read this month.</p><p>A Nature Medicine breakthrough on invasive brain-computer interfaces — over 99% word accuracy on a 125,000-word vocabulary. The precision stems from three dimensions: signal source, task design, and model architecture.</p><p>First, the signal source is precise: four 64-electrode Utah arrays were implanted in the ventral precentral gyrus (the speech motor cortex), recording 256 channels of both single-neuron action potentials and local field potentials simultaneously.</p><p>Second, this case possesses a large volume of accurate, longitudinally tracked, self-corrected data belonging to a single individual. 183,060 sentences, 1,960,163 words, of which 23,566 sentences were corrected word-by-word by T15 himself through a GUI. 12.7% of the words were changed. This means the training data were not passively collected noisy samples, but high-quality annotations purified by closed-loop feedback and strictly aligned with the subject's own intent. The extraordinarily high accuracy is therefore attributable to the high-quality data accumulated over a long period of tracking this participant, together with the feedback obtained.</p><p>Third, the training approach is rigorous — "guessing phonemes from the brain" rather than "guessing words." This training method is practical and serious. The motor cortex does not encode the word "apple"; it encodes the phoneme sequence that constitutes the word (rather than "temporal motor commands for the articulators"). The model outputs 41-class probabilities every 80 ms (39 phonemes, silence, and CTC blank), then uses CTC loss to automatically align neural signals with phoneme sequences. This means the model does not need to know where word boundaries are; it only needs to learn to map dynamic patterns in neural activity to phoneme sequences.</p><p>So I see three highlights here:</p><p>First, the signal source must be chronically wireless and stable. The current percutaneous connection is the greatest engineering bottleneck, limiting usage duration and independence. The future breakthrough direction lies in implantable wireless systems that ensure signal quality does not degrade and require no maintenance — which in turn would support the next two pillars.</p><p>Second, it must be the individual's own neural signals, and the individual must align them himself. T15's data accumulation and personal corrections are irreplaceable — no second person's neural manifold is identical to his. Any future system must be built on an individual-specific closed-loop foundation. New users must undergo their own calibration and accumulation cycle.</p><p>Third, the "inner speech" phoneme paradigm must be adhered to; this is the most fundamental innovation. Human language originates as "inner speech" phonemes in the mind, touching deep issues in cognitive neuroscience. The motor cortex encodes not only external vocalisation motor commands, but also internal language (inner speech) — even without sound output, articulatory motor programs are still activated in the brain. After T15 switched from vocalisation to silent speech, accuracy dropped slightly but speed improved, demonstrating that the system can decode "inner speech" without vocal-fold output. The future direction is not to decode muscles, but to decode this intrinsic articulatory program more deeply — including silent reading, language planning during thought, and even the not-yet-fully-formed semantic-to-phoneme conversion process. This requires new experimental paradigms to mark "inner speech" states and design corresponding training tasks.</p><p>If these three problems are solved, a breakthrough will follow. The first problem still involves product iteration and engineering; the second and third are entirely matters of training methodology and task design.</p><p>All of this is incredibly exciting. If we make the right choices in brain-computer-interface research, we will get the right results. Remember that.</p>`,
      zh: `<p>这是我这个月看到的最兴奋的文章。</p><p>侵入式脑机接口的实验——在125,000词表上达到99%以上词准确率。这篇Nature Medicine的核心突破，精准之处恰恰就在于这三个维度：信号源、任务设计、模型结构。</p><p>第一个，信号源精准：四枚64电极Utah阵列植入ventral precentral gyrus（言语运动皮层），256通道同时记录单个神经元动作电位和局部场电位。</p><p>第二个，这个案例拥有属于单个个体的、大量的、准确的、长时间跟踪的、本人纠正的数据。183,060个句子、1,960,163个词，里面23,566条句子是经由T15本人通过GUI逐字修正的，其中12.7%的词被改掉——（这意味着）训练数据不是被动采集的噪声样本，而是被闭环反馈净化过的、与本人意图严格对齐的高质量标注数据。所以，这么高的准确率，是因为长时间跟着这个实验者得到的高质量数据，并且反馈得到的。</p><p>第三，训练方式的严谨——从大脑里面"猜发音"而非"猜单词"。这种训练方式是实用的，认真的。运动皮层不编码"苹果"这个单词，它编码的是构成单词的音素序列（而非"发音器官的时序运动指令"）。模型每80ms输出一次41类（含39个音素、静音和CTC空白）的概率，然后用CTC loss自动对齐神经信号和音素序列——这意味着模型不需要知道单词边界在哪里，它只需要学会把神经活动中的动态模式映射到音素序列上。</p><p>所以说，这次我看到了三个亮点，所以：</p><p>第一，信号源必须长期无线植入且稳定。当前percutaneous连接是最大的工程瓶颈，限制了使用时长和独立性。未来突破的方向是植入式无线系统，保证信号质量不衰减、免维护，这就能支撑后面两条。</p><p>第二，必须是个体自己的神经信号，并且自己对齐。T15的数据积累和本人纠正是不可替代的——没有第二个人的神经流形和他一样。未来的任何系统都必须建立在个体专属闭环的基础上，新用户必须经历属于自己的校准和积累周期。</p><p>第三，必须坚持"心语"发音范式，这是最根本的创新。人类语言最开始是内心的"心语"发音，这触及了认知神经科学的深层问题。运动皮层不仅编码外部发声的动作指令，也编码内部语言（inner speech）——即使没有声音输出，发音运动程序依然在脑中激活。T15从发声转向无声（silent speech）后准确率虽然略降但速度提升，说明系统可以解码未经声带输出的"心语"。未来的方向不是去解肌肉，而是更深入地解码这种内在发音程序——包括默读、思考时的语言规划、甚至尚未完全成形的语义-发音转换过程。这需要新的实验范式来标记"心语"状态，并设计相应的训练任务。</p><p>如果解决这三个问题，那就会有所突破。第一个问题还存在产品迭代以及产品工程化的问题，第二第三完全是训练方式任务设计的问题。</p><p>这一切很令人兴奋。如果我们在脑机研究中做出正确的选择，那么我们就会得到正确的结果。记住了。</p>`
    }
  }
];

// --- App State ---
const AppState = {
  isLoggedIn: false,
  currentUser: null,

  init() {
    const savedState = localStorage.getItem('biran_inev_logged_in');
    if (savedState === 'true') {
      this.isLoggedIn = true;
      this.currentUser = 'AL';
    }
  },

  login(username) {
    this.isLoggedIn = true;
    this.currentUser = username.substring(0, 2).toUpperCase() || 'AL';
    localStorage.setItem('biran_inev_logged_in', 'true');
    localStorage.setItem('biran_inev_user', this.currentUser);
  },

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    localStorage.removeItem('biran_inev_logged_in');
    localStorage.removeItem('biran_inev_user');
  },

  getUserInitials() {
    const saved = localStorage.getItem('biran_inev_user');
    return saved || 'AL';
  }
};

// --- Apply Language to All UI Elements ---
function applyLanguage() {
  // Update lang toggle button text
  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.textContent = Lang.t('langLabel');
  });

  // Update data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = Lang.t(key);
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = Lang.t(key);
  });

  // Update html lang attribute
  const html = document.documentElement;
  if (html) html.lang = Lang.current === 'zh' ? 'zh-CN' : 'en';
}

// --- Page: Index ---
function initIndexPage() {
  Lang.init();
  AppState.init();

  const heroGuest = document.getElementById('hero-guest');
  const heroLogged = document.getElementById('hero-logged');
  const loginModal = document.getElementById('login-modal');
  const loginBtn = document.getElementById('btn-open-login');
  const cancelBtn = document.getElementById('btn-modal-cancel');
  const submitBtn = document.getElementById('btn-modal-submit');
  const logoutBtn = document.getElementById('btn-logout');
  const newPostBtn = document.getElementById('btn-new-post');
  const articlesList = document.getElementById('articles-list');

  // Language toggle buttons (guest & logged-in hero)
  const langBtns = document.querySelectorAll('.btn-lang');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      Lang.toggle();
      applyLanguage();
      renderArticles(articlesList);
    });
  });

  // Apply language to UI
  applyLanguage();
  updateHeroState();
  renderArticles(articlesList);

  // Login modal
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      loginModal.classList.add('active');
      const usernameInput = document.getElementById('input-username');
      if (usernameInput) usernameInput.focus();
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      loginModal.classList.remove('active');
    });
  }

  if (loginModal) {
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.classList.remove('active');
      }
    });
  }

  // Enter key to submit login
  const usernameInput = document.getElementById('input-username');
  const passwordInput = document.getElementById('input-password');
  if (usernameInput) {
    usernameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (passwordInput) passwordInput.focus();
      }
    });
  }
  if (passwordInput) {
    passwordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleLogin();
      }
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', handleLogin);
  }

  function handleLogin() {
    const uInput = document.getElementById('input-username');
    const pInput = document.getElementById('input-password');
    const username = uInput ? uInput.value.trim() : '';
    const password = pInput ? pInput.value.trim() : '';

    if (!username) {
      if (uInput) {
        uInput.style.borderColor = '#ff3b30';
        uInput.focus();
        uInput.addEventListener('input', function resetBorder() {
          uInput.style.borderColor = '';
          uInput.removeEventListener('input', resetBorder);
        });
      }
      return;
    }

    AppState.login(username);
    loginModal.classList.remove('active');
    updateHeroState();

    const userAvatar = document.getElementById('user-avatar');
    if (userAvatar) userAvatar.textContent = AppState.getUserInitials();

    if (uInput) { uInput.value = ''; uInput.style.borderColor = ''; }
    if (pInput) pInput.value = '';
  }

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      AppState.logout();
      updateHeroState();
    });
  }

  // New post
  if (newPostBtn) {
    newPostBtn.addEventListener('click', () => {
      window.location.href = 'editor.html';
    });
  }

  function updateHeroState() {
    if (AppState.isLoggedIn) {
      if (heroGuest) heroGuest.classList.add('hidden');
      if (heroLogged) heroLogged.classList.remove('hidden');
      const userAvatar = document.getElementById('user-avatar');
      if (userAvatar) userAvatar.textContent = AppState.getUserInitials();
    } else {
      if (heroGuest) heroGuest.classList.remove('hidden');
      if (heroLogged) heroLogged.classList.add('hidden');
    }
  }
}

// --- Page: Article Detail ---
function initArticlePage() {
  Lang.init();

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = parseInt(urlParams.get('id'), 10);

  const customArticles = JSON.parse(localStorage.getItem('biran_inev_articles') || '[]');
  const allArticles = [...articles, ...customArticles];
  const article = allArticles.find(a => a.id === articleId);

  const titleEl = document.getElementById('article-title');
  const dateEl = document.getElementById('article-date');
  const contentEl = document.getElementById('article-content');

  // Language toggle
  const langBtns = document.querySelectorAll('.btn-lang');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      Lang.toggle();
      applyLanguage();
      // Re-render article content
      if (article) {
        titleEl.textContent = Lang.getArticleField(article, 'title');
        contentEl.innerHTML = Lang.getArticleField(article, 'content');
        document.title = `${Lang.getArticleField(article, 'title')} - BiRan INEV`;
      }
    });
  });

  applyLanguage();

  if (article) {
    if (titleEl) titleEl.textContent = Lang.getArticleField(article, 'title');
    if (dateEl) dateEl.textContent = article.date;
    if (contentEl) contentEl.innerHTML = Lang.getArticleField(article, 'content');
    document.title = `${Lang.getArticleField(article, 'title')} - BiRan INEV`;
  } else {
    if (titleEl) titleEl.textContent = Lang.t('articleNotFound');
    if (contentEl) contentEl.innerHTML = `<p>${Lang.t('articleNotFoundMsg')}</p>`;
  }

  // Back button
  const backBtn = document.getElementById('btn-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Close button
  const closeBtn = document.getElementById('btn-close-article');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Edit buttons
  const editBtns = [document.getElementById('btn-edit-article'), document.getElementById('btn-edit-pencil')];
  editBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        if (article) {
          window.location.href = `editor.html?id=${article.id}`;
        }
      });
    }
  });
}

// --- Page: Editor ---
function initEditorPage() {
  Lang.init();
  AppState.init();

  const titleInput = document.getElementById('editor-title');
  const contentArea = document.getElementById('editor-content');
  const publishBtn = document.getElementById('btn-publish');
  const backBtn = document.getElementById('btn-back-editor');
  const closeBtn = document.getElementById('btn-close-editor');

  const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get('id');
  const navTitle = document.getElementById('nav-editor-title');

  // Language toggle
  const langBtns = document.querySelectorAll('.btn-lang');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      Lang.toggle();
      applyLanguage();
      // Update editor placeholders
      if (titleInput && !titleInput.value) {
        titleInput.placeholder = Lang.t('titlePlaceholder');
      }
      if (contentArea && !contentArea.value) {
        contentArea.placeholder = Lang.t('contentPlaceholder');
      }
      if (editId) {
        navTitle.textContent = Lang.t('editPost');
      }
    });
  });

  applyLanguage();

  // If editing existing article
  if (editId) {
    const customArticles = JSON.parse(localStorage.getItem('biran_inev_articles') || '[]');
    const allArticles = [...articles, ...customArticles];
    const article = allArticles.find(a => a.id === parseInt(editId, 10));
    if (article && titleInput && contentArea) {
      const titleVal = Lang.getArticleField(article, 'title');
      const contentVal = Lang.getArticleField(article, 'content');
      titleInput.value = titleVal;
      contentArea.value = contentVal.replace(/<\/?p>/g, '\n\n').trim();
      if (navTitle) navTitle.textContent = Lang.t('editPost');
      document.title = `${Lang.t('editPost')} - ${titleVal} - BiRan INEV`;
    }
  }

  // Publish
  if (publishBtn) {
    publishBtn.addEventListener('click', () => {
      const title = titleInput ? titleInput.value.trim() : '';
      const content = contentArea ? contentArea.value.trim() : '';

      if (!title) {
        if (titleInput) titleInput.focus();
        return;
      }

      const newArticle = {
        id: editId ? parseInt(editId, 10) : Date.now(),
        title: title,
        excerpt: content.substring(0, 100) + '...',
        date: new Date().toISOString().split('T')[0],
        content: content.split('\n\n').map(p => `<p>${p}</p>`).join('')
      };

      const customArticles = JSON.parse(localStorage.getItem('biran_inev_articles') || '[]');
      if (editId) {
        const idx = customArticles.findIndex(a => a.id === parseInt(editId, 10));
        if (idx >= 0) {
          customArticles[idx] = newArticle;
        } else {
          customArticles.push(newArticle);
        }
      } else {
        customArticles.push(newArticle);
      }
      localStorage.setItem('biran_inev_articles', JSON.stringify(customArticles));

      if (publishBtn) {
        publishBtn.textContent = Lang.t('published');
        publishBtn.style.backgroundColor = 'var(--color-gray-400)';
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 600);
      }
    });
  }

  // Back
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.history.back();
    });
  }

  // Close
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
}

// --- Render Articles ---
function renderArticles(container) {
  if (!container) return;

  const customArticles = JSON.parse(localStorage.getItem('biran_inev_articles') || '[]');
  const allArticles = [...articles, ...customArticles];

  allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = allArticles.map(article => `
    <a href="article.html?id=${article.id}" class="article-card page-enter">
      <h3 class="article-card-title">${escapeHtml(Lang.getArticleField(article, 'title'))}</h3>
      <p class="article-card-excerpt">${escapeHtml(Lang.getArticleField(article, 'excerpt'))}</p>
      <time class="article-card-date">${article.date}</time>
    </a>
  `).join('');
}

// --- Utility: Escape HTML ---
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// --- Keyboard: ESC to close modal ---
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const loginModal = document.getElementById('login-modal');
    if (loginModal && loginModal.classList.contains('active')) {
      loginModal.classList.remove('active');
    }
  }
});

// --- Initialize on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  switch (page) {
    case 'index':
      initIndexPage();
      break;
    case 'article':
      initArticlePage();
      break;
    case 'editor':
      initEditorPage();
      break;
  }
});
