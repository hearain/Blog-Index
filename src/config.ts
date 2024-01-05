const WEBSITE_SORTS: WebsiteSort[] = [{ id: 1, title: "示例分类1" }];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "AI工具",
    description: "GPT3.5，Gemini AI",
    url: "http://192.168.50.117:1888/ppai?hiddenAside=true",
    icon: "",
    color: "#0ba9b5",
  },
  {
    sortId: 1,
    title: "每日热搜",
    description: "查看今天各平台热搜数据",
    url: "http://192.168.50.117:1888/hotSearch?hiddenAside=true",
    icon: "",
    color: "#cdb4dc",
  },
  {
    sortId: 1,
    title: "歌词助手",
    description: "获取歌曲滚动歌词",
    url: "http://192.168.50.117:1888/neteaseCloudMusic?hiddenAside=true",
    icon: "",
    color: "#f98820",
  },
  {
    sortId: 1,
    title: "音乐解锁",
    description: "解锁网易云，qq音乐VIP歌曲本地文件格式",
    url: "http://192.168.50.117:1888/munlock?hiddenAside=true",
    icon: "",
    color: "#ffdbb7",
  },
  {
    sortId: 1,
    title: "怦怦音乐",
    description: "怦怦在线音乐",
    url: "http://192.168.50.117:1888/pengplayer?hiddenAside=true",
    icon: "",
    color: "#e75d6d",
  },
  {
    sortId: 1,
    title: "Bilibili视频下载器",
    description: "B站视频下载工具",
    url: "http://192.168.50.117:1888/bbdown?hiddenAside=true",
    icon: "",
    color: "#fb7299",
  },
  {
    sortId: 1,
    title: "聚合网盘",
    description: "全平台网盘聚合",
    url: "http://192.168.50.117:1888/alist?hiddenAside=true",
    icon: "",
    color: "#d9b8d7",
  },
  {
    sortId: 1,
    title: "小雅",
    description: "各类视频资源",
    url: "http://192.168.50.117:1888/xiaoya?hiddenAside=true",
    icon: "",
    color: "#f98820",
  },
];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "PPToolBox",
  /**
   * 个人博客链接
   */
  BLOG_URL: "http://192.168.50.117:1888/",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.btstu.cn/sjbz/?lx=dongman",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: false,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "PENG PENG Navigation",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
