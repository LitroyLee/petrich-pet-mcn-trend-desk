const sources = [
  {
    label: "潮宠展",
    url: "https://www.poppetshow.com/",
    note: "广州国际潮宠展、活动、达人选品会、展商与线下场景。",
  },
  {
    label: "青瓜宠物IP案例",
    url: "https://www.opp2.com/380211.html",
    note: "“超级无敌大开门/真棒猫”爆款机制与宠物IP商业化案例。",
  },
  {
    label: "小红书618宠物报告",
    url: "https://www.fxbaogao.com/detail/4814460",
    note: "618宠物行业营销洞察、品类机会、笔记-直播-群聊联动。",
  },
  {
    label: "Korea JoongAng",
    url: "https://www.koreajoongangdaily.com/korea/about-three-in-10-households-in-korea-have-pets-mostly-dogs/12259035",
    note: "韩国养宠家庭、宠物时尚走秀与韩区宠物文化信号。",
  },
  {
    label: "Reddit 韩区宠物友好",
    url: "https://www.reddit.com/r/KoreaNewsfeed/comments/1ryl01t/koreas_new_petfriendly_restaurant_regulations/",
    note: "韩国宠物友好餐厅规则变化与用户/商家讨论。",
  },
  {
    label: "Heepsy 韩区宠物账号",
    url: "https://www.heepsy.com/top-instagram/pet/south-korea",
    note: "韩国区 Instagram 宠物相关账号列表、粉丝与互动率线索。",
  },
  {
    label: "新浪高考陪伴报道",
    url: "https://finance.sina.com.cn/tjhz/2026-06-08/doc-iniaswmk8671574.shtml",
    note: "高考陪伴、情绪疏导、趣味陪伴等公共情绪热点。",
  },
  {
    label: "Socialveins lovinpet___",
    url: "https://socialveins.com/influencer/instagram/lovinpet___",
    note: "首尔 Toy Poodle / Bichon 账号，含 Reels、Story、Carousel、Static Post 等合作形态。",
  },
  {
    label: "Heepsy lovinpet_official",
    url: "https://www.heepsy.com/instagram-profile/lovinpet_official",
    note: "韩国首尔宠物门店/犬种垂类账号，可参考官方号内容和转化路径。",
  },
  {
    label: "WhoTag taidduddu",
    url: "https://whotag.ai/content/ai/taidduddu-_-20251019.html",
    note: "韩国 Bichon + Maltipoo 双犬角色账号，主打宠物旅行、时尚、产品体验。",
  },
  {
    label: "WhoTag yulri_0i",
    url: "https://whotag.ai/content/ai/yulri_0i-_-65835ede.html",
    note: "韩国生活方式创作者，宠物照护、健康生活、公益和品牌互动可参考。",
  },
  {
    label: "WhoTag yacharule_24",
    url: "https://whotag.ai/content/ai/yacharule_24-_-9a4f33fe.html",
    note: "首尔都市生活方式账号，适合观察宠物友好生活、时尚视觉和个人风格融合。",
  },
  {
    label: "数英宠物品牌小红书",
    url: "https://www.digitaling.com/articles/860964.html",
    note: "宠物品牌专业号、小红书图文/视频封面、联名款笔记和品牌记忆点案例。",
  },
  {
    label: "有赞宠物种草转化",
    url: "https://www.allvalue.com/zh/articles/791312430650363904.html",
    note: "宠物用品小红书图文、短视频、直播和小程序转化链路参考。",
  },
  {
    label: "Socialveins Dog Influencers",
    url: "https://socialveins.com/influencers/lists/dog-influencers-instagram",
    note: "全球狗类账号/UGC聚合账号参考，可观察投稿、精选和社区化内容。",
  },
];

const signals = [
  {
    platform: "广州",
    tag: "event",
    score: "A+",
    title: "广州国际潮宠展刚结束，线下热度可二次收割",
    body: "6月5-7日广州保利世贸博览馆，展会含中国宠业网红达人选品会、潮猫大赛、宠物嘉年华，适合做展后盘点、达人探展、品牌二次邀约。",
    action: "做“展后30个品牌机会”图文 + 宠物模特探展混剪。",
    source: sources[0],
  },
  {
    platform: "小红书",
    tag: "xhs",
    score: "A",
    title: "618宠物囤货进入强转化窗口",
    body: "主粮、猫砂、药保、清洁、智能用品适合用“清单、避坑、对比、真实使用场景”做高CTR笔记，并承接直播和群聊。",
    action: "搭建“夏季驱虫/猫砂囤货/智能喂养”三条种草线。",
    source: sources[2],
  },
  {
    platform: "微博/全网",
    tag: "weibo",
    score: "A-",
    title: "高考季情绪陪伴仍在热榜核心区",
    body: "6月7-9日高考相关话题持续占据公共讨论，宠物可切入“陪考、考后解压、毕业照、家有考生的猫狗反应”。",
    action: "拍 15 秒“考完回家第一眼看到它”系列。",
    source: sources[6],
  },
  {
    platform: "爆款案例",
    tag: "domestic",
    score: "A",
    title: "“萝卜纸巾猫/真棒猫”证明宠物IP可跨品类代言",
    body: "爆点不是技能本身，而是宠物察言观色、主人声音奖励、低门槛二创。清洁家电、宠物用品、食品都能嵌入。",
    action: "孵化 PetRich 版“选择题宠物挑战”。",
    source: sources[1],
  },
  {
    platform: "韩国",
    tag: "korea",
    score: "B+",
    title: "韩区宠物时尚与小型犬审美值得借鉴",
    body: "韩国约三成家庭养宠，韩服宠物走秀和小型犬生活方式内容具备强视觉传播，适合 PetRich 宠物时尚周升级。",
    action: "做“韩系宠物穿搭大片”拍摄模板。",
    source: sources[3],
  },
  {
    platform: "Reddit",
    tag: "reddit",
    score: "B+",
    title: "韩国宠物友好餐厅规则变化引发讨论",
    body: "社区讨论集中在宠物友好餐厅的动线、牵引、安全距离和商家执行难点。国内可转译成宠物友好探店评分体系。",
    action: "发布“宠物友好餐厅5分制测评”。",
    source: sources[4],
  },
];

const shootFallbacks = [
  {
    title: "微博实时宠物争议：先做事实核验，再做态度型内容",
    body: "优先抓当天热搜、城市事件、宠物友好争议和动物保护事件。适合做短评、科普、评论区互动，不碰未经证实细节。",
    source: { label: "微博宠物实时搜索", url: "https://s.weibo.com/weibo?q=%E5%AE%A0%E7%89%A9" },
  },
  {
    title: "小红书宠物种草：抓首图、标题和评论区痛点",
    body: "优先看宠物用品测评、养宠避坑、宠物友好探店、带宠出行。适合转成清单、避坑和真实测评。",
    source: { label: "小红书宠物搜索", url: "https://www.xiaohongshu.com/search_result?keyword=%E5%AE%A0%E7%89%A9" },
  },
  {
    title: "抖音宠物视频：抓可复刻动作和前三秒钩子",
    body: "优先看萌宠挑战、直播切片、测评对比、剧情反转。适合矩阵账号快速复刻。",
    source: { label: "抖音宠物搜索", url: "https://www.douyin.com/search/%E5%AE%A0%E7%89%A9?type=general" },
  },
  {
    title: "优质账号池：沉淀博主栏目，而不是只追单条爆文",
    body: "每天把高频出现的宠物博主、品牌号和垂类账号纳入候选池，后续按互动率、内容结构和商业适配度复盘。",
    source: { label: "PetRich 账号池", url: "#creatorCards" },
  },
];

const platforms = [
  {
    name: "微博",
    points: ["追公共情绪热点：高考、毕业、天气、城市事件", "适合做短平快话题转译", "重点找宠物相关二创角度"],
    source: sources[6],
  },
  {
    name: "小红书",
    points: ["重点抓搜索词、封面、评论区痛点", "适合清单、避坑、测评、探店", "笔记承接直播和私域群聊"],
    source: sources[2],
  },
  {
    name: "Instagram 韩国区",
    points: ["看韩系穿搭、宠物推车、小型犬生活", "适合模特经纪和视觉大片参考", "优先收藏高互动非巨量账号"],
    source: sources[5],
  },
  {
    name: "Reddit 韩国社区",
    points: ["看真实争议和生活难点", "宠物友好、租房、医疗、通胀是高频议题", "适合转成科普和探店标准"],
    source: sources[4],
  },
];

const creators = [
  {
    name: "超级无敌大开门",
    format: "视频 / 挑战赛 / 二创模版",
    meta: ["小红书/抖音", "宠物IP", "品牌联名"],
    insight: "爆款机制是“主人训练 + 宠物不完全配合 + 奖励反馈 + 低门槛复刻”。看点不是猫真的会选，而是它看人脸色、反复试探，用户容易二创。",
    use: "PetRich可做“宠物模特面试”“新品盲测”“品牌二选一挑战”，给新人账号做首月起号模板。",
    source: sources[1],
  },
  {
    name: "未卡 VETRESKA 等宠物品牌专业号",
    format: "图文 / 视频 / 联名款封面",
    meta: ["小红书", "品牌号", "视觉种草"],
    insight: "品牌专业号的重点是首图记忆点、色彩识别、联名款话题和评论区询价。高质感图文比单纯卖点更适合种草。",
    use: "PetRich可给合作品牌做“封面模板库”：产品拟人化、宠物场景化、系列色卡、评论区引导。",
    source: sources[12],
  },
  {
    name: "宠物用品种草型矩阵账号",
    format: "图文清单 / 短视频测评 / 直播切片",
    meta: ["小红书", "直播", "私域"],
    insight: "图文负责种草和收藏，短视频负责展示宠物真实反应，直播负责成交；爆款来自“痛点标题 + 场景证明 + 评论区答疑”。",
    use: "PetRich可把猫砂、驱虫、主粮、智能喂养做成“笔记-直播-群聊”的转化链路。",
    source: sources[13],
  },
  {
    name: "lovinpet___",
    format: "Instagram Reels / Story / Carousel / Static Post",
    meta: ["Seoul", "Toy Poodle", "Bichon"],
    insight: "账号围绕 Toy Poodle 和 Bichon 的高颜值犬种建立审美标签，合作形态覆盖短视频、故事、轮播和静态图。",
    use: "PetRich可参考其“犬种垂类 + 审美统一 + 多交付形态”，用于宠物模特经纪报价单和海外达人合作包。",
    source: sources[7],
  },
  {
    name: "lovinpet_official",
    format: "Instagram 官方号 / 图文+短视频",
    meta: ["Seoul", "宠物门店", "转化账号"],
    insight: "官方账号不只做萌宠展示，还把营业时间、预约、咨询、犬种护理和售后服务放进资料页和内容链路。",
    use: "PetRich可参考做“账号资料页转化检查表”：简介、联系方式、预约入口、服务承诺、内容分类。",
    source: sources[8],
  },
  {
    name: "taidduddu",
    format: "Instagram Reels / 宠物旅行 / 宠物时尚",
    meta: ["Korea", "Bichon", "Maltipoo"],
    insight: "双犬角色让内容有连续叙事：出行、穿搭、产品体验和日常冒险都能固定栏目化，适合品牌深度合作。",
    use: "PetRich可复制“双宠组合CP”策略，给模特库做性格搭配：活泼担当、治愈担当、穿搭担当。",
    source: sources[9],
  },
  {
    name: "yulri_0i",
    format: "生活方式图文 / Reels / 公益互动",
    meta: ["Korea", "Pet Lover", "Lifestyle"],
    insight: "宠物内容和健康生活、穿搭、公益结合，适合高信任品牌，不需要每条都宠物主角，但宠物成为人格可信度的一部分。",
    use: "PetRich可找生活方式达人合作宠物友好酒店、餐饮、公益领养、天然粮和高品质用品。",
    source: sources[10],
  },
  {
    name: "yacharule_24",
    format: "都市风图文 / Reels / 宠物友好生活",
    meta: ["Seoul", "Urban", "Fashion"],
    insight: "视觉风格鲜明，宠物友好生活不是“萌宠单点”，而是时尚、城市、个性表达的组成部分。",
    use: "PetRich可用于高端人宠活动参考：纹身、街头、轻奢、都市夜游等非传统萌宠审美。",
    source: sources[11],
  },
  {
    name: "Kat / @katstawp",
    format: "Instagram 图文 / 宠物人格账号",
    meta: ["South Korea", "Pet Account", "高互动"],
    insight: "Heepsy 列表显示其定位为宠物账号且互动率高。小体量高互动账号适合观察评论区关系和粉丝粘性。",
    use: "PetRich筛选达人时不要只看粉丝量，要把互动率、评论质量、可持续栏目纳入评分。",
    source: sources[5],
  },
  {
    name: "jiwoo_the_shihtzu",
    format: "Instagram 图文 / 多宠家庭记录",
    meta: ["Seoul", "Shih Tzu", "多猫家庭"],
    insight: "多宠家庭账号的优势是场景更丰富：猫狗关系、家庭管理、用品消耗、空间收纳都能形成选题。",
    use: "PetRich可发展“多宠家庭测评官”，适合猫砂、清洁家电、除味、收纳和智能设备品牌。",
    source: sources[5],
  },
  {
    name: "corgi_dan2",
    format: "Instagram 图文 / 犬种人格",
    meta: ["Seoul", "Corgi", "日常"],
    insight: "犬种标签清晰，城市地点明确，适合持续沉淀“这只宠物是谁、在哪里、有什么性格”的账号资产。",
    use: "PetRich做账号孵化时，可先定犬种标签、城市标签和口头禅，再做内容测试。",
    source: sources[5],
  },
  {
    name: "Pug Lovers Club",
    format: "Instagram UGC聚合 / 视频投稿",
    meta: ["Global", "Pug", "Community"],
    insight: "UGC聚合账号靠投稿、精选和统一标签建立社区感，内容成本低但需要版权/授权流程。",
    use: "PetRich可做“大湾区萌宠投稿池”，为矩阵账号、活动报名、私域社群提供长期素材来源。",
    source: sources[14],
  },
];

const businesses = [
  ["01", "宠物账号孵化", "用高考季、618清单、宠物选择题挑战做新人账号起号模板。", [sources[1], sources[6]]],
  ["02", "宠物模特经纪", "韩系穿搭、宠物时尚周、品牌新品拍摄都需要可控宠物模特库。", [sources[0], sources[3]]],
  ["03", "全平台矩阵运营", "同一热点拆微博话题、小红书清单、抖音短视频、视频号复盘。", [sources[2], sources[6]]],
  ["04", "爆款打造", "用低门槛挑战、强情绪节点、评论区共创提高复刻率。", [sources[1]]],
  ["05", "品牌整合营销", "潮宠展后对接食品、清洁、智能、酒店、餐饮等跨界品牌。", [sources[0], sources[1]]],
  ["06", "直播电商", "围绕618和夏季驱虫清洁做选品、脚本、达人直播组合。", [sources[2]]],
  ["07", "私域社群", "直播间和笔记评论区引导养宠群，沉淀复购和测评样本。", [sources[2]]],
  ["08", "主题活动策划", "宠物友好餐厅测评、韩系宠物穿搭日、考后解压遛宠局。", [sources[0], sources[4]]],
];

function renderSourceRow(sourceOrSources) {
  const list = Array.isArray(sourceOrSources) ? sourceOrSources : [sourceOrSources];
  return `
    <div class="source-row">
      <span>出处</span>
      ${list.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`).join("")}
    </div>
  `;
}

function tagClass(platform) {
  if (platform === "微博") return "weibo";
  if (platform === "小红书") return "xhs";
  if (platform === "抖音") return "domestic";
  return "domestic";
}

function buildDynamicSignals(payload) {
  const items = Array.isArray(payload?.items) ? payload.items : [];
  if (!items.length) return signals;
  return items.slice(0, 6).map((item) => ({
    platform: item.platform,
    tag: tagClass(item.platform),
    score: item.heatScore || "--",
    title: item.title,
    body: item.summary || item.rawText || "已采集到该条内容，建议点击来源复核互动和评论区。",
    action: item.petrichUse || "转入每日选题池，人工复核后决定是否拍摄。",
    source: {
      label: `${item.platform} · ${item.keyword}`,
      url: item.link || item.sourceUrl || "#domesticFeed",
    },
  }));
}

function renderSignals(payload) {
  const grid = document.querySelector("#signalGrid");
  const signalItems = buildDynamicSignals(payload);
  grid.innerHTML = signalItems
    .map(
      (item) => `
        <article class="signal-card">
          <div class="signal-top">
            <span class="tag ${item.tag}">${item.platform}</span>
            <span class="score">${typeof item.score === "number" ? "热度" : "机会"} ${item.score}</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.body}</p>
          <p><strong>PetRich动作</strong>${item.action}</p>
          <a class="source" href="${item.source.url}" target="_blank" rel="noreferrer">${item.source.label}</a>
        </article>
      `
    )
    .join("");
}

const platformPriority = { 微博: 3, 小红书: 2, 抖音: 1 };

function parseItemDate(item, payloadDate) {
  const text = `${item.title || ""} ${item.summary || ""} ${item.rawText || ""}`;
  const match = text.match(/(\d{1,2})月(\d{1,2})日/);
  if (!match || !payloadDate) return null;
  const year = payloadDate.split("-")[0];
  const month = match[1].padStart(2, "0");
  const day = match[2].padStart(2, "0");
  const date = new Date(`${year}-${month}-${day}T00:00:00+08:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function isVisiblyOld(item, payloadDate) {
  const text = `${item.title || ""} ${item.summary || ""} ${item.rawText || ""}`;
  if (/20(1\d|2[0-5])年/.test(text)) return true;
  const itemDate = parseItemDate(item, payloadDate);
  if (!itemDate || !payloadDate) return false;
  const currentDate = new Date(`${payloadDate}T00:00:00+08:00`);
  const days = (currentDate - itemDate) / 86400000;
  return days > 10;
}

function shootTheme(item) {
  const text = `${item.keyword || ""} ${item.title || ""} ${item.summary || ""} ${item.rawText || ""}`;
  if (/虐|受害|发声|救助|领养|弃养|保护|安全/.test(text)) {
    return {
      key: "safety",
      title: "宠物安全事件：做事实核验型短内容",
      body: `围绕“${item.title}”做平台态度、宠物安全提醒和评论区问答。只引用公开信息，不做未经证实的情绪放大。`,
    };
  }
  if (/友好|餐厅|酒店|商场|探店|出行|露营/.test(text)) {
    return {
      key: "friendly",
      title: "宠物友好现场：拍真实体验和评分表",
      body: `把“${item.title}”拆成进店动线、服务态度、宠物设施、冲突点四格内容，适合探店号和商家合作。`,
    };
  }
  if (/测评|猫砂|零食|主粮|鲜食|智能|驱虫|清洁|好物|避坑/.test(text)) {
    return {
      key: "review",
      title: "养宠测评/避坑：拍真实家庭场景",
      body: `从“${item.title}”延展成开箱、对比、宠物反应和评论区答疑，适合品牌种草与直播切片。`,
    };
  }
  if (/穿搭|摄影|走秀|模特|出道|造型|大片/.test(text)) {
    return {
      key: "model",
      title: "宠物模特内容：拍首图感强的造型栏目",
      body: `围绕“${item.title}”做宠物穿搭、棚拍花絮、模特招募和线下走秀报名素材。`,
    };
  }
  if (/直播|带货|618|货盘|清单/.test(text)) {
    return {
      key: "commerce",
      title: "直播带货脚本：拍痛点清单和真实试用",
      body: `将“${item.title}”转成短视频引流、直播间讲品和私域群话题，优先选择可复购宠物品类。`,
    };
  }
  return {
    key: `trend-${item.keyword || item.title}`,
    title: `${item.keyword || item.platform}热点：先做一条低成本试拍`,
    body: `把“${item.title}”做成15到30秒短视频或图文首图测试，看评论区能否继续拆成系列栏目。`,
  };
}

function buildDynamicShoots(payload) {
  const items = Array.isArray(payload?.items) ? payload.items : [];
  if (!items.length) return shootFallbacks;

  const freshItems = items.filter((item) => !isVisiblyOld(item, payload.date));
  const candidates = (freshItems.length ? freshItems : items)
    .slice()
    .sort((a, b) => {
      const platformDelta = (platformPriority[b.platform] || 0) - (platformPriority[a.platform] || 0);
      if (platformDelta) return platformDelta;
      return (b.heatScore || 0) - (a.heatScore || 0);
    });

  const usedThemes = new Set();
  const shoots = [];
  for (const item of candidates) {
    const theme = shootTheme(item);
    if (usedThemes.has(theme.key)) continue;
    usedThemes.add(theme.key);
    shoots.push({
      ...theme,
      source: {
        label: `${item.platform} · ${item.keyword}`,
        url: item.link || item.sourceUrl || "#domesticFeed",
      },
      platform: item.platform,
      heatScore: item.heatScore,
    });
    if (shoots.length >= 4) break;
  }
  return shoots.length ? shoots : shootFallbacks;
}

function renderShoots(payload) {
  const shootItems = buildDynamicShoots(payload);
  document.querySelector("#shootList").innerHTML = shootItems
    .map(
      (item, index) => `
        <li>
          <span>${index + 1}</span>
          <div>
            <h4>${item.title}</h4>
            <p>${item.body}</p>
            ${item.platform ? `<p class="shoot-origin">${item.platform}优先级 · 热度 ${item.heatScore || "--"}</p>` : ""}
            ${renderSourceRow(item.source)}
          </div>
        </li>
      `
    )
    .join("");
}

function renderPlatforms() {
  document.querySelector("#platformMap").innerHTML = platforms
    .map(
      (platform) => `
        <article class="platform-card">
          <h4>${platform.name}</h4>
          <ul>${platform.points.map((point) => `<li>${point}</li>`).join("")}</ul>
          ${renderSourceRow(platform.source)}
        </article>
      `
    )
    .join("");
}

function buildDynamicCreators(payload) {
  const items = Array.isArray(payload?.items) ? payload.items : [];
  return items
    .filter((item) => /账号线索|粉丝[:：]|weibo\.com\/u\//.test(`${item.title || ""} ${item.summary || ""} ${item.link || ""}`))
    .slice(0, 4)
    .map((item) => ({
      name: item.title,
      format: `${item.platform} / 账号线索 / ${item.keyword}`,
      meta: [item.platform, item.keyword, `热度 ${item.heatScore || "--"}`],
      insight: item.summary || "搜索结果中出现的宠物垂类账号，建议人工复核主页内容、近期互动和视觉风格。",
      use: "加入 PetRich 优质账号池，后续按内容栏目、首图风格、互动质量和商业适配度复盘，并抓取首图/视频封面给老板端直接浏览。",
      source: { label: `${item.platform}主页/搜索结果`, url: item.link || item.sourceUrl || "#domesticFeed" },
    }));
}

function renderCreators(payload) {
  const creatorItems = [...buildDynamicCreators(payload), ...creators].slice(0, 12);
  document.querySelector("#creatorCards").innerHTML = creatorItems
    .map(
      (creator) => `
        <article class="creator-card">
          <div class="creator-meta mini-tags">${creator.meta.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <h4>${creator.name}</h4>
          <h5>${creator.format}</h5>
          <p>${creator.insight}</p>
          <p><strong>PetRich用法：</strong>${creator.use}</p>
          ${renderSourceRow(creator.source)}
        </article>
      `
    )
    .join("");
}

function renderDomesticFeed(payload) {
  const grid = document.querySelector("#domesticFeed");
  if (!grid) return;
  updateHero(payload);
  renderShoots(payload);
  renderSignals(payload);
  renderCreators(payload);

  if (!payload || !Array.isArray(payload.items) || payload.items.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        暂无国内平台采集结果。请先用 <strong>scripts/open_collection_browser.sh</strong> 登录专用采集浏览器，
        再运行 <strong>scripts/collect_domestic_trends.sh</strong> 生成最新数据。
      </div>
    `;
    return;
  }

  grid.innerHTML = payload.items
    .slice(0, 12)
    .map(
      (item) => `
        <article class="feed-card">
          ${
            item.previewImage
              ? `<a class="feed-preview" href="${item.link || item.sourceUrl}" target="_blank" rel="noreferrer">
                  <img src="${item.previewImage}" alt="${item.platform} ${item.keyword} 预览" loading="lazy" />
                </a>`
              : ""
          }
          <div class="feed-meta">
            <span class="mini-tags"><span>${item.platform}</span></span>
            <span class="mini-tags"><span>${item.keyword}</span></span>
            <span class="score">热度 ${item.heatScore}</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.summary || item.rawText || "已采集到该条内容，需人工复核标题和互动数据。"}</p>
          <p><strong>PetRich用法：</strong>${item.petrichUse}</p>
          <a href="${item.link || item.sourceUrl}" target="_blank" rel="noreferrer">打开原内容 / 搜索页</a>
        </article>
      `
    )
    .join("");
}

function formatCnDate(dateString) {
  if (!dateString) return "未生成";
  const [year, month, day] = dateString.split("-");
  return `${year}.${month}.${day}`;
}

function formatHeroDate(dateString) {
  if (!dateString) return "今日";
  const [, month, day] = dateString.split("-");
  return `${Number(month)} 月 ${Number(day)} 日`;
}

function updateHero(payload) {
  const dataDate = document.querySelector("#dataDate");
  const heroTitle = document.querySelector("#heroTitle");
  const todaySignalCount = document.querySelector("#todaySignalCount");
  const items = Array.isArray(payload?.items) ? payload.items : [];
  const records = Array.isArray(payload?.records) ? payload.records : [];
  const date = payload?.date;
  const platforms = [...new Set(items.map((item) => item.platform).filter(Boolean))];

  if (dataDate) dataDate.textContent = formatCnDate(date);
  if (todaySignalCount) todaySignalCount.textContent = String(items.length || records.length || 0);
  if (heroTitle) {
    const platformText = platforms.length ? platforms.join("、") : "国内平台";
    heroTitle.textContent = `${formatHeroDate(date)}宠物内容机会：已汇总${platformText}实时热点、内容卡片预览和 PetRich 可执行动作。`;
  }
}

async function loadDomesticFeed() {
  try {
    const response = await fetch("./data/latest-domestic.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    renderDomesticFeed(await response.json());
  } catch {
    renderDomesticFeed(null);
  }
}

function renderBusinesses() {
  document.querySelector("#businessGrid").innerHTML = businesses
    .map(
      ([number, name, body, sourceList]) => `
        <article class="business-item">
          <span>${number}</span>
          <h4>${name}</h4>
          <p>${body}</p>
          ${renderSourceRow(sourceList)}
        </article>
      `
    )
    .join("");
}

function renderSources() {
  document.querySelector("#sourceLinks").innerHTML = sources
    .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join("");
}

function renderSourceAudit() {
  document.querySelector("#sourceAudit").innerHTML = sources
    .map(
      (source) => `
        <article>
          <h4>${source.label}</h4>
          <p>${source.note}</p>
          <a href="${source.url}" target="_blank" rel="noreferrer">打开出处</a>
        </article>
      `
    )
    .join("");
}

renderSignals();
renderShoots();
renderPlatforms();
renderCreators();
renderBusinesses();
renderSources();
renderSourceAudit();
loadDomesticFeed();
