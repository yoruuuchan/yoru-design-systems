(() => {
'use strict';

/* ── DOM References ─────────────────────────────────────────── */
const shell = document.getElementById('shell');
const viewport = document.getElementById('viewport');
const tabs = [...document.querySelectorAll('.tab')];
const pages = [...document.querySelectorAll('.page')];
const subPages = [...document.querySelectorAll('.sub-page')];
const freezeButton = document.getElementById('freezeButton');
const loginOverlay = document.getElementById('loginOverlay');
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginTotp = document.getElementById('loginTotp');
const loginError = document.getElementById('loginError');
const apiBaseButton = document.getElementById('apiBaseButton');
const toast = document.getElementById('toast');
const media = window.matchMedia('(prefers-color-scheme: dark)');

/* ── Storage & State ────────────────────────────────────────── */
const API_BASE_STORAGE_KEY = 'hiruno-api-base-url';
const PREFERENCES_STORAGE_KEY = 'hiruno-preferences';
const HERO_AVATAR_STORAGE_KEY = 'hiruno-hero-avatar';
const DEFAULT_PREFERENCES = { themeMode: 'auto', accentColor: '#4F6CE8', softness: 82, uiScale: 92, contextTurns: 18, logsExpanded: false, debugMode: false };
const state = { authenticated: false, sessionChecked: false, systemStatus: null, channels: [], providers: [], activeProviderId: null, modelRouting: [], currentConversationId: null, currentTimelineType: 'all', logsExpanded: false, preferences: { ...DEFAULT_PREFERENCES } };

/* ── safeStorage ────────────────────────────────────────────── */
const safeStorage = (() => {
  try { const k = '__hiruno_storage_probe__'; window.localStorage.setItem(k, '1'); window.localStorage.removeItem(k); return window.localStorage; }
  catch (e) { const m = new Map(); return { getItem(k) { return m.has(k) ? m.get(k) : null; }, setItem(k, v) { m.set(k, String(v)); }, removeItem(k) { m.delete(k); }, clear() { m.clear(); } }; }
})();

/* ── Preferences ────────────────────────────────────────────── */
function readPreferences() { try { const raw = safeStorage.getItem(PREFERENCES_STORAGE_KEY); if (raw) Object.assign(state.preferences, JSON.parse(raw)); } catch (e) {} state.logsExpanded = Boolean(state.preferences.logsExpanded); }
function writePreferences(patch) { Object.assign(state.preferences, patch); try { safeStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(state.preferences)); } catch (e) {} }

/* ── getApiBaseUrl ──────────────────────────────────────────── */
function getApiBaseUrl() { if (window.API_BASE_URL) return window.API_BASE_URL; const saved = safeStorage.getItem(API_BASE_STORAGE_KEY); if (saved) return saved; if (location.hostname && location.hostname !== 'localhost' && !location.protocol.startsWith('file')) return location.origin; return 'http://127.0.0.1:8787'; }

/* ── Utility functions ──────────────────────────────────────── */
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }
function setText(el, text) { if (el) el.textContent = text ?? ''; }
function setInputValue(id, value) { const el = document.getElementById(id); if (el) el.value = value ?? ''; }
function clearNode(el) { while (el?.firstChild) el.removeChild(el.firstChild); }
function createEl(tag, cls, text) { const el = document.createElement(tag); if (cls) el.className = cls; if (text != null) el.textContent = text; return el; }
function createMdEl(tag, cls, md) {
  const el = document.createElement(tag); if (cls) el.className = cls;
  if (md == null) return el;
  if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
    try {
      const html = marked.parse(String(md), { breaks: true, gfm: true });
      el.innerHTML = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
      el.querySelectorAll('a[href]').forEach(anchor => {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      });
      return el;
    } catch(e) {}
  }
  el.textContent = md;
  return el;
}
function appendChildren(parent, children) { children.filter(Boolean).forEach(c => parent.appendChild(c)); }
function formatPercent(v) { return v != null ? `${Math.round(v * 100)}%` : '—'; }
function formatCurrency(v) { return v != null ? `¥${Number(v).toFixed(2)}` : '—'; }
function formatTime(iso) { if (!iso) return ''; try { const d = new Date(iso); return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; } catch(e) { return ''; } }
function formatDate(iso) { if (!iso) return ''; try { return new Date(iso).toISOString().slice(0,10); } catch(e) { return ''; } }
function channelLabel(id) { return ({ qq:'QQ', wechat:'微信', web:'Web' })[id] || id || ''; }
function channelPillClass(id) { return `pill ${id === 'wechat' ? 'wx' : (id === 'web' ? 'web' : (id === 'qq' ? 'qq' : ''))}`.trim(); }
function zoneLabel(id) { return ({ daily:'日常', deep:'深度', intimate:'亲密' })[id] || id || ''; }
function levelLabel(lv) { return ({ info:'INFO', warn:'WARN', error:'ERROR' })[lv] || (lv||'info').toUpperCase(); }
function showToast(msg) { if (!toast) return; toast.textContent = msg; toast.classList.add('is-visible'); clearTimeout(showToast._t); showToast._t = setTimeout(() => toast.classList.remove('is-visible'), 2400); }

/* ── API object ─────────────────────────────────────────────── */
const api = {
  _request(path, opts = {}) {
    const url = `${getApiBaseUrl()}${path}`;
    const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) };
    return fetch(url, { ...opts, headers, credentials: 'include' }).then(async res => {
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { const err = new Error(data.message || res.statusText); err.status = res.status; err.code = data.code; throw err; }
      return data;
    });
  },
  get: (path) => api._request(path),
  post: (path, body) => api._request(path, { method: 'POST', body: JSON.stringify(body) }),
  patch: (path, body) => api._request(path, { method: 'PATCH', body: JSON.stringify(body) }),
  login: (body) => api.post('/api/auth/login', body),
  logout: () => api.post('/api/auth/logout', {}),
  session: () => api.get('/api/auth/session')
};
window.hirunoApi = api;

/* ── applyAppearance ────────────────────────────────────────── */
function applyAppearance() {
  const p = state.preferences;
  const dark = p.themeMode === 'dark' || (p.themeMode === 'auto' && media.matches);
  document.documentElement.setAttribute('data-theme', dark ? 'yoru' : 'akari');
  document.getElementById('themeSegment')?.querySelectorAll('[data-theme-choice]').forEach(btn => btn.classList.toggle('active', btn.dataset.themeChoice === p.themeMode));
  const root = document.documentElement;
  if (p.accentColor) {
    root.style.setProperty('--primary-500', p.accentColor);
    root.style.setProperty('--primary-400', `color-mix(in srgb, ${p.accentColor} 78%, ${dark ? '#B4C3FC' : 'white'})`);
    root.style.setProperty('--primary-300', `color-mix(in srgb, ${p.accentColor} 58%, ${dark ? '#B4C3FC' : 'white'})`);
    root.style.setProperty('--primary-200', `color-mix(in srgb, ${p.accentColor} 38%, ${dark ? '#1F2A55' : 'white'})`);
    root.style.setProperty('--primary-100', `color-mix(in srgb, ${p.accentColor} 18%, ${dark ? '#131A2E' : '#F6F8FC'})`);
    root.style.setProperty('--primary-600', `color-mix(in srgb, ${p.accentColor} 82%, ${dark ? '#93A9FB' : '#1a1a2e'})`);
    root.style.setProperty('--primary-700', `color-mix(in srgb, ${p.accentColor} 62%, ${dark ? '#B4C3FC' : '#1a1a2e'})`);
    root.style.setProperty('--shadow-focus', `0 0 0 3px color-mix(in srgb, ${p.accentColor}, transparent 72%)`);
    const hex = document.getElementById('accentHex');
    if (hex) hex.textContent = p.accentColor;
  }
  if (p.softness != null) {
    const s = clamp(p.softness, 55, 95) / 100;
    const loA = dark ? (0.35 + (1 - s) * 0.30) : (0.28 + (1 - s) * 0.25);
    const hiA = dark ? (0.03 + s * 0.04) : (0.80 + s * 0.20);
    root.style.setProperty('--neo-lo-soft', dark
      ? `rgba(0,0,0,${loA.toFixed(3)})`
      : `rgba(143,158,191,${loA.toFixed(3)})`);
    root.style.setProperty('--neo-hi', dark
      ? `rgba(255,255,255,${hiA.toFixed(3)})`
      : `rgba(255,255,255,${hiA.toFixed(3)})`);
    const sr = document.getElementById('softnessRange');
    if (sr) sr.value = p.softness;
    const sv = document.getElementById('softnessValue');
    if (sv && sr) sv.textContent = sr.value;
  }
  if (p.uiScale != null) {
    root.style.setProperty('--ui-scale', (clamp(p.uiScale, 82, 106) / 100).toFixed(3));
    const ur = document.getElementById('uiScaleRange');
    if (ur) ur.value = p.uiScale;
    const uv = document.getElementById('uiScaleValue');
    if (uv && ur) uv.textContent = ur.value;
  }
}

/* ── Auth helpers ────────────────────────────────────────────── */
function setAuthenticated(value) {
  state.authenticated = Boolean(value);
  state.sessionChecked = true;
  if (value) {
    loginOverlay?.classList.remove('is-visible');
    loginOverlay?.setAttribute('aria-hidden', 'true');
  } else {
    loginOverlay?.classList.add('is-visible');
    loginOverlay?.setAttribute('aria-hidden', 'false');
  }
}
function handleAuthError(error) {
  if (error?.status === 401) { setAuthenticated(false); if (loginTotp) loginTotp.hidden = false; showToast('会话过期，请重新登录。'); return true; }
  if (error?.status === 429) { showToast('请求过于频繁，请稍后再试。'); return true; }
  return false;
}

/* ── updateSystemStatus ─────────────────────────────────────── */
function updateSystemStatus(data) {
  state.systemStatus = data;
  const frozen = Boolean(data?.frozen);
  const heroTitle = document.querySelector('.hero-copy h2');
  const domainEl = document.querySelector('.hero-copy .domain');
  const freezeText = freezeButton?.querySelector('.freeze-text');
  if (heroTitle) heroTitle.textContent = `あかり · ${frozen ? '已冻结' : '在线'}`;
  if (domainEl && data?.domain) domainEl.textContent = data.domain;
  if (freezeText) freezeText.textContent = frozen ? '解除冻结' : '一键冻结';
  freezeButton?.classList.toggle('frozen', frozen);
}

/* ── renderChannels ─────────────────────────────────────────── */
function renderChannels(items) {
  state.channels = Array.isArray(items) ? items.filter(ch => ['qq','wechat','web'].includes(ch.id || ch.channelId)) : [];
  const homeGrid = document.querySelector('.channel-grid');
  if (homeGrid) { clearNode(homeGrid); state.channels.forEach(ch => homeGrid.appendChild(channelCard(ch, 'home'))); }
  const subStack = document.querySelector('#sub-channels .sub-stack');
  if (subStack) { clearNode(subStack); state.channels.forEach(ch => subStack.appendChild(channelCard(ch, 'sub'))); }
}
function channelCard(ch, mode) {
  const id = ch.id || ch.channelId;
  const label = channelLabel(id);
  const online = ch.status === 'online' || ch.enabled !== false;
  if (mode === 'home') {
    const card = createEl('div', 'channel-card inset-card');
    const top = createEl('div', 'top');
    appendChildren(top, [createEl('h3', '', label), createEl('span', online ? 'online' : 'offline', online ? '在线' : '离线')]);
    card.appendChild(top);
    card.appendChild(createEl('p', '', ch.lastActivity || ''));
    return card;
  }
  const article = createEl('article', 'channel-config inset-card');
  article.dataset.channelCard = id;
  article.dataset.channel = id;
  const topline = createEl('div', 'card-topline');
  const titleDiv = createEl('div', '');
  titleDiv.appendChild(createEl('h3', '', label));
  titleDiv.appendChild(createEl('p', '', `channel=${id}`));
  const rightDiv = createEl('div', 'channel-head-right');
  rightDiv.appendChild(createEl('span', online ? 'online' : 'offline', online ? '在线' : '离线'));
  const toggle = createEl('button', `switch${online ? ' on' : ''}`, '');
  toggle.type = 'button';
  toggle.dataset.channelToggle = id;
  rightDiv.appendChild(toggle);
  appendChildren(topline, [titleDiv, rightDiv]);
  article.appendChild(topline);
  const grid = createEl('div', 'channel-control-grid');
  const zoneLabel2 = createEl('label', 'channel-setting');
  zoneLabel2.appendChild(createEl('span', '', '默认 zone'));
  const zoneSelect = createEl('select', 'zone-select');
  zoneSelect.dataset.channelField = 'zone';
  zoneSelect.dataset.channel = id;
  ['daily','deep','intimate'].forEach(z => { const opt = createEl('option', '', zoneLabel(z)); opt.value = z; if ((ch.zone || ch.defaultZone || 'daily') === z) opt.selected = true; zoneSelect.appendChild(opt); });
  zoneLabel2.appendChild(zoneSelect);
  grid.appendChild(zoneLabel2);
  if (id !== 'web') {
    const bufLabel = createEl('label', 'channel-setting');
    bufLabel.appendChild(createEl('span', '', '缓冲时间（秒）'));
    const bufInput = createEl('input', 'buffer-number');
    bufInput.type = 'number'; bufInput.min = '0'; bufInput.max = '60'; bufInput.value = ch.bufferSeconds ?? 10;
    bufInput.dataset.channelField = 'bufferSeconds'; bufInput.dataset.channel = id; bufInput.inputMode = 'numeric';
    bufLabel.appendChild(bufInput);
    grid.appendChild(bufLabel);
  } else {
    const renderLabel = createEl('label', 'channel-setting');
    renderLabel.appendChild(createEl('span', '', '渲染'));
    const renderSelect = createEl('select', 'render-select');
    renderSelect.dataset.channelField = 'renderMode'; renderSelect.dataset.channel = id;
    const streamOpt = createEl('option', '', '流式'); streamOpt.value = 'stream';
    const completeOpt = createEl('option', '', '非流式'); completeOpt.value = 'complete';
    if (ch.renderMode === 'complete') completeOpt.selected = true; else streamOpt.selected = true;
    appendChildren(renderSelect, [streamOpt, completeOpt]);
    renderLabel.appendChild(renderSelect);
    grid.appendChild(renderLabel);
  }
  article.appendChild(grid);
  return article;
}

/* ── renderMetrics ──────────────────────────────────────────── */
function renderMetrics(data) {
  const stats = [
    [data?.todayTokens ?? '—', '今日 tokens'],
    [data?.todayCost != null ? formatCurrency(data.todayCost) : '—', '今日成本'],
    [data?.cacheHitRate != null ? formatPercent(data.cacheHitRate) : '—', '缓存命中率']
  ];
  document.querySelectorAll('.hero-stat').forEach((el, i) => {
    if (!stats[i]) return;
    const num = el.querySelector('.num');
    const span = el.querySelector('span');
    if (num) num.textContent = stats[i][0];
    if (span) span.textContent = stats[i][1];
  });
  const metricCards = document.querySelectorAll('#sub-stats .metric-card strong');
  if (metricCards.length >= 2) {
    setText(metricCards[0], data?.weeklyCost != null ? formatCurrency(data.weeklyCost) : '¥—');
    setText(metricCards[1], data?.cacheHitRate != null ? formatPercent(data.cacheHitRate) : '—');
  }
}

/* ── renderProviders, renderModelRouting, renderModelOptions ── */
function renderProviders(items) {
  state.providers = Array.isArray(items) ? items : [];
  const first = state.providers[0];
  if (!first) return;
  state.activeProviderId = first.providerId;
  setInputValue('providerName', first.providerName);
  setInputValue('providerBaseUrl', first.baseUrl);
  setInputValue('providerKey', '');
  setInputValue('providerTtsKey', '');
  setInputValue('providerTtsUrl', first.ttsUrl);
  setInputValue('providerTtsModel', first.ttsModel);
  setInputValue('providerTtsVoice', first.ttsVoiceId);
  const status = document.getElementById('providerStatus');
  const flags = [first.hasApiKey && 'API Key ✓', first.hasTtsKey && 'TTS Key ✓', first.hasCloudflareToken && 'CF Token ✓', first.hasAnthropicKey && 'Anthropic Key ✓'].filter(Boolean);
  setText(status, flags.length ? flags.join(' · ') : '无已保存的密钥');
}
function renderModelRouting(items) {
  state.modelRouting = Array.isArray(items) ? items : [];
}
function renderModelOptions(models) {
  if (!Array.isArray(models)) return;
  ['providerChatModel','providerToolModel','providerVisionModel','providerSummaryModel','providerMemoryModel','providerSttModel'].forEach(id => {
    const select = document.getElementById(id);
    if (!select) return;
    const current = select.value;
    clearNode(select);
    models.forEach(m => { const name = typeof m === 'string' ? m : m.id || m.name; const opt = createEl('option', '', name); opt.value = name; select.appendChild(opt); });
    if (current && [...select.options].some(o => o.value === current)) select.value = current;
  });
}

/* ── renderSettings ─────────────────────────────────────────── */
function renderSettings(settings) {
  if (!settings) return;
  const appearance = settings.appearance || {};
  if (appearance.themeMode) writePreferences({ themeMode: appearance.themeMode });
  if (appearance.accentColor) writePreferences({ accentColor: appearance.accentColor });
  if (appearance.softness != null) writePreferences({ softness: appearance.softness });
  if (appearance.uiScale != null) writePreferences({ uiScale: appearance.uiScale });
  applyAppearance();
  const context = settings.context || {};
  setInputValue('contextKeepBudget', context.keepBudgetTokens);
  setInputValue('contextTriggerBudget', context.triggerThresholdTokens);
  const buffer = settings.messageBuffer || {};
  setInputValue('shortBufferSeconds', buffer.qq?.bufferSeconds);
  setInputValue('shortMessageCount', buffer.qq?.maxMessageParts);
  const env = settings.environmentContext || {};
  const envRows = document.querySelectorAll('#environmentPanel .toggle-row');
  ['time', 'weather', 'battery', 'location', 'foregroundApp', 'screenTime'].forEach((key, index) => {
    const row = envRows[index];
    if (!row || !env[key]) return;
    row.querySelector('.switch')?.classList.toggle('on', Boolean(env[key].enabled));
    setText(row.querySelector('.setting-main span'), `~${env[key].estimatedTokens} tokens`);
  });
}

/* ── renderTimeline ─────────────────────────────────────────── */
function renderTimeline(items) {
  const list = document.querySelector('.timeline-list');
  if (!list) return;
  clearNode(list);
  const safeItems = Array.isArray(items) ? items : [];
  if (!safeItems.length) { list.appendChild(createEl('div', 'empty-state', '没有匹配的时间线事件。')); return; }
  safeItems.forEach(item => {
    const row = createEl('div', 'timeline-item');
    row.dataset.timelineType = item.type || 'event';
    const dotClass = item.type === 'chat' ? 'blue' : item.type === 'tool' ? 'cyan' : 'purple';
    const copy = createEl('div', 'timeline-copy');
    appendChildren(copy, [createEl('strong', '', item.title || item.type), createEl('p', '', item.description || ''), createEl('span', 'tag-soft', item.type || 'event')]);
    appendChildren(row, [createEl('div', 'timeline-time', formatTime(item.createdAt)), createEl('span', `dot ${dotClass}`), copy]);
    list.appendChild(row);
  });
}

/* ── renderLogs ─────────────────────────────────────────────── */
function renderLogs(payload) {
  const items = Array.isArray(payload?.items) ? payload.items : [];
  const logList = document.querySelector('#sub-logs .runtime-log-list');
  if (logList) {
    clearNode(logList);
    items.forEach(item => logList.appendChild(logItem(item)));
    if (!items.length) logList.appendChild(createEl('div', 'empty-state', '暂无日志。'));
  }
  const hasUnreadError = Number(payload?.unreadErrorCount || 0) > 0 || items.some(item => item.level === 'error' && item.read === false);
  const logsApp = document.querySelector('[data-sub="sub-logs"]');
  logsApp?.classList.toggle('has-error', hasUnreadError);
}
function logItem(item) {
  const details = document.createElement('details');
  details.className = `runtime-log-entry ${item.level || 'info'}`;
  details.dataset.logLevel = item.level || 'info';
  if (item.level === 'error') details.dataset.logAlert = 'true';
  const summary = document.createElement('summary');
  appendChildren(summary, [
    createEl('span', `level ${item.level || 'info'}`, levelLabel(item.level)),
    createEl('span', 'log-title', item.message || item.source || ''),
    createEl('span', 'log-time', formatTime(item.createdAt)),
    createEl('span', 'log-chevron', '›')
  ]);
  details.appendChild(summary);
  details.appendChild(createEl('p', '', item.details || item.message || ''));
  return details;
}

/* ── renderSecurity ─────────────────────────────────────────── */
function renderSecurityPublicState() {
  const console = document.querySelector('#sub-security .security-console');
  if (!console) return;
  document.querySelectorAll('#sub-security .security-muted-box').forEach(el => setText(el, '登录后查看'));
}
function renderSecurity({ totp, devices, ipAllowlist, auditLogs }) {
  const mutedBoxes = document.querySelectorAll('#sub-security .security-muted-box');
  if (mutedBoxes[0]) setText(mutedBoxes[0], `当前 IP：${ipAllowlist?.currentIp || '未知'}`);
  if (mutedBoxes[1]) setText(mutedBoxes[1], totp?.enabled ? '已启用' : '未启用');
}

/* ── renderMemory ───────────────────────────────────────────── */
function renderMemory(items) {
  const panel = document.querySelector('.memory-panel[data-memory-panel="buckets"]');
  if (!panel || !Array.isArray(items) || !items.length) return;
  const existing = panel.querySelectorAll('.memory-card2[data-memory-bucket]');
  if (existing.length > 0) return;
}

/* ── renderWorldbook ────────────────────────────────────────── */
function renderWorldbook(items) {
  const statEls = document.querySelectorAll('.world-stat strong');
  if (statEls.length >= 3 && Array.isArray(items)) {
    setText(statEls[0], items.length);
    setText(statEls[1], items.filter(i => i.mode === 'resident' || i.resident).length);
    setText(statEls[2], items.filter(i => i.mode === 'keyword' || !i.resident).length);
  }
}

/* ── renderTools ────────────────────────────────────────────── */
function renderTools(items) {
  const lists = document.querySelectorAll('#sub-tools .selectable-list');
  if (!lists.length || !Array.isArray(items) || !items.length) return;
  lists.forEach(clearNode);
  items.forEach(item => {
    const target = item.type === 'mcp' ? lists[0] : lists[1];
    if (!target) return;
    const card = createEl('button', `selectable-card ${item.enabled ? 'selected' : ''}`.trim());
    card.type = 'button'; card.disabled = !state.authenticated; card.setAttribute('data-selectable', '');
    const copy = createEl('span', 'select-copy');
    appendChildren(copy, [createEl('strong', '', item.name || item.toolId), createEl('span', '', `${item.provider || 'backend'} · ${item.status || 'available'}`)]);
    const meta = createEl('span', 'select-meta');
    (item.tags || [item.type]).slice(0, 2).forEach(tag => meta.appendChild(createEl('span', 'tag-soft', tag)));
    appendChildren(card, [createEl('span', 'select-dot'), copy, meta]);
    target.appendChild(card);
  });
}

/* ── renderDiary ────────────────────────────────────────────── */
function renderDiary(items) {
  if (!Array.isArray(items) || !items.length) return;
  ['akari', 'yoru'].forEach(author => {
    const panel = document.querySelector(`[data-diary-panel="${author}"]`);
    if (!panel) return;
    clearNode(panel);
    const stack = createEl('div', 'sub-stack');
    items.filter(item => item.author === author).forEach(item => {
      const card = createEl('article', 'diary-card inset-card');
      const top = createEl('div', 'card-topline');
      appendChildren(top, [createEl('h3', '', item.date || formatDate(item.createdAt)), createEl('span', author === 'akari' ? 'author-a' : 'author-y', author === 'akari' ? 'あかり' : 'Yoru')]);
      appendChildren(card, [top, createEl('div', 'preview', item.content || item.title || ''), footMeta([item.privacyMark || 'private-pending', item.syncStatus, item.obsidianPath])]);
      stack.appendChild(card);
    });
    panel.appendChild(stack.children.length ? stack : createEl('div', 'diary-empty', '还没有写过日记'));
  });
}

/* ── footMeta ───────────────────────────────────────────────── */
function footMeta(values) { const meta = createEl('div', 'foot-meta'); values.filter(Boolean).forEach(v => meta.appendChild(createEl('span', '', v))); return meta; }

/* ── renderConversations, renderMessages, messageNode ────────── */
function renderConversations(conversations) {
  const first = Array.isArray(conversations) ? conversations[0] : null;
  if (!first) return;
  state.currentConversationId = first.conversationId;
  loadMessages(first.conversationId);
}
function renderMessages(messages, contextPreview) {
  const thread = document.querySelector('.thread');
  if (!thread) return;
  clearNode(thread);
  if (!Array.isArray(messages) || !messages.length) {
    thread.appendChild(createEl('div', 'empty-state', '还没有对话记录。先说一句，别光盯着屏幕。'));
    return;
  }
  messages.slice(-8).forEach(message => thread.appendChild(messageNode(message, contextPreview)));
}
function messageNode(message, contextPreview) {
  const messageId = message.messageId || `local-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const wrap = createEl('div', `message-wrap ${message.role === 'user' ? 'user' : 'ai'}`);
  const meta = createEl('div', 'meta-line');
  appendChildren(meta, [
    createEl('span', channelPillClass(message.channelId), channelLabel(message.channelId)),
    createEl('span', 'pill zone', zoneLabel(message.zone)),
    createEl('span', '', formatTime(message.createdAt)),
    message.model ? createEl('span', '', message.model) : null
  ]);
  wrap.appendChild(meta);
  if (message.role === 'user') { wrap.appendChild(createEl('div', 'message-user', message.content)); return wrap; }
  const card = createEl('article', 'message-ai');
  card.appendChild(createMdEl('div', 'reply', message.content));
  const actions = createEl('div', 'reveal-row');
  const sections = [
    ['thinking', '思考过程', contextPreview?.zoneReason ? `zoneReason: ${contextPreview.zoneReason}; visibility: ${contextPreview.visibilityRule}` : 'debugMode 关闭时仅展示摘要。'],
    ['memory', '注入的记忆', summarizeMemory(contextPreview?.memoryInjection)],
    ['worldbook', '世界书词条', summarizeWorldbook(contextPreview?.worldbookInjection)],
    ['tools', '工具调用', summarizeTools(contextPreview?.toolResults)]
  ];
  sections.forEach(([name, label, content]) => {
    const id = `${name}-${messageId}`;
    const button = createEl('button', 'reveal-btn', label); button.type = 'button'; button.dataset.reveal = id; button.setAttribute('aria-expanded', 'false');
    const panel = createEl('div', name === 'thinking' ? 'thinking' : 'memo-list', content || '无');
    panel.id = id; panel.hidden = true;
    actions.appendChild(button); card.appendChild(panel);
  });
  card.insertBefore(actions, card.children[1] || null);
  card.appendChild(tokenGrid(message));
  const detail = createEl('div', 'detail-row');
  [message.model, message.attemptCount ? `attempt ${message.attemptCount}` : null, message.fallbackModel ? `fallback ${message.fallbackModel}` : null, message.finalError].filter(Boolean).forEach(v => detail.appendChild(createEl('span', '', v)));
  card.appendChild(detail);
  const payloadButton = createEl('button', 'reveal-btn', message.debugPayloadAvailable ? '展开完整 payload' : 'payload 未开放');
  payloadButton.type = 'button'; payloadButton.style.marginTop = '12px';
  const payloadId = `payload-${messageId}`;
  payloadButton.dataset.reveal = payloadId;
  payloadButton.setAttribute('aria-expanded', 'false');
  payloadButton.disabled = !message.debugPayloadAvailable && !state.preferences.debugMode;
  const payload = createEl('pre', 'payload', JSON.stringify({ messageId: message.messageId, channelId: message.channelId, zone: message.zone, debugPayloadAvailable: message.debugPayloadAvailable }, null, 2));
  payload.id = payloadId; payload.hidden = true;
  card.appendChild(payloadButton); card.appendChild(payload);
  wrap.appendChild(card);
  return wrap;
}

/* ── Summarize helpers + tokenGrid ──────────────────────────── */
function summarizeMemory(section) { if (!section) return '无注入记忆。'; const items = section.items || []; if (!items.length) return `Ombre Brain · ${section.estimatedTokens || 0} tokens · ${section.count || 0} 条`; return items.map(i => `${i.title || i.memoryId} · ${i.hitReason || ''} · ${i.estimatedTokens || 0} tokens`).join('\n'); }
function summarizeWorldbook(section) { if (!section) return '无世界书注入。'; const items = section.items || []; if (!items.length) return `${section.entryIds?.length || 0} entries · ${section.estimatedTokens || 0} tokens`; return items.map(i => `${i.title || i.entryId} · ${i.category || ''} · ${i.estimatedTokens || i.tokenBudget || 0} tokens`).join('\n'); }
function summarizeTools(section) { if (!section) return '无工具调用。'; const items = section.items || []; if (!items.length) return `${section.count || 0} tool results · ${section.estimatedTokens || 0} tokens`; return items.map(i => `${i.toolName || i.toolId || 'tool'} · ${i.status || 'recorded'} · ${i.resultSummary || ''}`).join('\n'); }
function tokenGrid(message) {
  const usage = message.tokenUsage || {}; const cache = message.cacheUsage || {};
  const grid = createEl('div', 'token-grid');
  [[usage.inputTokens ?? usage.promptTokens ?? 0, '输入'], [usage.outputTokens ?? usage.completionTokens ?? 0, '输出'], [cache.cacheReadInputTokens ? 'hit' : (cache.cacheHitRate != null ? formatPercent(cache.cacheHitRate) : '—'), '缓存'], [usage.costCny != null ? formatCurrency(usage.costCny) : (usage.cost != null ? formatCurrency(usage.cost) : '—'), '成本']].forEach(([v, l]) => { const cell = createEl('div', 'token-cell'); appendChildren(cell, [createEl('strong', '', v), createEl('span', '', l)]); grid.appendChild(cell); });
  return grid;
}

/* ── Load functions ─────────────────────────────────────────── */
async function loadSession() { try { const session = await api.session(); setAuthenticated(Boolean(session.authenticated)); } catch (e) { setAuthenticated(false); } }
async function loadPublicData() {
  const jobs = [
    api.get('/api/health').catch(e => ({ error: e })),
    api.get('/api/monitoring/summary').catch(e => ({ error: e })),
    api.get('/api/system/status').catch(e => ({ error: e })),
    api.get('/api/channels').catch(e => ({ error: e })),
    api.get('/api/metrics/summary').catch(e => ({ error: e })),
    api.get('/api/providers').catch(e => ({ error: e })),
    api.get('/api/model-routing').catch(e => ({ error: e })),
    api.get('/api/settings').catch(e => ({ error: e })),
    api.get('/api/timeline?type=all&limit=30').catch(e => ({ error: e })),
    api.get('/api/logs').catch(e => ({ error: e })),
    api.get('/api/conversations?limit=1').catch(e => ({ error: e })),
    api.get('/api/memory').catch(e => ({ error: e })),
    api.get('/api/worldbook').catch(e => ({ error: e })),
    api.get('/api/tools').catch(e => ({ error: e })),
    api.get('/api/diary').catch(e => ({ error: e }))
  ];
  const [health, monitoring, system, channels, metrics, providers, routing, settings, timeline, logs, conversations, memory, worldbook, tools, diary] = await Promise.all(jobs);
  if (!system.error) updateSystemStatus(system);
  if (!channels.error) renderChannels(channels.items);
  if (!metrics.error) renderMetrics(metrics);
  if (!providers.error) renderProviders(providers.items);
  if (!routing.error) renderModelRouting(routing.items);
  if (!settings.error) renderSettings(settings);
  if (!timeline.error) renderTimeline(timeline.items);
  if (!logs.error) renderLogs(logs);
  if (!conversations.error) renderConversations(conversations.items);
  if (!memory.error) renderMemory(memory.items);
  if (!worldbook.error) renderWorldbook(worldbook.items);
  if (!tools.error) renderTools(tools.items);
  if (!diary.error) renderDiary(diary.items);
  if (health.error && monitoring.error) showToast('后端未连接，保留静态公开状态。');
}
async function loadMessages(conversationId) {
  try {
    const [messages, preview] = await Promise.all([api.get(`/api/conversations/${encodeURIComponent(conversationId)}/messages`), api.get(`/api/conversations/${encodeURIComponent(conversationId)}/context-preview?zone=deep`).catch(() => null)]);
    renderMessages(messages.items, preview);
  } catch (e) { if (!handleAuthError(e)) showToast(`对话加载失败：${e.message}`); }
}
async function loadTimeline(type) { state.currentTimelineType = type; try { const data = await api.get(`/api/timeline?type=${encodeURIComponent(type)}&limit=50`); renderTimeline(data.items); } catch (e) { showToast(`时间线加载失败：${e.message}`); } }
async function loadSecurity() {
  if (!state.authenticated) return renderSecurityPublicState();
  try {
    const [totp, devices, ipAllowlist, auditLogs] = await Promise.all([api.get('/api/security/totp/status'), api.get('/api/security/devices'), api.get('/api/security/ip-allowlist'), api.get('/api/security/audit-logs?limit=6')]);
    renderSecurity({ totp, devices, ipAllowlist, auditLogs });
  } catch (e) { if (!handleAuthError(e)) showToast(`安全信息加载失败：${e.message}`); }
}

/* ── Web chat ──────────────────────────────────────────────── */
const chatThread = document.getElementById('chatThread');
const chatTextarea = document.getElementById('chatTextarea');
const chatSendBtn = document.getElementById('chatSendBtn');
const chatTyping = document.getElementById('chatTyping');
let webConversationId = null;
let chatSending = false;

function appendChatMessage(message, contextPreview) {
  if (!chatThread) return;
  const normalized = {
    messageId: message.messageId,
    role: message.role === 'assistant' ? 'assistant' : message.role,
    channelId: message.channelId || 'web',
    zone: message.zone || 'daily',
    content: message.content || '',
    model: message.model,
    tokenUsage: message.tokenUsage,
    cacheUsage: message.cacheUsage,
    createdAt: message.createdAt || new Date().toISOString(),
    debugPayloadAvailable: Boolean(message.debugPayloadAvailable),
    attemptCount: message.attemptCount,
    fallbackModel: message.fallbackModel,
    finalError: message.finalError
  };
  const node = messageNode(normalized, contextPreview || null);
  chatThread.appendChild(node);
  node.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function appendChatBubble(role, content, meta) {
  appendChatMessage({
    role: role === 'assistant' ? 'assistant' : role,
    channelId: 'web',
    zone: meta?.zoneId || meta?.zone || 'daily',
    content,
    model: meta?.model,
    tokenUsage: meta?.tokenUsage,
    cacheUsage: meta?.cacheUsage,
    createdAt: meta?.createdAt,
    debugPayloadAvailable: meta?.debugPayloadAvailable,
    attemptCount: meta?.attemptCount,
    fallbackModel: meta?.fallbackModel,
    finalError: meta?.finalError
  }, meta?.contextPreview);
}

async function sendWebChat() {
  if (chatSending || !chatTextarea) return;
  const text = chatTextarea.value.trim();
  if (!text) return;
  if (!state.authenticated) return showToast('Please log in first.');

  chatSending = true;
  chatSendBtn.disabled = true;
  chatTextarea.value = '';
  chatTextarea.style.height = 'auto';

  appendChatBubble('user', text);
  chatTyping?.classList.add('visible');

  try {
    const body = { message: text };
    if (webConversationId) body.conversationId = webConversationId;
    const data = await api.post('/api/web/chat', body);
    webConversationId = data.conversationId;
    const msg = data.assistantMessage;
    appendChatBubble('assistant', msg.content, {
      model: msg.model, zoneId: msg.zone,
      time: formatTime(msg.createdAt),
      tokenUsage: msg.tokenUsage, cacheUsage: msg.cacheUsage,
      createdAt: msg.createdAt,
      debugPayloadAvailable: msg.debugPayloadAvailable,
      attemptCount: msg.attemptCount,
      fallbackModel: msg.fallbackModel,
      finalError: msg.finalError
    });
  } catch (e) {
    if (!handleAuthError(e)) appendChatBubble('assistant', `Error: ${e.message}`);
  } finally {
    chatSending = false;
    chatSendBtn.disabled = false;
    chatTyping?.classList.remove('visible');
    chatTextarea?.focus();
  }
}

if (chatSendBtn) chatSendBtn.addEventListener('click', sendWebChat);
if (chatTextarea) {
  chatTextarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendWebChat(); }
  });
  chatTextarea.addEventListener('input', () => {
    chatTextarea.style.height = 'auto';
    chatTextarea.style.height = Math.min(chatTextarea.scrollHeight, 120) + 'px';
  });
}

/* ── Action handlers ────────────────────────────────────────── */
async function patchChannel(channelId, patch) {
  if (!state.authenticated) return showToast('登录后才能修改渠道。');
  try { await api.patch(`/api/channels/${encodeURIComponent(channelId)}`, patch); showToast('渠道已更新。'); const channels = await api.get('/api/channels'); renderChannels(channels.items); } catch (e) { if (!handleAuthError(e)) showToast(`渠道更新失败：${e.message}`); }
}
async function toggleFreeze() {
  if (!state.authenticated) return showToast('登录后才能冻结或解冻。');
  const frozen = Boolean(state.systemStatus?.frozen);
  freezeButton.disabled = true;
  try { const result = frozen ? await api.post('/api/system/unfreeze', {}) : await api.post('/api/system/freeze', { reason: 'manual', source: 'web-console' }); updateSystemStatus({ ...(state.systemStatus || {}), ...result }); showToast(result.message || (result.frozen ? '系统已冻结。' : '系统已解冻。')); } catch (e) { if (!handleAuthError(e)) showToast(`操作失败：${e.message}`); } finally { freezeButton.disabled = !state.authenticated; }
}
async function saveProvider() {
  if (!state.authenticated) return showToast('登录后才能保存供应商。');
  const providerId = state.activeProviderId || state.providers[0]?.providerId;
  if (!providerId) return showToast('没有可保存的供应商。');
  const payload = { providerName: document.getElementById('providerName')?.value || '', baseUrl: document.getElementById('providerBaseUrl')?.value || '', chatModel: document.getElementById('providerChatModel')?.value || '', toolModel: document.getElementById('providerToolModel')?.value || '', visionModel: document.getElementById('providerVisionModel')?.value || '', summaryModel: document.getElementById('providerSummaryModel')?.value || '', memoryModel: document.getElementById('providerMemoryModel')?.value || '', sttModel: document.getElementById('providerSttModel')?.value || '', ttsUrl: document.getElementById('providerTtsUrl')?.value || '', ttsModel: document.getElementById('providerTtsModel')?.value || '', ttsVoiceId: document.getElementById('providerTtsVoice')?.value || '' };
  const apiKey = document.getElementById('providerKey')?.value || '';
  const ttsKey = document.getElementById('providerTtsKey')?.value || '';
  if (apiKey) payload.apiKey = apiKey; if (ttsKey) payload.ttsKey = ttsKey;
  try { await api.patch(`/api/providers/${encodeURIComponent(providerId)}`, payload); setInputValue('providerKey', ''); setInputValue('providerTtsKey', ''); showToast('供应商已保存，secret 只保留 presence flag。'); const providers = await api.get('/api/providers'); renderProviders(providers.items); } catch (e) { if (!handleAuthError(e)) showToast(`保存失败：${e.message}`); }
}
async function fetchModels() {
  if (!state.authenticated) return showToast('登录后才能通过后端代理拉取模型。');
  const providerId = state.activeProviderId || state.providers[0]?.providerId;
  if (!providerId) return showToast('没有可用供应商。');
  try { const data = await api.get(`/api/providers/${encodeURIComponent(providerId)}/models`); renderModelOptions(data.models); showToast(`已通过后端代理拉取 ${data.models?.length || 0} 个模型。`); } catch (e) { if (!handleAuthError(e)) showToast(`模型拉取失败：${e.message}`); }
}
async function saveBudget() {
  if (!state.authenticated) return showToast('登录后才能保存上下文预算。');
  const keepBudgetTokens = Number(document.getElementById('contextKeepBudget')?.value || 8000);
  const triggerThresholdTokens = Number(document.getElementById('contextTriggerBudget')?.value || 16000);
  try { await api.patch('/api/settings', { context: { keepBudgetTokens, triggerThresholdTokens } }); showToast('上下文预算已保存。'); } catch (e) { if (!handleAuthError(e)) showToast(`保存失败：${e.message}`); }
}
async function saveAppearanceToBackend() {
  if (!state.authenticated) return;
  try { await api.patch('/api/settings', { appearance: { themeMode: state.preferences.themeMode, accentColor: state.preferences.accentColor, softness: state.preferences.softness, uiScale: state.preferences.uiScale } }); } catch (e) { if (!handleAuthError(e)) showToast(`外观同步失败：${e.message}`); }
}

/* ── Navigation ─────────────────────────────────────────────── */
function showPage(id) {
  pages.forEach(p => p.classList.toggle('active', p.id === id));
  tabs.forEach(t => t.classList.toggle('active', t.dataset.page === id));
  if (shell) shell.dataset.currentPage = id;
  closeSubs();
  document.body.classList.toggle('settings-active', id === 'page-settings');
  viewport?.scrollTo({ top: 0, behavior: 'smooth' });
}
function openSub(id) {
  const target = document.getElementById(id);
  if (!target) return;
  /* close ALL first (no stacking), then open target */
  closeSubs();
  target.classList.add('active');
  target.setAttribute('aria-hidden', 'false');
  if (id === 'sub-security') loadSecurity();
  viewport?.scrollTo({ top: 0, behavior: 'auto' });
}
function closeSubs() {
  subPages.forEach(p => { p.classList.remove('active'); p.setAttribute('aria-hidden', 'true'); });
}

/* ── bindUi (merged B1 + visual baseline) ───────────────────── */
function bindUi() {
  if (shell) shell.dataset.currentPage = document.querySelector('.page.active')?.id || 'page-home';

  /* B1: page tabs, subs, back buttons */
  tabs.forEach(tab => tab.addEventListener('click', () => showPage(tab.dataset.page)));
  document.querySelectorAll('[data-tab-target]').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.tabTarget)));
  document.querySelectorAll('[data-sub]').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); openSub(btn.dataset.sub); }));
  document.querySelectorAll('.back-btn').forEach(btn => btn.addEventListener('click', closeSubs));

  /* B1: reveal buttons, chip groups, selectable cards, manage actions */
  document.addEventListener('click', event => {
    const reveal = event.target.closest('[data-reveal]');
    if (reveal) { const target = document.getElementById(reveal.dataset.reveal); if (target) { target.hidden = !target.hidden; reveal.classList.toggle('active', !target.hidden); reveal.setAttribute('aria-expanded', String(!target.hidden)); } }
    const chip = event.target.closest('.chip-group .chip');
    if (chip) {
      const group = chip.closest('.chip-group');
      group.querySelectorAll('.chip').forEach(item => item.classList.toggle('active', item === chip));
      if (chip.dataset.timelineFilter) loadTimeline(chip.dataset.timelineFilter);
    }
    const selectable = event.target.closest('[data-selectable]');
    if (selectable && !selectable.disabled) selectable.classList.toggle('selected');
    const manage = event.target.closest('[data-manage-action]');
    if (manage && !manage.disabled) showToast(`${manage.dataset.manageAction} 需要后端具体配置流程。`);
  });

  /* B1: switches */
  document.querySelectorAll('.switch').forEach(sw => {
    sw.addEventListener('click', event => {
      if (sw.disabled || sw.closest('#sub-channels')) return;
      event.preventDefault();
      sw.classList.toggle('on');
    });
  });

  /* B1: diary segment */
  const diarySegment = document.getElementById('diarySegment');
  diarySegment?.addEventListener('click', event => {
    const btn = event.target.closest('[data-diary-tab]');
    if (!btn) return;
    diarySegment.querySelectorAll('[data-diary-tab]').forEach(item => item.classList.toggle('active', item === btn));
    document.querySelectorAll('[data-diary-panel]').forEach(panel => panel.classList.toggle('active', panel.dataset.diaryPanel === btn.dataset.diaryTab));
  });

  /* B1: appearance controls */
  document.getElementById('themeSegment')?.addEventListener('click', event => {
    const btn = event.target.closest('[data-theme-choice]');
    if (!btn) return;
    writePreferences({ themeMode: btn.dataset.themeChoice });
    applyAppearance();
    saveAppearanceToBackend();
  });
  document.getElementById('accentColor')?.addEventListener('input', event => { writePreferences({ accentColor: event.target.value }); applyAppearance(); });
  document.getElementById('accentColor')?.addEventListener('change', saveAppearanceToBackend);
  document.getElementById('softnessRange')?.addEventListener('input', event => { writePreferences({ softness: Number(event.target.value) }); applyAppearance(); });
  document.getElementById('softnessRange')?.addEventListener('change', saveAppearanceToBackend);
  document.getElementById('uiScaleRange')?.addEventListener('input', event => { writePreferences({ uiScale: Number(event.target.value) }); applyAppearance(); });
  document.getElementById('uiScaleRange')?.addEventListener('change', saveAppearanceToBackend);
  const contextTurnsInput = document.getElementById('contextTurnsInput');
  if (contextTurnsInput) { contextTurnsInput.value = state.preferences.contextTurns ?? 18; contextTurnsInput.addEventListener('change', () => { const v = clamp(Number(contextTurnsInput.value) || 18, 2, 200); contextTurnsInput.value = v; writePreferences({ contextTurns: v }); }); }
  media.addEventListener('change', () => { if (state.preferences.themeMode === 'auto') applyAppearance(); });

  /* B1: action buttons */
  freezeButton?.addEventListener('click', toggleFreeze);
  document.getElementById('saveProviderConfig')?.addEventListener('click', saveProvider);
  document.getElementById('fetchModelsBtn')?.addEventListener('click', fetchModels);
  document.getElementById('saveBudgetBtn')?.addEventListener('click', saveBudget);
  document.getElementById('exportConversationBtn')?.addEventListener('click', async () => {
    if (!state.authenticated) return showToast('登录后才能导出对话。');
    try { const data = await api.get('/api/conversations/export?format=json'); showToast(`导出请求已创建：${data.export?.exportId || 'ok'}`); } catch (e) { if (!handleAuthError(e)) showToast(`导出失败：${e.message}`); }
  });
  document.getElementById('retryLastReplyBtn')?.addEventListener('click', () => { showToast(state.authenticated ? '当前后端未暴露独立 retry endpoint，保留失败记录后再切换模型。' : '登录后才能重试回复。'); });

  /* B1: API base button */
  apiBaseButton?.addEventListener('click', () => {
    const next = window.prompt('API Base URL', getApiBaseUrl());
    if (next == null) return;
    const clean = next.trim().replace(/\/+$/, '');
    if (clean) safeStorage.setItem(API_BASE_STORAGE_KEY, clean); else safeStorage.removeItem(API_BASE_STORAGE_KEY);
    showToast(`API Base URL: ${getApiBaseUrl()}`);
    loadPublicData();
  });

  /* B1: login form */
  loginForm?.addEventListener('submit', async event => {
    event.preventDefault();
    setText(loginError, '');
    const payload = { username: loginUsername?.value || '', password: loginPassword?.value || '' };
    if (loginTotp && !loginTotp.hidden && loginTotp.value) payload.totpCode = loginTotp.value;
    try {
      await api.login(payload);
      if (loginPassword) loginPassword.value = '';
      if (loginTotp) loginTotp.value = '';
      setAuthenticated(true);
      showToast('登录成功。');
      await loadPublicData();
    } catch (e) {
      if (e.code === 'TOTP_REQUIRED' && loginTotp) { loginTotp.hidden = false; setText(loginError, '需要 TOTP code。'); loginTotp.focus(); return; }
      setText(loginError, e.status === 429 ? '登录失败次数过多，请稍后再试。' : e.message || '登录失败。');
    }
  });

  /* B1: hero avatar */
  const heroAvatarButton = document.getElementById('heroAvatarButton');
  const heroAvatarInput = document.getElementById('heroAvatarInput');
  const heroAvatarImage = document.getElementById('heroAvatarImage');
  const avatarPlaceholder = heroAvatarButton?.querySelector('.avatar-placeholder');
  const savedAvatar = safeStorage.getItem(HERO_AVATAR_STORAGE_KEY);
  if (savedAvatar && heroAvatarImage) { heroAvatarImage.src = savedAvatar; heroAvatarImage.hidden = false; if (avatarPlaceholder) avatarPlaceholder.hidden = true; }
  heroAvatarButton?.addEventListener('click', () => heroAvatarInput?.click());
  heroAvatarInput?.addEventListener('change', () => {
    const file = heroAvatarInput.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { const v = String(reader.result || ''); if (!v || !heroAvatarImage) return; heroAvatarImage.src = v; heroAvatarImage.hidden = false; if (avatarPlaceholder) avatarPlaceholder.hidden = true; safeStorage.setItem(HERO_AVATAR_STORAGE_KEY, v); };
    reader.readAsDataURL(file);
  });

  /* === VISUAL BASELINE UI EVENT HANDLERS === */

  /* Calendar day selection */
  document.querySelectorAll('.calendar-day[data-calendar-day]').forEach(day => {
    day.addEventListener('click', () => {
      document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
      day.classList.add('active');
      const title = document.getElementById('calendarScheduleTitle');
      const text = document.getElementById('calendarScheduleText');
      if (title) title.textContent = `${day.dataset.calendarDay} 日程`;
      if (text) text.textContent = day.dataset.calendarEvents || '无日程';
    });
  });

  /* Channel controls (zone, buffer, renderMode, toggle) */
  document.querySelectorAll('[data-channel-field="zone"]').forEach(select => {
    select.addEventListener('change', () => {
      const channel = select.dataset.channel;
      if (channel && state.authenticated) patchChannel(channel, { defaultZone: select.value });
    });
  });
  document.querySelectorAll('[data-channel-field="bufferSeconds"]').forEach(input => {
    input.addEventListener('change', () => {
      const channel = input.dataset.channel;
      const value = clamp(Number(input.value) || 0, 0, 60);
      input.value = value;
      if (channel && state.authenticated) patchChannel(channel, { bufferSeconds: value });
    });
  });
  document.querySelectorAll('[data-channel-field="renderMode"]').forEach(select => {
    select.addEventListener('change', () => {
      const channel = select.dataset.channel;
      if (channel && state.authenticated) patchChannel(channel, { renderMode: select.value });
    });
  });
  document.querySelectorAll('[data-channel-toggle]').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const channel = toggle.dataset.channelToggle;
      const newEnabled = !toggle.classList.contains('on');
      toggle.classList.toggle('on', newEnabled);
      /* update status dot next to toggle */
      const card = toggle.closest('[data-channel-card]');
      if (card) {
        const dot = card.querySelector('.online, .offline');
        if (dot) { dot.className = newEnabled ? 'online' : 'offline'; dot.textContent = newEnabled ? '在线' : '离线'; }
      }
      /* also update home channel cards */
      const homeCards = document.querySelectorAll('.channel-grid .channel-card');
      homeCards.forEach(hc => { const h3 = hc.querySelector('h3'); if (h3 && h3.textContent === channelLabel(channel)) { const s = hc.querySelector('.online, .offline'); if (s) { s.className = newEnabled ? 'online' : 'offline'; s.textContent = newEnabled ? '在线' : '离线'; } } });
      if (channel && state.authenticated) patchChannel(channel, { enabled: newEnabled });
    });
  });

  /* Memory brain nav */
  const memoryBrainNav = document.getElementById('memoryBrainNav');
  if (memoryBrainNav) {
    memoryBrainNav.addEventListener('click', event => {
      const btn = event.target.closest('[data-memory-panel]');
      if (!btn) return;
      const panel = btn.dataset.memoryPanel;
      memoryBrainNav.querySelectorAll('[data-memory-panel]').forEach(item => item.classList.toggle('active', item === btn));
      document.querySelectorAll('#sub-memory .memory-panel').forEach(item => item.classList.toggle('active', item.dataset.memoryPanel === panel));
    });
  }

  /* Memory search and bucket filters */
  const memorySearch = document.getElementById('memorySearch');
  const memoryBucketFilters = document.getElementById('memoryBucketFilters');
  function applyMemoryBucketFilter() {
    const query = (memorySearch?.value || '').trim().toLowerCase();
    const activeFilter = memoryBucketFilters?.querySelector('.chip.active')?.dataset.memoryFilter || 'all';
    document.querySelectorAll('[data-memory-bucket]').forEach(card => {
      const type = card.dataset.memoryType || '';
      const haystack = card.dataset.memorySearch || card.textContent.toLowerCase();
      const visibleByType = activeFilter === 'all' || activeFilter === type;
      const visibleByQuery = !query || haystack.includes(query);
      card.style.display = visibleByType && visibleByQuery ? '' : 'none';
    });
  }
  memorySearch?.addEventListener('input', applyMemoryBucketFilter);
  memoryBucketFilters?.addEventListener('click', event => { if (event.target.closest('.chip')) requestAnimationFrame(applyMemoryBucketFilter); });

  /* Memory breath button */
  const memoryBreathButton = document.getElementById('memoryBreathButton');
  memoryBreathButton?.addEventListener('click', async () => {
    const inputs = memoryBreathButton.closest('.memory-card2')?.querySelectorAll('input');
    const query = inputs?.[0]?.value || '';
    const valence = inputs?.[1]?.value || '';
    const arousal = inputs?.[2]?.value || '';
    const domain = inputs?.[3]?.value || '';
    const old = memoryBreathButton.textContent;
    memoryBreathButton.textContent = '检索中…'; memoryBreathButton.disabled = true;
    try {
      const params = new URLSearchParams();
      if (query) params.set('query', query);
      if (valence) params.set('valence', valence);
      if (arousal) params.set('arousal', arousal);
      if (domain) params.set('domain', domain);
      await api.get(`/api/memory/breath?${params}`);
      memoryBreathButton.textContent = '已模拟'; memoryBreathButton.classList.add('saved');
      setTimeout(() => { memoryBreathButton.textContent = old; memoryBreathButton.classList.remove('saved'); memoryBreathButton.disabled = false; }, 1200);
    } catch (e) {
      memoryBreathButton.textContent = old; memoryBreathButton.disabled = false;
      showToast(`Breath 模拟失败：${e.message}`);
    }
  });

  /* Memory dream button */
  const memoryDreamButton = document.getElementById('memoryDreamButton');
  memoryDreamButton?.addEventListener('click', async () => {
    const old = memoryDreamButton.textContent;
    memoryDreamButton.textContent = '自省中…'; memoryDreamButton.disabled = true;
    try {
      const result = await api.post('/api/memory/dream', {});
      const msg = result?.feel ? `Dream 完成 → ${result.feel}` : 'Dream 完成，无新洞见。';
      showToast(msg);
      memoryDreamButton.textContent = old; memoryDreamButton.classList.add('saved');
      setTimeout(() => { memoryDreamButton.classList.remove('saved'); memoryDreamButton.disabled = false; }, 1200);
    } catch (e) {
      memoryDreamButton.textContent = old; memoryDreamButton.disabled = false;
      showToast(`Dream 失败：${e.message}`);
    }
  });

  /* Memory ops buttons */
  document.querySelectorAll('[data-memory-op]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const op = btn.dataset.memoryOp;
      if (!state.authenticated) return showToast('登录后才能执行运维操作。');
      const old = btn.textContent;
      btn.textContent = '执行中…'; btn.disabled = true;
      try {
        await api.post(`/api/memory/ops/${encodeURIComponent(op)}`, {});
        showToast(`${old} 已触发。`);
        btn.textContent = '✓ 完成'; btn.classList.add('saved');
        setTimeout(() => { btn.textContent = old; btn.classList.remove('saved'); btn.disabled = false; }, 2000);
      } catch (e) {
        btn.textContent = old; btn.disabled = false;
        showToast(`${old} 失败：${e.message}`);
      }
    });
  });

  /* Memory graph node selection */
  document.getElementById('memoryGraphStage')?.addEventListener('click', event => {
    const node = event.target.closest('.memory-node');
    if (!node) return;
    event.currentTarget.querySelectorAll('.memory-node').forEach(item => item.classList.toggle('active', item === node));
  });

  /* Prompt segment (persona/rules tabs) */
  const promptSegment = document.getElementById('promptSegment');
  if (promptSegment) {
    promptSegment.addEventListener('click', event => {
      const btn = event.target.closest('[data-prompt-pane]');
      if (!btn) return;
      const pane = btn.dataset.promptPane;
      promptSegment.querySelectorAll('[data-prompt-pane]').forEach(item => item.classList.toggle('active', item === btn));
      document.querySelectorAll('#sub-prompts .prompt-pane').forEach(item => item.classList.toggle('active', item.dataset.promptPane === pane));
    });
  }

  /* Prompt rule editor */
  function openPromptRuleEditor(card) {
    const editor = document.getElementById('promptRuleEditor');
    if (!editor || !card) return;
    const title = card.dataset.editTitle || '写作规范';
    editor.hidden = false;
    document.getElementById('promptEditorTitle').textContent = title;
    document.getElementById('promptEditorName').value = title;
    document.getElementById('promptEditorChannel').value = card.dataset.editChannel || '';
    document.getElementById('promptEditorMode').value = card.dataset.editMode || '渠道检测';
    document.getElementById('promptEditorPriority').value = card.dataset.editPriority || '80';
    const badge = document.getElementById('promptEditorBadge');
    if (badge) badge.textContent = card.dataset.editMode || '检测注入';
    editor.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  document.querySelectorAll('#sub-prompts .rule-card[data-edit-title]').forEach(card => card.addEventListener('click', () => openPromptRuleEditor(card)));
  document.getElementById('newPromptRule')?.addEventListener('click', () => {
    document.querySelector('#promptSegment [data-prompt-pane="rules"]')?.click();
    openPromptRuleEditor({ dataset: { editTitle: '新的写作规范', editChannel: 'auto', editMode: '关键词检测', editPriority: '60' } });
  });

  /* Worldbook filter */
  const worldbookFilter = document.getElementById('worldbookFilter');
  function applyWorldbookFilter(mode) {
    const targetMode = mode || 'all';
    document.querySelectorAll('#sub-worldbook .world-entry[data-mode]').forEach(entry => {
      const visible = targetMode === 'all' || entry.dataset.mode === targetMode;
      entry.classList.toggle('filtered-out', !visible);
    });
    document.querySelectorAll('#sub-worldbook [data-worldbook-group]').forEach(group => {
      const visibleEntries = group.querySelectorAll('.world-entry[data-mode]:not(.filtered-out)').length;
      group.classList.toggle('empty-filtered', visibleEntries === 0);
    });
  }
  worldbookFilter?.addEventListener('click', event => {
    const btn = event.target.closest('[data-world-filter]');
    if (!btn) return;
    worldbookFilter.querySelectorAll('[data-world-filter]').forEach(item => item.classList.toggle('active', item === btn));
    applyWorldbookFilter(btn.dataset.worldFilter || 'all');
  });

  /* Worldbook editor */
  function openWorldbookEditor(entry) {
    const editor = document.getElementById('worldbookEditor');
    if (!editor || !entry) return;
    const title = entry.dataset.editTitle || '世界书词条';
    editor.hidden = false;
    document.getElementById('worldEditorTitle').textContent = title;
    document.getElementById('worldEditorName').value = title;
    document.getElementById('worldEditorGroup').value = entry.dataset.editGroup || '日常';
    document.getElementById('worldEditorMode').value = entry.dataset.mode === 'resident' ? '常驻' : '关键词检测';
    document.getElementById('worldEditorPriority').value = entry.dataset.editPriority || '80';
    document.getElementById('worldEditorKeywords').value = entry.dataset.editKeywords || '';
    const badge = document.getElementById('worldEditorBadge');
    if (badge) badge.textContent = entry.dataset.mode === 'resident' ? '常驻' : '关键词检测';
    editor.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  document.querySelectorAll('.world-entry[data-edit-title]').forEach(entry => {
    entry.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openWorldbookEditor(entry); } });
    entry.addEventListener('click', event => {
      const modeButton = event.target.closest('.mode-toggle button');
      if (modeButton) {
        event.preventDefault(); event.stopPropagation();
        const toggle = modeButton.closest('.mode-toggle');
        toggle.querySelectorAll('button').forEach(btn => btn.classList.toggle('active', btn === modeButton));
        const isResident = modeButton.textContent.trim() === '常驻';
        entry.dataset.mode = isResident ? 'resident' : 'keyword';
        const badge = entry.querySelector('.world-pill');
        if (badge) { badge.textContent = isResident ? '常驻' : '关键词'; badge.classList.toggle('keyword', !isResident); }
        const activeFilter = worldbookFilter?.querySelector('.active')?.dataset.worldFilter || 'all';
        applyWorldbookFilter(activeFilter);
        return;
      }
      openWorldbookEditor(entry);
    });
  });
  document.getElementById('newWorldbookEntry')?.addEventListener('click', () => openWorldbookEditor({ dataset: { editTitle: '新的世界书词条', editGroup: '日常', mode: 'keyword', editPriority: '60', editKeywords: '' } }));

  /* Diary FAB — new entry */
  const diaryFab = document.querySelector('.diary-fab');
  diaryFab?.addEventListener('click', () => {
    const activeTab = document.querySelector('#diarySegment .active')?.dataset.diaryTab || 'yoru';
    const panel = document.querySelector(`[data-diary-panel="${activeTab}"]`);
    if (!panel) return;
    /* If an editor already exists, focus it */
    const existing = panel.querySelector('.diary-compose');
    if (existing) { existing.querySelector('textarea')?.focus(); return; }
    /* Build inline compose card */
    const compose = createEl('article', 'diary-card inset-card diary-compose');
    const topline = createEl('div', 'card-topline');
    appendChildren(topline, [createEl('h3', '', formatDate(new Date().toISOString()) || '今天'), createEl('span', activeTab === 'akari' ? 'author-a' : 'author-y', activeTab === 'akari' ? 'あかり' : 'Yoru')]);
    compose.appendChild(topline);
    const textarea = document.createElement('textarea');
    textarea.className = 'prompt-textarea';
    textarea.placeholder = '写点什么…';
    textarea.style.cssText = 'min-height:88px;margin-top:8px;';
    compose.appendChild(textarea);
    const actions = createEl('div', 'prompt-actions');
    actions.style.marginTop = '8px';
    const saveBtn = createEl('button', 'small-btn inset-action', '保存');
    saveBtn.type = 'button';
    saveBtn.addEventListener('click', async () => {
      const content = textarea.value.trim();
      if (!content) { showToast('日记不能为空。'); return; }
      try {
        await api.post('/api/diary', { author: activeTab, content, privacyMark: 'private-pending' });
        showToast('日记已保存。');
        compose.remove();
        const diary = await api.get('/api/diary');
        if (!diary.error) renderDiary(diary.items);
      } catch (e) { showToast(`保存失败：${e.message}`); }
    });
    const cancelBtn = createEl('button', 'small-btn inset-action', '取消');
    cancelBtn.type = 'button';
    cancelBtn.addEventListener('click', () => compose.remove());
    appendChildren(actions, [saveBtn, cancelBtn]);
    compose.appendChild(actions);
    /* Prepend compose card */
    const stack = panel.querySelector('.sub-stack') || panel;
    stack.insertBefore(compose, stack.firstChild);
    textarea.focus();
  });

  /* Stats metric grid */
  const statsMetricGrid = document.getElementById('statsMetricGrid');
  if (statsMetricGrid) {
    statsMetricGrid.addEventListener('click', event => {
      const btn = event.target.closest('[data-stats-panel]');
      if (!btn) return;
      const panel = btn.dataset.statsPanel;
      statsMetricGrid.querySelectorAll('[data-stats-panel]').forEach(item => item.classList.toggle('active', item === btn));
      document.querySelectorAll('[data-stats-detail]').forEach(item => item.classList.toggle('active', item.dataset.statsDetail === panel));
    });
  }

  /* Timeline filter (local, for static HTML before API loads) */
  const timelineFilter = document.getElementById('timelineFilter');
  function applyTimelineFilter(type) {
    const target = type || 'all';
    document.querySelectorAll('#timelineEventList .timeline-item[data-timeline-type]').forEach(item => {
      item.classList.toggle('filtered-out', target !== 'all' && item.dataset.timelineType !== target);
    });
  }
  timelineFilter?.addEventListener('click', event => {
    const btn = event.target.closest('[data-timeline-filter]');
    if (!btn) return;
    timelineFilter.querySelectorAll('[data-timeline-filter]').forEach(item => item.classList.toggle('active', item === btn));
    applyTimelineFilter(btn.dataset.timelineFilter || 'all');
  });

  /* Log filter */
  const logFilter = document.getElementById('logFilter');
  function applyLogFilter(level) {
    const target = level || 'all';
    document.querySelectorAll('#sub-logs .runtime-log-entry[data-log-level]').forEach(entry => {
      entry.classList.toggle('filtered-out', target !== 'all' && entry.dataset.logLevel !== target);
    });
  }
  logFilter?.addEventListener('click', event => {
    const btn = event.target.closest('[data-log-filter]');
    if (!btn) return;
    logFilter.querySelectorAll('[data-log-filter]').forEach(item => item.classList.toggle('active', item === btn));
    applyLogFilter(btn.dataset.logFilter || 'all');
  });

  /* Log alert state */
  function updateLogAlertState() {
    const logsHomeButton = document.querySelector('[data-sub="sub-logs"]');
    const hasProblem = !!document.querySelector('#sub-logs .runtime-log-entry[data-log-alert="true"]');
    logsHomeButton?.classList.toggle('has-log-alert', hasProblem);
  }
  updateLogAlertState();
}

/* ── init ────────────────────────────────────────────────────── */
async function init() { readPreferences(); applyAppearance(); bindUi(); setAuthenticated(false); await loadSession(); await loadPublicData(); }
init();

/* ── Smoke check export ─────────────────────────────────────── */
window.hirunoFrontendSmokeCheck = () => ({ api: typeof api, state: { authenticated: state.authenticated, channels: state.channels.length, providers: state.providers.length }, dom: { shell: !!shell, loginOverlay: !!loginOverlay, toast: !!toast } });

})();
