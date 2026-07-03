/* ============================================
   BiRan INEV - Blog Website Application Logic
   ============================================ */

// --- Sample Article Data ---
const articles = [
  {
    id: 1,
    title: '在暗物质中寻找光的方向',
    excerpt: '宇宙中约85%的物质是暗物质，它们不发光、不吸收光，却通过引力塑造了星系的骨架。我们如何在看不见的世界里找到方向？',
    date: '2026-06-28',
    content: `<p>宇宙中约85%的物质是暗物质，它们不发光、不吸收光，却通过引力塑造了星系的骨架。科学家们经过数十年的探索，终于在这一领域看到了一丝曙光。</p><p>最新的粒子探测器已经在地下实验室中运行了超过三年，收集到的数据暗示着一种全新的粒子可能存在于我们尚未触及的能量维度中。这种粒子的质量大约是质子的三十倍，与普通物质的相互作用极其微弱。</p><p>如果我们能够确认暗物质粒子的存在，人类对宇宙的理解将发生根本性的改变。从宇宙大爆炸的早期演化，到星系形成的精确机制，再到时间的本质——暗物质可能是打开这些谜题的关键钥匙。</p><p>正如物理学家所言：我们并非在黑暗中摸索，而是在寻找另一种形式的光。</p>`
  },
  {
    id: 2,
    title: '极简主义与数字生活',
    excerpt: '当屏幕填满了每一个清醒的时刻，极简主义不再是一种设计风格，而是一种生存策略。如何在信息洪流中保持清醒？',
    date: '2026-06-20',
    content: `<p>当屏幕填满了每一个清醒的时刻，极简主义不再是一种设计风格，而是一种生存策略。我们每天处理的信息量相当于17世纪一个人一生所接触的信息总量。</p><p>数字极简主义并不是要我们抛弃科技，而是重新定义与科技的关系。它要求我们有意识地选择哪些技术工具值得占用我们的时间和注意力，哪些只是空洞的干扰。</p><p>实践数字极简主义的第一步是进行一次"数字断舍离"——审视你手机上的每一个应用，问自己：这个应用是否真的改善了我的生活？如果答案是否定的，毫不犹豫地删除它。</p><p>你会发现，当你减少了数字噪音，你的思维变得更加清晰，创造力也悄然回归。那些被碎片化信息淹没的灵感，终于有了浮出水面的空间。</p>`
  },
  {
    id: 3,
    title: '时间的形状：从黑洞到意识',
    excerpt: '在黑洞的事件视界边缘，时间几乎停止。而在我们的意识中，一秒钟可以是永恒。时间的本质究竟是什么？',
    date: '2026-06-12',
    content: `<p>在黑洞的事件视界边缘，时间几乎停止。引力将时间拖入深渊，光无法逃逸，因果律开始扭曲。然而，这仅仅是物理学对时间的描述。</p><p>当我们转向神经科学，时间的面貌变得更加奇异。大脑处理信息时存在一个约80毫秒的"现在窗口"——你感知到的"现在"，实际上是对过去极短时刻的延迟回放。我们的意识永远活在已经过去的一瞬间里。</p><p>哲学家柏格森曾提出"绵延"（durée）的概念，认为时间不是可以被切割的钟表刻度，而是一种持续的、不可逆的流动。每一刻都是独特的，无法重复。</p><p>也许，理解时间的最好方式不是用方程式，而是用一首诗——它无法被精确测量，却承载着最真实的体验。</p>`
  },
  {
    id: 4,
    title: '关于沉默的力量',
    excerpt: '在这个人人都在表达的时代，沉默反而成为最稀缺的资源。沉默不是空虚，而是一种需要勇气的选择。',
    date: '2026-06-05',
    content: `<p>在这个人人都在表达的时代，沉默反而成为最稀缺的资源。社交媒体上的每一次刷新都是一场表达的竞赛——观点、立场、情感，一切都被迫不及待地推向世界。</p><p>但沉默有着表达所没有的力量。一段真正的沉默可以包含所有的可能性。在音乐中，休止符与音符同等重要；在建筑中，留白赋予空间灵魂；在对话中，沉默是深度思考的温床。</p><p>选择沉默需要勇气。它意味着你不急于证明自己是对的，不急于占据话语权，不急于在信息洪流中留下自己的标记。它意味着你愿意等待，直到有真正值得说出口的话。</p><p>在一个嘈杂的世界里，沉默者不是缺席者——他们是清醒的观察者，是思想的守夜人。</p>`
  }
];

// --- App State ---
const AppState = {
  isLoggedIn: false,
  currentUser: null,

  init() {
    // Check login state from localStorage
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

// --- Page: Index ---
function initIndexPage() {
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

  // Update hero state
  updateHeroState();

  // Render articles
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
        // Reset border color on input
        uInput.addEventListener('input', function resetBorder() {
          uInput.style.borderColor = '';
          uInput.removeEventListener('input', resetBorder);
        });
      }
      return;
    }

    // Simulate login (accept any input)
    AppState.login(username);
    loginModal.classList.remove('active');
    updateHeroState();

    // Update user avatar
    const userAvatar = document.getElementById('user-avatar');
    if (userAvatar) userAvatar.textContent = AppState.getUserInitials();

    // Reset form
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
      // Update avatar on init
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
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = parseInt(urlParams.get('id'), 10);

  // Search in both default and custom articles
  const customArticles = JSON.parse(localStorage.getItem('biran_inev_articles') || '[]');
  const allArticles = [...articles, ...customArticles];
  const article = allArticles.find(a => a.id === articleId);

  const titleEl = document.getElementById('article-title');
  const dateEl = document.getElementById('article-date');
  const contentEl = document.getElementById('article-content');

  if (article) {
    if (titleEl) titleEl.textContent = article.title;
    if (dateEl) dateEl.textContent = article.date;
    if (contentEl) contentEl.innerHTML = article.content;
    document.title = `${article.title} - BiRan INEV`;
  } else {
    if (titleEl) titleEl.textContent = '文章未找到';
    if (contentEl) contentEl.innerHTML = '<p>抱歉，你访问的文章不存在。</p>';
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
  AppState.init();

  const titleInput = document.getElementById('editor-title');
  const contentArea = document.getElementById('editor-content');
  const publishBtn = document.getElementById('btn-publish');
  const backBtn = document.getElementById('btn-back-editor');
  const closeBtn = document.getElementById('btn-close-editor');

  const urlParams = new URLSearchParams(window.location.search);
  const editId = urlParams.get('id');
  const navTitle = document.getElementById('nav-editor-title');

  // If editing existing article
  if (editId) {
    const customArticles = JSON.parse(localStorage.getItem('biran_inev_articles') || '[]');
    const allArticles = [...articles, ...customArticles];
    const article = allArticles.find(a => a.id === parseInt(editId, 10));
    if (article && titleInput && contentArea) {
      titleInput.value = article.title;
      contentArea.value = article.content.replace(/<\/?p>/g, '\n\n').trim();
      if (navTitle) navTitle.textContent = '编辑文章';
      document.title = `编辑 - ${article.title} - BiRan INEV`;
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

      // Simulate publish - add to localStorage
      const newArticle = {
        id: editId ? parseInt(editId, 10) : Date.now(),
        title: title,
        excerpt: content.substring(0, 100) + '...',
        date: new Date().toISOString().split('T')[0],
        content: content.split('\n\n').map(p => `<p>${p}</p>`).join('')
      };

      // Save to local storage as custom articles
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

      // Visual feedback
      if (publishBtn) {
        publishBtn.textContent = '已发布';
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

  // Merge default and custom articles
  const customArticles = JSON.parse(localStorage.getItem('biran_inev_articles') || '[]');
  const allArticles = [...articles, ...customArticles];

  // Sort by date
  allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = allArticles.map(article => `
    <a href="article.html?id=${article.id}" class="article-card page-enter">
      <h3 class="article-card-title">${escapeHtml(article.title)}</h3>
      <p class="article-card-excerpt">${escapeHtml(article.excerpt)}</p>
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
