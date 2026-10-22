/**
 * GUNVANT CHAUDHARI // PREMIUM FUTURISTIC QA PORTFOLIO JAVASCRIPT ENGINE
 * Handles:
 * - Avatar Video immediate autoplay, mute/unmute, and local file switcher
 * - Procedural Cyber Canvas Fallback
 * - Web Audio API futuristic ambient drone
 * - Interactive Cursor Glow and Bento Spotlight
 * - Smooth scroll navigation & active link observer
 * - Contact transmission via direct mailto
 * - Resume and profile placeholder modal handlers
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. AVATAR VIDEO & HERO STAGE CONTROLLER
     ------------------------------------------------------------------------ */
  const video = document.getElementById('avatar-hero-video');
  const videoSoundBtn = document.getElementById('video-sound-btn');
  const videoMutedIcon = document.getElementById('video-muted-icon');
  const videoUnmutedIcon = document.getElementById('video-unmuted-icon');
  
  const videoPlayBtn = document.getElementById('video-play-btn');
  const videoPauseIcon = document.getElementById('video-pause-icon');
  const videoPlayIcon = document.getElementById('video-play-icon');
  
  const customVideoInput = document.getElementById('custom-video-input');
  const canvas = document.getElementById('avatar-hologram-canvas');

  // Ensure Video Starts Immediately Without Repeating (Loop Disabled)
  const initializeHeroVideo = () => {
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = false; // Strictly non-looping

    // Update play/pause toggle when video playback finishes
    video.addEventListener('ended', () => {
      if (videoPlayBtn && videoPauseIcon && videoPlayIcon) {
        videoPauseIcon.classList.add('hidden');
        videoPlayIcon.classList.remove('hidden');
      }
    });

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          video.style.opacity = '1';
        })
        .catch((err) => {
          console.log('Video autoplay prevented or source pending, activating canvas fallback:', err);
          activateHologramCanvas();
        });
    }
  };

  // Toggle Video Sound
  if (videoSoundBtn && video) {
    videoSoundBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (video.muted) {
        videoMutedIcon.classList.remove('hidden');
        videoUnmutedIcon.classList.add('hidden');
      } else {
        videoMutedIcon.classList.add('hidden');
        videoUnmutedIcon.classList.remove('hidden');
      }
    });
  }

  // Toggle Video Play / Pause
  if (videoPlayBtn && video) {
    videoPlayBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        videoPauseIcon.classList.remove('hidden');
        videoPlayIcon.classList.add('hidden');
      } else {
        video.pause();
        videoPauseIcon.classList.add('hidden');
        videoPlayIcon.classList.remove('hidden');
      }
    });
  }

  // Play Video Intro with Audio via Hero Button
  const heroVideoIntroBtn = document.getElementById('hero-video-intro-btn');
  if (heroVideoIntroBtn && video) {
    heroVideoIntroBtn.addEventListener('click', () => {
      video.muted = false;
      video.currentTime = 0;
      video.play().then(() => {
        video.style.opacity = '1';
        if (canvas) canvas.style.opacity = '0';
      }).catch(err => console.log('Video intro playback error:', err));
      if (videoSoundBtn) {
        if (videoMutedIcon) videoMutedIcon.classList.add('hidden');
        if (videoUnmutedIcon) videoUnmutedIcon.classList.remove('hidden');
      }
      if (videoPlayBtn) {
        if (videoPauseIcon) videoPauseIcon.classList.remove('hidden');
        if (videoPlayIcon) videoPlayIcon.classList.add('hidden');
      }
    });
  }

  // Allow User to Load Their Own Avatar Video File
  if (customVideoInput && video) {
    customVideoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        video.src = fileUrl;
        video.load();
        video.play().then(() => {
          video.style.opacity = '1';
          if (canvas) canvas.style.opacity = '0';
        });
      }
    });
  }

  // Drag and Drop Avatar Video onto Hero Section
  const heroSection = document.getElementById('hero');
  if (heroSection && video) {
    heroSection.addEventListener('dragover', (e) => {
      e.preventDefault();
      heroSection.style.outline = '2px dashed #00f5d4';
    });

    heroSection.addEventListener('dragleave', (e) => {
      e.preventDefault();
      heroSection.style.outline = 'none';
    });

    heroSection.addEventListener('drop', (e) => {
      e.preventDefault();
      heroSection.style.outline = 'none';
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('video/')) {
        const fileUrl = URL.createObjectURL(file);
        video.src = fileUrl;
        video.load();
        video.play().then(() => {
          video.style.opacity = '1';
          if (canvas) canvas.style.opacity = '0';
        });
      }
    });
  }

  // Procedural Hologram Particle Avatar Fallback
  let animationFrameId;
  const activateHologramCanvas = () => {
    if (!canvas) return;
    canvas.style.opacity = '0.9';
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth * 0.6;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle nodes
    const particles = [];
    const particleCount = 180;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        color: i % 2 === 0 ? 'rgba(0, 245, 212, ' : 'rgba(99, 102, 241, '
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '0.7)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 212, ${0.15 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();
  };

  initializeHeroVideo();

  /* ------------------------------------------------------------------------
     2. AMBIENT SPATIAL AUDIO SYNTHESIZER (WEB AUDIO API)
     ------------------------------------------------------------------------ */
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundOffIcon = document.getElementById('sound-off-icon');
  const soundOnIcon = document.getElementById('sound-on-icon');
  let audioCtx = null;
  let isAmbientSoundActive = false;
  let masterGain = null;

  const initAmbientAudio = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 3);

    // Warm Low-Frequency Drone (A2 110Hz + E2 164.8Hz + 220Hz)
    const freqs = [110, 164.8, 220, 329.6];
    freqs.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const filter = audioCtx.createBiquadFilter();
      const gain = audioCtx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.2 / freqs.length, audioCtx.currentTime);

      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(0.1 + idx * 0.05, audioCtx.currentTime);
      lfoGain.gain.setValueAtTime(4, audioCtx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start();
    });

    masterGain.connect(audioCtx.destination);
  };

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      if (!isAmbientSoundActive) {
        if (!audioCtx) {
          initAmbientAudio();
        } else if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        isAmbientSoundActive = true;
        soundOffIcon.classList.add('hidden');
        soundOnIcon.classList.remove('hidden');
      } else {
        if (audioCtx) audioCtx.suspend();
        isAmbientSoundActive = false;
        soundOffIcon.classList.remove('hidden');
        soundOnIcon.classList.add('hidden');
      }
    });
  }

  /* ------------------------------------------------------------------------
     3. INTERACTIVE CURSOR & BENTO SPOTLIGHT
     ------------------------------------------------------------------------ */
  const cursorGlow = document.getElementById('cursor-glow');
  const cursorDot = document.getElementById('cursor-dot');
  const bentoCards = document.querySelectorAll('.bento-card');

  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    if (cursorGlow) {
      cursorGlow.style.left = `${clientX}px`;
      cursorGlow.style.top = `${clientY}px`;
    }

    if (cursorDot) {
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;
    }

    // Dynamic spotlight on bento cards
    bentoCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  /* ------------------------------------------------------------------------
     4. HEADER SCROLL ELEVATION & ACTIVE LINK OBSERVER
     ------------------------------------------------------------------------ */
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('py-2');
      header.classList.remove('py-4');
    } else {
      header.classList.add('py-4');
      header.classList.remove('py-2');
    }

    // Active Section Detection
    let currentSectionId = 'hero';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 140;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  /* ------------------------------------------------------------------------
     5. MOBILE NAVIGATION TOGGLE
     ------------------------------------------------------------------------ */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. RESUME & PROFILE PLACEHOLDER MODAL CONTROLLER
     ------------------------------------------------------------------------ */
  const infoModal = document.getElementById('info-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDismissBtn = document.getElementById('modal-dismiss-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalIcon = document.getElementById('modal-icon');

  const openModal = (title, description, icon = '📄') => {
    if (!infoModal) return;
    modalTitle.textContent = title;
    modalDesc.innerHTML = description;
    modalIcon.textContent = icon;
    infoModal.classList.remove('hidden');
  };

  const closeModal = () => {
    if (infoModal) infoModal.classList.add('hidden');
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeModal);
  if (infoModal) {
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) closeModal();
    });
  }

  const handleResumeAction = async () => {
    const potentialPaths = ['assets/Gunvant_Chaudhari_Resume.pdf', 'resume.pdf'];
    let verifiedPath = null;

    for (const path of potentialPaths) {
      try {
        const response = await fetch(path, { method: 'HEAD' });
        if (response.ok) {
          verifiedPath = path;
          break;
        }
      } catch (err) {
        // Fetch check failed (e.g., local file:// protocol or offline)
      }
    }

    if (verifiedPath) {
      const downloadLink = document.createElement('a');
      downloadLink.href = verifiedPath;
      downloadLink.download = 'Gunvant_Chaudhari_Resume.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      openModal(
        'Gunvant Chaudhari — Resume',
        `Gunvant's complete official resume PDF can be downloaded directly once configured at <code>assets/Gunvant_Chaudhari_Resume.pdf</code> or <code>resume.pdf</code>, or requested immediately via email:<br><br>
        <strong>Email:</strong> <a href="mailto:chaudharigunvant@gmail.com" class="text-cyan-400 underline">chaudharigunvant@gmail.com</a><br>
        <strong>Phone:</strong> <a href="tel:+918087932718" class="text-cyan-400 underline">+91-8087932718</a><br>
        <strong>Location:</strong> Pune, Maharashtra, India`,
        '📄'
      );
    }
  };

  const resumeActionBtns = document.querySelectorAll('#hero-resume-btn, #nav-resume-btn, #mobile-resume-btn');
  resumeActionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      handleResumeAction();
    });
  });

  /* ------------------------------------------------------------------------
     7. CONTACT FORM TRANSMISSION (DIRECT MAILTO INTEGRATION)
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('client-name').value.trim();
      const email = document.getElementById('client-email').value.trim();
      const message = document.getElementById('client-message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Collect all selected focus areas from accessible checkboxes
      const checkedBoxes = Array.from(document.querySelectorAll('input[name="focusAreas"]:checked'));
      const selectedScopes = checkedBoxes.map((cb) => cb.value);
      const focusSummary = selectedScopes.length > 0 ? selectedScopes.join(', ') : 'General QA Opportunity';

      // Launch user's default email client addressed to Gunvant
      const recipient = 'chaudharigunvant@gmail.com';
      const subject = encodeURIComponent(`[QA Opportunity // ${focusSummary}] Inquired by ${name}`);
      const body = encodeURIComponent(
        `Hi Gunvant,\n\nName / Organization: ${name}\nDirect Email: ${email}\nOpportunity Focus: ${focusSummary}\n\nMessage:\n${message}\n\nBest regards,\n${name}`
      );

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }

  // Copy Email to Clipboard
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'chaudharigunvant@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        copyEmailBtn.innerHTML = `
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-cyan-300">COPIED!</span>
        `;
        setTimeout(() => {
          copyEmailBtn.innerHTML = `
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
            </svg>
            <span>COPY EMAIL</span>
          `;
        }, 2000);
      });
    });
  }

});
