(function () {
  // ── DOM helpers ──────────────────────────────────────────────────────────────

  function applyContentIn(root, { text = {}, html = {}, attrs = {} } = {}) {
    Object.entries(text).forEach(([key, value]) => {
      root.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        node.textContent = value;
      });
    });
    Object.entries(html).forEach(([key, value]) => {
      root.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        node.innerHTML = value;
      });
    });
    Object.entries(attrs).forEach(([key, attrMap]) => {
      root.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        Object.entries(attrMap).forEach(([attr, val]) => node.setAttribute(attr, val));
      });
    });
  }

  function applyContent(options = {}) {
    applyContentIn(document, options);
  }

  // ── Exports ──────────────────────────────────────────────────────────────────

  window.applyContent = applyContent;

  window.contentReady = fetch('content.json')
    .then((r) => r.json())
    .then((data) => {
      window.siteContent = data;
      return data;
    })
    .catch((err) => {
      console.error('Impossible de charger content.json :', err);
      return null;
    });
})();
