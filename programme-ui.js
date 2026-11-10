/* ADU 2026 — interactive timetable & book of abstracts */
(function () {
  var P = window.ADU_PROGRAMME;
  var root = document.getElementById('programme-app');
  if (!P || !root) return;

  var byId = {};
  P.talks.forEach(function (t, i) { t.index = i; byId[t.id] = t; });

  /* ---------- helpers ---------- */
  function $(sel, el) { return (el || document).querySelector(sel); }
  function $all(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function plain(s) {
    return String(s || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\\[a-zA-Z]+/g, ' ')
      .replace(/[${}^_]/g, ' ')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/ł/g, 'l').replace(/Ł/g, 'L')
      .toLowerCase();
  }
  function roomInfo(key) { return P.rooms[key] || { label: key, color: 'grey' }; }
  function roomChip(key) {
    if (!key) return '';
    var r = roomInfo(key);
    return '<span class="room-chip tone-' + r.color + '">' + esc(r.label) + '</span>';
  }
  function kindBadge(t) {
    return '<span class="kind-badge ' + (t.kind === 'Invited' ? 'is-invited' : 'is-contributed') + '">' +
      t.kind + ' talk ' + t.num + '</span>';
  }
  function timeRange(a, b) { return a + '–' + b; }
  function renderMath(el) {
    if (window.renderMathInElement && el) {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }
  window.aduRenderMath = function () { renderMath(root); renderMath($('#talk-dialog')); };

  /* 12-hour times without am/pm → minutes since midnight */
  function toMin(t, after) {
    var p = t.split(':'), h = +p[0], m = +p[1];
    if (h < 8) h += 12;
    var v = h * 60 + m;
    if (after != null && v <= after) v += 12 * 60;
    return v;
  }

  /* Sydney "now" */
  function sydneyNow() {
    try {
      var f = new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Sydney', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
      var parts = {};
      f.formatToParts(new Date()).forEach(function (x) { parts[x.type] = x.value; });
      return { date: parts.year + '-' + parts.month + '-' + parts.day, min: (+parts.hour % 24) * 60 + (+parts.minute) };
    } catch (e) { return null; }
  }

  /* starred talks (per-viewer convenience) */
  var STAR_KEY = 'adu2026-starred';
  var starred = {};
  try { (JSON.parse(localStorage.getItem(STAR_KEY)) || []).forEach(function (id) { starred[id] = true; }); } catch (e) {}
  function saveStars() {
    try { localStorage.setItem(STAR_KEY, JSON.stringify(Object.keys(starred))); } catch (e) {}
  }
  function toggleStar(id) {
    if (starred[id]) delete starred[id]; else starred[id] = true;
    saveStars();
    $all('[data-star="' + id + '"]').forEach(function (b) { setStarBtn(b, id); });
  }
  function setStarBtn(btn, id) {
    var on = !!starred[id];
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Remove from my talks' : 'Add to my talks');
    btn.title = on ? 'Remove from my talks' : 'Add to my talks';
  }
  function starBtn(id) {
    return '<button type="button" class="star-btn" data-star="' + id + '" aria-pressed="false">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/></svg></button>';
  }

  /* ---------- state ---------- */
  var now = sydneyNow();
  var todayIdx = -1;
  P.days.forEach(function (d, i) { if (now && d.iso === now.date) todayIdx = i; });

  var state = {
    view: 'timetable',
    day: todayIdx >= 0 ? todayIdx : 0
  };

  /* ---------- shell ---------- */
  root.innerHTML =
    '<div class="prog-toolbar">' +
      '<p class="prog-intro"></p>' +
      '<a class="btn btn-outline btn-sm" href="' + P.pdf + '" download="ADU_book_of_abstracts.pdf" target="_blank" rel="noreferrer noopener">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>' +
        'Book of Abstracts (PDF)</a>' +
    '</div>' +
    '<div class="prog-view" id="view-timetable"></div>';

  var vTT = $('#view-timetable', root);

  /* ---------- timetable ---------- */
  function talkCell(t, showRoom) {
    return '<button type="button" class="tt-talk tone-' + roomInfo(t.room).color + '" data-open="' + t.id + '">' +
      '<span class="tt-talk-top">' + kindBadge(t) + (showRoom ? roomChip(t.room) : '') + '</span>' +
      '<span class="tt-speaker">' + esc(t.speaker) + (starred[t.id] ? ' <span class="tt-star" aria-label="starred">★</span>' : '') + '</span>' +
      '<span class="tt-title">' + t.title + '</span>' +
    '</button>';
  }

  function rowTimes(row) {
    if (row.type === 'plenary') { var t = byId[row.talk]; return [t.start, t.end]; }
    if (row.type === 'parallel') { var a = byId[row.talks[0]]; return [a.start, a.end]; }
    return [row.start, row.end];
  }

  function renderTimetable() {
    var d = P.days[state.day];
    var tabs = P.days.map(function (day, i) {
      return '<button type="button" role="tab" class="day-tab' + (i === state.day ? ' active' : '') + '" data-day="' + i + '" aria-selected="' + (i === state.day) + '">' +
        '<span class="day-name">' + day.short + '</span><span class="day-date">' + day.date.split(' ')[0] + ' Nov</span>' +
        (i === todayIdx ? '<span class="today-dot" aria-label="today"></span>' : '') +
      '</button>';
    }).join('');

    var legend = d.rooms.map(function (k) {
      var r = roomInfo(k);
      return '<span class="legend-item"><span class="swatch tone-' + r.color + '"></span>' + esc(r.label) + '<small>' + esc(r.note || '') + '</small></span>';
    }).join('');

    var nowMin = (state.day === todayIdx && now) ? now.min : null;

    var rows = d.rows.map(function (row) {
      var tm = rowTimes(row);
      var s = toMin(tm[0]), e = toMin(tm[1], s);
      var isNow = nowMin != null && nowMin >= s && nowMin < e;
      var cls = 'tt-row tt-' + row.type + (isNow ? ' is-now' : '');
      var time = '<div class="tt-time">' + timeRange(tm[0], tm[1]) + (isNow ? '<span class="now-pill">Now</span>' : '') + '</div>';
      var body;
      if (row.type === 'plenary') {
        body = '<div class="tt-body">' + talkCell(byId[row.talk], true) + '</div>';
      } else if (row.type === 'parallel') {
        body = '<div class="tt-body tt-split">' + row.talks.map(function (id) { return talkCell(byId[id], true); }).join('') + '</div>';
      } else {
        var tone = row.room ? roomInfo(row.room).color : (row.tone || 'grey');
        body = '<div class="tt-body"><div class="tt-slot tone-' + tone + '"><strong>' + esc(row.label) + '</strong>' + (row.room ? roomChip(row.room) : '') + '</div></div>';
      }
      return '<div class="' + cls + '">' + time + body + '</div>';
    }).join('');

    vTT.innerHTML =
      '<div class="day-tabs" role="tablist" aria-label="Conference day">' + tabs + '</div>' +
      '<div class="tt-head"><h4>' + d.name + ', ' + d.date + ' 2026</h4><div class="legend">' + legend + '</div></div>' +
      '<div class="tt-list">' + rows + '</div>' +
      '<p class="tt-hint">Rooms are in building EA (Monday - Thursday) and EB (Friday), ' + esc(P.venue) + '.</p>';

    $all('.day-tab', vTT).forEach(function (b) {
      b.addEventListener('click', function () { state.day = +b.getAttribute('data-day'); renderTimetable(); });
    });
    renderMath(vTT);
  }

  /* ---------- talk dialog ---------- */
  var dlg = document.createElement('dialog');
  dlg.id = 'talk-dialog';
  dlg.className = 'talk-dialog';
  dlg.setAttribute('aria-labelledby', 'td-title');
  document.body.appendChild(dlg);
  var currentId = null;

  function paragraphs(text) {
    return text.split(/\n\s*\n/).map(function (block) {
      var lines = block.split('\n');
      if (lines.every(function (l) { return /^\s*- /.test(l); })) {
        return '<ul>' + lines.map(function (l) { return '<li>' + l.replace(/^\s*- /, '') + '</li>'; }).join('') + '</ul>';
      }
      return '<p>' + block + '</p>';
    }).join('');
  }

  function openTalk(id, fromHash) {
    var t = byId[id];
    if (!t) return;
    currentId = id;
    var d = P.days[t.day];
    var prev = P.talks[t.index - 1], next = P.talks[t.index + 1];
    var affs = (t.affiliations || []).map(function (a, i) {
      return '<li><sup>' + (i + 1) + '</sup> ' + esc(a) + '</li>';
    }).join('');
    var pdfHref = P.pdf + '#page=' + (t.pdfPage + P.pdfPageOffset);

    dlg.innerHTML =
      '<div class="td-inner">' +
        '<header class="td-head tone-' + roomInfo(t.room).color + '">' +
          '<div class="td-meta">' + kindBadge(t) + roomChip(t.room) + '</div>' +
          '<button type="button" class="td-close" aria-label="Close">✕</button>' +
          '<p class="td-when">' + d.name + ', ' + d.date + ' · ' + timeRange(t.start, t.end) + '</p>' +
          '<h3 id="td-title">' + t.title + '</h3>' +
          '<p class="td-speaker">' + esc(t.speaker) + '</p>' +
        '</header>' +
        '<div class="td-body">' +
          '<div class="td-people">' +
            '<p><span>Authors</span> ' + t.authors + '</p>' +
            (t.coauthors ? '<p><span>Co-authors</span> ' + t.coauthors + '</p>' : '') +
            (affs ? '<ul class="td-affs">' + affs + '</ul>' : '') +
          '</div>' +
          '<div class="td-abstract">' + paragraphs(t.abstract) + '</div>' +
          (t.refs ? '<div class="td-refs"><h5>References</h5>' + t.refs.map(function (r) { return '<p>' + r + '</p>'; }).join('') + '</div>' : '') +
        '</div>' +
        '<footer class="td-foot">' +
          '<div class="td-foot-left">' +
            starBtn(t.id) +
            '<a class="btn btn-outline btn-sm" href="' + pdfHref + '" target="_blank" rel="noreferrer noopener">Open in PDF · p. ' + t.pdfPage + '</a>' +
          '</div>' +
          '<div class="td-nav">' +
            '<button type="button" class="nav-btn" data-go="' + (prev ? prev.id : '') + '"' + (prev ? '' : ' disabled') + ' aria-label="Previous talk">‹ Prev</button>' +
            '<button type="button" class="nav-btn" data-go="' + (next ? next.id : '') + '"' + (next ? '' : ' disabled') + ' aria-label="Next talk">Next ›</button>' +
          '</div>' +
        '</footer>' +
      '</div>';

    $all('[data-star]', dlg).forEach(function (b) { setStarBtn(b, id); });
    renderMath(dlg);

    if (!dlg.open) {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
      document.documentElement.classList.add('dialog-open');
    }
    var body = $('.td-inner', dlg);
    if (body) body.scrollTop = 0;
    if (!fromHash && history.replaceState) history.replaceState(null, '', '#talk-' + id);
  }

  function closeTalk() {
    if (dlg.close) dlg.close(); else dlg.removeAttribute('open');
  }
  dlg.addEventListener('close', function () {
    document.documentElement.classList.remove('dialog-open');
    currentId = null;
    if (/^#talk-/.test(location.hash) && history.replaceState) history.replaceState(null, '', '#program');
    if (state.view === 'timetable') renderTimetable();
  });
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg) { closeTalk(); return; }
    if (e.target.closest('.td-close')) { closeTalk(); return; }
    var go = e.target.closest('[data-go]');
    if (go && go.getAttribute('data-go')) openTalk(go.getAttribute('data-go'));
  });
  document.addEventListener('keydown', function (e) {
    if (!dlg.open || !currentId) return;
    if (e.target && /input|textarea/i.test(e.target.tagName)) return;
    var t = byId[currentId];
    if (e.key === 'ArrowRight' && P.talks[t.index + 1]) openTalk(P.talks[t.index + 1].id);
    if (e.key === 'ArrowLeft' && P.talks[t.index - 1]) openTalk(P.talks[t.index - 1].id);
  });

  /* global delegation: open talk / star */
  document.addEventListener('click', function (e) {
    var star = e.target.closest('[data-star]');
    if (star) { e.preventDefault(); toggleStar(star.getAttribute('data-star')); return; }
    var op = e.target.closest('[data-open]');
    if (op) { e.preventDefault(); openTalk(op.getAttribute('data-open')); }
  });

  /* deep link: #talk-I1 */
  function fromHash() {
    var m = /^#talk-([A-Z]\d+)$/.exec(location.hash);
    if (m && byId[m[1]]) {
      state.day = byId[m[1]].day;
      renderTimetable();
      openTalk(m[1], true);
    }
  }
  window.addEventListener('hashchange', fromHash);

  /* init */
  renderTimetable();
  fromHash();

  /* refresh "now" every minute during the conference */
  if (todayIdx >= 0) setInterval(function () { now = sydneyNow(); if (state.view === 'timetable' && !dlg.open) renderTimetable(); }, 60000);
})();
