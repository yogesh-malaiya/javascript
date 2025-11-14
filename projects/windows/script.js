// script.js
document.addEventListener('DOMContentLoaded', ()=> {
  const apps = [
    {id:'firefox', name:'Firefox.exe', iconText:'Fx', url:'#'},
    {id:'vscode', name:'Visual Studio Code', iconText:'VS', url:'#'},
    {id:'chrome', name:'Google Chrome', iconText:'G', url:'#'},
    {id:'edge', name:'Microsoft Edge', iconText:'E', url:'#'},
    {id:'postman', name:'Postman', iconText:'Pm', url:'#'},
    {id:'docker', name:'Docker Desktop', iconText:'Dk', url:'#'},
    {id:'gitbash', name:'Git Bash', iconText:'Gb', url:'#'},
    {id:'control', name:'Control Panel', iconText:'CP', url:'#'},
    {id:'recycle', name:'Recycle Bin', iconText:'RB', url:'#'},
    {id:'bigbounty', name:'BigBounty', iconText:'BB', url:'#'},
  ];

  const container = document.getElementById('container');

  // Render desktop icons
  function renderDesktop(){
    container.innerHTML = '';
    apps.forEach(app=>{
      const el = document.createElement('div');
      el.className = 'desktop-icon';
      el.setAttribute('draggable','true');
      el.dataset.appId = app.id;
      el.innerHTML = `
        <div class="thumb">${app.iconText}</div>
        <div class="label">${app.name}</div>
      `;
      container.appendChild(el);

      // double click to open
      el.addEventListener('dblclick', ()=> openAppWindow(app));
      // keyboard enter to open
      el.tabIndex = 0;
      el.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter') openAppWindow(app);
      });

      // drag start for pin to taskbar
      el.addEventListener('dragstart', (ev)=>{
        ev.dataTransfer.setData('text/plain', app.id);
        ev.dataTransfer.effectAllowed = 'copy';
      });

      // right click context menu
      el.addEventListener('contextmenu', (ev)=>{
        ev.preventDefault();
        showContextMenu(ev.pageX, ev.pageY, [
          {label:'Open', onClick:()=> openAppWindow(app)},
          {label:isPinned(app.id) ? 'Unpin from taskbar' : 'Pin to taskbar', onClick:()=> togglePin(app.id)},
        ]);
      });
    });
  }

  renderDesktop();

  /* taskbar elements */
  const pinnedContainer = document.createElement('div');
  pinnedContainer.className = 'pinned';
  const startBtn = document.createElement('div');
  startBtn.className = 'start-btn';
  startBtn.innerHTML = `<div class="start-icon"></div>`;
  const searchEl = document.createElement('div');
  searchEl.id = 'search';
  searchEl.innerHTML = `<input id="search-input" placeholder="Search" aria-label="Search apps">`;
  const systray = document.createElement('div');
  systray.className = 'systray';
  const trayIcons = ['','']; // placeholder
  trayIcons.forEach(()=> {
    const t = document.createElement('div'); t.className='tray-icon'; systray.appendChild(t);
  });
  const clock = document.createElement('div'); clock.className='clock'; clock.id='clock';

  const taskbar = document.createElement('div');
  taskbar.className = 'taskbar';
  const left = document.createElement('div'); left.className='task-left';
  left.appendChild(startBtn);
  left.appendChild(searchEl);
  taskbar.appendChild(left);
  taskbar.appendChild(pinnedContainer);
  taskbar.appendChild(systray);
  systray.appendChild(clock);

  document.querySelector('footer').appendChild(taskbar);

  // search UI
  const searchInput = document.getElementById('search-input');
  const searchResults = document.createElement('div');
  searchResults.id = 'search-results';
  document.body.appendChild(searchResults);

  searchInput.addEventListener('input', onSearch);
  searchInput.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') {
      const q = e.target.value.trim();
      if(q) {
        // if exact app match, open first match
        const match = apps.find(a => a.name.toLowerCase().includes(q.toLowerCase()));
        if(match) openAppWindow(match);
      }
    }
  });

  function onSearch(e){
    const q = e.target.value.trim().toLowerCase();
    if(!q){ hideSearchResults(); return; }
    const matches = apps.filter(a => a.name.toLowerCase().includes(q));
    if(matches.length === 0){
      searchResults.style.display='none';
      return;
    }
    searchResults.innerHTML = '';
    matches.forEach(app=>{
      const r = document.createElement('div');
      r.className='result';
      r.innerHTML = `<div style="width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.04)">${app.iconText}</div>
                     <div class="rlabel">${app.name}</div>`;
      r.addEventListener('click', ()=> openAppWindow(app));
      searchResults.appendChild(r);
    });
    searchResults.style.display='flex';
  }

  function hideSearchResults(){ searchResults.style.display='none' }

  // reposition search results under taskbar center
  function positionSearchResults(){
    // already fixed bottom center via CSS; optionally can adjust width based on taskbar
  }
  window.addEventListener('resize', positionSearchResults);

  // modal app window
  const appWindow = document.createElement('div');
  appWindow.className='app-window';
  appWindow.innerHTML = `
    <div class="titlebar">
      <div class="title">App</div>
      <div><button id="close-app" style="background:transparent;border:0;color:#fff;cursor:pointer">✕</button></div>
    </div>
    <div class="content" id="app-content">App content</div>
  `;
  document.body.appendChild(appWindow);

  document.getElementById('close-app').addEventListener('click', ()=> { closeAppWindow(); });

  function openAppWindow(app){
    appWindow.querySelector('.title').textContent = app.name;
    const content = appWindow.querySelector('#app-content');
    content.innerHTML = `<h2>${app.name}</h2><p>This is a simulated app window for <b>${app.name}</b>. You can customize what opens here (e.g. load an iframe to a URL) — currently it's a demo.</p>`;
    appWindow.classList.add('show');
    hideSearchResults();
  }
  function closeAppWindow(){
    appWindow.classList.remove('show');
  }

  // context menu impl
  const contextMenu = document.createElement('div');
  contextMenu.className='context-menu';
  document.body.appendChild(contextMenu);

  function showContextMenu(x,y,items){
    contextMenu.innerHTML='';
    items.forEach(it=>{
      const el = document.createElement('div');
      el.className='item';
      el.textContent = it.label;
      el.addEventListener('click', ()=>{
        hideContextMenu();
        it.onClick && it.onClick();
      });
      contextMenu.appendChild(el);
    });
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.style.display = 'block';
  }
  function hideContextMenu(){ contextMenu.style.display = 'none'; }
  document.addEventListener('click', (e)=> {
    if(e.button === 0) hideContextMenu();
  });

  // pin management (store pinned app ids in localStorage)
  function getPinned(){
    try{
      const raw = localStorage.getItem('pinnedApps');
      return raw ? JSON.parse(raw) : ['vscode','chrome']; // default pins
    }catch{ return ['vscode','chrome']; }
  }
  function savePinned(arr){
    localStorage.setItem('pinnedApps', JSON.stringify(arr));
    renderPinned();
  }
  function isPinned(id){
    return getPinned().includes(id);
  }
  function togglePin(id){
    const pins = getPinned();
    if(pins.includes(id)) savePinned(pins.filter(x=>x!==id));
    else savePinned([...pins, id]);
  }

  // render pinned icons
  function renderPinned(){
    pinnedContainer.innerHTML = '';
    const pins = getPinned();
    pins.forEach(id=>{
      const app = apps.find(a=>a.id===id) || {id, name:id, iconText:id.slice(0,2).toUpperCase()};
      const btn = document.createElement('button');
      btn.className = 'pinned-icon';
      btn.title = app.name;
      btn.innerHTML = `<img src="" alt="${app.iconText}" aria-hidden="true"><span style="display:none">${app.iconText}</span>`;
      btn.addEventListener('click', ()=> openAppWindow(app));
      // right click unpin
      btn.addEventListener('contextmenu', (ev)=>{
        ev.preventDefault();
        showContextMenu(ev.pageX, ev.pageY, [
          {label:'Unpin from taskbar', onClick: ()=> togglePin(app.id)}
        ]);
      });
      pinnedContainer.appendChild(btn);
    });

    // show placeholder to indicate drop target (visual)
    if(pins.length === 0){
      const hint = document.createElement('div');
      hint.style.opacity = '0.5';
      hint.style.fontSize = '13px';
      hint.textContent = 'Drag apps here to pin';
      pinnedContainer.appendChild(hint);
    }
  }

  renderPinned();

  // allow dropping to pinned area
  pinnedContainer.addEventListener('dragover', (e)=> { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; });
  pinnedContainer.addEventListener('drop', (e)=> {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if(id) togglePin(id);
  });

  // allow dropping from anywhere on taskbar (for convenience)
  taskbar.addEventListener('dragover', (e)=> e.preventDefault());
  taskbar.addEventListener('drop', (e)=> {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if(id) togglePin(id);
  });

  // clock
  function updateClock(){
    const now = new Date();
    const hh = now.getHours().toString().padStart(2,'0');
    const mm = now.getMinutes().toString().padStart(2,'0');
    document.getElementById('clock').textContent = `${hh}:${mm}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // close search on outside click
  document.addEventListener('click', (e)=>{
    if(!document.getElementById('search').contains(e.target) && !searchResults.contains(e.target)){
      hideSearchResults();
    }
  });

  // small UX: when Start clicked, focus search
  startBtn.addEventListener('click', ()=> searchInput.focus());

  // Escape closes windows/menus
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      closeAppWindow();
      hideSearchResults();
      hideContextMenu();
    }
  });

  // initial accessibility: tabbable desktop icons
  // done above when rendering

  // save pinned on unload (already saved when toggled)
});
