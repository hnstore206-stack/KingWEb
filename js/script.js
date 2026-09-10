document.addEventListener('DOMContentLoaded', () => {

  // Load Config with fallback
  const cfg = window.CONFIG || {};
  const profile = cfg.profile || {};
  const audioCfg = cfg.audio || {};
  const projects = cfg.projects || [];
  const skills = cfg.skills || [];
  const social = cfg.social || [];
  const settings = cfg.settings || {};
  const theme = cfg.theme || {};

  /* ==========================================
     0. Theme & Colors Application (رمادي وأسود)
     ========================================== */
  if (theme.colors) {
    const c = theme.colors;
    const root = document.documentElement;

    if (c.bg) root.style.setProperty('--bg', c.bg);
    if (c.bgSecondary) root.style.setProperty('--bg-2', c.bgSecondary);
    if (c.accent) root.style.setProperty('--accent', c.accent);
    if (c.accentSecondary) root.style.setProperty('--accent-2', c.accentSecondary);
    if (c.accentLight) root.style.setProperty('--accent-light', c.accentLight);
    if (c.accentGlow) root.style.setProperty('--accent-glow', c.accentGlow);
    if (c.accentDim) root.style.setProperty('--accent-dim', c.accentDim);
    if (c.border) root.style.setProperty('--border', c.border);
    if (c.borderHover) root.style.setProperty('--border-hover', c.borderHover);
    if (c.text) root.style.setProperty('--text', c.text);
    if (c.textSecondary) root.style.setProperty('--text-2', c.textSecondary);
    if (c.textMuted) root.style.setProperty('--text-3', c.textMuted);

    // Apply orbs background colors
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');
    if (orb1 && c.orb1) orb1.style.background = c.orb1;
    if (orb2 && c.orb2) orb2.style.background = c.orb2;
    if (orb3 && c.orb3) orb3.style.background = c.orb3;
  }

  /* ==========================================
     1. Dynamic Content Injection from Config
     ========================================== */

  // Set Page Title
  if (profile.siteTitle) {
    document.title = profile.siteTitle;
  }

  // Update Profile & Hero elements
  const logoTextEl = document.querySelectorAll('.site-logo span');
  logoTextEl.forEach(el => {
    el.innerHTML = `${profile.name || '#Taim'}<span class="logo-dot">.</span>`;
  });

  const logoImgEl = document.querySelectorAll('.site-logo img');
  logoImgEl.forEach(el => {
    if (profile.avatar) el.src = profile.avatar;
    if (profile.name) el.alt = profile.name;
  });

  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge && profile.badge) {
    heroBadge.textContent = profile.badge;
  }

  const lineAccent = document.querySelector('.line-accent');
  if (lineAccent && profile.name) {
    lineAccent.textContent = profile.name;
  }

  const heroBio = document.querySelector('.hero-bio');
  if (heroBio && profile.bio) {
    heroBio.textContent = profile.bio;
  }

  const heroVisualImg = document.querySelector('.hero-visual img');
  if (heroVisualImg && profile.avatar) {
    heroVisualImg.src = profile.avatar;
    heroVisualImg.alt = profile.name || '#Taim';
  }

  // Render Social Links
  const socialRow = document.querySelector('.social-row');
  if (socialRow && social.length) {
    socialRow.innerHTML = social.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.name}">
        ${item.iconSvg}
      </a>
    `).join('');
  }

  // Render Projects Grid dynamically (Clean without blur)
  const bentoGrid = document.querySelector('.bento-grid');
  if (bentoGrid && projects.length) {
    bentoGrid.innerHTML = projects.map(proj => {
      const isSecret = proj.isSecret || false;
      const spanClass = proj.span ? `span-${proj.span}` : 'span-2';
      const tagStyle = proj.tagType === 'secret' 
        ? 'style="background:rgba(239,68,68,0.15);color:#f87171;border:1px solid rgba(239,68,68,0.3)"' 
        : '';

      const isExternal = proj.url && proj.url !== '#';
      const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
      const arrowSvg = isExternal 
        ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>'
        : '';

      return `
        <article class="bento-item ${spanClass}">
          <div class="bento-img">
            <img src="${proj.image}" alt="${proj.title}">
          </div>
          <div class="bento-body">
            <h3>${proj.title} <span class="tag" ${tagStyle}>${proj.tag}</span></h3>
            <p>${proj.description}</p>
            <a href="${proj.url}" ${targetAttr} class="btn btn-ghost">
              ${proj.buttonText || 'Visit'} ${arrowSvg}
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Render Skills Marquee Track dynamically
  const skillsTrack = document.querySelector('.skills-track');
  if (skillsTrack && skills.length) {
    const renderSkillGroup = (ariaHidden = false) => `
      <div class="skills-group" ${ariaHidden ? 'aria-hidden="true"' : ''}>
        ${skills.map(s => `
          <div class="skill-pill">
            <img src="${s.icon}" alt="${s.name}" width="24" height="24">
            <span>${s.name}</span>
          </div>
        `).join('')}
      </div>
    `;
    skillsTrack.innerHTML = renderSkillGroup(false) + renderSkillGroup(true);
  }

  // Render Footer Info
  const footerBrandBio = document.querySelector('.footer-brand p');
  if (footerBrandBio && (profile.footerBio || profile.bio)) {
    footerBrandBio.textContent = profile.footerBio || profile.bio;
  }

  const footerCopyright = document.querySelector('.footer-bottom p');
  if (footerCopyright && profile.copyright) {
    footerCopyright.textContent = profile.copyright;
  }

  const footerSocialCol = document.querySelector('.footer-col:last-child ul');
  if (footerSocialCol && social.length) {
    footerSocialCol.innerHTML = social.map(item => `
      <li><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a></li>
    `).join('');
  }

  /* ==========================================
     2. Floating Audio Player Controller
     ========================================== */

  const audio = document.getElementById('audioPlayer');
  const musicPlayer = document.getElementById('musicPlayer');
  const playBtn = document.getElementById('playerPlayBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const playerRange = document.getElementById('playerRange');
  const currentTimeEl = document.getElementById('currentTime');
  const totalTimeEl = document.getElementById('totalTime');
  const playerTitle = document.querySelector('.player-title');
  const playerStatus = document.getElementById('playerStatus');
  const playerCover = document.getElementById('playerCover');

  if (audio && audioCfg.src) {
    const sourceEl = audio.querySelector('source');
    if (sourceEl) sourceEl.src = audioCfg.src;
    audio.loop = audioCfg.loop !== false;
    audio.load();

    if (playerTitle && audioCfg.title) playerTitle.textContent = audioCfg.title;
    if (playerStatus && audioCfg.status) playerStatus.textContent = audioCfg.status;
    if (playerCover && audioCfg.cover) playerCover.src = audioCfg.cover;

    if (audioCfg.enabled === false && musicPlayer) {
      musicPlayer.style.display = 'none';
    }
  }

  function formatTime(s) {
    if (isNaN(s) || !isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  function updateUI() {
    if (!audio) return;
    const playing = !audio.paused;
    if (playIcon) playIcon.style.display = playing ? 'none' : '';
    if (pauseIcon) pauseIcon.style.display = playing ? '' : 'none';
    if (audio.duration && isFinite(audio.duration) && playerRange) {
      playerRange.max = 100;
      playerRange.value = (audio.currentTime / audio.duration) * 100;
    }
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
    if (totalTimeEl && audio.duration && isFinite(audio.duration)) {
      totalTimeEl.textContent = formatTime(audio.duration);
    }
  }

  if (audio) {
    audio.addEventListener('loadedmetadata', () => {
      if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
      updateUI();
    });
    audio.addEventListener('timeupdate', updateUI);
    audio.addEventListener('play', updateUI);
    audio.addEventListener('pause', updateUI);
    audio.addEventListener('ended', updateUI);
    audio.addEventListener('error', () => {
      if (currentTimeEl) currentTimeEl.textContent = '0:00';
    });

    const firstInteraction = () => {
      audio.play().catch(() => {});
      document.removeEventListener('click', firstInteraction);
      document.removeEventListener('scroll', firstInteraction);
      document.removeEventListener('touchstart', firstInteraction);
      document.removeEventListener('keydown', firstInteraction);
    };
    document.addEventListener('click', firstInteraction);
    document.addEventListener('scroll', firstInteraction);
    document.addEventListener('touchstart', firstInteraction);
    document.addEventListener('keydown', firstInteraction);
  }

  if (playBtn && audio) {
    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    });
  }

  if (playerRange && audio) {
    playerRange.addEventListener('input', () => {
      if (audio.duration && isFinite(audio.duration)) {
        audio.currentTime = (playerRange.value / 100) * audio.duration;
      }
    });
  }

  /* ==========================================
     3. Typewriter Effect
     ========================================== */

  const words = profile.roles && profile.roles.length 
    ? profile.roles 
    : ['Developer', 'Designer', 'Problem Solver', 'Creator'];

  let wordIndex = 0, charIndex = 0, isDeleting = false;
  const typedEl = document.getElementById('typed-text');

  function type() {
    if (!typedEl) return;
    const current = words[wordIndex];
    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
        return;
      }
    } else {
      typedEl.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
  type();

  /* ==========================================
     4. Scroll to Top & Active Navigation Link
     ========================================== */

  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 300);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav a, .wrapper a');
  function updateActive() {
    let current = 'home';
    let closest = Infinity;
    sections.forEach(s => {
      const top = Math.abs(s.getBoundingClientRect().top);
      if (top < closest) {
        closest = top;
        current = s.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActive);
  updateActive();

  /* ==========================================
     5. Optional Security / Anti-Devtools
     ========================================== */

  if (settings.enableDevtoolsProtection) {
    setInterval(() => {
      if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        window.location.replace('about:blank');
      }
    }, 1000);

    document.addEventListener('keydown', e => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) || (e.ctrlKey && (e.key === 'U' || e.key === 'u'))) {
        e.preventDefault();
      }
    });
    document.addEventListener('contextmenu', e => e.preventDefault());
  }

});
