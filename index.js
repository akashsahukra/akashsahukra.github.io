/* ==========================================================================
   Akash Sahukara Portfolio - Interactive Engine
   ========================================================================== */

// 1. Data Store containing resume contents and structures
const filesData = {
  "info/about_me.md": {
    name: "about_me.md",
    path: "info/about_me.md",
    lang: "Markdown",
    content: `# Akash Sahukara
## Senior Software Engineer at Rakuten India
Email: akashsahukara@gmail.com | Phone: +91-9502485588 | Location: Bangalore, India

### Profile Summary
Highly analytical and detail-oriented Senior Software Engineer with over 4 years of expertise in designing and optimizing large-scale distributed systems, microservices, and event-driven architectures. Specialized in Java, Spring Boot, Apache Kafka, gRPC, and Couchbase, handling billing systems serving 10M+ subscribers.

### Primary Interests
- High-Performance Backend Systems
- Event-Driven Architecture & Message Brokers
- Cloud-Native Billing & Telecommunication Systems
- Low-Latency Service Design and Batch Schedulers

---
*Tip: Toggle the "Preview" button in the upper-right corner of the editor to view this page in a modern rendered UI layout, or type "neofetch" in the terminal below.*`
  },
  
  "skills/skills.json": {
    name: "skills.json",
    path: "skills/skills.json",
    lang: "JSON",
    content: `{
  "skills": {
    "backend_cloud": [
      "Java", 
      "Spring Boot", 
      "Microservices", 
      "Kafka", 
      "gRPC", 
      "REST APIs"
    ],
    "databases": [
      "Couchbase", 
      "SQL", 
      "NoSQL"
    ],
    "architecture": [
      "Event-Driven Systems", 
      "Cloud Native BSS", 
      "Distributed Systems"
    ],
    "languages": [
      "Java", 
      "Python", 
      "C++"
    ],
    "web_frontend": [
      "Angular", 
      "JavaScript", 
      "HTML", 
      "CSS", 
      "Bootstrap"
    ],
    "tools_devops": [
      "Grafana", 
      "Prometheus", 
      "Git", 
      "CI/CD"
    ]
  }
}`
  },

  "career/experience.yaml": {
    name: "experience.yaml",
    path: "career/experience.yaml",
    lang: "YAML",
    content: `work_experience:
  - role: "Senior Software Engineer"
    company: "Rakuten India"
    duration: "Jun 2024 – Present"
    key_achievements:
      - "Primary backend owner for Bill Invoice, Bill Document Generation, and DMS microservices serving a 10M+ subscriber telecom platform."
      - "Designed event-driven billing flows using Spring Boot, Kafka, gRPC/REST, and Couchbase across invoice and collection pipelines."
      - "Authored end-to-end LLD and service design for Rate Composer service for call, SMS, and data usage rating delivered from design to production."
      - "Improved Kafka producer throughput using buffered batch publishing instead of single-message sends to reduce topic overhead."
      - "Built scheduler and batch frameworks for charge extraction, migration billing, and remediation workflows."
      - "Resolved production billing spikes within ~2 hours using deep debugging and targeted correction scripts."
      - "Created production-safe billing data remediation scripts preventing customer impact and SLA breaches."
      - "Mentored junior engineers and led PR reviews on design, performance, and code quality practices."

  - role: "Software Engineer"
    company: "Rakuten Symphony"
    duration: "Apr 2022 – May 2024"
    key_achievements:
      - "Core backend engineer in Cloud Native BSS billing platform delivering invoice and billing microservices."
      - "Led invoice structure and billing workflow enhancements for B2B telecom systems."
      - "Implemented distributed services using Spring Boot, Kafka, gRPC, and REST."
      - "Reduced invoice job execution time by ~30% by decoupling heavy PDF generation workloads and isolating compute-heavy stages."
      - "Delivered billing pipeline optimizations reducing bulk processing bottlenecks."

  - role: "Associate Software Engineer"
    company: "Rakuten India"
    duration: "Jun 2021 – Apr 2022"
    key_achievements:
      - "Developed backend services for CRM and ISP BFF telecom platforms."
      - "Built invoice creation and billing calculation components; integrated storage with AWS S3."
      - "Created Grafana dashboards using Prometheus queries adopted across teams."
      - "Delivered Spring Boot microservices and REST integrations."

  - role: "Technical Intern"
    company: "Rakuten India"
    duration: "Mar 2021 – Jun 2021"
    key_achievements:
      - "Built Spring Boot and Kafka-based backend services."
      - "Worked on microservice features and REST/API integrations."`
  },

  "projects/github_repos.js": {
    name: "github_repos.js",
    path: "projects/github_repos.js",
    lang: "JavaScript",
    content: `// Live Project Integrations
// These repositories are fetched dynamically from https://api.github.com/users/akashsahukra/repos
const projects = [
  {
    name: "TODO-CLI",
    description: "A colorful, interactive command-line interface for task management.",
    language: "Python",
    stars: 1,
    url: "https://github.com/akashsahukra/TODO-CLI"
  },
  {
    name: "computer-programming-responsive-iiith",
    description: "Responsive virtual laboratory portal for Computer Programming (IIIT Hyderabad).",
    language: "JavaScript",
    stars: 0,
    url: "https://github.com/akashsahukra/computer-programming-responsive-iiith"
  },
  {
    name: "vlsi-iiith-js",
    description: "Interactive simulation pages for VLSI lab experiments using Javascript.",
    language: "Java",
    stars: 0,
    url: "https://github.com/akashsahukra/vlsi-iiith-js"
  },
  {
    name: "key-value",
    description: "Custom lightweight key-value database implementation.",
    language: "Python",
    stars: 0,
    url: "https://github.com/akashsahukra/key-value"
  },
  {
    name: "pattern-recognition-iiith",
    description: "Pattern recognition virtual lab module algorithms.",
    language: "HTML",
    stars: 0,
    url: "https://github.com/akashsahukra/pattern-recognition-iiith"
  }
];

export default projects;`
  },

  "contact/contact_me.sh": {
    name: "contact_me.sh",
    path: "contact/contact_me.sh",
    lang: "Bash",
    content: `#!/bin/bash

# Contact details for Akash Sahukara
EMAIL="akashsahukara@gmail.com"
PHONE="+91-9502485588"
LINKEDIN="linkedin.com/in/akashsahukara"
GITHUB="github.com/akashsahukra"

send_message() {
  local name="$1"
  local email="$2"
  local message="$3"
  
  echo "Initiating handshake with smtp.gmail.com..."
  echo "Sending message from \${name} <\${email}>..."
  echo "Success! Message sent successfully."
}

# Run the terminal command to mail me directly:
# mailto:akashsahukara@gmail.com`
  }
};

// State Variables
let openTabs = [];
let activeFile = null;
let currentTheme = "dracula";
let defaultMode = "preview"; // "preview" or "code"
let isDraggingResizer = false;

// 2. DOM Elements Cache
const el = {
  themeSelector: document.getElementById("theme-selector"),
  sidebarPanel: document.getElementById("sidebar-panel"),
  btnExplorer: document.getElementById("btn-explorer"),
  btnTogglePreview: document.getElementById("btn-toggle-preview"),
  tabsContainer: document.getElementById("tabs-container"),
  lineNumbersContainer: document.getElementById("line-numbers-container"),
  codeOutput: document.getElementById("code-output"),
  codeContent: document.getElementById("code-content"),
  previewContainer: document.getElementById("editor-preview-container"),
  blankState: document.getElementById("editor-blank-state"),
  terminalInput: document.getElementById("terminal-input"),
  terminalHistory: document.getElementById("terminal-history"),
  terminalContainer: document.getElementById("terminal-container"),
  terminalClear: document.getElementById("terminal-clear-btn"),
  terminalMaximize: document.getElementById("terminal-maximize-btn"),
  terminalClose: document.getElementById("terminal-close-btn"),
  bottomPanelGroup: document.getElementById("bottom-panel-group"),
  panelResizer: document.getElementById("panel-resizer"),
  editorGroup: document.getElementById("editor-group"),
  statusLine: document.getElementById("status-line"),
  statusCol: document.getElementById("status-col"),
  statusLang: document.getElementById("status-lang"),
  settingsModal: document.getElementById("settings-modal"),
  settingsClose: document.getElementById("settings-close"),
  btnSettings: document.getElementById("btn-settings"),
  btnProfile: document.getElementById("btn-profile"),
  btnGit: document.getElementById("btn-git"),
  btnProjects: document.getElementById("btn-projects"),
  fontSizeSelect: document.getElementById("setting-fontsize"),
  terminalHeightSelect: document.getElementById("setting-terminal-height"),
  openModeSelect: document.getElementById("setting-visual-mode"),
  settingsResetBtn: document.getElementById("settings-reset")
};

// GitHub repos backup array
let fetchedProjects = [];

// 3. Syntax Highlighter Engine
function syntaxHighlight(code, lang) {
  // Escapes HTML tags to prevent execution
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (lang === "JSON") {
    // Strings in JSON
    escaped = escaped.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")/g, '<span class="code-string">$1</span>');
    // Keys (strings before colon)
    escaped = escaped.replace(/(<span class="code-string">.*?<\/span>)(?=\s*:)/g, '<span class="code-keyword">$1</span>');
    // Numbers
    escaped = escaped.replace(/\b(-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/g, '<span class="code-number">$1</span>');
    // Booleans
    escaped = escaped.replace(/\b(true|false|null)\b/g, '<span class="code-boolean">$1</span>');
  } 
  else if (lang === "YAML") {
    // Keys
    escaped = escaped.replace(/^(\s*)([a-zA-Z0-9_-]+)(?=\s*:)/gm, '$1<span class="code-keyword">$2</span>');
    // Values strings
    escaped = escaped.replace(/(:\s+)(["'].*?["']|[a-zA-Z0-9_\s–\.\+\#\-]+)$/gm, '$1<span class="code-string">$2</span>');
    // Comments
    escaped = escaped.replace(/(#.*)$/gm, '<span class="code-comment">$1</span>');
  } 
  else if (lang === "Markdown") {
    // Headers
    escaped = escaped.replace(/^(#{1,6}\s+.*)$/gm, '<span class="code-keyword">$1</span>');
    // Bullet points
    escaped = escaped.replace(/^(\s*[-*+]\s+)/gm, '<span class="code-tag">$1</span>');
    // Italic details
    escaped = escaped.replace(/(\*.*?\*)/g, '<span class="code-comment">$1</span>');
    // Links
    escaped = escaped.replace(/(\[.*?\]\(.*?\))/g, '<span class="code-variable">$1</span>');
  } 
  else if (lang === "JavaScript") {
    // Keywords
    const keywords = /\b(const|let|var|function|return|class|export|default|import|from|typeof|new|if|else|for|while)\b/g;
    escaped = escaped.replace(keywords, '<span class="code-keyword">$1</span>');
    // Strings
    escaped = escaped.replace(/(["'`].*?["`])/g, '<span class="code-string">$1</span>');
    // Comments
    escaped = escaped.replace(/(\/\/.*)$/gm, '<span class="code-comment">$1</span>');
    // Numbers
    escaped = escaped.replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');
  } 
  else if (lang === "Bash") {
    // Shebang
    escaped = escaped.replace(/^(#!.*)$/m, '<span class="code-comment">$1</span>');
    // Commands
    escaped = escaped.replace(/\b(echo|curl|local|exit|if|then|fi|echo)\b/g, '<span class="code-keyword">$1</span>');
    // Variables
    escaped = escaped.replace(/(\$[a-zA-Z0-9_]+|\$\{[a-zA-Z0-9_]+\})/g, '<span class="code-variable">$1</span>');
    // Strings
    escaped = escaped.replace(/(["'].*?["'])/g, '<span class="code-string">$1</span>');
    // Comments
    escaped = escaped.replace(/(#.*)$/gm, '<span class="code-comment">$1</span>');
  }
  
  return escaped;
}

// Update line numbers count
function updateLineNumbers(code) {
  const linesCount = code.split("\n").length;
  let numbersHtml = "";
  for (let i = 1; i <= linesCount; i++) {
    numbersHtml += `<div>${i}</div>`;
  }
  el.lineNumbersContainer.innerHTML = numbersHtml;
}

// 4. Visual Rendering Engines
function renderVisualPreview(filePath) {
  if (filePath === "info/about_me.md") {
    el.previewContainer.innerHTML = `
      <div class="preview-card" style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
        <div style="background-color: var(--bg-secondary); border: 2px solid var(--accent-color); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; box-shadow: 0 0 15px var(--accent-color);">
          <i class="fa-solid fa-code"></i>
        </div>
        <div>
          <h2 style="font-size: 28px; color: var(--accent-color);">Akash Sahukara</h2>
          <p style="font-size: 16px; opacity: 0.85;">Senior Software Engineer @ Rakuten India</p>
          <p style="font-size: 14px; color: var(--text-muted);"><i class="fa-solid fa-location-dot"></i> Bangalore, India</p>
        </div>
      </div>
      
      <div class="preview-card">
        <h3 class="preview-title"><i class="fa-solid fa-user-tie"></i> Executive Summary</h3>
        <p style="font-size: 15px; line-height: 1.7; opacity: 0.9;">
          Highly analytical and detail-oriented Senior Software Engineer with over 4 years of expertise in designing and optimizing large-scale distributed systems, microservices, and event-driven architectures. 
          Currently driving critical billing, document generation, and rate composing services at Rakuten serving over 10M+ subscribers, optimizing performance, memory footprint, and message throughput.
        </p>
      </div>

      <div class="preview-card">
        <h3 class="preview-title"><i class="fa-solid fa-address-card"></i> Contact Information & Quick Links</h3>
        <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 15px;">
          <a class="btn-contact" href="mailto:akashsahukara@gmail.com"><i class="fa-solid fa-envelope"></i> Email Me</a>
          <a class="btn-contact" style="background-color: #0077b5;" href="https://linkedin.com/in/akashsahukara" target="_blank"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</a>
          <a class="btn-contact" style="background-color: #2b3137;" href="https://github.com/akashsahukra" target="_blank"><i class="fa-brands fa-github"></i> GitHub Profile</a>
          <button class="btn-contact" style="background-color: var(--accent-secondary);" onclick="downloadResume()"><i class="fa-solid fa-download"></i> Download Resume (PDF)</button>
        </div>
      </div>
    `;
  } 
  else if (filePath === "skills/skills.json") {
    try {
      const skillsObj = JSON.parse(filesData["skills/skills.json"].content).skills;
      let categoriesHtml = "";
      
      const icons = {
        backend_cloud: "fa-server",
        databases: "fa-database",
        architecture: "fa-cubes",
        languages: "fa-code",
        web_frontend: "fa-window-maximize",
        tools_devops: "fa-screwdriver-wrench"
      };

      const titles = {
        backend_cloud: "Backend & Cloud",
        databases: "Databases",
        architecture: "Architecture",
        languages: "Languages",
        web_frontend: "Web Frontend",
        tools_devops: "Tools & DevOps"
      };

      for (let category in skillsObj) {
        let skillsHtml = skillsObj[category].map(skill => `
          <div class="skill-tag">
            <i class="fa-solid ${icons[category] || 'fa-code'}"></i>
            <span>${skill}</span>
          </div>
        `).join("");

        categoriesHtml += `
          <div class="preview-card">
            <h3 class="preview-title"><i class="fa-solid ${icons[category] || 'fa-code'}"></i> ${titles[category] || category}</h3>
            <div class="skills-grid">
              ${skillsHtml}
            </div>
          </div>
        `;
      }

      el.previewContainer.innerHTML = categoriesHtml;
    } catch (e) {
      el.previewContainer.innerHTML = `<div class="preview-card output-error">Error rendering skills preview. Syntax error in skills.json.</div>`;
    }
  } 
  else if (filePath === "career/experience.yaml") {
    el.previewContainer.innerHTML = `
      <div class="preview-card">
        <h2 class="preview-title"><i class="fa-solid fa-briefcase"></i> Work Experience</h2>
        <div class="timeline">
          
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-header">
              <span class="timeline-title"><span class="timeline-company">Rakuten India</span> - Senior Software Engineer</span>
              <span class="timeline-date">Jun 2024 – Present</span>
            </div>
            <div class="timeline-body">
              <ul>
                <li>Primary backend owner for Bill Invoice, Bill Document Generation, and DMS microservices serving a 10M+ subscriber telecom platform.</li>
                <li>Designed event-driven billing flows using Spring Boot, Kafka, gRPC/REST, and Couchbase across invoice and collection pipelines.</li>
                <li>Authored end-to-end LLD and service design for Rate Composer service for call, SMS, and data usage rating delivered from design to production.</li>
                <li>Improved Kafka producer throughput using buffered batch publishing instead of single-message sends.</li>
                <li>Built scheduler and batch frameworks for charge extraction, migration billing, and remediation workflows.</li>
                <li>Resolved production billing spikes within ~2 hours using deep debugging and targeted correction scripts.</li>
                <li>Mentored junior engineers on design, performance, and code quality.</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-header">
              <span class="timeline-title"><span class="timeline-company">Rakuten Symphony</span> - Software Engineer</span>
              <span class="timeline-date">Apr 2022 – May 2024</span>
            </div>
            <div class="timeline-body">
              <ul>
                <li>Core backend engineer in Cloud Native BSS billing platform delivering invoice and billing microservices.</li>
                <li>Led invoice structure and billing workflow enhancements for B2B telecom systems.</li>
                <li>Implemented distributed services using Spring Boot, Kafka, gRPC, and REST.</li>
                <li>Reduced invoice job execution time by ~30% by decoupling heavy PDF generation workloads and isolating compute-heavy stages.</li>
                <li>Delivered billing pipeline optimizations reducing bulk processing bottlenecks.</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-header">
              <span class="timeline-title"><span class="timeline-company">Rakuten India</span> - Associate Software Engineer</span>
              <span class="timeline-date">Jun 2021 – Apr 2022</span>
            </div>
            <div class="timeline-body">
              <ul>
                <li>Developed backend services for CRM and ISP BFF telecom platforms.</li>
                <li>Built invoice creation and billing calculation components; integrated storage with AWS S3.</li>
                <li>Created Grafana dashboards using Prometheus queries adopted across teams.</li>
                <li>Delivered Spring Boot microservices and REST integrations.</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-header">
              <span class="timeline-title"><span class="timeline-company">Rakuten India</span> - Technical Intern</span>
              <span class="timeline-date">Mar 2021 – Jun 2021</span>
            </div>
            <div class="timeline-body">
              <ul>
                <li>Built Spring Boot and Kafka-based backend services and REST integrations.</li>
                <li>Worked on microservice features and API integrations.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      
      <div class="preview-card">
        <h3 class="preview-title"><i class="fa-solid fa-graduation-cap"></i> Education</h3>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
          <div>
            <h4 style="font-size: 16px; font-weight: 600;">B.Tech in Computer Science and Engineering</h4>
            <p style="opacity: 0.8;">Anil Neerukonda Institute of Technology and Sciences</p>
          </div>
          <div style="text-align: right;">
            <p style="font-weight: 600; color: var(--accent-light);">GPA: 8.8 / 10</p>
            <p style="font-size: 13px; color: var(--text-muted);">Class of 2021</p>
          </div>
        </div>
      </div>
    `;
  } 
  else if (filePath === "projects/github_repos.js") {
    // Show loading spinner if fetching
    let reposHtml = "";
    const displayList = fetchedProjects.length > 0 ? fetchedProjects : [
      { name: "TODO-CLI", description: "A colorful, interactive command-line interface for task management.", language: "Python", stargazers_count: 1, html_url: "https://github.com/akashsahukra/TODO-CLI" },
      { name: "computer-programming-responsive-iiith", description: "Responsive virtual laboratory portal for Computer Programming (IIIT Hyderabad).", language: "JavaScript", stargazers_count: 0, html_url: "https://github.com/akashsahukra/computer-programming-responsive-iiith" },
      { name: "vlsi-iiith-js", description: "Interactive simulation pages for VLSI lab experiments using Javascript.", language: "Java", stargazers_count: 0, html_url: "https://github.com/akashsahukra/vlsi-iiith-js" },
      { name: "key-value", description: "Custom lightweight key-value database implementation in Python.", language: "Python", stargazers_count: 0, html_url: "https://github.com/akashsahukra/key-value" },
      { name: "pattern-recognition-iiith", description: "Pattern recognition virtual lab module algorithms.", language: "HTML", stargazers_count: 0, html_url: "https://github.com/akashsahukra/pattern-recognition-iiith" }
    ];

    reposHtml = displayList.map(repo => {
      const langClass = repo.language ? `lang-${repo.language.toLowerCase()}` : 'lang-fallback';
      return `
        <div class="project-card">
          <div>
            <div class="project-meta">
              <i class="fa-solid fa-code-fork project-icon"></i>
              <span class="project-stars"><i class="fa-solid fa-star"></i> ${repo.stargazers_count || 0}</span>
            </div>
            <h4 class="project-name">${repo.name}</h4>
            <p class="project-desc">${repo.description || 'No description provided.'}</p>
          </div>
          <div class="project-footer">
            <span class="project-lang">
              <span class="lang-color ${langClass}"></span>
              <span>${repo.language || 'Code'}</span>
            </span>
            <a class="project-link" href="${repo.html_url}" target="_blank">Repository <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      `;
    }).join("");

    el.previewContainer.innerHTML = `
      <div class="preview-card">
        <h2 class="preview-title"><i class="fa-solid fa-laptop-code"></i> GitHub Repositories</h2>
        <p style="margin-bottom: 20px; font-size: 14px; opacity: 0.85;">
          The following public repositories represent academic lab contributions, utility CLI scripts, and practice repositories. 
          <em>Note: Career projects built during full-time work at Rakuten India and Rakuten Symphony are proprietary and listed under the experience timeline.</em>
        </p>
        <div class="projects-grid">
          ${reposHtml}
        </div>
      </div>
    `;
  } 
  else if (filePath === "contact/contact_me.sh") {
    el.previewContainer.innerHTML = `
      <div class="preview-card">
        <h2 class="preview-title"><i class="fa-solid fa-paper-plane"></i> Contact Me</h2>
        <p style="margin-bottom: 20px; font-size: 15px; opacity: 0.85;">
          Feel free to reach out to discuss distributed architectures, backend engineering positions, or general technical chat!
        </p>
        
        <form id="contact-form" onsubmit="handleFormSubmit(event)" style="display: flex; flex-direction: column; gap: 15px; max-width: 500px;">
          <div style="display: flex; flex-direction: column; gap: 5px;">
            <label style="font-size: 13px; font-weight: 500;">Your Name</label>
            <input type="text" id="form-name" required placeholder="John Doe" style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); padding: 10px; border-radius: 4px; color: var(--text-normal); outline: none;">
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 5px;">
            <label style="font-size: 13px; font-weight: 500;">Your Email Address</label>
            <input type="email" id="form-email" required placeholder="john.doe@example.com" style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); padding: 10px; border-radius: 4px; color: var(--text-normal); outline: none;">
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 5px;">
            <label style="font-size: 13px; font-weight: 500;">Message</label>
            <textarea id="form-message" required rows="5" placeholder="Hi Akash, I'd like to talk about..." style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); padding: 10px; border-radius: 4px; color: var(--text-normal); outline: none; resize: vertical; font-family: var(--font-ui);"></textarea>
          </div>
          
          <button type="submit" class="btn-contact" style="border: none; cursor: pointer; align-self: flex-start; margin-top: 10px;">
            <i class="fa-solid fa-envelope"></i> Send Message
          </button>
        </form>
      </div>

      <div class="preview-card" style="max-width: 500px;">
        <h3 class="preview-title"><i class="fa-solid fa-address-book"></i> Direct Info</h3>
        <p style="font-size: 14px; margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:akashsahukara@gmail.com" style="color: var(--text-link);">akashsahukara@gmail.com</a></p>
        <p style="font-size: 14px; margin-bottom: 8px;"><strong>Phone:</strong> +91-9502485588</p>
        <p style="font-size: 14px;"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/akashsahukara" target="_blank" style="color: var(--text-link);">linkedin.com/in/akashsahukara</a></p>
      </div>
    `;
  }
}

// Interactive contact form submission handler
window.handleFormSubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  const message = document.getElementById("form-message").value;

  // Print typing sequence inside the simulated terminal
  appendTerminalLine(`\n[Form Submission Triggered]`, "output-warning");
  appendTerminalLine(`guest@akash-pc:~$ ./contact_me.sh --send "${name}" "${email}"`, "cmd-highlight");
  appendTerminalLine("Initiating handshake with smtp.gmail.com (SSL Port 465)...", "code-comment");
  
  let i = 0;
  const loadingInterval = setInterval(() => {
    if (i < 3) {
      appendTerminalLine("Sending bytes... [=================>] Done.", "code-comment");
      i++;
    } else {
      clearInterval(loadingInterval);
      appendTerminalLine(`Success! Message from ${name} (<${email}>) sent successfully. Akash will respond shortly!`, "output-success");
      scrollToTerminalBottom();
    }
  }, 400);

  // Clear Form
  document.getElementById("contact-form").reset();
  
  // Show notification
  alert("Simulated Email Sent! Check the Terminal at the bottom of the page to see the smtp output log!");
};

// 5. Open & Manage Tabs Logic
function openFile(filePath) {
  const file = filesData[filePath];
  if (!file) return;

  activeFile = filePath;

  // Add to open tabs list if not present
  if (!openTabs.includes(filePath)) {
    openTabs.push(filePath);
  }

  // Update tabs render
  renderTabs();
  
  // Show Editor UI elements, hide blank state
  el.blankState.classList.add("hidden");
  
  // Update view depending on current mode
  toggleViewMode(defaultMode);

  // Set active class on Sidebar items
  document.querySelectorAll(".folder-tree .file").forEach(item => {
    if (item.getAttribute("data-path") === filePath) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Update Status Bar
  el.statusLang.textContent = file.lang;
  
  // Track open editors in sidebar
  renderOpenEditorsList();

  // Close mobile sidebar overlay if open
  if (window.innerWidth <= 768) {
    el.sidebarPanel.classList.remove("active-mobile");
    el.btnExplorer.classList.remove("active");
  }
}

function renderTabs() {
  el.tabsContainer.innerHTML = openTabs.map(path => {
    const file = filesData[path];
    const activeClass = (path === activeFile) ? 'active' : '';
    let iconClass = 'fa-markdown file-icon md-icon';
    if (file.lang === 'JSON') iconClass = 'fa-braces file-icon json-icon';
    if (file.lang === 'YAML') iconClass = 'fa-gears file-icon yaml-icon';
    if (file.lang === 'JavaScript') iconClass = 'fa-brands fa-js file-icon js-icon';
    if (file.lang === 'Bash') iconClass = 'fa-solid fa-terminal file-icon sh-icon';
    if (file.lang === 'PDF') iconClass = 'fa-solid fa-file-pdf file-icon pdf-icon';

    return `
      <div class="editor-tab ${activeClass}" data-path="${path}">
        <i class="${iconClass}"></i>
        <span>${file.name}</span>
        <span class="tab-close" data-path="${path}"><i class="fa-solid fa-xmark"></i></span>
      </div>
    `;
  }).join("");

  // Add event listeners on tabs
  document.querySelectorAll(".editor-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      // Check if close button is clicked
      if (e.target.closest(".tab-close")) {
        e.stopPropagation();
        closeFile(tab.getAttribute("data-path"));
      } else {
        openFile(tab.getAttribute("data-path"));
      }
    });
  });
}

function closeFile(filePath) {
  openTabs = openTabs.filter(p => p !== filePath);
  
  if (activeFile === filePath) {
    if (openTabs.length > 0) {
      openFile(openTabs[openTabs.length - 1]);
    } else {
      activeFile = null;
      // Show blank state
      el.blankState.classList.remove("hidden");
      el.lineNumbersContainer.innerHTML = "";
      el.codeContent.innerHTML = "";
      el.previewContainer.classList.add("hidden");
      el.previewContainer.innerHTML = "";
      
      // Remove active class from tree
      document.querySelectorAll(".folder-tree .file").forEach(item => {
        item.classList.remove("active");
      });
    }
  }
  renderTabs();
  renderOpenEditorsList();
}

function renderOpenEditorsList() {
  const listEl = document.getElementById("open-editors-list");
  if (openTabs.length === 0) {
    listEl.innerHTML = `<li class="tree-item" style="padding-left: 20px; font-style: italic; opacity: 0.5;">No active editors</li>`;
    return;
  }
  
  listEl.innerHTML = openTabs.map(path => {
    const file = filesData[path];
    const activeClass = (path === activeFile) ? 'active' : '';
    let iconClass = 'fa-brands fa-markdown file-icon md-icon';
    if (file.lang === 'JSON') iconClass = 'fa-solid fa-braces file-icon json-icon';
    if (file.lang === 'YAML') iconClass = 'fa-solid fa-gears file-icon yaml-icon';
    if (file.lang === 'JavaScript') iconClass = 'fa-brands fa-js file-icon js-icon';
    if (file.lang === 'Bash') iconClass = 'fa-solid fa-terminal file-icon sh-icon';
    if (file.lang === 'PDF') iconClass = 'fa-solid fa-file-pdf file-icon pdf-icon';

    return `
      <li class="tree-item file ${activeClass}" data-path="${path}">
        <span class="tree-label"><i class="${iconClass}"></i> ${file.name}</span>
      </li>
    `;
  }).join("");

  listEl.querySelectorAll(".file").forEach(item => {
    item.addEventListener("click", () => {
      openFile(item.getAttribute("data-path"));
    });
  });
}

function toggleViewMode(mode) {
  defaultMode = mode;
  if (!activeFile) return;

  const file = filesData[activeFile];
  
  if (mode === "preview") {
    // Hide Line numbers & Raw Code editor area
    el.lineNumbersContainer.classList.add("hidden");
    document.getElementById("editor-code-container").classList.add("hidden");
    
    // Show Preview container
    el.previewContainer.classList.remove("hidden");
    renderVisualPreview(activeFile);
    
    el.btnTogglePreview.innerHTML = `<i class="fa-solid fa-code"></i> <span>Show Code</span>`;
    el.btnTogglePreview.title = "View Raw Code";
  } else {
    // Show Line numbers & Raw Code editor area
    el.lineNumbersContainer.classList.remove("hidden");
    document.getElementById("editor-code-container").classList.remove("hidden");
    
    // Hide Preview container
    el.previewContainer.classList.add("hidden");
    
    // Set syntax highlighted text
    el.codeContent.innerHTML = syntaxHighlight(file.content, file.lang);
    updateLineNumbers(file.content);
    
    el.btnTogglePreview.innerHTML = `<i class="fa-solid fa-book-open"></i> <span>Preview</span>`;
    el.btnTogglePreview.title = "Show Visual Render";
  }
}

// Resume PDF download simulator/trigger
window.downloadResume = function() {
  // Trigger actual file download
  const link = document.createElement("a");
  link.href = "Akash_Sahukara-SE.pdf";
  link.download = "Akash_Sahukara_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Also log inside terminal
  appendTerminalLine("\n[Resume Triggered]", "output-success");
  appendTerminalLine("guest@akash-pc:~$ download Akash_Sahukara-SE.pdf", "cmd-highlight");
  appendTerminalLine("Sending file stream 'Akash_Sahukara-SE.pdf' to client downloads folder...", "code-comment");
  appendTerminalLine("Done.", "output-success");
  scrollToTerminalBottom();
};

// 6. Simulated Linux Terminal Logic
function appendTerminalLine(text, className = "") {
  const line = document.createElement("div");
  line.className = `terminal-line ${className}`;
  line.innerHTML = text.replace(/\n/g, "<br>");
  el.terminalHistory.appendChild(line);
}

function scrollToTerminalBottom() {
  el.terminalContainer.scrollTop = el.terminalContainer.scrollHeight;
}

function processCommand(cmdStr) {
  const trimmed = cmdStr.trim();
  if (trimmed === "") return;

  appendTerminalLine(`guest@akash-pc:~$ ${trimmed}`, "cmd-highlight");
  
  const tokens = trimmed.split(/\s+/);
  const command = tokens[0].toLowerCase();
  const args = tokens.slice(1);

  switch (command) {
    case "help":
      appendTerminalLine(
        `Available Commands:
  <span class="cmd-highlight">help</span>       - Display this command dictionary
  <span class="cmd-highlight">neofetch</span>   - Display system summary and ASCII avatar
  <span class="cmd-highlight">ls</span>         - List files in current directories
  <span class="cmd-highlight">cat [file]</span> - Display file contents in stdout
  <span class="cmd-highlight">clear</span>      - Clear terminal screen
  <span class="cmd-highlight">skills</span>     - Print raw skill sets
  <span class="cmd-highlight">projects</span>   - Print git repo projects lists
  <span class="cmd-highlight">experience</span> - Print work experience logs
  <span class="cmd-highlight">resume</span>     - Download official PDF resume
  <span class="cmd-highlight">theme [id]</span> - Switch theme (dracula, onedark, monokai, matrix, cyberpunk)
  <span class="cmd-highlight">contact</span>    - Print contact info links`
      );
      break;

    case "clear":
      el.terminalHistory.innerHTML = "";
      break;

    case "neofetch":
      appendTerminalLine(
        `<span class="accent-color">guest@akash-pc</span>
---------------------
<span class="cmd-highlight">OS:</span> AkashOS Linux Kernel 1.4.0-generic
<span class="cmd-highlight">Host:</span> Rakuten-SRE-Cluster-Nodes
<span class="cmd-highlight">Uptime:</span> 4+ Years Professional Experience
<span class="cmd-highlight">Shell:</span> bash (Simulated)
<span class="cmd-highlight">Terminal:</span> VS Code Terminal Panel
<span class="cmd-highlight">CPU:</span> Spring-Boot Core Framework Multi-thread
<span class="cmd-highlight">RAM:</span> Kafka-Stream-Buffer (Couchbase Cached)
<span class="cmd-highlight">Skills:</span> Java, Spring Boot, Microservices, Kafka, gRPC, Couchbase, REST
<span class="cmd-highlight">Current Job:</span> Senior Software Engineer @ Rakuten India`
      );
      break;

    case "ls":
      appendTerminalLine(
        `<span class="md-icon">info/</span>      <span class="yaml-icon">career/</span>    <span class="js-icon">projects/</span>
<span class="json-icon">skills/</span>    <span class="sh-icon">contact/</span>   <span class="pdf-icon">Akash_Sahukara-SE.pdf</span>`
      );
      break;

    case "cat":
      if (args.length === 0) {
        appendTerminalLine("cat: missing operand. Usage: cat [filename]", "output-error");
      } else {
        const targetPath = args[0];
        let fileMatch = null;
        
        // Match simple basename or full path
        for (let path in filesData) {
          if (path === targetPath || filesData[path].name === targetPath) {
            fileMatch = filesData[path];
            break;
          }
        }

        if (fileMatch) {
          appendTerminalLine(fileMatch.content);
        } else if (targetPath === "Akash_Sahukara-SE.pdf") {
          appendTerminalLine("Cannot cat binary PDF file. Use 'resume' command to download.", "output-warning");
        } else {
          appendTerminalLine(`cat: ${targetPath}: No such file or directory`, "output-error");
        }
      }
      break;

    case "skills":
      appendTerminalLine(`--- AKASH SAHUKARA SKILL SETS ---
Backend & Cloud: Java, Spring Boot, Microservices, Kafka, gRPC, REST APIs
Databases: Couchbase, SQL, NoSQL
Architecture: Event-Driven Systems, Distributed Systems, Cloud Native BSS
Languages: Java, Python, C++
Web Frameworks: Angular, JavaScript, HTML, CSS, Bootstrap
Tools & Monitoring: Grafana, Prometheus, Git, CI/CD`);
      break;

    case "projects":
      const displayList = fetchedProjects.length > 0 ? fetchedProjects : [
        { name: "TODO-CLI", language: "Python" },
        { name: "computer-programming-responsive-iiith", language: "JavaScript" },
        { name: "vlsi-iiith-js", language: "Java" },
        { name: "key-value", language: "Python" }
      ];
      
      let projText = "--- GIT REPOSITORIES ---\n";
      displayList.forEach(p => {
        projText += `- [${p.language || 'Code'}] ${p.name} : ${p.html_url || 'https://github.com/akashsahukra'}\n`;
      });
      appendTerminalLine(projText);
      break;

    case "experience":
      appendTerminalLine(`--- PROFESSIONAL EXPERIENCE ---
1. Senior Software Engineer @ Rakuten India (Jun 2024 - Present)
   Primary backend owner for Bill Invoice, Bill Document Generation, and DMS serving 10M+ users.
2. Software Engineer @ Rakuten Symphony (Apr 2022 - May 2024)
   Delivered billing & invoice microservices; reduced invoice execution time by ~30%.
3. Associate Software Engineer @ Rakuten India (Jun 2021 - Apr 2022)
   Developed backend services for CRM/ISP telecom platforms.
4. Technical Intern @ Rakuten India (Mar 2021 - Jun 2021)
   Built Spring Boot & Kafka REST integrations.`);
      break;

    case "resume":
      downloadResume();
      break;

    case "theme":
      if (args.length === 0) {
        appendTerminalLine("Usage: theme [dracula | onedark | monokai | matrix | cyberpunk]", "output-warning");
      } else {
        const themeId = args[0].toLowerCase();
        if (["dracula", "onedark", "monokai", "matrix", "cyberpunk"].includes(themeId)) {
          changeTheme(themeId);
          appendTerminalLine(`Theme successfully switched to: ${themeId}`, "output-success");
        } else {
          appendTerminalLine(`Theme '${themeId}' not found. Options: dracula, onedark, monokai, matrix, cyberpunk`, "output-error");
        }
      }
      break;

    case "contact":
      appendTerminalLine(`Email: akashsahukara@gmail.com
Phone: +91-9502485588
LinkedIn: linkedin.com/in/akashsahukara
GitHub: github.com/akashsahukra`);
      break;
      
    case "sudo":
      if (args.join(" ") === "rm -rf /") {
        appendTerminalLine("Executing: rm -rf /", "output-warning");
        setTimeout(() => {
          appendTerminalLine("Permission denied! Nice try, hacker. 😉", "output-error");
          scrollToTerminalBottom();
        }, 300);
      } else {
        appendTerminalLine("guest is not in the sudoers file. This incident will be reported.", "output-error");
      }
      break;

    default:
      appendTerminalLine(`bash: ${command}: command not found. Type 'help' for options.`, "output-error");
  }

  scrollToTerminalBottom();
}

function changeTheme(themeName) {
  document.body.className = `theme-${themeName}`;
  currentTheme = themeName;
  el.themeSelector.value = themeName;
}

// 7. Draggable Panel Resizer Logic
el.panelResizer.addEventListener("mousedown", (e) => {
  isDraggingResizer = true;
  document.body.style.cursor = "row-resize";
  document.body.style.userSelect = "none";
});

document.addEventListener("mousemove", (e) => {
  if (!isDraggingResizer) return;
  
  const windowHeight = window.innerHeight;
  const statusbarHeight = 22;
  const titlebarHeight = 35;
  const y = e.clientY;
  
  // Calculate new height of the terminal panel
  let newTerminalHeight = windowHeight - y - statusbarHeight;
  
  // Boundaries check
  const minHeight = 80;
  const maxHeight = windowHeight - titlebarHeight - statusbarHeight - 100;
  
  if (newTerminalHeight < minHeight) newTerminalHeight = minHeight;
  if (newTerminalHeight > maxHeight) newTerminalHeight = maxHeight;
  
  el.bottomPanelGroup.style.height = `${newTerminalHeight}px`;
});

document.addEventListener("mouseup", () => {
  if (isDraggingResizer) {
    isDraggingResizer = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }
});

// 8. Fetch GitHub Repos Client-Side
async function fetchGitHubRepos() {
  try {
    const response = await fetch("https://api.github.com/users/akashsahukra/repos?sort=updated&per_page=15");
    if (!response.ok) throw new Error("API Limit exceeded or network down");
    const repos = await response.json();
    if (Array.isArray(repos) && repos.length > 0) {
      // Keep only non-forked public repos or all
      fetchedProjects = repos.map(repo => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        html_url: repo.html_url
      }));
      // Update sidebar projects tree badge
      const gitBadge = document.getElementById("badge-git");
      if (gitBadge) gitBadge.textContent = repos.length;
      
      // If we are currently viewing the projects file, trigger a re-render
      if (activeFile === "projects/github_repos.js") {
        openFile(activeFile);
      }
    }
  } catch (err) {
    console.warn("GitHub API error, using static fallback repos:", err);
  }
}

// 9. Initial Setup & Event Listeners
function init() {
  // Sidebar folder toggle logic
  document.querySelectorAll(".folder > .tree-label").forEach(folderLabel => {
    folderLabel.addEventListener("click", (e) => {
      const folderItem = folderLabel.parentElement;
      const arrowIcon = folderLabel.querySelector(".folder-arrow");
      const folderIcon = folderLabel.querySelector(".folder-icon");
      
      folderItem.classList.toggle("closed");
      
      if (folderItem.classList.contains("closed")) {
        arrowIcon.className = "fa-solid fa-chevron-right folder-arrow";
        folderIcon.className = "fa-solid fa-folder folder-icon";
      } else {
        arrowIcon.className = "fa-solid fa-chevron-down folder-arrow";
        folderIcon.className = "fa-solid fa-folder-open folder-icon";
      }
    });
  });

  // Sidebar explorer file clicks
  document.querySelectorAll(".folder-tree .file").forEach(fileItem => {
    fileItem.addEventListener("click", () => {
      const path = fileItem.getAttribute("data-path");
      if (path === "Akash_Sahukara-SE.pdf") {
        downloadResume();
      } else {
        openFile(path);
      }
    });
  });

  // Settings Cog/Profile actions
  el.btnSettings.addEventListener("click", () => el.settingsModal.classList.remove("hidden"));
  el.settingsClose.addEventListener("click", () => el.settingsModal.classList.add("hidden"));
  el.settingsModal.addEventListener("click", (e) => {
    if (e.target === el.settingsModal) el.settingsModal.classList.add("hidden");
  });
  
  el.btnProfile.addEventListener("click", () => openFile("info/about_me.md"));
  el.btnProjects.addEventListener("click", () => openFile("projects/github_repos.js"));
  el.btnGit.addEventListener("click", () => openFile("projects/github_repos.js"));

  // Toggle Explorer Sidebar Panel
  el.btnExplorer.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      el.sidebarPanel.classList.toggle("active-mobile");
      el.btnExplorer.classList.toggle("active");
    } else {
      el.sidebarPanel.classList.toggle("hidden-sidebar");
      el.btnExplorer.classList.toggle("active");
    }
  });

  // Settings modifications
  el.fontSizeSelect.addEventListener("change", (e) => {
    const size = e.target.value;
    document.getElementById("editor-code-container").style.fontSize = size;
    el.previewContainer.style.fontSize = size;
  });
  el.terminalHeightSelect.addEventListener("change", (e) => {
    el.bottomPanelGroup.style.height = e.target.value;
  });
  el.openModeSelect.addEventListener("change", (e) => {
    defaultMode = e.target.value;
    if (activeFile) toggleViewMode(defaultMode);
  });
  el.settingsResetBtn.addEventListener("click", () => {
    el.fontSizeSelect.value = "14px";
    el.terminalHeightSelect.value = "250px";
    el.openModeSelect.value = "preview";
    
    document.getElementById("editor-code-container").style.fontSize = "14px";
    el.previewContainer.style.fontSize = "14px";
    el.bottomPanelGroup.style.height = "250px";
    defaultMode = "preview";
    if (activeFile) toggleViewMode("preview");
  });

  // Theme selectors
  el.themeSelector.addEventListener("change", (e) => {
    changeTheme(e.target.value);
  });

  // Preview Toggle Button in Editor Actions
  el.btnTogglePreview.addEventListener("click", () => {
    const nextMode = (defaultMode === "preview") ? "code" : "preview";
    toggleViewMode(nextMode);
  });

  // Terminal input listeners
  el.terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = el.terminalInput.value;
      processCommand(val);
      el.terminalInput.value = "";
    }
  });

  // Make terminal container focus input on clicks
  el.terminalContainer.addEventListener("click", () => {
    el.terminalInput.focus();
  });
  
  // Custom cursor positioning
  const updateCursorPos = () => {
    const input = el.terminalInput;
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor) return;
    
    // Rough estimation of cursor position (8px per character)
    const textLength = input.value.length;
    cursor.style.left = `${textLength * 8}px`;
  };
  
  el.terminalInput.addEventListener("input", updateCursorPos);
  el.terminalInput.addEventListener("keydown", (e) => setTimeout(updateCursorPos, 10));

  // Terminal Controls Action listeners
  el.terminalClear.addEventListener("click", () => el.terminalHistory.innerHTML = "");
  el.terminalMaximize.addEventListener("click", () => {
    el.bottomPanelGroup.classList.toggle("maximized");
    if (el.bottomPanelGroup.classList.contains("maximized")) {
      el.terminalMaximize.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    } else {
      el.terminalMaximize.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
    }
  });
  el.terminalClose.addEventListener("click", () => {
    el.bottomPanelGroup.classList.toggle("hidden");
    el.panelResizer.classList.toggle("hidden");
  });

  // Trigger default landing file open (about_me.md)
  openFile("info/about_me.md");
  
  // Fetch repos dynamically
  fetchGitHubRepos();
}

// Start Application
window.onload = init;
