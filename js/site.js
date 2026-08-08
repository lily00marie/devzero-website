(function () {
  const path = window.location.pathname;
  const isNested = /\/core-technologies\/?/.test(path);
  const depth = isNested ? "../" : "";
  const assets = `${depth}assets`;
  const home = isNested ? "./" : "core-technologies/";

  function makeLogo() {
    return `<img class="logo-img" src="${assets}/logo-devzero.svg" alt="" width="122" height="42" />`;
  }

  function navHTML() {
    return `
      <header class="site-header">
        <div class="container-wide header-inner">
          <a class="logo" href="${home}" aria-label="DevZero home">${makeLogo()}</a>
          <nav class="nav-main" aria-label="Primary">
            <div class="nav-item" data-dropdown>
              <button class="nav-trigger" type="button" aria-expanded="false" aria-haspopup="true">
                Product
                <svg class="chev" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="mega mega-product" role="menu">
                <div class="mega-col">
                  <h4>Compute Optimization</h4>
                  <a class="mega-link mega-hub" href="https://www.devzero.io/" role="menuitem">
                    <strong>Overview</strong>
                    <span>Rightsizing without restarts — performance, reliability, cost</span>
                  </a>
                  <a class="mega-link mega-compact" href="${home}" role="menuitem"><strong>Core Technologies</strong><span>Workload · Cluster · Network</span></a>
                </div>
                <div class="mega-col">
                  <h4>Inference Optimization</h4>
                  <a class="mega-link mega-hub" href="https://www.devzero.io/inference" role="menuitem">
                    <strong>Overview</strong>
                    <span>Prove LLM savings, then automate cost and failover</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="nav-item"><a class="nav-link" href="https://www.devzero.io/resources">Resources</a></div>
            <div class="nav-item"><a class="nav-link" href="https://www.devzero.io/customers">Customers</a></div>
            <div class="nav-item"><a class="nav-link" href="https://www.devzero.io/about">Company</a></div>
            <div class="nav-item"><a class="nav-link" href="https://www.devzero.io/pricing">Pricing</a></div>
          </nav>
          <div class="header-cta">
            <a class="btn btn-ghost" href="#demo">Book a demo</a>
            <a class="btn btn-primary" href="#start">Start free</a>
            <button class="mobile-toggle" type="button" aria-label="Open menu"><span></span></button>
          </div>
        </div>
      </header>
    `;
  }

  function footerHTML() {
    return `
      <footer class="site-footer">
        <div class="container-wide">
          <div class="footer-grid">
            <div class="footer-brand">
              <a class="logo" href="${home}">${makeLogo()}</a>
              <p>Autonomous optimization for Kubernetes and AI workloads.</p>
              <a class="footer-social" href="https://www.linkedin.com/company/devzero-ai/" aria-label="DevZero on LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.813 20.452H3.86V9h2.953v11.452z"/></svg>
              </a>
            </div>
            <div class="footer-col">
              <h4>Product</h4>
              <a href="https://www.devzero.io/">Cost Monitoring</a>
              <a href="https://www.devzero.io/">Cost Optimization</a>
              <a href="https://www.devzero.io/">GPU Optimization</a>
              <a href="https://www.devzero.io/inference">Inference Platform</a>
            </div>
            <div class="footer-col">
              <h4>Learn</h4>
              <a href="https://www.devzero.io/customers">Case Studies</a>
              <a href="https://docs.devzero.io/">Documentation</a>
              <a href="https://www.devzero.io/blog">Blog</a>
              <a href="https://www.devzero.io/guides">Guides</a>
            </div>
            <div class="footer-col">
              <h4>Tools</h4>
              <a href="https://www.devzero.io/analyze-cluster">Analyze Cluster</a>
              <a href="https://www.devzero.io/compare-instances">Compare Instances</a>
              <a href="https://www.devzero.io/cloud-pricing">Cloud Pricing</a>
              <a href="https://www.devzero.io/gpu-pricing">GPU Pricing</a>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <a href="https://www.devzero.io/about">About</a>
              <a href="https://www.devzero.io/careers">Careers</a>
              <a href="https://www.devzero.io/contact">Contact Us</a>
              <a href="https://www.devzero.io/pricing">Pricing</a>
            </div>
          </div>
          <div class="footer-bottom">
            <span>Copyright © 2026 DevInfra Inc</span>
            <div class="footer-legal">
              <a href="https://www.devzero.io/terms-and-conditions">Terms and Conditions</a>
              <a href="https://www.devzero.io/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
      <a class="btn btn-primary sticky-cta" id="stickyCta" href="#start">Start free</a>
    `;
  }

  const mountNav = document.getElementById("site-nav");
  const mountFooter = document.getElementById("site-footer");
  if (mountNav) mountNav.innerHTML = navHTML();
  if (mountFooter) mountFooter.innerHTML = footerHTML();

  document.querySelectorAll("[data-dropdown]").forEach((item) => {
    const trigger = item.querySelector(".nav-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = item.classList.contains("open");
      document.querySelectorAll("[data-dropdown]").forEach((el) => {
        el.classList.remove("open");
        const t = el.querySelector(".nav-trigger");
        if (t) t.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll("[data-dropdown]").forEach((el) => {
      el.classList.remove("open");
      const t = el.querySelector(".nav-trigger");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  });

  const mobileToggle = document.querySelector(".mobile-toggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });
  }

  const sticky = document.getElementById("stickyCta");
  if (sticky) {
    window.addEventListener("scroll", () => {
      sticky.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
  }

  window.__DZ_ASSETS__ = assets;
})();
