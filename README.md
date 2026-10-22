# Gunvant Chaudhari // Premium Futuristic QA Automation Portfolio

A high-end, futuristic portfolio website for **Gunvant Chaudhari**, QA Automation Engineer and Software Test Engineer with 8 years of experience in Manual Testing, Playwright Automation using JavaScript, and API Testing.

The website retains the **original visual direction, dark theme, glassmorphism, animations, and avatar video hero centerpiece**, fully populated with Gunvant's verified resume data and production-tested bug fixes.

---

## 🚀 GitHub Deployment Quick Start

This repository is structured as a zero-dependency static web application, ready for immediate deployment to **GitHub Pages**, **Vercel**, **Netlify**, or any static web host.

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit of Gunvant Chaudhari QA Automation Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (under "Code and automation" in the left sidebar).
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
   - Your live website URL will be: `https://<your-username>.github.io/<your-repo-name>/`.

---

## 📁 Repository File Structure

```text
├── index.html          # Main HTML document with full-bleed hero, navigation & 8 sections
├── style.css           # Production stylesheet (ready for direct GitHub deployment)
├── styles.css          # Master stylesheet with futuristic dark tokens, glassmorphism & utilities
├── script.js           # Interactive controller: video autoplay, ambient synthesizer, clipboard copy
├── assets/             # Media assets directory
│   ├── README.md       # Media assets placement instructions (avatar video, resume PDF)
│   ├── avatar.mp4      # (Optional) Drop your personal avatar video here
│   └── Gunvant_Chaudhari_Resume.pdf # (Optional) Drop your resume PDF here
├── .gitignore          # Ignores OS, IDE, and temporary cache files
└── README.md           # Project documentation and deployment guide
```

---

## 💎 Design System & Production Architecture

1. **Avatar Video Hero Section**:
   - The avatar video fills the entire hero stage edge-to-edge with full viewport bleed.
   - Plays immediately on load (`autoplay`, `loop`, `muted`, `playsinline`, fallback canvas).
   - Avatar framed on the **right side** (`object-position: 78% center`).
   - All text content strictly on the **left side** (`max-w-xl lg:max-w-2xl`).
   - Directional gradient overlay (`hero-directional-overlay`) ensures **nothing covers the avatar**.
   - Video utility toolbar in the bottom-right corner for sound toggle, pause/play, and video selection.

2. **Futuristic Dark Aesthetics & Glassmorphism**:
   - Deep obsidian background (`#06070a`), neon cyan accents (`#00f5d4`), and frosted glass cards (`backdrop-filter: blur(20px)`).
   - Syne display typography paired with JetBrains Mono tech telemetry and Plus Jakarta Sans body.
   - Interactive mouse glow and dynamic spotlights on bento cards.
   - Built-in spatial ambient sound synthesizer via Web Audio API (toggle in navigation bar).

---

## 🛠️ Latest Bug Fixes Integrated

* **Hero Section Full Width**: Outer hero wrapper uses `width: 100% !important; max-width: 100% !important; margin: 0;` ensuring edge-to-edge video bleed without side gaps.
* **Top Navigation Bar Alignment**: Flexbox spacing (`gap: 12px !important; flex-wrap: nowrap !important;`) prevents overlaps between the sound toggle, resume button, and `"GET IN TOUCH"` CTA.
* **Hero Subtitle Single-Line Fix**: `"QA Automation Engineer | Software Test Engineer"` is locked to a single, continuous line via `white-space: nowrap !important;` and fluid typography.
* **Hero Stats 3-Column Grid**: Highlights (`8 Years Testing`, `2 Enterprise Apps`, `100% Immediate Join`) sit side-by-side in a balanced horizontal 3-column row.
* **Streamlined Contact Section (Section 08)**: Interactive form replaced with a centered 3-card layout (Direct Email, Telephone Dialer, and Base Location strictly displaying `"Pune, Maharashtra, India"`).
* **Single-Line Contact Data**: Email (`chaudharigunvant@gmail.com`) and phone (`+91-8087932718`) are guaranteed to display on a single line without awkward wrapping.
* **Uniform Teal Skill Badges**: All 35+ technical skills across all 6 categories feature glowing cyan badges by default.

---

## 👨‍💻 Candidate Information

- **Full Name:** Gunvant Chaudhari
- **Title:** QA Automation Engineer | Software Test Engineer
- **Experience:** 8 Years in Manual Testing, Automation Testing, and API Testing
- **Location:** Pune, Maharashtra, India
- **Phone:** +91-8087932718
- **Email:** [chaudharigunvant@gmail.com](mailto:chaudharigunvant@gmail.com)
- **Status:** Available Immediately
- **Core Automation Stack:** Playwright with JavaScript (Page Object Model)

---

## 🎬 Custom Media Assets Setup

* **Custom Avatar Video**: Place your video as `assets/avatar.mp4` or `avatar.mp4`. The `<video>` element checks for local video files first before falling back to the remote stream.
* **Custom Resume PDF**: Place your resume as `assets/Gunvant_Chaudhari_Resume.pdf` or `resume.pdf`. The resume buttons automatically detect and initiate a direct PDF download.
