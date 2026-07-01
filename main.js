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
      "Temiz ve ölçeklenebilir backend sistemleri kurmaya odaklanan bir yazılım geliştiriciyim. .NET ekosistemi, API tasarımı ve veritabanlarıyla çalışıyorum.",
    "hero.cta1": "İletişime geç",
    "hero.cta2": "Projeleri gör",

    "about.eyebrow": "Tanışalım",
    "about.title": "Hakkımda",
    "about.p1":
      "Backend geliştirmeye tutkuyla bağlı bir yazılımcıyım. .NET Core, C# ve ilişkisel veritabanlarıyla güvenilir, sürdürülebilir servisler yazmayı seviyorum. Öğrenmeye ve iyi mühendislik pratiklerine önem veririm.",
    "about.p2":
      "Şu anda full-stack yetkinliğimi geliştiriyor, gerçek dünya problemlerine çözüm üreten projeler üzerinde çalışıyorum.",

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
      "A software developer focused on building clean, scalable backend systems. I work with the .NET ecosystem, API design and databases.",
    "hero.cta1": "Get in touch",
    "hero.cta2": "View projects",

    "about.eyebrow": "Get to know me",
    "about.title": "About Me",
    "about.p1":
      "I'm a developer passionate about backend engineering. I enjoy writing reliable, maintainable services with .NET Core, C# and relational databases. I care about learning and solid engineering practices.",
    "about.p2":
      "I'm currently expanding my full-stack skill set and working on projects that solve real-world problems.",

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
  tr: ["Backend Geliştirici", ".NET Geliştirici", "Veritabanı Geliştirici", "Full-Stack Geliştirici"],
  en: ["Backend Developer", ".NET Developer", "Database Developer", "Full-Stack Developer"],
};

/* ---------- 3. ABOUT FACTS ---------- */
const FACTS = [
  { icon: "fa-solid fa-location-dot", label: { tr: "Konum", en: "Location" }, value: { tr: "İstanbul, Türkiye", en: "İstanbul, Türkiye" } },
  { icon: "fa-solid fa-crosshairs", label: { tr: "Odak", en: "Focus" }, value: { tr: "Backend & .NET", en: "Backend & .NET" } },
  { icon: "fa-solid fa-language", label: { tr: "Diller", en: "Languages" }, value: { tr: "Türkçe, İngilizce", en: "Turkish, English" } },
  { icon: "fa-solid fa-circle-check", label: { tr: "Durum", en: "Status" }, value: { tr: "Yeni fırsatlara açık", en: "Open to opportunities" } },
];

/* ---------- 4. SKILLS ---------- */
const SKILLS = [
  {
    icon: "fa-solid fa-code",
    title: { tr: "Diller", en: "Languages" },
    tags: ["C#", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: "fa-solid fa-server",
    title: { tr: "Backend", en: "Backend" },
    tags: [".NET Core", "ASP.NET Core", "Web API", "Entity Framework", "LINQ"],
  },
  {
    icon: "fa-solid fa-database",
    title: { tr: "Veritabanı", en: "Database" },
    tags: ["MS SQL Server", "T-SQL", "EF Core", "Stored Procedures"],
  },
  {
    icon: "fa-solid fa-window-maximize",
    title: { tr: "Frontend", en: "Frontend" },
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: { tr: "Araçlar", en: "Tools" },
    tags: ["Git & GitHub", "Visual Studio", "VS Code", "Postman"],
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: { tr: "Kavramlar", en: "Concepts" },
    tags: ["OOP", "REST API", "MVC", "SOLID", "Clean Code"],
  },
];

/* ---------- 5. EDUCATION ----------
   NOTE: Fill in real school names + descriptions.  */
const EDUCATION = [
  {
    date: "2024 — Present",
    title: { tr: "Yetenek Başakşehir Full-Stack Bootcamp", en: "Yetenek Başakşehir Full-Stack Bootcamp" },
    org: { tr: "Bootcamp", en: "Bootcamp" },
    desc: {
      tr: "Full-stack web geliştirme üzerine yoğun eğitim: .NET, veritabanı ve modern web teknolojileri.",
      en: "Intensive full-stack web development program: .NET, databases and modern web technologies.",
    },
  },
  {
    date: "2024",
    title: { tr: ".NET Core Bootcamp", en: ".NET Core Bootcamp" },
    org: { tr: "Bootcamp", en: "Bootcamp" },
    desc: {
      tr: ".NET Core ile backend geliştirme, Web API ve katmanlı mimari üzerine uygulamalı eğitim.",
      en: "Hands-on backend development with .NET Core, Web API and layered architecture.",
    },
  },
  {
    date: "2023",
    title: { tr: "Lisans Derecesi", en: "Bachelor's Degree" },
    org: { tr: "Üniversite", en: "University" },
    desc: {
      tr: "Lisans eğitimi. (Bölüm ve üniversite bilgisini buraya ekle.)",
      en: "Bachelor's education. (Add your major and university here.)",
    },
  },
  {
    date: "2019",
    title: { tr: "Ön Lisans Derecesi", en: "Associate Degree" },
    org: { tr: "Üniversite", en: "University" },
    desc: {
      tr: "Ön lisans eğitimi. (Bölüm ve okul bilgisini buraya ekle.)",
      en: "Associate education. (Add your program and school here.)",
    },
  },
];

/* ---------- 6. PROJECTS ----------
   NOTE: These are placeholders. Replace with your real projects
   (title, description, tech tags, GitHub + live links).  */
const PROJECTS = [
  {
    icon: "fa-solid fa-cart-shopping",
    title: { tr: "E-Ticaret API", en: "E-Commerce API" },
    desc: {
      tr: "Ürün, sepet ve sipariş yönetimi için RESTful Web API. Katmanlı mimari ve EF Core ile geliştirildi.",
      en: "RESTful Web API for product, cart and order management. Built with layered architecture and EF Core.",
    },
    tags: [".NET Core", "Web API", "EF Core", "MS SQL"],
    code: "https://github.com/MelihC6n",
    live: "",
  },
  {
    icon: "fa-solid fa-list-check",
    title: { tr: "Görev Yönetimi Uygulaması", en: "Task Management App" },
    desc: {
      tr: "Kullanıcıların görev oluşturup takip edebildiği bir uygulama. Kimlik doğrulama ve CRUD işlemleri.",
      en: "An app where users create and track tasks. Includes authentication and full CRUD operations.",
    },
    tags: ["ASP.NET Core", "MVC", "SQL Server"],
    code: "https://github.com/MelihC6n",
    live: "",
  },
  {
    icon: "fa-solid fa-blog",
    title: { tr: "Blog / İçerik Yönetimi", en: "Blog / CMS" },
    desc: {
      tr: "Yazı, kategori ve yorum yönetimi olan basit bir içerik yönetim sistemi.",
      en: "A simple content management system with posts, categories and comments.",
    },
    tags: ["C#", ".NET", "Entity Framework"],
    code: "https://github.com/MelihC6n",
    live: "",
  },
];

/* ---------- 7. EXPERIENCE ----------
   NOTE: Confirm/replace with your real roles.  */
const EXPERIENCE = [
  {
    date: "2024 — Present",
    title: { tr: "Yazılım Geliştirici", en: "Software Developer" },
    org: { tr: "Bizmed", en: "Bizmed" },
    desc: {
      tr: "(Rolünü, kullandığın teknolojileri ve katkılarını buraya yaz.)",
      en: "(Describe your role, the technologies you use and your contributions here.)",
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
      window.location.href = `mailto:makgunes@bizmed.biz?subject=${encodeURIComponent(
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
