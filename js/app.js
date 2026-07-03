/* ============================================
   BiRan INEV - Blog Website Application Logic
   ============================================ */

// --- Article Data ---
const articles = [
  {
    id: 1,
    title: 'The Age of Engineered Intelligence',
    excerpt: 'The coming two decades will witness a defining shift for human civilisation. Intelligence will shed its natural state and evolve into an engineered resource — measurable, modelable, producible, deployable, tradable, and embeddable across every corner of physical and digital realms.',
    date: '2026-07-03',
    content: `<p>The coming two decades will witness a defining shift for human civilisation. Intelligence will shed its natural state and evolve into an engineered resource measurable, modelable, producible, deployable, tradable, and embeddable across every corner of physical and digital realms.</p><p>For nearly all of human history, intelligence resided solely within biological organisms. Humanity could nurture, learn through and leverage intelligence for collaboration, yet no method existed to manufacture it artificially. Artificial intelligence pioneers an entirely new paradigm: the construction of intelligent systems outside the human biological brain.</p><p>This transformation carries civilisation-level foundational significance, aligning with the timeline of humanity's historic productivity revolutions. Fire granted mastery over energy, electricity democratised motive power, machinery replaced manual labour, and computers unlocked information processing. AI elevates intelligence into a brand-new core factor of production. The 2025 Stanford AI Index records consistent surges in global corporate AI adoption, capital investment and generative AI rollout. AI has woven itself deep into the underlying operational fabric of modern economies, stepping far beyond laboratory research boundaries.</p><p>The first tier of this transformative framework covers the natural substrate: the brain, nervous system, neural signals, cognition, consciousness and behaviour. Biological systems operate on self-contained, complete causal logic. The nervous system generates electrical impulses, neural dynamics shape information processing patterns that underpin human perception, decision-making, physical action and subjective conscious experience. Biological consciousness and cognition emerge exclusively from organic mechanisms. External computational systems power AI to observe, model, forecast and moderately intervene in biological intelligent processes. Core technological priorities for the decades ahead centre on the industrialisation and systematic construction of intelligence.</p><p>The second tier lies in foundational science, anchored by neuroscience and computer science. Neuroscience unpacks the generative mechanisms of biological intelligence, while computer science codifies rules for intelligence's representation, computation, generalisation and control. The frontier of contemporary scientific inquiry continues to shift away from isolated studies of matter and life toward in-depth exploration of universal computational laws governing intelligence.</p><p>Technological frameworks such as AlphaFold deliver revolutionary overhauls to scientific research paradigms, upgrading every link of cutting-edge discovery workflows. Advanced AI condenses decades-long biological and medical research cycles into a handful of years, drastically boosting efficiency across hypothesis generation, experimental design and knowledge accumulation. Judgements from leading industry pioneers quantify the scale of this shift; AI-driven industrial change will outpace traditional industrial revolutions in both speed and scope. These insights stem from hands-on research trailblazers, delivering exceptional reference value for the industry.</p><p>The third tier covers engineering implementation, the primary arena for artificial intelligence's real-world application. An artificially constructed engineering system, AI bears unique traits absent from traditional engineering disciplines, enabling iterative upgrades to engineering workflows across all industries.</p><p>Robotics evolves into embodied intelligent systems. XR hardware transforms into spatial computing interfaces tailored to user demands. Brain-computer interfaces complete a technical leap from simple signal capture to human intent decoding. Aerospace equipment attains autonomous operational capacity amid complex, unknown environments and limited communication bandwidth.</p><p>NVIDIA's AI Factory framework outlines the core form of future computational infrastructure. AI evolves from standalone software functionality into national-grade industrial infrastructure, standing alongside power grids, cloud computing and semiconductor manufacturing as foundational digital infrastructure; intelligence itself becomes shared public infrastructure for society.</p><p>The fourth tier encompasses industrial application landscapes. Healthcare, education, manufacturing, scientific research, aerospace and entertainment represent core channels through which engineered intelligence permeates and reshapes human civilisation.</p><p>Healthcare ecosystems roll out predictive diagnostics, accelerated drug development and fully accessible personalised precision medicine. Intelligent technologies expand premium personalised teaching across education at negligible marginal cost. Manufacturing transitions from experience-led production to standardised, model-driven workflows. Scientific research establishes complete intelligent loops spanning hypothesis generation, simulation, experimentation and validation. Aerospace extends intelligent decision-making to extreme operational environments inaccessible to direct human oversight.</p><p>Microsoft's definition of the Frontier Firm encapsulates structural shifts unfolding within organisations of the new era. Market entities restructure around human-machine collaboration, autonomous agent operations and digital labour pools. Networked collaboration between human and machine intelligence emerges as the core unit of productivity.</p><p>From a holistic framework perspective, AI acts as a universal enabler for scientific exploration, engineering development, organisational governance and human creativity, driving systematic upgrades to capabilities across all societal dimensions.</p><p>Tomorrow's industry-leading enterprises will build competitive advantage through development and integration of three core capabilities: self-developed foundational intelligent infrastructure, deep integration of intelligent technology into high-value physical industries, and end-to-end feedback loops linking data, models, tools, workflows and user behaviour.</p><p>Sam Altman names the coming decades the Intelligence Age, defined fundamentally by the widespread programmability of intelligence. Steep declines in the cost of generating intelligence will trigger structural overhauls across software development, scientific research, robotics, corporate administration, industrial manufacturing and human-computer interaction.</p><p>This trajectory stands as an irreversible certainty of our era.</p><p>Industrial transformation revolves around the universal diffusion of intelligence. Biological brains no longer hold exclusive ownership of intelligence, which steadily spreads into machinery, social organisations and industrial ecosystems before solidifying into foundational infrastructure for human civilisation.</p><p>The most high-impact entrepreneurial opportunities revolve around closed-loop development within high-value industrial systems. Deep integration of human intelligence, machine intelligence and real-world scenario feedback yields continuously iterating industrial cycles.</p><p>Stakeholders mastering these intelligent closed loops will drive cross-industry advancement and spearhead the reconstruction of the fundamental operating systems underpinning human civilisation.</p>`
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
