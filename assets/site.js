(() => {
  const html = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const menuButton = document.querySelector('.menu-button');
  const mobilePanel = document.querySelector('.mobile-panel');
  const progress = document.querySelector('.scroll-progress');
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const sectionLinks = navLinks
    .map((link) => ({ link, el: document.querySelector(link.getAttribute('href')) }))
    .filter((item) => item.el);

  const readSavedTheme = () => {
    try {
      const value = localStorage.getItem('theme');
      return value === 'light' || value === 'dark' ? value : null;
    } catch (_) {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem('theme', theme);
    } catch (_) {
      // The theme still works when storage is blocked; it just won't persist.
    }
  };

  const applyTheme = (theme, persist = false) => {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    html.setAttribute('data-theme', nextTheme);

    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', nextTheme === 'dark' ? '#070b16' : '#f4f8fd');
    }

    if (themeButton) {
      const target = nextTheme === 'dark' ? 'light' : 'dark';
      themeButton.setAttribute('aria-label', `Switch to ${target} mode`);
      themeButton.setAttribute('title', `Switch to ${target} mode`);
      themeButton.setAttribute('aria-pressed', String(nextTheme === 'light'));
    }

    if (persist) saveTheme(nextTheme);
  };

  applyTheme(readSavedTheme() || 'dark');

  themeButton?.addEventListener('click', () => {
    const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, true);
  });

  menuButton?.addEventListener('click', () => {
    const isOpen = mobilePanel && !mobilePanel.hidden;
    if (mobilePanel) mobilePanel.hidden = isOpen;
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.textContent = isOpen ? '☰' : '×';
  });

  mobilePanel?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    mobilePanel.hidden = true;
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  }));

  const onScroll = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;

    let current = sectionLinks[0];
    sectionLinks.forEach((item) => {
      if (item.el.getBoundingClientRect().top <= 130) current = item;
    });
    navLinks.forEach((link) => link.classList.toggle('active', current?.link === link));
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
