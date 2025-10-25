// PEL生态数据大屏 - 通用JavaScript功能模块

// 检查登录状态
function checkLoginStatus() {
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// 页面配置
const PAGE_CONFIG = {
    'alliance-overview': {
        name: '联盟生态',
        icon: 'fas fa-leaf',
        children: [
            {
                name: '联盟生态大盘',
                url: 'alliance-dashboard.html',
                icon: 'fas fa-tachometer-alt'
            },
            {
                name: '联盟生态深度分析',
                icon: 'fas fa-chart-area',
                children: [
                    {
                        name: '分析报告',
                        url: 'analysis-report.html',
                        icon: 'fas fa-file-alt'
                    },
                    {
                        name: '细分指标',
                        url: 'sub-indicators.html',
                        icon: 'fas fa-list-ul'
                    }
                ]
            }
        ]
    },
    'club-analysis': {
        name: '俱乐部生态',
        icon: 'fas fa-users',
        children: [
            {
                name: '俱乐部总览',
                url: 'club-overview.html',
                icon: 'fas fa-table'
            },
            {
                name: '俱乐部个体评估',
                icon: 'fas fa-user-check',
                children: [
                    {
                        name: '组织架构',
                        url: 'club-organization.html',
                        icon: 'fas fa-sitemap'
                    },
                    {
                        name: '数据看板',
                        url: 'club-dashboard.html',
                        icon: 'fas fa-chart-bar'
                    },
                    {
                        name: '细分指标',
                        url: 'club-indicators.html',
                        icon: 'fas fa-list-ul'
                    }
                ]
            }
        ]
    },
    'player-management': {
        name: '选手管理',
        icon: 'fas fa-user-friends'
    },
    'match-analysis': {
        name: '赛事分析',
        icon: 'fas fa-trophy'
    },
    'financial-report': {
        name: '财务报表',
        icon: 'fas fa-chart-bar'
    },
    'market-analysis': {
        name: '市场分析',
        icon: 'fas fa-chart-line'
    },
    'brand-value': {
        name: '品牌价值',
        icon: 'fas fa-gem'
    },
    'data-import': {
        name: '数据导入',
        icon: 'fas fa-upload'
    },
    'import-log': {
        name: '导入日志',
        icon: 'fas fa-list-alt'
    },
    'user-management': {
        name: '账号管理',
        icon: 'fas fa-user-cog'
    },
    'system-config': {
        name: '系统配置',
        icon: 'fas fa-cogs'
    },
    'club-detail': {
        name: '俱乐部详情',
        icon: 'fas fa-info-circle'
    }
};

// 允许展示的顶层页面键（统一导航白名单）
const ALLOWED_PAGE_KEYS = [
    'alliance-overview',
    'club-analysis',
    'financial-report',
    'market-analysis',
    'data-import',
    'import-log',
    'user-management',
    'system-config',
    'club-detail'
];

// 按分组层级重构侧栏，支持多级下拉
const SIDEBAR_SECTIONS = [
  {
    title: '生态分析',
    items: [
      {
         name: '联盟生态',
         icon: 'fa fa-globe',
         children: [
           { name: '联盟生态大盘', url: 'alliance-overview.html', icon: 'fa fa-dashboard' },
           {
             name: '联盟生态深度分析',
             icon: 'fa fa-bar-chart',
             children: [
               { name: '数据看板', url: 'alliance-dashboard.html', icon: 'fa fa-line-chart' },
               { name: '细分指标', url: 'alliance-indicators.html', icon: 'fa fa-list-ul' }
             ]
           }
         ]
       },
      {
         name: '俱乐部生态',
          icon: 'fa fa-users',
          children: [
            { name: '俱乐部总览', url: 'club-overview.html', icon: 'fa fa-table' },
            {
              name: '俱乐部个体评估',
              icon: 'fa fa-building',
              children: [
                { name: '组织架构', url: 'club-organization.html', icon: 'fa fa-sitemap' },
                { name: '数据看板', url: 'club-dashboard.html', icon: 'fa fa-chart-bar' },
                { name: '细分指标', url: 'club-indicators.html', icon: 'fa fa-list-ul' }
              ]
            }
          ]
        },
      {
        name: '选手管理',
        icon: 'fa fa-user-circle-o',
        children: [
          {
            name: '选手管理',
            icon: 'fa fa-users',
            children: [
              { name: '大盘数据', url: 'player-overview.html', icon: 'fa fa-dashboard' },
              { name: '选手数据', url: 'player-trading.html', icon: 'fa fa-table' }
            ]
          },
          {
            name: '选手详情',
            icon: 'fa fa-id-card-o',
            children: [
              { name: '选手履历', url: 'player-profile.html', icon: 'fa fa-file-text-o' },
              { name: '流量数据', url: 'player-traffic.html', icon: 'fa fa-line-chart' }
            ]
          }
        ]
      }
    ]
  },

  {
    title: '系统设置',
    items: [
      { name: '系统配置', url: 'system-config.html', icon: 'fa fa-cog' },
      { name: '账号管理', url: 'user-management.html', icon: 'fa fa-users' }
    ]
  },
  {
    title: '数据管理',
    items: [
      { name: '导入日志', url: 'import-log.html', icon: 'fa fa-upload' },
      { name: '数据导入', url: 'data-import.html', icon: 'fa fa-database' }
    ]
  }
];

// DOM工具函数
const DOM = {
    // 获取元素
    get: (selector) => document.querySelector(selector),
    getAll: (selector) => document.querySelectorAll(selector),
    
    // 创建元素
    create: (tag, className = '', innerHTML = '') => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    },
    
    // 添加事件监听
    on: (element, event, handler) => {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) {
            element.addEventListener(event, handler);
        }
    },
    
    // 显示/隐藏元素
    show: (element) => {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) element.style.display = 'block';
    },
    
    hide: (element) => {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) element.style.display = 'none';
    },
    
    // 切换类名
    toggleClass: (element, className) => {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }
        if (element) element.classList.toggle(className);
    }
};

// 导航管理器
const Navigation = {
    // 初始化导航
    init() {
        this.createSidebar();
        this.bindEvents();
        this.setActivePage();
    },
    
    // 创建侧边栏
    createSidebar() {
        let sidebar = DOM.get('.sidebar');
        if (!sidebar) {
            // 页面缺失侧边栏容器时，自动创建并插入
            const container = DOM.get('.container') || DOM.get('.app-container') || document.body;
            sidebar = document.createElement('aside');
            sidebar.className = 'sidebar';
            if (container.firstElementChild) {
                container.insertBefore(sidebar, container.firstElementChild);
            } else {
                container.appendChild(sidebar);
            }
        }
        const sidebarHTML = this.generateSidebar();
        sidebar.innerHTML = sidebarHTML;
    },
    
    // 生成侧边栏HTML（支持多级下拉结构）
    generateSidebar() {
        const renderItems = (items = [], depth = 0) => items.map(item => {
            if (item.children && item.children.length) {
                const header = item.url
                    ? `<a href="${item.url}" class="${depth === 0 ? 'sidebar-item' : 'sidebar-submenu-item'} sidebar-dropdown-link"><i class="${item.icon || 'fa fa-folder'}"></i><span>${item.name}</span></a>`
                    : `<span style="display:flex;align-items:center;gap:12px;"><i class="${item.icon || 'fa fa-folder'}"></i>${item.name}</span>`;
                return `
                    <div class="sidebar-dropdown">
                        <div class="sidebar-dropdown-toggle">
                            ${header}
                        </div>
                        <div class="sidebar-submenu">
                            ${renderItems(item.children, depth + 1)}
                        </div>
                    </div>
                `;
            }
            const cls = depth === 0 ? 'sidebar-item' : 'sidebar-submenu-item';
            return `
                <a href="${item.url}" class="${cls}">
                    <i class="${item.icon}"></i>
                    <span>${item.name}</span>
                </a>
            `;
        }).join('');

        const sidebarHTML = `
            <div class="sidebar-content">
                ${SIDEBAR_SECTIONS.map(section => `
                    <div class="sidebar-section">
                        <div class="sidebar-section-title">${section.title}</div>
                        <div class="sidebar-menu">
                            ${renderItems(section.items, 0)}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        return sidebarHTML;
    },
    
    // 生成导航项
    generateNavItems() {
        let navHTML = '';
        
        const entries = Object.entries(PAGE_CONFIG).filter(([key]) => ALLOWED_PAGE_KEYS.includes(key));
        for (const [key, config] of entries) {
            if (config.children) {
                // 有子菜单的项目
                navHTML += `
                    <li class="nav-item has-children">
                        <a href="#" class="nav-link" data-toggle="submenu">
                            <i class="${config.icon}"></i>
                            <span>${config.name}</span>
                            <i class="fas fa-chevron-down submenu-arrow"></i>
                        </a>
                        <ul class="submenu">
                            ${this.generateSubMenuItems(config.children)}
                        </ul>
                    </li>
                `;
            } else {
                // 普通菜单项
                const url = config.url || `${key}.html`;
                navHTML += `
                    <li class="nav-item">
                        <a href="${url}" class="nav-link">
                            <i class="${config.icon}"></i>
                            <span>${config.name}</span>
                        </a>
                    </li>
                `;
            }
        }
        
        return navHTML;
    },
    
    // 生成子菜单项
    generateSubMenuItems(children) {
        let subMenuHTML = '';
        
        children.forEach(child => {
            if (child.children) {
                // 三级菜单
                subMenuHTML += `
                    <li class="submenu-item has-children">
                        <a href="#" class="submenu-link" data-toggle="submenu">
                            <i class="${child.icon}"></i>
                            <span>${child.name}</span>
                            <i class="fas fa-chevron-down submenu-arrow"></i>
                        </a>
                        <ul class="submenu level-3">
                            ${this.generateSubMenuItems(child.children)}
                        </ul>
                    </li>
                `;
            } else {
                // 二级菜单项
                subMenuHTML += `
                    <li class="submenu-item">
                        <a href="${child.url}" class="submenu-link">
                            <i class="${child.icon}"></i>
                            <span>${child.name}</span>
                        </a>
                    </li>
                `;
            }
        });
        
        return subMenuHTML;
    },
    
    // 绑定事件
    bindEvents() {
        // 旧版：data-toggle="submenu" 切换（保留兼容）
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-toggle="submenu"]')) {
                e.preventDefault();
                const link = e.target.closest('[data-toggle="submenu"]');
                const parentItem = link.closest('.nav-item, .submenu-item, .sidebar-dropdown');
                const submenu = parentItem.querySelector('.submenu, .sidebar-submenu');
                
                if (submenu) {
                    // 切换当前子菜单
                    parentItem.classList.toggle('active');
                    // 同级关闭
                    const siblings = parentItem.parentElement ? parentItem.parentElement.children : [];
                    Array.from(siblings).forEach(sibling => {
                        if (sibling !== parentItem && sibling.classList.contains('has-children') || sibling.classList.contains('sidebar-dropdown')) {
                            sibling.classList.remove('active');
                        }
                    });
                }
            }
        });

        // 新版：.sidebar-dropdown-toggle 切换（修复偶发不完全展开）
        document.addEventListener('click', (e) => {
            const toggle = e.target.closest('.sidebar-dropdown-toggle');
            if (!toggle) return;
            // 若点击的是标题中的跳转链接，则不处理折叠
            if (e.target.closest('.sidebar-dropdown-link')) return;
            e.preventDefault();
            const dropdown = toggle.closest('.sidebar-dropdown');
            if (!dropdown) return;
            const submenu = dropdown.querySelector('.sidebar-submenu');
            const isActive = dropdown.classList.contains('active');

            // 关闭同级
            const parent = dropdown.parentElement;
            if (parent) {
                Array.from(parent.children).forEach(sib => {
                    if (sib !== dropdown && sib.classList && sib.classList.contains('sidebar-dropdown')) {
                        sib.classList.remove('active');
                        const sibSub = sib.querySelector('.sidebar-submenu');
                        if (sibSub) {
                            // 若之前为 "none"，先设为当前高度再收起，保证动画
                            const h = sibSub.scrollHeight;
                            sibSub.style.maxHeight = h + 'px';
                            // 强制重绘以应用高度
                            sibSub.offsetHeight;
                            sibSub.style.maxHeight = '0px';
                        }
                    }
                });
            }

            // 切换当前
            if (isActive) {
                dropdown.classList.remove('active');
                if (submenu) {
                    // 从 "none" 回到具体高度再收起，避免不动画与卡顿
                    const h = submenu.scrollHeight;
                    submenu.style.maxHeight = h + 'px';
                    submenu.offsetHeight; // 强制重绘
                    submenu.style.maxHeight = '0px';
                }
            } else {
                dropdown.classList.add('active');
                if (submenu) {
                    // 先设置为内容高度，完成过渡后置为 "none"，确保后续内层展开不裁剪
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                    const onEnd = (ev) => {
                        if (ev.target !== submenu) return;
                        submenu.style.maxHeight = 'none';
                        submenu.removeEventListener('transitionend', onEnd);
                    };
                    submenu.addEventListener('transitionend', onEnd);
                }
            }
        });
        
        // 移动端菜单切换
        DOM.on('.menu-toggle', 'click', () => {
            DOM.toggleClass('.sidebar', 'open');
        });
        
        // 设置当前页面高亮
        this.setActiveNavItem();
    },
    
    // 设置当前页面导航高亮（支持子菜单项）
    setActiveNavItem() {
        const currentPage = window.location.pathname.split('/').pop();
        const items = document.querySelectorAll('.sidebar-item, .sidebar-submenu-item');
        items.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(currentPage)) {
                link.classList.add('active');
                // 展开所有上层下拉
                let dropdown = link.closest('.sidebar-dropdown');
                while (dropdown) {
                    dropdown.classList.add('active');
                    dropdown = dropdown.parentElement ? dropdown.parentElement.closest('.sidebar-dropdown') : null;
                }
            }
        });
    },
    
    // 设置当前页面
    setActivePage() {
        const currentPath = window.location.pathname;
        const currentFile = currentPath.split('/').pop();
        
        // 移除所有活动状态
        const allItems = DOM.getAll('.sidebar-item');
        allItems.forEach(item => item.classList.remove('active'));
        
        // 设置当前页面活动状态
        const currentItem = DOM.get(`[href="${currentFile}"]`);
        if (currentItem) {
            currentItem.classList.add('active');
        }
    },
    
    // 设置活动菜单项（支持子菜单项与展开父级）
    setActiveItem(item) {
        // 移除所有活动状态
        const allItems = document.querySelectorAll('.sidebar-item, .sidebar-submenu-item');
        allItems.forEach(i => i.classList.remove('active'));
        
        // 设置当前项活动状态
        item.classList.add('active');
        // 展开父级下拉
        let dropdown = item.closest('.sidebar-dropdown');
        while (dropdown) {
            dropdown.classList.add('active');
            dropdown = dropdown.parentElement ? dropdown.parentElement.closest('.sidebar-dropdown') : null;
        }
    }
};

// 数据管理器
const DataManager = {
    // 模拟数据
    mockData: {
        importLogs: [
            {
                id: 1,
                importTime: '2023-06-15 14:30:25',
                fileName: '俱乐部基础数据_2025夏季赛.xlsx',
                dataType: '俱乐部基础数据',
                status: 'success',
                records: 24,
                statusText: '成功'
            },
            {
                id: 2,
                importTime: '2023-06-10 09:15:42',
                fileName: '选手数据_2025夏季赛.xlsx',
                dataType: '选手数据',
                status: 'success',
                records: 256,
                statusText: '成功'
            },
            {
                id: 3,
                importTime: '2023-06-05 16:42:18',
                fileName: '俱乐部财务数据_2025夏季赛.csv',
                dataType: '俱乐部财务数据',
                status: 'warning',
                records: '19/24',
                statusText: '部分失败'
            },
            {
                id: 4,
                importTime: '2023-06-01 11:23:50',
                fileName: '赛事成绩数据_2025夏季赛.xlsx',
                dataType: '赛事成绩数据',
                status: 'success',
                records: 128,
                statusText: '成功'
            }
        ],
        
        clubs: [
            { id: 1, name: '4AM战队', logo: '4AM', health: 92.6, value: 2180 },
            { id: 2, name: 'NV-XQF', logo: 'NV', health: 88.3, value: 1950 },
            { id: 3, name: 'TC战队', logo: 'TC', health: 85.7, value: 1720 },
            { id: 4, name: 'AG战队', logo: 'AG', health: 91.2, value: 2050 }
        ]
    },
    
    // 获取导入日志数据
    getImportLogs() {
        return this.mockData.importLogs;
    },
    
    // 获取俱乐部数据
    getClubs() {
        return this.mockData.clubs;
    },
    
    // 格式化状态
    formatStatus(status) {
        const statusMap = {
            'success': { class: 'status-success', text: '成功' },
            'warning': { class: 'status-warning', text: '部分失败' },
            'error': { class: 'status-danger', text: '失败' }
        };
        return statusMap[status] || statusMap['error'];
    }
};

// 表格管理器
const TableManager = {
    // 创建表格
    createTable(containerId, data, columns) {
        const container = DOM.get(containerId);
        if (!container || !data || !columns) return;
        
        let tableHTML = `
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            ${columns.map(col => `<th>${col.title}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(row => `
                            <tr>
                                ${columns.map(col => `<td>${this.formatCell(row[col.key], col.type, row)}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        container.innerHTML = tableHTML;
    },
    
    // 格式化单元格
    formatCell(value, type, row) {
        switch (type) {
            case 'status':
                const statusInfo = DataManager.formatStatus(row.status);
                return `<span class="status-badge ${statusInfo.class}">${statusInfo.text}</span>`;
            case 'actions':
                return `
                    <div style="display: flex; gap: 8px;">
                        <button class="btn-icon" title="查看详情">
                            <i class="fa fa-eye"></i>
                        </button>
                        <button class="btn-icon" title="下载">
                            <i class="fa fa-download"></i>
                        </button>
                        ${row.status === 'warning' ? '<button class="btn-icon" title="重试"><i class="fa fa-refresh"></i></button>' : ''}
                    </div>
                `;
            default:
                return value;
        }
    }
};

// 工具函数
const Utils = {
    // 格式化日期
    formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
        if (!date) return '';
        const d = new Date(date);
        return d.toLocaleString('zh-CN');
    },
    
    // 格式化数字
    formatNumber(num, decimals = 0) {
        if (typeof num !== 'number') return num;
        return num.toLocaleString('zh-CN', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    },
    
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // 节流函数
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

/* duplicate PageInit removed */

// 单页路由器：拦截侧栏点击，使用 iframe 无刷新加载页面
const AppRouter = {
  init() {
    this.frame = this.ensureFrame();
    this.bindSidebarClicks();
    // 初始加载当前路径对应页面
    const current = window.location.pathname.split('/').pop() || 'index.html';
    this.navigate(current, { push: false });
    // 监听历史导航
    window.addEventListener('popstate', () => {
      const url = window.location.pathname.split('/').pop() || 'index.html';
      this.navigate(url, { push: false });
    });
  },
  ensureFrame() {
    // 优先使用现有 .content 容器，没有则创建
    let content = document.querySelector('.content');
    if (!content) {
      let main = document.querySelector('main.main-content') || document.querySelector('.main-content');
      if (!main) {
        main = document.createElement('main');
        main.className = 'main-content';
        (document.querySelector('.container') || document.body).appendChild(main);
      }
      content = main.querySelector('.content');
      if (!content) {
        content = document.createElement('div');
        content.className = 'content';
        main.appendChild(content);
      }
    }
    // 清空内容区，插入 iframe
    content.innerHTML = '';
    let frame = content.querySelector('iframe.content-frame');
    if (!frame) {
      frame = document.createElement('iframe');
      frame.className = 'content-frame';
      frame.style.width = '100%';
      frame.style.minHeight = 'calc(100vh - 64px)';
      frame.style.border = 'none';
      frame.setAttribute('loading', 'lazy');
      content.appendChild(frame);
    }
    // 在 iframe 加载完成后，移除内页旧版导航栏与头部，避免重复
    if (!frame.__cleanupInjected) {
      frame.addEventListener('load', () => {
        try {
          const doc = frame.contentDocument || frame.contentWindow?.document;
          if (!doc) return;
          // 移除旧头部与侧栏
          doc.querySelector('.header')?.remove();
          doc.querySelector('.top-nav')?.remove();
          doc.querySelector('.top-header')?.remove();
          doc.querySelector('.sidebar')?.remove();
          doc.querySelector('.sidebar-content')?.remove();
          // 调整主内容区布局（有些页面在有侧栏时会设置左边距）
          const main = doc.querySelector('.main-content');
          if (main) main.style.marginLeft = '0';
        } catch (err) {
          console.warn('iframe 内旧版导航清理失败:', err);
        }
      });
      frame.__cleanupInjected = true;
    }
    return frame;
  },
  bindSidebarClicks() {
    document.addEventListener('click', (e) => {
      // 支持侧边栏项、子菜单项、下拉标题中的跳转链接，以及旧版 .nav-link/.submenu-link
      const link = e.target.closest('.sidebar-item, .sidebar-submenu-item, .sidebar-dropdown-link, .nav-link, .submenu-link, a[data-router="spa"]');
      if (!link) return;
      const href = link.getAttribute('href');
      // 外链与锚点跳过，由浏览器原生处理
      if (!href || href.startsWith('#') || /^https?:/i.test(href)) return;
      e.preventDefault();
      this.navigate(href, { push: true });
      if (
        link.classList.contains('sidebar-item') ||
        link.classList.contains('sidebar-submenu-item') ||
        link.classList.contains('nav-link') ||
        link.classList.contains('submenu-link')
      ) {
        Navigation.setActiveItem?.(link);
      }
    });
  },
  navigate(url, { push = true } = {}) {
    try {
      const target = new URL(url, window.location.href);
      // 强制缓存规避：始终追加时间戳，但地址栏不带该参数
      const withTs = new URL(target.href);
      withTs.searchParams.set('_ts', Date.now().toString());
      const finalHref = withTs.href;
      if (this.frame) {
        // 双段刷新：先置空再赋值，规避偶发不刷新
        this.frame.src = 'about:blank';
        setTimeout(() => { this.frame.src = finalHref; }, 16);
      }
      if (push) {
        const addressTarget = new URL(target.href);
        addressTarget.searchParams.delete('_ts');
        const newPath = addressTarget.pathname + addressTarget.search + addressTarget.hash;
        window.history.pushState({ url: newPath }, '', newPath);
      }
    } catch (err) {
      console.error('路由切换失败:', err);
    }
  }
};

// ... existing code ...

// 页面初始化
const PageInit = {
    // 通用初始化
    init() {
        this.ensureFontAwesome();
        const isEmbedded = window.top !== window.self;
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const isHome = currentFile === 'index.html';
        if (!isEmbedded) {
            this.setupHeader();
            Navigation.init();
            if (isHome) {
                // 仅在首页启用单页路由，避免子页面内容被 iframe 覆盖
                AppRouter.init();
            }
            this.setupResponsive();
            this.setupDatePicker();
        } else {
            // 嵌入模式：移除页面自带头部与侧栏，避免重复
            document.querySelector('.header')?.remove();
            document.querySelector('.top-nav')?.remove();
            document.querySelector('.sidebar')?.remove();
            Navigation.setActiveNavItem?.();
        }
    },
    
    // 设置 Font Awesome 6 与 v4 兼容加载（本地资源）
    ensureFontAwesome() {
        const head = document.head;
        // 移除 v4.7 旧链接与 CDN 链接，统一改用本地
        head.querySelectorAll('link[href*="font-awesome@4.7.0"], link[href*="cdnjs.cloudflare.com/ajax/libs/font-awesome"]').forEach(link => link.remove());
        // 注入本地 v6 all.min.css
        if (!head.querySelector('link[href*="fontawesome"][href*="all.min.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'vendor/fontawesome/6.5.2/css/all.min.css';
            head.appendChild(link);
        }
        // 注入本地 v4-shims 兼容旧标记
        if (!head.querySelector('link[href*="fontawesome"][href*="v4-shims.min.css"]')) {
            const shim = document.createElement('link');
            shim.rel = 'stylesheet';
            shim.href = 'vendor/fontawesome/6.5.2/css/v4-shims.min.css';
            head.appendChild(shim);
        }
    },
    
    // 设置头部（统一为 top-nav）
    setupHeader() {
        // 移除旧的 top-nav（若仍存在）
        const existingTopNav = DOM.get('.top-nav');
        if (existingTopNav) existingTopNav.remove();
        
        // 统一为 club-overview 风格的头部
        const today = new Date().toISOString().split('T')[0];
        const headerHTML = `
            <header class="header">
                <div class="header-container">
                    <div class="header-logo">
                        <div class="logo-icon">
                            <i class="fa fa-trophy"></i>
                        </div>
                        <h1 class="header-title">PEL联盟生态数据大屏</h1>
                    </div>
                    
                    <div class="header-controls">
                        <div class="season-info">
                            <select class="season-dropdown" id="seasonSelect">
                                <option value="current" selected>当前赛季</option>
                                <option value="previous1">前1个赛季</option>
                                <option value="previous2">前2个赛季</option>
                                <option value="previous3">前3个赛季</option>
                                <option value="previous4">前4个赛季</option>
                                <option value="previous5">前5个赛季</option>
                            </select>
                        </div>
                        <input type="date" class="date-input" value="${today}">
                        <button class="header-btn menu-toggle" title="展开菜单">
                            <i class="fa fa-bars"></i>
                        </button>
                        <button class="header-btn" title="刷新数据">
                            <i class="fa fa-refresh"></i>
                        </button>
                        <div class="user-avatar">
                            <i class="fa fa-user"></i>
                        </div>
                    </div>
                </div>
            </header>
        `;
        
        const oldHeader = DOM.get('.header');
        if (oldHeader) {
            // 用 club-overview 样式替换旧版头部
            oldHeader.outerHTML = headerHTML;
        } else {
            // 没有头部则插入统一头部
            document.body.insertAdjacentHTML('afterbegin', headerHTML);
        }
        
        // 绑定刷新按钮交互（强制绕过缓存）
        DOM.on('.header-btn[title="刷新数据"]', 'click', () => {
            try {
                const url = new URL(window.location.href);
                url.searchParams.set('_ts', Date.now().toString());
                window.location.replace(url.toString());
            } catch (e) {
                window.location.href = window.location.pathname + '?_ts=' + Date.now();
            }
        });
    },
    
    // 设置响应式
    setupResponsive() {
        const handle = () => {
            const menuBtn = DOM.get('.menu-toggle');
            if (menuBtn) {
                if (window.innerWidth <= 1024) {
                    menuBtn.style.display = 'inline-block';
                } else {
                    menuBtn.style.display = 'none';
                }
            }
            if (window.innerWidth > 1024) {
                DOM.get('.sidebar')?.classList.remove('open');
            }
        };
        
        handle();
        window.addEventListener('resize', Utils.throttle(handle, 250));
    },
    
    // 设置日期选择器
    setupDatePicker() {
        const dateInput = DOM.get('.date-input');
        if (dateInput) {
            dateInput.addEventListener('change', (e) => {
                console.log('日期已更改:', e.target.value);
                // 这里可以添加数据刷新逻辑
            });
        }
    }
};

// 页面加载完成后初始化（增加就绪态兜底）
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
      // 检查登录状态
      if (checkLoginStatus()) {
          PageInit.init();
      }
  });
} else {
  // 若 DOMContentLoaded 已触发或文档已就绪，直接初始化
  // 检查登录状态
  if (checkLoginStatus()) {
      PageInit.init();
  }
}

// 导出全局对象
window.PEL = {
    Navigation,
    DataManager,
    TableManager,
    Utils,
    PageInit,
    AppRouter,
    DOM
};