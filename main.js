/* ============================================================
   Melih Can Akgüneş — Portfolio logic
   - bilingual (TR / EN) content + UI strings
   - data-driven skills / education / projects / experience
   - interactions: menu, nav highlight, reveal, typing effect
   ============================================================
   HOW TO EDIT CONTENT:
   Everything below lives in plain JS objects. Each item has a
   `tr` and `en` field. Change the text, add/remove array items,
   and the page updates automatically. No build step needed.
   ============================================================ */

/* ---------- 1. UI STRINGS (static labels) ---------- */
const I18N = {
  tr: {
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.education": "Eğitim",
    "nav.projects": "Projeler",
    "nav.experience": "Deneyim",
    "nav.contact": "İletişim",

    "hero.available": "Yeni fırsatlara açık",
    "hero.hi": "Merhaba, ben",
    "hero.iam": "Ben bir",
    "hero.desc":
      ".NET Core, Node.js ve React/Next.js/Angular ekosistemleriyle ölçeklenebilir web ve masaüstü uygulamaları geliştiriyorum. Clean Architecture, CQRS ve durumsuz (stateless) API tasarımını merkeze alırım.",
    "hero.cta1": "İletişime geç",
    "hero.cta2": "Projeleri gör",

    "about.eyebrow": "Tanışalım",
    "about.title": "Hakkımda",
    "about.p1":
      ".NET Core, Node.js ve React/Next.js/Angular ekosistemleriyle ölçeklenebilir web ve masaüstü uygulamaları geliştiren full-stack bir yazılımcıyım. Clean Architecture, CQRS ve durumsuz (stateless) API tasarımlarını merkeze alırım.",
    "about.p2":
      "Karmaşık harici sistem entegrasyonları, bulut bilişim, makine öğrenmesi hazırlık süreçleri ve yapay zeka destekli projeler üzerinde çalışıyorum. Şu anda Yönetim Bilişim Sistemleri yüksek lisansıma devam ediyorum.",

    "skills.eyebrow": "Neler yapıyorum",
    "skills.title": "Yetenekler & Teknolojiler",

    "education.eyebrow": "Yolculuğum",
    "education.title": "Eğitim",

    "projects.eyebrow": "Bazı işlerim",
    "projects.title": "Projeler",

    "experience.eyebrow": "Nerelerde çalıştım",
    "experience.title": "Deneyim",

    "contact.eyebrow": "İletişim",
    "contact.title": "Birlikte çalışalım",
    "contact.sub":
      "Bir soru, iş fırsatı ya da sadece merhaba demek için — çekinme, yaz.",
    "contact.email": "E-posta",
    "contact.name": "Adın",
    "contact.emailLabel": "E-postan",
    "contact.message": "Mesajın",
    "contact.send": "Gönder",

    "footer.built": "Vanilla HTML, CSS & JS ile yapıldı.",
    "footer.top": "Yukarı",

    "projects.code": "Kod",
    "projects.live": "Canlı",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.available": "Open to opportunities",
    "hero.hi": "Hi, I'm",
    "hero.iam": "I'm a",
    "hero.desc":
      "I build scalable web and desktop applications with the .NET Core, Node.js and React/Next.js/Angular ecosystems — centered on Clean Architecture, CQRS and stateless API design.",
    "hero.cta1": "Get in touch",
    "hero.cta2": "View projects",

    "about.eyebrow": "Get to know me",
    "about.title": "About Me",
    "about.p1":
      "I'm a full-stack developer building scalable web and desktop applications across the .NET Core, Node.js and React/Next.js/Angular ecosystems, centered on Clean Architecture, CQRS and stateless API design.",
    "about.p2":
      "I work on complex external-system integrations, cloud computing, machine-learning preparation pipelines and AI-powered projects. I'm currently pursuing a master's in Management Information Systems.",

    "skills.eyebrow": "What I do",
    "skills.title": "Skills & Technologies",

    "education.eyebrow": "My journey",
    "education.title": "Education",

    "projects.eyebrow": "Some of my work",
    "projects.title": "Projects",

    "experience.eyebrow": "Where I've worked",
    "experience.title": "Experience",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's work together",
    "contact.sub":
      "For a question, a job opportunity, or just to say hi — feel free to reach out.",
    "contact.email": "Email",
    "contact.name": "Your name",
    "contact.emailLabel": "Your email",
    "contact.message": "Your message",
    "contact.send": "Send",

    "footer.built": "Built with vanilla HTML, CSS & JS.",
    "footer.top": "Top",

    "projects.code": "Code",
    "projects.live": "Live",
  },
};

/* ---------- 2. TYPING ROLES ---------- */
const ROLES = {
  tr: ["Full-Stack .NET Developer", "Backend Developer", "Web & Masaüstü Geliştirici", ".NET & Node.js Developer"],
  en: ["Full-Stack .NET Developer", "Backend Developer", "Web & Desktop Developer", ".NET & Node.js Developer"],
};

/* ---------- 3. ABOUT FACTS ---------- */
const FACTS = [
  { label: { tr: "Konum", en: "Location" }, value: { tr: "Esenyurt, İstanbul", en: "Esenyurt, İstanbul" } },
  { label: { tr: "Odak", en: "Focus" }, value: { tr: "Full-Stack .NET & Web", en: "Full-Stack .NET & Web" } },
  { label: { tr: "Eğitim", en: "Education" }, value: { tr: "YBS — Yüksek Lisans (devam)", en: "MIS — M.Sc. (ongoing)" } },
  { label: { tr: "Diller", en: "Languages" }, value: { tr: "Türkçe · İngilizce (B1)", en: "Turkish · English (B1)" } },
];

/* ---------- 4. SKILLS ---------- */
const SKILLS = [
  {
    icon: "fa-solid fa-code",
    title: { tr: "Diller", en: "Languages" },
    tags: ["C#", "JavaScript", "TypeScript", "Python"],
  },
  {
    icon: "fa-solid fa-server",
    title: { tr: "Backend", en: "Backend" },
    tags: ["ASP.NET Core", "Web API", "Node.js", "Entity Framework", "CQRS", "MediatR"],
  },
  {
    icon: "fa-solid fa-database",
    title: { tr: "Veritabanı", en: "Database" },
    tags: ["MSSQL", "Oracle", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: "fa-solid fa-window-maximize",
    title: { tr: "Frontend", en: "Frontend" },
    tags: ["React", "Next.js", "Angular", "TypeScript", "Bootstrap"],
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: { tr: "Mimari & Kavramlar", en: "Architecture & Concepts" },
    tags: ["Clean Architecture", "SOLID", "CQRS", "Repository", "Unit of Work", "Microservices", "DI"],
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: { tr: "Araçlar & Sistem", en: "Tools & System" },
    tags: ["Docker", "RabbitMQ", "Linux CLI", "Electron.js", "Git", "Supabase", "Firebase"],
  },
];

/* ---------- 5. EDUCATION ----------
   NOTE: Fill in real school names + descriptions.  */
const EDUCATION = [
  {
    date: "2025 — Devam",
    title: { tr: "Yönetim Bilişim Sistemleri — Yüksek Lisans", en: "Management Information Systems — M.Sc." },
    org: { tr: "Dokuz Eylül Üniversitesi", en: "Dokuz Eylül University" },
    desc: {
      tr: "Yönetim Bilişim Sistemleri alanında yüksek lisans eğitimime devam ediyorum.",
      en: "Currently pursuing a master's degree in Management Information Systems.",
    },
  },
  {
    date: "2021 — 2023",
    title: { tr: "Yönetim Bilişim Sistemleri — Lisans", en: "Management Information Systems — B.A." },
    org: { tr: "Anadolu Üniversitesi", en: "Anadolu University" },
    desc: {
      tr: "Lisans derecesi. Not ortalaması: 3.12 / 4.00.",
      en: "Bachelor's degree. GPA: 3.12 / 4.00.",
    },
  },
  {
    date: "2017 — 2019",
    title: { tr: "Bilgisayar Programcılığı — Ön Lisans", en: "Computer Programming — Associate" },
    org: { tr: "Dokuz Eylül Üniversitesi", en: "Dokuz Eylül University" },
    desc: {
      tr: "Ön lisans derecesi. Not ortalaması: 3.27 / 4.00.",
      en: "Associate degree. GPA: 3.27 / 4.00.",
    },
  },
];

/* ---------- 6. PROJECTS ----------
   NOTE: These are placeholders. Replace with your real projects
   (title, description, tech tags, GitHub + live links).  */
const PROJECTS = [
  {
    icon: "fa-solid fa-clone",
    title: { tr: "Masabaşı — Online Kart Oyunu Platformu", en: "Masabaşı — Online Card Game Platform" },
    desc: {
      tr: "Tarayıcıda oynanan kart ve masa oyunları için çatı platform. Yayındaki oyun 4 kişilik, 60+ ayarla özelleştirilebilen bir kart oyunu: saf (yan etkisiz) kural motoru, sunucu otoriteli mimari ve oyuncuya göre redakte edilen durum. Gerçek zamanlı senkronizasyon Redis Streams üzerinden SSE ile, kesintide kaldığı yerden devam ederek çalışıyor. 3 seviyeli bot, iki dilli arayüz, 157 motor testi.",
      en: "A hub platform for browser-based card and table games. The live game is a 4-player card game customizable through 60+ settings: a pure (side-effect-free) rules engine, server-authoritative architecture and per-player redacted state. Real-time sync runs over SSE backed by Redis Streams and resumes where it left off after a drop. Three bot levels, bilingual UI, 157 engine tests.",
    },
    tags: ["Next.js", "React", "TypeScript", "Redis", "SSE"],
    code: "",
    live: "https://masabasi.vercel.app",
  },
  {
    icon: "fa-solid fa-brush",
    title: { tr: "Feinkontur — Permanent Make-up Studio", en: "Feinkontur — Permanent Make-up Studio" },
    desc: {
      tr: "Poing'deki (Münih) bir kalıcı makyaj (PMU) & microblading stüdyosu için SEO odaklı kurumsal tanıtım sitesi. Next.js App Router ile geliştirildi; JSON-LD yapılandırılmış veri, self-hosted fontlar, scroll animasyonları ve Shore üzerinden online randevu içerir.",
      en: "An SEO-focused marketing website for a permanent make-up (PMU) & microblading studio in Poing (Munich). Built with the Next.js App Router, featuring JSON-LD structured data, self-hosted fonts, scroll animations and online booking via Shore.",
    },
    tags: ["Next.js", "React", "TypeScript", "SEO", "Responsive"],
    code: "",
    live: "https://feinkontur.com",
  },
  {
    icon: "fa-solid fa-network-wired",
    title: { tr: "Merkezi Sipariş Yönetim API Köprüsü", en: "Central Order Management API Bridge" },
    desc: {
      tr: "Yemeksepeti, Migros Yemek, Getir Yemek ve Trendyol Go'dan gelen webhook verilerini tekilleştirip standartlaştıran durumsuz (stateless) .NET Core mimarisi. Ölçeklenebilir uç noktalar ve veri haritalama mantığıyla kurgulandı.",
      en: "A stateless .NET Core architecture that unifies and standardizes webhook data from Yemeksepeti, Migros Yemek, Getir Yemek and Trendyol Go, built with scalable endpoints and data-mapping logic.",
    },
    tags: [".NET Core", "Web API", "Webhook", "Stateless"],
    code: "",
    live: "",
  },
  {
    icon: "fa-solid fa-route",
    title: { tr: "TripLog — Gezi & Tur Paylaşımı", en: "TripLog — Travel & Tour Sharing" },
    desc: {
      tr: "Kullanıcıların seyahat rotalarını fotoğraflarla paylaşıp etkileşime girdiği sosyal platform. Frontend ve backend ayrı bulut sistemlerinde canlıya alındı. (Demo girişi: tester / test123)",
      en: "A social platform where users share travel routes with photos and interact. Frontend and backend deployed on separate cloud systems. (Demo login: tester / test123)",
    },
    tags: ["Angular", "Web API", "AWS", "Vercel"],
    code: "https://github.com/MelihC6n/TripLog",
    live: "https://trip-log-green.vercel.app",
  },
  {
    icon: "fa-solid fa-warehouse",
    title: { tr: "ERP — Kurumsal Kaynak Planlama", en: "ERP — Enterprise Resource Planning" },
    desc: {
      tr: "İşletmeler için depo, stok, ürün reçeteleri ve satış modüllerini barındıran kapsamlı bir ERP sistemi.",
      en: "A comprehensive ERP system with warehouse, stock, product-recipe and sales modules for businesses.",
    },
    tags: ["ASP.NET Core", "Angular", "Clean Arch.", "CQRS", "MediatR"],
    code: "https://github.com/MelihC6n/ERP-Application",
    live: "",
  },
  {
    icon: "fa-solid fa-calendar-check",
    title: { tr: "E-Appointment — Randevu Sistemi", en: "E-Appointment — Booking System" },
    desc: {
      tr: "Kullanıcıların farklı departmanlardaki doktorlar için takvim üzerinden randevu alıp yönetebildiği dijital sağlık/randevu sistemi.",
      en: "A digital health/appointment system where users book and manage appointments with doctors across departments via a calendar.",
    },
    tags: ["ASP.NET Core", "Angular", "DevExtreme", "SmartEnum"],
    code: "https://github.com/MelihC6n/eAppointment",
    live: "",
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: { tr: "PictureLab AI — Görsel Üretim SaaS", en: "PictureLab AI — Image Generation SaaS" },
    desc: {
      tr: "Kullanıcıların özelleştirilmiş yapay zeka eğitimleri yapıp görsel üretebildiği bir SaaS platformu.",
      en: "A SaaS platform where users run customized AI trainings and generate images.",
    },
    tags: ["Next.js", "Supabase", "Vercel", "Replicate API"],
    code: "",
    live: "",
  },
  {
    icon: "fa-solid fa-video",
    title: { tr: "ShotApp — Kamera Kayıt & Yönetim", en: "ShotApp — Camera Capture & Management" },
    desc: {
      tr: "Kamera kayıtlarını yerel ağ (RTSP) üzerinden alıp işleyen ve otomatik aralıklarla buluta yedekleyen masaüstü kamera kayıt ve yönetim çerçevesi.",
      en: "A desktop framework that captures camera streams over the local network (RTSP), processes them and backs them up to the cloud at automatic intervals.",
    },
    tags: ["Electron.js", "Firebase", "RTSP"],
    code: "",
    live: "",
  },
  {
    icon: "fa-solid fa-compass-drafting",
    title: { tr: "İnşaat Analitik Platformu", en: "Construction Analytics Platform" },
    desc: {
      tr: "Sektörel DXF/DWG dosyalarını değerlendirip mimari katmanları okuyan ve makine öğrenmesiyle yapısal maliyet tahmini için metin parametrelerini ayrıştıran yazılım.",
      en: "Software that evaluates industry DXF/DWG files, reads architectural layers and parses text parameters for structural cost estimation via machine learning.",
    },
    tags: ["Machine Learning", "DXF/DWG", "Parsing"],
    code: "",
    live: "",
  },
  {
    icon: "fa-solid fa-bomb",
    title: { tr: "Gerçek Zamanlı Çok Oyunculu Mayın Tarlası", en: "Real-Time Multiplayer Minesweeper" },
    desc: {
      tr: "Anti-hile protokollerine ve otoriter sunucu mimarisine sahip, rekabetçi mobil bulmaca oyunu. (Yüksek lisans mezuniyet tezi projesi)",
      en: "A competitive mobile puzzle game with anti-cheat protocols and an authoritative server architecture. (Master's graduation thesis project)",
    },
    tags: ["Real-time", "Multiplayer", "Anti-cheat"],
    code: "",
    live: "",
  },
  {
    icon: "fa-solid fa-burger",
    title: { tr: "MyBurger — Restoran Menü & Sipariş", en: "MyBurger — Restaurant Menu & Ordering" },
    desc: {
      tr: "Dinamik malzeme ekleme ve kişiselleştirilebilir sipariş süreçlerini yöneten restoran otomasyonu.",
      en: "A restaurant automation handling dynamic ingredient selection and customizable ordering flows.",
    },
    tags: ["Vanilla JS", "Bootstrap", "ASP.NET Core"],
    code: "https://github.com/MelihC6n/MyBurger",
    live: "",
  },
];

/* ---------- 7. EXPERIENCE ----------
   NOTE: Confirm/replace with your real roles.  */
const EXPERIENCE = [
  {
    date: "2025 Kasım — Devam",
    title: { tr: "Full-Stack Software Developer", en: "Full-Stack Software Developer" },
    org: { tr: "Sinerji Bilişim", en: "Sinerji Bilişim" },
    desc: {
      tr: "BizmedWeb projesinde çalışmaya devam ederek Sinerji Bilişim bünyesinde görevimi sürdürüyorum.",
      en: "Continuing my work on the BizmedWeb project as part of Sinerji Bilişim.",
    },
  },
  {
    date: "2025 Nisan — 2025 Kasım",
    title: { tr: "Full-Stack Software Developer", en: "Full-Stack Software Developer" },
    org: { tr: "NeveraTech", en: "NeveraTech" },
    desc: {
      tr: "MERN mimarisinde web uygulamaları, .NET ile backend API'ler, Electron ile masaüstü uygulamaları ve yapay zeka API'leriyle video üretme uygulamaları geliştirdim; ardından BizmedWeb projesine odaklandım.",
      en: "Built web apps on the MERN stack, backend APIs with .NET, desktop apps with Electron and AI-powered video generation apps; then focused on the BizmedWeb project.",
    },
  },
  {
    date: "2024 Haziran — 2025 Mart",
    title: { tr: "Full-Stack .NET Developer (Trainee)", en: "Full-Stack .NET Developer (Trainee)" },
    org: { tr: "İstanbul Eğitim Akademi · Yetenek Başakşehir", en: "İstanbul Eğitim Akademi · Yetenek Başakşehir" },
    desc: {
      tr: "480 saatlik full-stack odaklı teknik ve pratik eğitim aldım. .NET'in yanı sıra Node.js ile MERN stack uyguladım ve TripLog projesini yayına aldım.",
      en: "Completed a 480-hour full-stack focused technical and practical program. Applied the MERN stack with Node.js alongside .NET and shipped the TripLog project.",
    },
  },
  {
    date: "2019 Haziran — 2019 Eylül",
    title: { tr: "Junior Backend Developer (Staj)", en: "Junior Backend Developer (Intern)" },
    org: { tr: "DEÜ Bilgi İşlem Daire Başkanlığı", en: "DEÜ IT Department" },
    desc: {
      tr: "Üniversite yönetimindeki bir otel için kullanıcı ve personel taraflı bir rezervasyon sitesinin back-end geliştirmesinde görev aldım.",
      en: "Worked on the back-end of a reservation website (guest and staff sides) for a hotel run by the university administration.",
    },
  },
];

/* ============================================================
   RENDERING
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

let lang = localStorage.getItem("lang") || "tr";

function renderFacts() {
  $("#about-facts").innerHTML = FACTS.map(
    (f) => `
    <li>
      <span class="fact-label">${f.label[lang]}</span>
      <span class="fact-value">${f.value[lang]}</span>
    </li>`
  ).join("");
}

function renderSkills() {
  $("#skills-grid").innerHTML = SKILLS.map(
    (s) => `
    <article class="skill-card">
      <div class="skill-icon"><i class="${s.icon}"></i></div>
      <h3>${s.title[lang]}</h3>
      <div class="skill-tags">${s.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </article>`
  ).join("");
}

function renderTimeline(target, items) {
  $(target).innerHTML = items
    .map(
      (it) => `
    <div class="tl-item">
      <div class="tl-date">${it.date}</div>
      <div class="tl-card">
        <h3>${it.title[lang]}</h3>
        <div class="tl-org">${it.org[lang]}</div>
        <p>${it.desc[lang]}</p>
      </div>
    </div>`
    )
    .join("");
}

function renderProjects() {
  const t = I18N[lang];
  $("#projects-grid").innerHTML = PROJECTS.map((p, i) => {
    const codeLink = p.code
      ? `<a href="${p.code}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> ${t["projects.code"]}</a>`
      : "";
    const liveLink = p.live
      ? `<a href="${p.live}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${t["projects.live"]}</a>`
      : "";
    const links = codeLink || liveLink ? `<div class="project-links">${codeLink}${liveLink}</div>` : "";
    return `
    <article class="project-card">
      <div class="project-head">
        <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
        <i class="${p.icon} project-icon"></i>
      </div>
      <h3>${p.title[lang]}</h3>
      <p>${p.desc[lang]}</p>
      <div class="project-tags">${p.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      ${links}
    </article>`;
  }).join("");
}

function renderAll() {
  renderFacts();
  renderSkills();
  renderTimeline("#education-timeline", EDUCATION);
  renderTimeline("#experience-timeline", EXPERIENCE);
  renderProjects();
}

/* ============================================================
   I18N + LANGUAGE SWITCH
   ============================================================ */
function applyStrings() {
  const dict = I18N[lang];
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
}

function setLang(next) {
  lang = next;
  localStorage.setItem("lang", next);
  $$(".lang-toggle button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === next)
  );
  applyStrings();
  renderAll();
  typer.restart();
}

/* ============================================================
   TYPING EFFECT
   ============================================================ */
const typer = (() => {
  const el = $("#typing");
  let words = ROLES[lang];
  let wi = 0,
    ci = 0,
    deleting = false,
    timeout = null;

  function tick() {
    const word = words[wi];
    ci += deleting ? -1 : 1;
    el.textContent = word.slice(0, ci);

    let delay = deleting ? 55 : 110;
    if (!deleting && ci === word.length) {
      delay = 1600;
      deleting = true;
    } else if (deleting && ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
      delay = 350;
    }
    timeout = setTimeout(tick, delay);
  }

  return {
    start() {
      tick();
    },
    restart() {
      clearTimeout(timeout);
      words = ROLES[lang];
      wi = 0;
      ci = 0;
      deleting = false;
      el.textContent = "";
      tick();
    },
  };
})();

/* ============================================================
   INTERACTIONS
   ============================================================ */
function initHeader() {
  const header = $(".site-header");
  const navLinks = $("#nav-links");
  const menuBtn = $("#menu-btn");

  // sticky border on scroll
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mobile menu
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  // close menu on link click
  $$("#nav-links a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    })
  );
}

function initNavHighlight() {
  const links = $$("#nav-links a");
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          map.get(e.target.id)?.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  $$("section[id]").forEach((s) => observer.observe(s));
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => observer.observe(el));
}

function initLangToggle() {
  $$(".lang-toggle button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang))
  );
}

function initContactForm() {
  const form = $("#contact-form");
  form.addEventListener("submit", (e) => {
    // Until a Formspree ID is set, fall back to a mailto link so the form still works.
    if (form.action.includes("your-id")) {
      e.preventDefault();
      const name = encodeURIComponent($("#name").value);
      const email = encodeURIComponent($("#email").value);
      const msg = encodeURIComponent($("#message").value);
      const subject = `Portfolio — ${decodeURIComponent(name)}`;
      const body = `${decodeURIComponent(msg)}%0D%0A%0D%0A— ${decodeURIComponent(
        name
      )} (${decodeURIComponent(email)})`;
      window.location.href = `mailto:melihcanakgunes@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  // set initial lang button state
  $$(".lang-toggle button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );

  applyStrings();
  renderAll();

  initHeader();
  initNavHighlight();
  initReveal();
  initLangToggle();
  initContactForm();

  typer.start();
});
