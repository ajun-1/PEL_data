# PEL生态数据看板

## 项目简介

PEL生态数据看板是一个专业的电竞联盟数据可视化平台，提供联盟生态、俱乐部分析、选手数据等多维度的数据展示和分析功能。

## 功能特性

### 🏆 联盟生态
- **联盟生态大盘**: 整体健康指数、俱乐部数量、重点跟踪等关键指标
- **联盟概览**: 商业价值与营业收入分析、俱乐部表现对比
- **深度分析**: 细分指标分析和趋势预测

### 🏢 俱乐部分析
- **俱乐部总览**: 综合表现评估、四象限分析
- **俱乐部仪表板**: 实时数据监控和KPI指标
- **组织架构**: 俱乐部内部结构和人员配置
- **违规事项**: 违规记录追踪和公告管理

### 👥 选手管理
- **选手概览**: 选手基本信息和表现数据
- **选手档案**: 详细的个人资料和历史记录
- **转会交易**: 选手转会信息和交易记录
- **流量分析**: 选手社媒影响力和粉丝数据

### ⚙️ 系统管理
- **数据导入**: 支持多种格式的数据导入
- **用户管理**: 用户权限和角色管理
- **系统配置**: 平台参数和功能设置

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **图表库**: ECharts 5.x
- **UI框架**: 自定义响应式设计
- **图标**: Font Awesome 6.5.2
- **部署**: GitHub Pages

## 在线访问

项目已部署到GitHub Pages，可通过以下链接访问：

**主页**: https://yourusername.github.io/PEL_data/

### 主要页面链接

- 🏠 [首页](https://yourusername.github.io/PEL_data/index.html)
- 📊 [联盟生态大盘](https://yourusername.github.io/PEL_data/alliance-dashboard.html)
- 📈 [联盟概览](https://yourusername.github.io/PEL_data/alliance-overview.html)
- 🏢 [俱乐部总览](https://yourusername.github.io/PEL_data/club-overview.html)
- 👥 [选手概览](https://yourusername.github.io/PEL_data/player-overview.html)

## 本地开发

### 环境要求
- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 本地HTTP服务器 (可选，用于开发调试)

### 快速开始

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/PEL_data.git
   cd PEL_data
   ```

2. **直接打开**
   - 直接用浏览器打开 `index.html` 文件
   - 或使用本地服务器运行项目

3. **使用本地服务器** (推荐)
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx serve .
   
   # 使用PHP
   php -S localhost:8000
   ```

## 部署到GitHub Pages

### 自动部署步骤

1. **创建GitHub仓库**
   - 仓库名建议使用: `PEL_data`
   - 设置为公开仓库

2. **上传代码**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/PEL_data.git
   git push -u origin main
   ```

3. **启用GitHub Pages**
   - 进入仓库设置 (Settings)
   - 找到 "Pages" 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 分支
   - Folder 选择 "/ (root)"
   - 点击 "Save"

4. **访问网站**
   - 等待几分钟部署完成
   - 访问: `https://yourusername.github.io/PEL_data/`

## 项目结构

```
PEL/
├── css/                    # 样式文件
│   └── main.css           # 主样式文件
├── js/                     # JavaScript文件
│   ├── common.js          # 通用功能
│   ├── main.js            # 主要逻辑
│   └── echarts.min.js     # 图表库
├── images/                 # 图片资源
│   ├── logos/             # 俱乐部logo
│   ├── players/           # 选手头像
│   └── icons/             # 图标文件
├── vendor/                 # 第三方库
│   └── fontawesome/       # 图标字体
├── index.html             # 首页
├── login.html             # 登录页
├── alliance-*.html        # 联盟相关页面
├── club-*.html            # 俱乐部相关页面
├── player-*.html          # 选手相关页面
├── .nojekyll             # GitHub Pages配置
└── README.md             # 项目说明
```

## 浏览器兼容性

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目！

## 联系方式

如有问题或建议，请通过以下方式联系：

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/PEL_data/issues)

---

⭐ 如果这个项目对您有帮助，请给个星标支持！