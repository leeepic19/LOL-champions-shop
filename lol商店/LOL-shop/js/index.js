// 添加分路筛选功能
const laneFilter = document.getElementById('lane-filter');

// 英雄数据添加分路信息
const heroList = [
    { name: "安妮", image: "image/heroes/安妮.png", price: 6300, title: "黑暗之女", lane: "mid" },
    { name: "费德提克", image: "image/heroes/费德提克.png", price: 6300, title: "远古恐惧", lane: "jungle" },
    { name: "奥拉夫", image: "image/heroes/奥拉夫.png", price: 450, title: "狂战士", lane: "jungle" },
    { name: "赵信", image: "image/heroes/赵信.png", price: 4800, title: "德邦总管", lane: "jungle" },
    { name: "厄加特", image: "image/heroes/厄加特.png", price: 6300, title: "无畏战车", lane: "top" },
    { name: "凯尔", image: "image/heroes/凯尔.png", price: 3150, title: "正义天使", lane: "top" },
    { name: "阿利斯塔", image: "image/heroes/阿利斯塔.png", price: 1350, title: "牛头酋长", lane: "support" },
    { name: "塞恩", image: "image/heroes/塞恩.png", price: 4800, title: "亡灵战神", lane: "top" },
    { name: "希维尔", image: "image/heroes/希维尔.png", price: 3150, title: "战争女神", lane: "adc" },
    { name: "索拉卡", image: "image/heroes/索拉卡.png", price: 450, title: "众星之子", lane: "support" },
    { name: "沃里克", image: "image/heroes/沃里克.png", price: 450, title: "祖安怒兽", lane: "jungle" },
    { name: "努努和威朗普", image: "image/heroes/努努和威朗普.png", price: 450, title: "雪原双子", lane: "jungle" },
    { name: "厄运小姐", image: "image/heroes/厄运小姐.png", price: 6300, title: "赏金猎人", lane: "adc" },
    // 新增英雄
    { name: "卢锡安", image: "image/heroes/卢锡安.png", price: 6300, title: "圣枪游侠", lane: "adc" },
    { name: "丽桑卓", image: "image/heroes/丽桑卓.png", price: 6300, title: "冰霜女巫", lane: "mid" },
    { name: "扎克", image: "image/heroes/扎克.png", price: 4800, title: "生化魔人", lane: "jungle" },
    { name: "奎因", image: "image/heroes/奎因.png", price: 6300, title: "德玛西亚之翼", lane: "top" },
    { name: "金克斯", image: "image/heroes/金克斯.png", price: 6300, title: "暴走萝莉", lane: "adc" },
    { name: "维克兹", image: "image/heroes/维克兹.png", price: 6300, title: "虚空之眼", lane: "mid" },
    { name: "布隆", image: "image/heroes/布隆.png", price: 6300, title: "弗雷尔卓德之心", lane: "support" },
    { name: "卡莉斯塔", image: "image/heroes/卡莉斯塔.png", price: 6300, title: "复仇之矛", lane: "adc" },
    { name: "辛德拉", image: "image/heroes/辛德拉.png", price: 6300, title: "暗黑元首", lane: "mid" },
    { name: "阿狸", image: "image/heroes/阿狸.png", price: 4800, title: "九尾妖狐", lane: "mid" },
    { name: "维鲁斯", image: "image/heroes/维鲁斯.png", price: 4800, title: "惩戒之箭", lane: "adc" },
    { name: "璐璐", image: "image/heroes/璐璐.png", price: 6300, title: "仙灵女巫", lane: "support" },
    { name: "艾瑞利亚", image: "image/heroes/艾瑞利亚.png", price: 4800, title: "刀锋舞者", lane: "top" }
];

// 添加英雄技能信息
const heroSkills = {
    "安妮": ["碎裂之火", "焚烧", "熔岩护盾", "提伯斯之怒"],
    "费德提克": ["恐惧", "生命吸取", "黑暗之风", "群鸦风暴"],
    "奥拉夫": ["逆流投掷", "残暴打击", "鲁莽挥击", "诸神黄昏"],
    "赵信": ["三重爪击", "风斩电刺", "无畏冲锋", "新月护卫"],
    "厄加特": ["腐蚀电荷", "恐惧之触", "鄙弃", "超越死亡的恐惧"],
    "凯尔": ["耀焰冲击", "星火符刃", "星界恩典", "神圣审判"],
    "阿利斯塔": ["践踏", "野蛮冲撞", "胜利怒吼", "坚定意志"],
    "塞恩": ["残虐猛击", "灵魂熔炉", "杀手怒吼", "亡者行军"],
    "希维尔": ["回旋之刃", "弹射", "狩猎", "狩猎律动"],
    "索拉卡": ["星体恩典", "星之灌注", "星体结界", "祈愿"],
    "沃里克": ["野兽之口", "鲜血追踪", "原始咆哮", "无尽束缚"],
    "努努和威朗普": ["吞噬", "大雪球！", "雪之爆破", "绝对零度"],
    "厄运小姐": ["一箭双雕", "弹幕时间", "枪林弹雨", "大杀特杀"],
    // 新增英雄技能
    "卢锡安": ["透体圣光", "热诚烈弹", "冷酷追击", "圣枪洗礼"],
    "丽桑卓": ["寒冰碎片", "冰霜之环", "冰川之径", "绝对零度"],
    "扎克": ["伸缩打击", "不稳定物质", "弹跳冲击", "生化狂暴"],
    "奎因": ["炫目攻势", "侵袭", "高空奇袭", "鹰击长空"],
    "金克斯": ["炮火轰鸣", "震荡电磁波", "嚣张引信", "超究极死神飞弹"],
    "维克兹": ["等离子裂变", "虚空裂隙", "能量脉冲", "生命形态瓦解射线"],
    "布隆": ["寒冬之咬", "挺身而出", "坚不可摧", "冰川裂隙"],
    "卡莉斯塔": ["穿刺", "魂引之矛", "撕裂", "命运的召唤"],
    "辛德拉": ["黑暗法球", "驱使念力", "散射暗影", "能量倾泻"],
    "阿狸": ["欺诈宝珠", "妖异狐火", "魅惑妖术", "灵魄突袭"],
    "维鲁斯": ["穿刺之箭", "枯萎之箭", "连锁腐蚀", "恶魔降临"],
    "璐璐": ["闪耀长杖", "奇思妙想", "帮忙，皮克斯！", "狂野生长"],
    "艾瑞利亚": ["利刃冲击", "距破之舞", "比翼双刃", "先锋之刃"]
};

// DOM元素
const searchInput = document.querySelector('.form input');
const searchButton = document.querySelector('.form button');
let resultsContainer;

// 搜索功能初始化
function initSearch() {
    resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    document.querySelector('.header .wrap').appendChild(resultsContainer);
    
    // 事件监听
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('input', handleSearch);
    document.addEventListener('click', closeResults);
}

// 处理搜索
function handleSearch() {
    const keyword = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = '';

    // 防抖处理（300ms）
    clearTimeout(window.searchTimeout);
    window.searchTimeout = setTimeout(() => {
        if (!keyword) return;

        const results = heroList.filter(hero => 
            hero.name.toLowerCase().includes(keyword)
        );

        if (results.length > 0) {
            // 自动跳转到第一个匹配项
            scrollToHero(results[0].name);
            
            // 如果只需要精确匹配跳转
            // const exactMatch = results.find(h => h.name.toLowerCase() === keyword);
            // if (exactMatch) scrollToHero(exactMatch.name);
            
            renderResults(results);
            resultsContainer.classList.add('visible');
        } else {
            showMessage('没有找到相关英雄');
        }
    }, 300);
}

// 拼音匹配函数
function pinyinMatch(name, keyword) {
    // 需要引入拼音库，这里简化实现
    const pinyin = name.split('').map(char => {
        return window.pinyinlite.convertToPinyin(char)[0]?.[0] || '';
    }).join('');
    return pinyin.includes(keyword);
}

// 渲染结果
function renderResults(results) {
    const ul = document.createElement('ul');
    ul.className = 'hero-list';
    
    results.forEach(hero => {
        const li = document.createElement('li');
        li.textContent = hero.name;
        li.onclick = () => {
            searchInput.value = hero.name;
            scrollToHero(hero.name);
            resultsContainer.classList.remove('visible');
        };
        ul.appendChild(li);
    });
    
    resultsContainer.appendChild(ul);
}

// 滚动到英雄位置
function scrollToHero(name) {
    const target = document.querySelector(`[data-hero="${name}"]`);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        target.style.animation = 'highlight 1s';
        setTimeout(() => target.style.animation = '', 1000);
    }
}

// 显示消息
function showMessage(msg) {
    resultsContainer.innerHTML = `<div class="search-message">${msg}</div>`;
    resultsContainer.classList.add('visible');
}

// 关闭搜索结果
function closeResults(e) {
    if (!e.target.closest('.search')) {
        resultsContainer.classList.remove('visible');
    }
}

// 初始化渲染
document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    renderHeroGrid();
});

// 根据分路筛选英雄
laneFilter.addEventListener('change', () => {
    const selectedLane = laneFilter.value;
    const filteredHeroes = selectedLane === 'all' ? heroList : heroList.filter(hero => hero.lane === selectedLane);
    renderHeroGrid(filteredHeroes);
});

// 修改渲染英雄网格函数，支持动态传入英雄列表
function renderHeroGrid(heroes = heroList) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.style.display = 'grid'; // 确保主容器为网格布局
    main.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, 1fr))';
    main.style.gap = '25px';
    main.style.padding = '40px';

    heroes.forEach(hero => {
        const card = createHeroCard(hero);
        main.appendChild(card);
    });
}

// 购物车功能实现
let cart = JSON.parse(localStorage.getItem('lolCart')) || [];

// 初始化购物车
function initCart() {
    updateCartUI();
    
    // 购物车图标点击事件
    document.querySelector('.cart-icon').addEventListener('click', () => {
        document.querySelector('.cart-content').classList.toggle('show');
    });
    
    // 清空购物车
    document.querySelector('.clear-cart').addEventListener('click', clearCart);
}

// 修改后的添加购物车函数
function addToCart(hero) {
    const existingItem = cart.find(item => item.name === hero.name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: hero.name,
            price: hero.price,
            quantity: 1,
            image: hero.image  // 添加图片信息
        });
    }
    
    // 添加视觉反馈
    document.querySelector('.cart-icon').classList.add('added-bounce');
    setTimeout(() => {
        document.querySelector('.cart-icon').classList.remove('added-bounce');
    }, 500);
    
    saveCart();
    updateCartUI();
}
// 删除商品
function removeFromCart(heroName) {
    cart = cart.filter(item => item.name !== heroName);
    saveCart();
    updateCartUI();
}

// 清空购物车
function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

// 保存到本地存储
function saveCart() {
    localStorage.setItem('lolCart', JSON.stringify(cart));
}

// 更新购物车UI
function updateCartUI() {
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.cart-total span');
    
    // 更新商品列表
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <div>
                <span>${item.quantity} × ${item.price.toLocaleString()}</span>
                <button onclick="removeFromCart('${item.name}')">×</button>
            </div>
        </div>
    `).join('');
    
    // 更新总数和总价
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = total.toLocaleString();
}

// 修改英雄详情页函数，添加“加入购物车”按钮
function createHeroDetailPage(hero) {
    const detailPage = document.createElement('div');
    detailPage.className = 'hero-detail';
    detailPage.innerHTML = `
        <div class="detail-header">
            <button class="back-button">返回</button>
            <h2>${hero.name} - ${hero.title}</h2>
        </div>
        <div class="detail-body">
            <img src="${hero.image}" alt="${hero.name}" onerror="this.src='image/heroes/default.png'">
            <div class="hero-skills">
                <h3>技能介绍</h3>
                <ul>
                    ${heroSkills[hero.name].map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <button class="add-to-cart-button">加入购物车</button>
        </div>
    `;

    // 返回按钮事件
    detailPage.querySelector('.back-button').addEventListener('click', () => {
        document.body.removeChild(detailPage);
        document.querySelector('main').style.display = 'grid';
    });

    // 加入购物车按钮事件
    detailPage.querySelector('.add-to-cart-button').addEventListener('click', () => {
        addToCart(hero);
        alert(`${hero.name} 已加入购物车！`);
    });

    return detailPage;
}

// 修改英雄卡片点击事件，跳转到详情页
function createHeroCard(hero) {
    const card = document.createElement('article');
    card.className = 'hero-card';
    card.dataset.hero = hero.name;
    card.innerHTML = `
        <div class="card-image">
            <img src="${hero.image}" alt="${hero.name}" 
                 onerror="this.src='image/heroes/default.png'">
            <div class="price-tag">${hero.price.toLocaleString()}</div>
        </div>
        <div class="card-body">
            <h3>${hero.name}</h3>
            <p>${hero.title}</p>
        </div>
    `;

    // 点击卡片显示详情页
    card.addEventListener('click', () => {
        const detailPage = createHeroDetailPage(hero);
        document.body.appendChild(detailPage);
        document.querySelector('main').style.display = 'none';
    });

    return card;
}
// 初始化函数
document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    renderHeroGrid();
    initCart();  // 确保初始化购物车
    
    // 添加全局点击关闭购物车
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.cart-wrapper')) {
            document.querySelector('.cart-content').classList.remove('show');
        }
    });
});
