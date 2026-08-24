// Sample catalog. Swap previewUrl with real photos when you have them.
window.archiveCatalog = [
  { id:'pool_05',  title:'pool_05',  tag:'poolcore',   tone:'pool',   seed:'pool5',   note:'drained two summers ago. tile grout the color of old butter.',
    meta:{ size:'312 KB', date:'06.23.2026', dims:'1280×960' } },
  { id:'hall_07',  title:'hall_07',  tag:'backrooms',  tone:'sodium', seed:'hall7',   note:'fluorescent, humming. no end in sight.',
    meta:{ size:'247 KB', date:'05.11.2026', dims:'1024×768' } },
  { id:'dream_11', title:'dream_11', tag:'dreamcore',  tone:'dream',  seed:'dream11', note:"soft afternoon. couldn't tell if I was awake.",
    meta:{ size:'190 KB', date:'04.02.2026', dims:'960×720' } },
  { id:'mall_03',  title:'mall_03',  tag:'liminal',    tone:'sodium', seed:'mall3',   note:'after hours. somebody left the music on.',
    meta:{ size:'410 KB', date:'03.18.2026', dims:'1600×1200' } },
  { id:'rain_09',  title:'rain_09',  tag:'wet',        tone:'pool',   seed:'rain9',   note:'puddle the size of an apology.',
    meta:{ size:'288 KB', date:'02.07.2026', dims:'1280×960' } },
  { id:'soft_22',  title:'soft_22',  tag:'dreamcore',  tone:'dream',  seed:'soft22',  note:'who left this here.',
    meta:{ size:'164 KB', date:'01.19.2026', dims:'960×720' } },
  { id:'tiles_30', title:'tiles_30', tag:'poolcore',   tone:'pool',   seed:'tiles30', note:'still smelled like chlorine for months after.',
    meta:{ size:'355 KB', date:'12.04.2025', dims:'1440×1080' } },
  { id:'glow_14',  title:'glow_14',  tag:'dreamcore',  tone:'dream',  seed:'glow14',  note:'sodium lamp at 3am. nothing else.',
    meta:{ size:'201 KB', date:'11.22.2025', dims:'1024×768' } },
];

window.archiveCategories = [
  { id:'all',        label:'all rooms',     count: () => window.archiveCatalog.length },
  { id:'poolcore',   label:'poolcore',      count: () => window.archiveCatalog.filter(x=>x.tag==='poolcore').length },
  { id:'backrooms',  label:'backrooms',     count: () => window.archiveCatalog.filter(x=>x.tag==='backrooms').length },
  { id:'dreamcore',  label:'dreamcore',     count: () => window.archiveCatalog.filter(x=>x.tag==='dreamcore').length },
  { id:'liminal',    label:'liminal',       count: () => window.archiveCatalog.filter(x=>x.tag==='liminal').length },
  { id:'wet',        label:'wet',           count: () => window.archiveCatalog.filter(x=>x.tag==='wet').length },
];

window.previewUrlFor = function(item, w, h) {
  return `https://picsum.photos/seed/${item.seed}/${w}/${h}`;
};
