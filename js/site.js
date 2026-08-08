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
              <p>Autonomous optimization for Kubernetes compute and inference — savings without restarts, proof before automation.</p>
            </div>
            <div class="footer-col">
              <h4>Product</h4>
              <a href="https://www.devzero.io/">Compute Optimization</a>
              <a href="${home}">Core Technologies</a>
              <a href="https://www.devzero.io/inference">Inference Optimization</a>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <a href="https://www.devzero.io/resources">Resources</a>
              <a href="https://www.devzero.io/customers">Customers</a>
              <a href="https://www.devzero.io/about">About</a>
              <a href="https://www.devzero.io/pricing">Pricing</a>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 DevInfra Inc</span>
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
