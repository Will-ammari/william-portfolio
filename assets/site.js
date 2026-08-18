(() => {
  const html = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-button');
  const mobilePanel = document.querySelector('.mobile-panel');
  const progress = document.querySelector('.scroll-progress');
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const sectionLinks = navLinks.map((link) => ({ link, el: document.querySelector(link.getAttribute('href')) })).filter((item) => item.el);

  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  const setThemeIcon = () => {
    if (!themeButton) return;
    themeButton.textContent = html.getAttribute('data-theme') === 'dark' ? '☀' : '☾';
  };
  setThemeIcon();

  themeButton?.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setThemeIcon();
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
