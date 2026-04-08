// AI工具数据（全球热门AI工具）[[2]][[16]]
const aiTools = [
    // 聊天助手
    {
        name: "ChatGPT",
        category: "chat",
        categoryName: "聊天助手",
        icon: "💬",
        description: "OpenAI开发的顶级AI对话助手，支持多轮对话、代码编写、文案创作等多种场景",
        tags: ["免费", "多语言", "API"],
        url: "https://chat.openai.com",
        popular: true
    },
    {
        name: "Claude",
        category: "chat",
        categoryName: "聊天助手",
        icon: "🤖",
        description: "Anthropic开发的AI助手，擅长长文本分析和安全性对话",
        tags: ["长文本", "安全", "专业"],
        url: "https://claude.ai",
        popular: true
    },
    {
        name: "Perplexity",
        category: "chat",
        categoryName: "聊天助手",
        icon: "🔍",
        description: "AI驱动的搜索引擎，提供实时信息和引用来源",
        tags: ["搜索", "实时", "引用"],
        url: "https://perplexity.ai",
        popular: true
    },
    {
        name: "Gemini",
        category: "chat",
        categoryName: "聊天助手",
        icon: "✨",
        description: "Google最新多模态AI模型，支持文本、图像、代码等多种输入",
        tags: ["Google", "多模态", "免费"],
        url: "https://gemini.google.com",
        popular: true
    },
    
    // 图像设计
    {
        name: "Midjourney",
        category: "image",
        categoryName: "图像设计",
        icon: "🎨",
        description: "顶级AI图像生成工具，通过文字描述创作高质量艺术作品",
        tags: ["图像生成", "艺术", "高质量"],
        url: "https://midjourney.com",
        popular: true
    },
    {
        name: "DALL-E 3",
        category: "image",
        categoryName: "图像设计",
        icon: "🖼️",
        description: "OpenAI的图像生成模型，精准理解文本描述生成图像",
        tags: ["OpenAI", "图像生成", "精准"],
        url: "https://openai.com/dall-e-3",
        popular: true
    },
    {
        name: "Stable Diffusion",
        category: "image",
        categoryName: "图像设计",
        icon: "🌟",
        description: "开源AI图像生成模型，支持本地部署和高度定制",
        tags: ["开源", "可定制", "强大"],
        url: "https://stability.ai",
        popular: false
    },
    
    // 视频创作
    {
        name: "Runway",
        category: "video",
        categoryName: "视频创作",
        icon: "🎬",
        description: "AI视频编辑和生成平台，支持文本生成视频、视频编辑等",
        tags: ["视频编辑", "AI生成", "专业"],
        url: "https://runwayml.com",
        popular: true
    },
    {
        name: "Sora",
        category: "video",
        categoryName: "视频创作",
        icon: "🎥",
        description: "OpenAI开发的文本生成视频模型，创造逼真视频场景",
        tags: ["OpenAI", "视频生成", "前沿"],
        url: "https://openai.com/sora",
        popular: true
    },
    
    // 编程开发
    {
        name: "GitHub Copilot",
        category: "code",
        categoryName: "编程开发",
        icon: "💻",
        description: "GitHub和OpenAI合作的AI编程助手，智能代码补全",
        tags: ["代码补全", "GitHub", "高效"],
        url: "https://github.com/features/copilot",
        popular: true
    },
    {
        name: "Cursor",
        category: "code",
        categoryName: "编程开发",
        icon: "⌨️",
        description: "AI优先的代码编辑器，集成GPT-4，智能编程辅助",
        tags: ["编辑器", "AI优先", "智能"],
        url: "https://cursor.sh",
        popular: true
    },
    {
        name: "Replit AI",
        category: "code",
        categoryName: "编程开发",
        icon: "🚀",
        description: "在线IDE集成AI助手，支持代码生成、调试和优化",
        tags: ["在线IDE", "协作", "云开发"],
        url: "https://replit.com",
        popular: false
    },
    
    // 写作助手
    {
        name: "Notion AI",
        category: "writing",
        categoryName: "写作助手",
        icon: "📝",
        description: "Notion集成的AI写作助手，辅助文档创作和整理",
        tags: ["笔记", "写作", "整理"],
        url: "https://notion.so/product/ai",
        popular: true
    },
    {
        name: "Jasper",
        category: "writing",
        categoryName: "写作助手",
        icon: "✒️",
        description: "专业AI写作平台，适合营销文案、博客、社交媒体内容",
        tags: ["营销", "文案", "专业"],
        url: "https://jasper.ai",
        popular: false
    },
    {
        name: "Grammarly",
        category: "writing",
        categoryName: "写作助手",
        icon: "✓",
        description: "AI语法检查和写作优化工具，提升写作质量",
        tags: ["语法检查", "优化", "英文"],
        url: "https://grammarly.com",
        popular: true
    },
    
    // 音频处理
    {
        name: "ElevenLabs",
        category: "audio",
        categoryName: "音频处理",
        icon: "🎙️",
        description: "顶级AI语音合成工具，生成自然逼真的人声",
        tags: ["语音合成", "逼真", "多语言"],
        url: "https://elevenlabs.io",
        popular: true
    },
    {
        name: "Murf AI",
        category: "audio",
        categoryName: "音频处理",
        icon: "",
        description: "AI语音生成器，适合配音、播客、视频旁白",
        tags: ["配音", "专业", "工作室"],
        url: "https://murf.ai",
        popular: false
    },
    
    // 办公效率
    {
        name: "Microsoft Copilot",
        category: "productivity",
        categoryName: "办公效率",
        icon: "📊",
        description: "微软AI办公助手，集成Office全家桶",
        tags: ["Office", "微软", "办公"],
        url: "https://copilot.microsoft.com",
        popular: true
    },
    {
        name: "Zapier",
        category: "productivity",
        categoryName: "办公效率",
        icon: "⚡",
        description: "AI自动化工作流平台，连接5000+应用",
        tags: ["自动化", "集成", "高效"],
        url: "https://zapier.com",
        popular: true
    },
    
    // 设计工具
    {
        name: "Figma AI",
        category: "design",
        categoryName: "设计工具",
        icon: "🎯",
        description: "设计工具集成AI功能，智能生成设计元素",
        tags: ["UI设计", "协作", "智能"],
        url: "https://figma.com",
        popular: true
    },
    {
        name: "Canva AI",
        category: "design",
        categoryName: "设计工具",
        icon: "🖌️",
        description: "在线设计平台集成AI，快速创建设计作品",
        tags: ["设计", "模板", "易用"],
        url: "https://canva.com",
        popular: true
    }
];

// 全局变量
let currentCategory = 'all';
let displayedTools = [];

// DOM元素
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const tagButtons = document.querySelectorAll('.tag-btn');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderTools(aiTools);
    setupEventListeners();
});

// 渲染工具卡片
function renderTools(tools) {
    toolsGrid.innerHTML = '';
    
    tools.forEach((tool, index) => {
        const card = createToolCard(tool, index);
        toolsGrid.appendChild(card);
    });
    
    displayedTools = tools;
}

// 创建工具卡片
function createToolCard(tool, index) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.animationDelay = `${index * 0.05}s`;
    
    const tagsHtml = tool.tags.map(tag => 
        `<span class="tool-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="tool-header">
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-info">
                <h3 class="tool-name">${tool.name}</h3>
                <span class="tool-category">${tool.categoryName}</span>
            </div>
        </div>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-footer">
            <div class="tool-tags">${tagsHtml}</div>
            <a href="${tool.url}" target="_blank" class="tool-link">访问 →</a>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tool-link')) {
            window.open(tool.url, '_blank');
        }
    });
    
    return card;
}

// 设置事件监听
function setupEventListeners() {
    // 分类标签点击
    tagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tagButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            filterTools(category);
        });
    });
    
    // 搜索功能
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        searchTools(searchTerm);
    });
    
    // 加载更多
    const loadMoreBtn = document.querySelector('.load-more-btn');
    loadMoreBtn.addEventListener('click', () => {
        loadMoreTools();
    });
}

// 筛选工具
function filterTools(category) {
    currentCategory = category;
    
    if (category === 'all') {
        renderTools(aiTools);
    } else {
        const filtered = aiTools.filter(tool => tool.category === category);
        renderTools(filtered);
    }
}

// 搜索工具
function searchTools(searchTerm) {
    if (!searchTerm) {
        filterTools(currentCategory);
        return;
    }
    
    const filtered = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    renderTools(filtered);
}

// 加载更多工具
function loadMoreTools() {
    // 模拟加载更多数据
    const currentLength = displayedTools.length;
    const additionalTools = aiTools.slice(currentLength, currentLength + 6);
    
    additionalTools.forEach((tool, index) => {
        const card = createToolCard(tool, currentLength + index);
        toolsGrid.appendChild(card);
    });
    
    displayedTools = [...displayedTools, ...additionalTools];
    
    // 如果已经显示完所有工具，隐藏加载更多按钮
    if (displayedTools.length >= aiTools.length) {
        document.querySelector('.load-more').style.display = 'none';
    }
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// 添加滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有卡片
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
});