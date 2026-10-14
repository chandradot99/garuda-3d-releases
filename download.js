/*
Renders the download tabs from releases.js.

Written as plain script with no build step and no fetch, so the page works
opened straight off the disk as well as served -- which matters when the
machine that needs the installer is the one with no network.
*/
(function () {
  var PLATFORMS = [
    { key: 'windows', label: 'Windows' },
    { key: 'macos', label: 'macOS' },
    { key: 'linux', label: 'Linux' }
  ];

  var release = window.GARUDA_RELEASES || {};
  var repo = release.repo || '';
  var files = release.files || [];
  var published = !!release.version && files.length > 0;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /*
  GitHub keeps /releases/latest/download/<asset> pointing at the newest
  release, so the page does not have to be edited when one is published --
  only releases.js, and only for what is shown about the file.
  */
  function assetUrl(name) {
    return 'https://github.com/' + repo + '/releases/latest/download/' +
           encodeURIComponent(name);
  }

  function formatSize(bytes) {
    if (typeof bytes !== 'number' || !isFinite(bytes) || bytes <= 0) return '';
    var units = ['bytes', 'KB', 'MB', 'GB'];
    var i = 0;
    while (bytes >= 1024 && i < units.length - 1) { bytes /= 1024; i++; }
    return (i === 0 ? bytes : bytes.toFixed(1)) + ' ' + units[i];
  }

  // The tab to open on: a guess from the user agent, so the common case is one
  // click. Checked for Android and X11 before Mac, which they also resemble.
  function guessPlatform() {
    var ua = (navigator.userAgent || '').toLowerCase();
    if (ua.indexOf('windows') !== -1) return 'windows';
    if (ua.indexOf('android') !== -1 || ua.indexOf('x11') !== -1 ||
        ua.indexOf('linux') !== -1) return 'linux';
    if (ua.indexOf('mac os') !== -1 || ua.indexOf('macintosh') !== -1) return 'macos';
    return 'windows';
  }

  function fileCard(file) {
    var card = el('div', 'card');

    var main = el('div', 'card-main');
    main.appendChild(el('div', 'card-label', file.label || file.file));
    if (file.note) main.appendChild(el('div', 'card-note', file.note));
    if (file.requires) main.appendChild(el('div', 'card-requires', file.requires));

    var meta = el('div', 'card-meta');
    meta.appendChild(el('span', 'card-file', file.file));
    var size = formatSize(file.size);
    if (size) meta.appendChild(el('span', 'card-size', size));
    main.appendChild(meta);

    if (file.sha256) {
      var sum = el('div', 'card-sum');
      sum.appendChild(el('span', 'card-sum-label', 'SHA-256'));
      sum.appendChild(el('code', null, file.sha256));
      main.appendChild(sum);
    }

    var action = el('div', 'card-action');
    var link = el('a', 'btn', 'Download');
    link.href = assetUrl(file.file);
    action.appendChild(link);

    card.appendChild(main);
    card.appendChild(action);
    return card;
  }

  function emptyPanel(label) {
    var box = el('div', 'empty');
    box.appendChild(el('p', null,
      published
        ? 'No ' + label + ' download has been published yet.'
        : 'Nothing has been published yet.'));

    var p = el('p');
    var link = el('a', 'btn ghost', 'All releases on GitHub');
    link.href = 'https://github.com/' + repo + '/releases';
    p.appendChild(link);
    box.appendChild(p);
    return box;
  }

  function render() {
    // Every link in the page points at whichever repository releases.js names
    ['repo-link', 'footer-repo'].forEach(function (id) {
      var node = document.getElementById(id);
      if (node) node.href = 'https://github.com/' + repo;
    });
    ['footer-releases', 'noscript-releases'].forEach(function (id) {
      var node = document.getElementById(id);
      if (node) node.href = 'https://github.com/' + repo + '/releases';
    });

    var line = document.getElementById('release-line');
    if (release.version) {
      line.textContent = 'Version ' + release.version +
        (release.released ? '  ·  ' + release.released : '');
    }

    if (release.notes && release.notes.length) {
      var notes = document.getElementById('notes');
      var list = document.getElementById('notes-list');
      release.notes.forEach(function (note) {
        list.appendChild(el('li', null, note));
      });
      notes.hidden = false;
    }

    var tabs = document.getElementById('tabs');
    var panels = document.getElementById('panels');
    var selected = guessPlatform();

    PLATFORMS.forEach(function (platform) {
      var mine = files.filter(function (f) { return f.platform === platform.key; });

      var tab = el('button', 'tab', platform.label);
      tab.type = 'button';
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', String(platform.key === selected));
      if (!mine.length) tab.appendChild(el('span', 'tab-dot'));

      var panel = el('div', 'panel');
      panel.hidden = platform.key !== selected;
      if (mine.length) mine.forEach(function (f) { panel.appendChild(fileCard(f)); });
      else panel.appendChild(emptyPanel(platform.label));

      tab.addEventListener('click', function () {
        // Tabs are stable whether or not a platform has anything, so the row
        // does not change shape as releases come and go
        [].forEach.call(tabs.children, function (t) {
          t.setAttribute('aria-selected', String(t === tab));
        });
        [].forEach.call(panels.children, function (p) {
          p.hidden = p !== panel;
        });
      });

      tabs.appendChild(tab);
      panels.appendChild(panel);
    });
  }

  render();
})();
