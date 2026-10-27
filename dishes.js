/* =====================================================================
   🧺 菜品数据文件 —— 想加菜 / 删菜 / 改用量，只改这一个文件就够了！
   ---------------------------------------------------------------------
   每道菜的格式（复制一行照着写即可）：
   { id:"英文唯一名", name:"菜名", emoji:"🍅", tag:"荤", cat:"猪牛羊", img:"",
     main:["要去买的原料 用量"],
     seasoning:["家里常备的调料"] }

   · id       ：随便起个不重复的英文名（改成重复会导致点菜错乱）
   · tag      ：只能填 "荤" / "素" / "汤"（随机选菜 = 1荤+1素+1任意）
   · cat      ：食材分类，点菜页第二行筛选用的，只能填下面 6 个之一：
                "猪牛羊" / "鸡鸭" / "鱼虾" / "豆腐蛋" / "蔬菜" / "汤品"
                （按这道菜的主料填，比如香菇炖鸡汤主料是鸡 → 填 "鸡鸭"）
   · img      ：预留字段，保持空字符串即可（本应用不放真实照片）
   · main     ：需要去买的原料，写法 "名称 空格 大概用量"，如 "五花肉 500g"
                （买菜页会按菜分组原样列出，不做合并）
   · seasoning：家中常备调料，不会进买菜原料，只以小字显示在每道菜下面

   ⚠️ 如果之后贴给我一份具体菜单，以你提供的为准，我会帮你替换。
   ===================================================================== */

const DISHES = [

  /* ===================== 🐷 猪牛羊 ===================== */
  { id: "hongshaorou", name: "红烧肉", emoji: "🥩", tag: "荤", cat: "猪牛羊", img: "",
    main: ["五花肉 500g"],
    seasoning: ["冰糖", "生抽", "老抽", "料酒", "八角", "香叶", "葱", "姜"] },

  { id: "tangcupaigu", name: "糖醋排骨", emoji: "🍖", tag: "荤", cat: "猪牛羊", img: "",
    main: ["猪肋排 500g"],
    seasoning: ["冰糖", "生抽", "老抽", "香醋", "料酒", "姜"] },

  { id: "tangculiji", name: "糖醋里脊", emoji: "🍯", tag: "荤", cat: "猪牛羊", img: "",
    main: ["猪里脊 400g"],
    seasoning: ["糖", "白醋", "番茄酱", "生抽", "淀粉", "料酒", "姜"] },

  { id: "huiguorou", name: "回锅肉", emoji: "🥓", tag: "荤", cat: "猪牛羊", img: "",
    main: ["五花肉 400g", "青蒜 2根", "青椒 1个"],
    seasoning: ["豆瓣酱", "生抽", "姜", "蒜"] },

  { id: "qingjiaorousi", name: "青椒肉丝", emoji: "🫑", tag: "荤", cat: "猪牛羊", img: "",
    main: ["猪里脊 300g", "青椒 2个"],
    seasoning: ["生抽", "淀粉", "蒜"] },

  { id: "yuxiangrousi", name: "鱼香肉丝", emoji: "🥕", tag: "荤", cat: "猪牛羊", img: "",
    main: ["猪里脊 300g", "胡萝卜 半根", "青椒 1个", "干木耳 一小把"],
    seasoning: ["豆瓣酱", "醋", "糖", "生抽", "淀粉", "葱", "姜", "蒜"] },

  { id: "suiniubairou", name: "蒜泥白肉", emoji: "🥩", tag: "荤", cat: "猪牛羊", img: "",
    main: ["五花肉 400g"],
    seasoning: ["大蒜", "生抽", "香醋", "糖", "辣椒油", "姜", "料酒", "小葱"] },

  { id: "shuizhuroupian", name: "水煮肉片", emoji: "🌶️", tag: "荤", cat: "猪牛羊", img: "",
    main: ["猪里脊 300g", "黄豆芽 200g", "生菜 3片"],
    seasoning: ["豆瓣酱", "干辣椒", "花椒", "生抽", "淀粉", "料酒", "姜", "蒜"] },

  { id: "shuizhuniurou", name: "水煮牛肉", emoji: "🌶️", tag: "荤", cat: "猪牛羊", img: "",
    main: ["牛肉 350g", "黄豆芽 200g", "生菜 3片"],
    seasoning: ["豆瓣酱", "干辣椒", "花椒", "生抽", "淀粉", "料酒", "姜", "蒜"] },

  { id: "hongshaotiti", name: "红烧猪蹄", emoji: "🐷", tag: "荤", cat: "猪牛羊", img: "",
    main: ["猪蹄 1只"],
    seasoning: ["冰糖", "生抽", "老抽", "料酒", "八角", "桂皮", "香叶", "姜", "葱"] },

  { id: "zhuroubaicai", name: "猪肉白菜炖粉条", emoji: "🥬", tag: "荤", cat: "猪牛羊", img: "",
    main: ["五花肉 300g", "大白菜 半颗", "红薯粉条 1把"],
    seasoning: ["生抽", "老抽", "八角", "姜", "葱"] },

  { id: "muxurou", name: "木须肉", emoji: "🥚", tag: "荤", cat: "猪牛羊", img: "",
    main: ["猪里脊 200g", "鸡蛋 2个", "黄瓜 半根", "干木耳 一小把"],
    seasoning: ["生抽", "料酒", "淀粉", "盐", "小葱", "姜"] },

  { id: "jingjiangrousi", name: "京酱肉丝", emoji: "🫓", tag: "荤", cat: "猪牛羊", img: "",
    main: ["猪里脊 300g", "大葱 1根", "豆腐皮 2张"],
    seasoning: ["甜面酱", "糖", "料酒", "淀粉", "生抽"] },

  { id: "tudoudunniurou", name: "土豆炖牛肉", emoji: "🥔", tag: "荤", cat: "猪牛羊", img: "",
    main: ["牛腩 500g", "土豆 2个"],
    seasoning: ["生抽", "老抽", "料酒", "八角", "冰糖", "葱", "姜"] },

  { id: "fanqieniuniu", name: "番茄牛腩", emoji: "🍅", tag: "荤", cat: "猪牛羊", img: "",
    main: ["牛腩 500g", "番茄 3个"],
    seasoning: ["番茄酱", "生抽", "冰糖", "洋葱 半个"] },

  { id: "luobodunniunan", name: "萝卜炖牛腩", emoji: "🥕", tag: "荤", cat: "猪牛羊", img: "",
    main: ["牛腩 500g", "白萝卜 1根"],
    seasoning: ["生抽", "老抽", "料酒", "八角", "姜", "冰糖"] },

  { id: "cuanbaoniurou", name: "葱爆牛肉", emoji: "🧅", tag: "荤", cat: "猪牛羊", img: "",
    main: ["牛肉 300g", "大葱 2根"],
    seasoning: ["生抽", "料酒", "淀粉", "糖", "蒜"] },

  { id: "ziranniurou", name: "孜然牛肉", emoji: "🧅", tag: "荤", cat: "猪牛羊", img: "",
    main: ["牛肉 350g", "洋葱 半个", "香菜 2根"],
    seasoning: ["孜然粉", "辣椒粉", "生抽", "料酒", "蒜", "白芝麻"] },

  { id: "fanqiefeiniu", name: "番茄肥牛卷", emoji: "🍅", tag: "荤", cat: "猪牛羊", img: "",
    main: ["肥牛卷 300g", "番茄 3个", "金针菇 1把"],
    seasoning: ["番茄酱", "生抽", "糖", "姜", "蒜", "小葱"] },

  /* ===================== 🍗 鸡鸭 ===================== */
  { id: "kelejichi", name: "可乐鸡翅", emoji: "🍗", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸡翅中 8个"],
    seasoning: ["可乐 1罐", "生抽", "老抽", "姜"] },

  { id: "gongbaojiding", name: "宫保鸡丁", emoji: "🥜", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸡胸肉 300g", "黄瓜 半根", "花生米 50g"],
    seasoning: ["干辣椒", "花椒", "生抽", "醋", "糖", "淀粉"] },

  { id: "laziji", name: "辣子鸡", emoji: "🌶️", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸡腿肉 400g", "干辣椒 1把"],
    seasoning: ["花椒", "生抽", "料酒", "姜", "蒜", "白芝麻"] },

  { id: "dapanchi", name: "大盘鸡", emoji: "🍗", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸡腿 2个", "土豆 2个", "青椒 1个", "洋葱 半个"],
    seasoning: ["干辣椒", "花椒", "八角", "生抽", "老抽", "冰糖", "啤酒 半罐", "豆瓣酱"] },

  { id: "huangmenji", name: "黄焖鸡", emoji: "🍗", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸡腿 2个", "干香菇 6朵", "青椒 1个"],
    seasoning: ["生抽", "老抽", "料酒", "冰糖", "八角", "姜", "蒜"] },

  { id: "lizimenji", name: "栗子焖鸡", emoji: "🌰", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸡腿肉 400g", "板栗 200g"],
    seasoning: ["生抽", "老抽", "料酒", "冰糖", "姜", "八角"] },

  { id: "baiqieji", name: "白切鸡", emoji: "🍗", tag: "荤", cat: "鸡鸭", img: "",
    main: ["三黄鸡 半只"],
    seasoning: ["姜", "小葱", "料酒", "香油"] },

  { id: "xiangguzhengji", name: "香菇蒸滑鸡", emoji: "🍄", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸡腿肉 400g", "干香菇 6朵"],
    seasoning: ["生抽", "蚝油", "料酒", "淀粉", "糖", "姜", "小葱"] },

  { id: "yansuji", name: "盐酥鸡", emoji: "🍗", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸡腿肉 400g", "鸡蛋 1个"],
    seasoning: ["淀粉", "椒盐粉", "辣椒粉", "五香粉", "料酒", "蒜"] },

  { id: "pijiuya", name: "啤酒鸭", emoji: "🦆", tag: "荤", cat: "鸡鸭", img: "",
    main: ["鸭肉 600g", "啤酒 1罐"],
    seasoning: ["生抽", "老抽", "冰糖", "姜", "蒜", "八角"] },

  { id: "laoyatang", name: "老鸭汤", emoji: "🦆", tag: "汤", cat: "鸡鸭", img: "",
    main: ["鸭肉 600g", "干香菇 5朵"],
    seasoning: ["料酒", "姜", "盐", "小葱"] },

  { id: "xianggudunjitang", name: "香菇炖鸡汤", emoji: "🍲", tag: "汤", cat: "鸡鸭", img: "",
    main: ["土鸡 半只", "干香菇 6朵", "红枣 5颗"],
    seasoning: ["料酒", "姜", "盐"] },

  { id: "yezijitang", name: "椰子鸡汤", emoji: "🥥", tag: "汤", cat: "鸡鸭", img: "",
    main: ["椰子 1个", "鸡肉 半只", "红枣 5颗", "枸杞 一小把"],
    seasoning: ["姜", "盐"] },

  /* ===================== 🐟 鱼虾 ===================== */
  { id: "qingzhengluyu", name: "清蒸鲈鱼", emoji: "🐟", tag: "荤", cat: "鱼虾", img: "",
    main: ["鲈鱼 1条"],
    seasoning: ["蒸鱼豉油", "葱", "姜", "料酒"] },

  { id: "hongshaodaiyu", name: "红烧带鱼", emoji: "🐠", tag: "荤", cat: "鱼虾", img: "",
    main: ["带鱼 1条"],
    seasoning: ["生抽", "老抽", "料酒", "糖", "姜", "蒜", "淀粉"] },

  { id: "hongshaojiyu", name: "红烧鲫鱼", emoji: "🐟", tag: "荤", cat: "鱼虾", img: "",
    main: ["鲫鱼 1条"],
    seasoning: ["生抽", "老抽", "糖", "料酒", "姜", "蒜", "小葱"] },

  { id: "suancaiyu", name: "酸菜鱼", emoji: "🐟", tag: "荤", cat: "鱼虾", img: "",
    main: ["草鱼 1条", "酸菜 1包", "鸡蛋 1个"],
    seasoning: ["泡椒", "干辣椒", "花椒", "淀粉", "料酒", "姜", "蒜"] },

  { id: "shuizhuyu", name: "水煮鱼", emoji: "🐟", tag: "荤", cat: "鱼虾", img: "",
    main: ["草鱼 1条", "黄豆芽 200g", "鸡蛋 1个"],
    seasoning: ["豆瓣酱", "干辣椒", "花椒", "淀粉", "料酒", "姜", "蒜"] },

  { id: "tangcuyukuai", name: "糖醋鱼块", emoji: "🐟", tag: "荤", cat: "鱼虾", img: "",
    main: ["草鱼 半条"],
    seasoning: ["糖", "白醋", "番茄酱", "生抽", "淀粉", "料酒", "姜"] },

  { id: "duojiaoyutou", name: "剁椒鱼头", emoji: "🐟", tag: "荤", cat: "鱼虾", img: "",
    main: ["胖头鱼鱼头 1个", "剁椒 100g"],
    seasoning: ["蒸鱼豉油", "姜", "蒜", "小葱", "料酒"] },

  { id: "xiarenhuadan", name: "虾仁滑蛋", emoji: "🦐", tag: "荤", cat: "鱼虾", img: "",
    main: ["虾仁 200g", "鸡蛋 3个"],
    seasoning: ["盐", "白胡椒粉", "料酒", "淀粉", "小葱"] },

  { id: "baizhuoxia", name: "白灼虾", emoji: "🦐", tag: "荤", cat: "鱼虾", img: "",
    main: ["鲜虾 500g"],
    seasoning: ["生抽", "姜", "料酒"] },

  { id: "suanrongfensizhengxia", name: "蒜蓉粉丝蒸虾", emoji: "🦐", tag: "荤", cat: "鱼虾", img: "",
    main: ["鲜虾 10只", "粉丝 1把", "大蒜 1头"],
    seasoning: ["生抽", "蚝油", "糖", "小葱"] },

  { id: "youmendaxia", name: "油焖大虾", emoji: "🦐", tag: "荤", cat: "鱼虾", img: "",
    main: ["大虾 12只"],
    seasoning: ["生抽", "糖", "料酒", "番茄酱", "姜", "小葱"] },

  { id: "jiaoyanxia", name: "椒盐虾", emoji: "🦐", tag: "荤", cat: "鱼虾", img: "",
    main: ["鲜虾 400g"],
    seasoning: ["椒盐粉", "淀粉", "料酒", "蒜", "干辣椒", "小葱"] },

  { id: "galizhengdan", name: "蛤蜊蒸蛋", emoji: "🦪", tag: "荤", cat: "鱼虾", img: "",
    main: ["蛤蜊 250g", "鸡蛋 3个"],
    seasoning: ["生抽", "香油", "小葱", "姜"] },

  { id: "congjiangchaoxie", name: "葱姜炒蟹", emoji: "🦀", tag: "荤", cat: "鱼虾", img: "",
    main: ["梭子蟹 2只"],
    seasoning: ["姜", "大葱", "生抽", "料酒", "糖", "淀粉"] },

  { id: "fanqieyupiantang", name: "番茄鱼片汤", emoji: "🍅", tag: "汤", cat: "鱼虾", img: "",
    main: ["草鱼 半条", "番茄 2个", "鸡蛋 1个"],
    seasoning: ["淀粉", "料酒", "盐", "姜", "小葱"] },

  /* ===================== 🧊 豆腐蛋 ===================== */
  { id: "mapodoufu", name: "麻婆豆腐", emoji: "🧊", tag: "素", cat: "豆腐蛋", img: "",
    main: ["嫩豆腐 1块", "猪肉末 50g"],
    seasoning: ["豆瓣酱", "花椒", "生抽", "淀粉", "小葱"] },

  { id: "jiachangdoufu", name: "家常豆腐", emoji: "🧈", tag: "素", cat: "豆腐蛋", img: "",
    main: ["老豆腐 1块", "青椒 1个", "干木耳 一小把"],
    seasoning: ["生抽", "蚝油", "豆瓣酱"] },

  { id: "hongshaodoufu", name: "红烧豆腐", emoji: "🧊", tag: "素", cat: "豆腐蛋", img: "",
    main: ["老豆腐 1块"],
    seasoning: ["生抽", "老抽", "糖", "蚝油", "蒜", "淀粉", "小葱"] },

  { id: "xiangjiandoufu", name: "香煎豆腐", emoji: "🧈", tag: "素", cat: "豆腐蛋", img: "",
    main: ["老豆腐 1块"],
    seasoning: ["生抽", "蚝油", "蒜", "辣椒粉", "小葱"] },

  { id: "pidandoufu", name: "皮蛋豆腐", emoji: "🥚", tag: "素", cat: "豆腐蛋", img: "",
    main: ["嫩豆腐 1块", "皮蛋 2个"],
    seasoning: ["生抽", "香油", "醋", "糖", "蒜", "小葱"] },

  { id: "xianhuangdoufu", name: "咸蛋黄豆腐", emoji: "🥚", tag: "素", cat: "豆腐蛋", img: "",
    main: ["嫩豆腐 1块", "咸蛋黄 3个"],
    seasoning: ["盐", "淀粉", "小葱"] },

  { id: "fanqiechaodan", name: "番茄炒蛋", emoji: "🍅", tag: "素", cat: "豆腐蛋", img: "",
    main: ["番茄 2个", "鸡蛋 3个"],
    seasoning: ["糖", "盐", "小葱"] },

  { id: "jiucaichaodan", name: "韭菜炒蛋", emoji: "🥚", tag: "素", cat: "豆腐蛋", img: "",
    main: ["韭菜 200g", "鸡蛋 3个"],
    seasoning: ["盐", "生抽"] },

  { id: "kuguachaodan", name: "苦瓜炒蛋", emoji: "🥒", tag: "素", cat: "豆腐蛋", img: "",
    main: ["苦瓜 1根", "鸡蛋 3个"],
    seasoning: ["盐", "糖"] },

  { id: "roumozhengdan", name: "肉末蒸蛋", emoji: "🥚", tag: "荤", cat: "豆腐蛋", img: "",
    main: ["鸡蛋 3个", "猪肉末 50g"],
    seasoning: ["生抽", "香油", "小葱"] },

  /* ===================== 🥬 蔬菜 ===================== */
  { id: "suanlatudousi", name: "酸辣土豆丝", emoji: "🥔", tag: "素", cat: "蔬菜", img: "",
    main: ["土豆 2个", "干辣椒 2个"],
    seasoning: ["白醋", "盐", "花椒", "蒜"] },

  { id: "suanrongxilanhua", name: "蒜蓉西兰花", emoji: "🥦", tag: "素", cat: "蔬菜", img: "",
    main: ["西兰花 1颗", "大蒜 半头"],
    seasoning: ["盐", "蚝油"] },

  { id: "ganbiansijidou", name: "干煸四季豆", emoji: "🫛", tag: "素", cat: "蔬菜", img: "",
    main: ["四季豆 400g"],
    seasoning: ["干辣椒", "花椒", "蒜", "生抽"] },

  { id: "dixiantian", name: "地三鲜", emoji: "🍆", tag: "素", cat: "蔬菜", img: "",
    main: ["土豆 1个", "茄子 1根", "青椒 1个"],
    seasoning: ["生抽", "糖", "淀粉", "蒜"] },

  { id: "hongshaoqiezi", name: "红烧茄子", emoji: "🍆", tag: "素", cat: "蔬菜", img: "",
    main: ["茄子 2根"],
    seasoning: ["生抽", "老抽", "糖", "蒜", "淀粉"] },

  { id: "culiubacai", name: "醋溜白菜", emoji: "🥬", tag: "素", cat: "蔬菜", img: "",
    main: ["大白菜 半颗"],
    seasoning: ["白醋", "干辣椒", "糖", "生抽"] },

  { id: "haoyoushengcai", name: "蚝油生菜", emoji: "🥬", tag: "素", cat: "蔬菜", img: "",
    main: ["生菜 1颗"],
    seasoning: ["蚝油", "蒜", "糖"] },

  { id: "liangbanhuangua", name: "凉拌黄瓜", emoji: "🥒", tag: "素", cat: "蔬菜", img: "",
    main: ["黄瓜 2根"],
    seasoning: ["蒜", "醋", "糖", "香油", "生抽"] },

  { id: "xiangguqincai", name: "香菇青菜", emoji: "🍄", tag: "素", cat: "蔬菜", img: "",
    main: ["上海青 4棵", "鲜香菇 5朵"],
    seasoning: ["蚝油", "蒜"] },

  { id: "shangtangwawacai", name: "上汤娃娃菜", emoji: "🥬", tag: "素", cat: "蔬菜", img: "",
    main: ["娃娃菜 2颗", "皮蛋 1个"],
    seasoning: ["蒜", "浓汤宝 半块"] },

  { id: "liangbanmuer", name: "凉拌木耳", emoji: "🥗", tag: "素", cat: "蔬菜", img: "",
    main: ["干木耳 一小把", "香菜 2根"],
    seasoning: ["蒜", "醋", "生抽", "糖", "香油"] },

  { id: "huacaichaowuhua", name: "花菜炒五花肉", emoji: "🥦", tag: "荤", cat: "蔬菜", img: "",
    main: ["有机花菜 1颗", "五花肉 150g"],
    seasoning: ["生抽", "蒜", "干辣椒", "小葱"] },

  { id: "suanrongkongxincai", name: "蒜蓉空心菜", emoji: "🥬", tag: "素", cat: "蔬菜", img: "",
    main: ["空心菜 400g", "大蒜 半头"],
    seasoning: ["盐"] },

  { id: "qingchaoshanyao", name: "清炒山药", emoji: "🥔", tag: "素", cat: "蔬菜", img: "",
    main: ["山药 1根", "胡萝卜 半根", "干木耳 一小把"],
    seasoning: ["盐", "糖", "蒜"] },

  { id: "basidigua", name: "拔丝地瓜", emoji: "🍠", tag: "素", cat: "蔬菜", img: "",
    main: ["地瓜 2个"],
    seasoning: ["糖", "白芝麻"] },

  { id: "youmensun", name: "油焖笋", emoji: "🎋", tag: "素", cat: "蔬菜", img: "",
    main: ["春笋 3根"],
    seasoning: ["生抽", "糖", "小葱"] },

  { id: "qingchaohelandou", name: "清炒荷兰豆", emoji: "🫛", tag: "素", cat: "蔬菜", img: "",
    main: ["荷兰豆 300g", "大蒜 半头"],
    seasoning: ["盐"] },

  { id: "hupiqingjiao", name: "虎皮青椒", emoji: "🫑", tag: "素", cat: "蔬菜", img: "",
    main: ["青椒 5个"],
    seasoning: ["生抽", "醋", "糖", "蒜"] },

  { id: "qincaixianggan", name: "芹菜炒香干", emoji: "🥬", tag: "素", cat: "蔬菜", img: "",
    main: ["芹菜 300g", "香干 3块"],
    seasoning: ["生抽", "蒜"] },

  { id: "liangbanxihongshi", name: "凉拌西红柿", emoji: "🍅", tag: "素", cat: "蔬菜", img: "",
    main: ["西红柿 2个"],
    seasoning: ["糖"] },

  { id: "baizhuocaixin", name: "白灼菜心", emoji: "🥬", tag: "素", cat: "蔬菜", img: "",
    main: ["菜心 400g"],
    seasoning: ["生抽", "蚝油", "蒜", "小葱"] },

  { id: "xianhuangnangua", name: "咸蛋黄焗南瓜", emoji: "🎃", tag: "素", cat: "蔬菜", img: "",
    main: ["贝贝南瓜 1个", "咸蛋黄 3个"],
    seasoning: ["盐", "淀粉"] },

  { id: "malaxiangguo", name: "麻辣香锅", emoji: "🌶️", tag: "荤", cat: "蔬菜", img: "",
    main: ["鲜虾 200g", "午餐肉 半盒", "土豆 1个", "藕 半节", "西兰花 半颗", "干木耳 一小把"],
    seasoning: ["麻辣香锅底料 1包", "蒜", "姜"] },

  /* ===================== 🍲 汤品 ===================== */
  { id: "fanqiedanhuatang", name: "番茄蛋花汤", emoji: "🍅", tag: "汤", cat: "汤品", img: "",
    main: ["番茄 2个", "鸡蛋 2个"],
    seasoning: ["盐", "香油", "小葱"] },

  { id: "zicaidanhuatang", name: "紫菜蛋花汤", emoji: "🌊", tag: "汤", cat: "汤品", img: "",
    main: ["紫菜 1小块", "虾皮 1小把", "鸡蛋 1个"],
    seasoning: ["盐", "香油", "白胡椒粉"] },

  { id: "sualatang", name: "酸辣汤", emoji: "🍲", tag: "汤", cat: "汤品", img: "",
    main: ["嫩豆腐 半块", "猪里脊 50g", "干木耳 一小把", "鸡蛋 1个", "胡萝卜 半根"],
    seasoning: ["白胡椒粉", "醋", "生抽", "淀粉", "香油"] },

  { id: "sigudantang", name: "丝瓜蛋汤", emoji: "🥒", tag: "汤", cat: "汤品", img: "",
    main: ["丝瓜 1根", "鸡蛋 2个"],
    seasoning: ["盐", "香油", "小葱"] },

  { id: "jungudoufutang", name: "菌菇豆腐汤", emoji: "🍄", tag: "汤", cat: "汤品", img: "",
    main: ["嫩豆腐 半块", "金针菇 1把", "香菇 3朵", "鸡蛋 1个"],
    seasoning: ["盐", "白胡椒粉", "香油", "小葱"] },

  { id: "bingtangxueli", name: "冰糖雪梨", emoji: "🍐", tag: "汤", cat: "汤品", img: "",
    main: ["雪梨 2个", "红枣 4颗", "枸杞 一小把"],
    seasoning: ["冰糖"] },

  { id: "nanguageng", name: "南瓜羹", emoji: "🎃", tag: "汤", cat: "汤品", img: "",
    main: ["南瓜 300g", "牛奶 1盒"],
    seasoning: ["冰糖"] },

  /* ---- 下面这些汤的主料是肉类，所以分类归在对应食材里 ---- */
  { id: "dongguapaigutang", name: "冬瓜排骨汤", emoji: "🍲", tag: "汤", cat: "猪牛羊", img: "",
    main: ["排骨 400g", "冬瓜 300g"],
    seasoning: ["料酒", "姜", "盐", "白胡椒粉"] },

  { id: "yumipaigutang", name: "玉米排骨汤", emoji: "🌽", tag: "汤", cat: "猪牛羊", img: "",
    main: ["排骨 400g", "甜玉米 1根", "胡萝卜 1根"],
    seasoning: ["料酒", "姜", "盐"] },

  { id: "lianoupaigutang", name: "莲藕排骨汤", emoji: "🍲", tag: "汤", cat: "猪牛羊", img: "",
    main: ["排骨 400g", "莲藕 1节"],
    seasoning: ["料酒", "姜", "盐", "小葱"] },

  { id: "jiyudoufutang", name: "鲫鱼豆腐汤", emoji: "🐟", tag: "汤", cat: "鱼虾", img: "",
    main: ["鲫鱼 1条", "嫩豆腐 半块"],
    seasoning: ["姜", "料酒", "盐", "白胡椒粉", "小葱"] },

  { id: "luosongtang", name: "罗宋汤", emoji: "🥣", tag: "汤", cat: "猪牛羊", img: "",
    main: ["牛腩 300g", "土豆 1个", "番茄 2个", "洋葱 半个", "卷心菜 3片"],
    seasoning: ["番茄酱", "盐", "糖"] },

  { id: "yinerlianzigeng", name: "银耳莲子羹", emoji: "🍮", tag: "汤", cat: "汤品", img: "",
    main: ["银耳 半朵", "莲子 一小把", "红枣 6颗"],
    seasoning: ["冰糖"] },

  { id: "lvdoutang", name: "绿豆汤", emoji: "🫘", tag: "汤", cat: "汤品", img: "",
    main: ["绿豆 100g"],
    seasoning: ["冰糖"] },
];


/* =====================================================================
   🧂 家中常备调料（买菜页底部"出门前盘点"区会用到）
   哪样家里没有了，就在买菜页把它勾上，一样能提醒你补货
   ===================================================================== */
const BASE_SEASONINGS = [
  "盐", "糖", "冰糖", "生抽", "老抽", "蚝油", "料酒",
  "醋", "白醋", "香油", "白胡椒粉", "淀粉",
  "豆瓣酱", "番茄酱", "甜面酱", "蒸鱼豉油", "咖喱块", "浓汤宝", "麻辣香锅底料",
  "大蒜", "生姜", "小葱", "大葱", "香菜", "干辣椒", "花椒", "八角", "桂皮", "香叶",
];
