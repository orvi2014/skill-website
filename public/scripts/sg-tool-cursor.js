/* Skill Graphics — signature per-section tool cursor.
   window.SGToolCursor.mount() -> returns cleanup fn.
   Modes: 'pen'  over #photo or [data-tool="pen"]  (Photoshop pen tool)
          'wheel'over #video or [data-tool="wheel"] (DaVinci color wheel)
          'dot'  everywhere else (minimal adaptive ring) */
(function(){
  var PURPLE = '#7B2C8E';
  function mount(){
    if(('ontouchstart' in window) || !window.matchMedia('(pointer:fine)').matches) return function(){};
    var old = document.getElementById('sg-cursor'); if(old) old.remove();

    var cur = document.createElement('div');
    cur.id = 'sg-cursor';
    cur.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;z-index:99999;opacity:0;transition:opacity .18s ease;will-change:transform;';

    // --- PEN TOOL (Photoshop), premium refined nib. Hotspot = tip at origin (0,0). ---
    var pen = '<svg data-g="pen" width="54" height="54" viewBox="0 0 54 54" style="position:absolute;left:-4px;top:-4px;overflow:visible;opacity:0;transition:opacity .16s ease;filter:drop-shadow(0 3px 6px rgba(0,0,0,.4));">'
      // fountain-pen nib body
      + '<path d="M4 4 L24 12.5 L12.5 24 Z" fill="#fbfbfb"/>'
      + '<path d="M4 4 L24 12.5 L12.5 24 Z" fill="none" stroke="#141414" stroke-width="1.6" stroke-linejoin="round"/>'
      // centre slit from tip
      + '<line x1="4" y1="4" x2="14.5" y2="14.5" stroke="#141414" stroke-width="1.3"/>'
      // breather hole (vent)
      + '<circle cx="15" cy="15" r="2.1" fill="#fbfbfb" stroke="#141414" stroke-width="1.3"/>'
      // purple ink bead at the very tip
      + '<circle cx="4" cy="4" r="2.2" fill="'+PURPLE+'"/>'
      // bezier handle from nib to anchor
      + '<path d="M18 18 Q 33 24 37 39" fill="none" stroke="#141414" stroke-width="1.4" stroke-linecap="round"/>'
      // vector anchor point (square) with purple core
      + '<rect x="33.4" y="35.4" width="7.2" height="7.2" rx="1" fill="#fbfbfb" stroke="#141414" stroke-width="1.4"/>'
      + '<rect x="35.6" y="37.6" width="2.8" height="2.8" fill="'+PURPLE+'"/>'
      + '</svg>';

    // --- COLOR WHEEL (DaVinci). Hotspot = center. ---
    var wheel = '<div data-g="wheel" style="position:absolute;left:0;top:0;transform:translate(-50%,-50%);width:42px;height:42px;border-radius:50%;opacity:0;transition:opacity .16s ease;'
      + 'background:conic-gradient(from 90deg,#ff4d4d,#ffe14d,#5cff4d,#4dffe1,#4d7bff,#c24dff,#ff4d4d);'
      + 'box-shadow:0 0 0 1.5px rgba(255,255,255,.92),0 6px 20px rgba(0,0,0,.45);">'
      + '<div style="position:absolute;inset:7px;border-radius:50%;background:radial-gradient(circle,#f4f4f4 0%,#c9c9c9 100%);"></div>'
      + '<div style="position:absolute;left:50%;top:50%;width:4px;height:4px;border-radius:50%;background:#141414;transform:translate(-50%,-50%);"></div>'
      + '<div class="sg-wheel-rot" style="position:absolute;left:50%;top:50%;width:0;height:0;animation:sg-wheel-spin 5.5s linear infinite;">'
      +   '<div style="position:absolute;width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 0 1.4px #141414;transform:translate(-3.5px,-15px);"></div>'
      + '</div></div>';

    // --- DOT (fallback minimal ring). Hotspot = center. ---
    var dot = '<div data-g="dot" style="position:absolute;left:0;top:0;transform:translate(-50%,-50%);width:26px;height:26px;border-radius:50%;border:1.5px solid #fff;opacity:0;transition:opacity .16s ease,border-color .2s ease;">'
      + '<div class="sg-dotc" style="position:absolute;left:50%;top:50%;width:4px;height:4px;border-radius:50%;background:'+PURPLE+';transform:translate(-50%,-50%);"></div></div>';

    cur.innerHTML = pen + wheel + dot;
    document.body.appendChild(cur);

    var gPen = cur.querySelector('[data-g="pen"]');
    var gWheel = cur.querySelector('[data-g="wheel"]');
    var gDot = cur.querySelector('[data-g="dot"]');
    var dotRing = gDot;
    var dotCore = cur.querySelector('.sg-dotc');

    var styleEl = document.getElementById('sg-cursor-style');
    if(!styleEl){
      styleEl = document.createElement('style'); styleEl.id = 'sg-cursor-style';
      styleEl.textContent = '@keyframes sg-wheel-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}'
        + '@media (pointer:fine){html,body,a,button,summary,[data-tool]{cursor:none !important;}}';
      document.head.appendChild(styleEl);
    }

    var mx = innerWidth/2, my = innerHeight/2, shown=false, mode='', forced = document.body.getAttribute('data-tool')||'';

    function contextAt(x,y){
      // page-level lock (sub-pages): body[data-tool]
      if(forced==='pen') return {m:'pen', dark:true};
      if(forced==='wheel') return {m:'wheel', dark:true};
      var el = document.elementFromPoint(x,y);
      if(!el) return {m:'dot', dark:true};
      if(el.closest('[data-tool="pen"],#photo')) return {m:'pen', dark:true};
      if(el.closest('[data-tool="wheel"],#video')) return {m:'wheel', dark:true};
      // luminance for dot color
      var lum=0.15, n=el;
      for(var i=0;i<8 && n;i++){
        var bg=getComputedStyle(n).backgroundColor;
        var mm=bg && bg.match(/rgba?\(([^)]+)\)/);
        if(mm){ var p=mm[1].split(',').map(parseFloat); var a=p[3]===undefined?1:p[3];
          if(a>0.5){ lum=(0.2126*p[0]+0.7152*p[1]+0.0722*p[2])/255; break; } }
        n=n.parentElement;
      }
      return {m:'dot', dark:lum<0.5};
    }

    function apply(ctx){
      gPen.style.opacity   = ctx.m==='pen'   ? '1' : '0';
      gWheel.style.opacity = ctx.m==='wheel' ? '1' : '0';
      gDot.style.opacity   = ctx.m==='dot'   ? '1' : '0';
      cur.style.filter = 'drop-shadow(0 1px 3px rgba(0,0,0,.4))';
      if(ctx.m==='dot'){
        dotRing.style.borderColor = ctx.dark ? '#fff' : '#141414';
        dotCore.style.background = PURPLE;
        cur.style.filter = ctx.dark ? 'drop-shadow(0 1px 3px rgba(0,0,0,.4))' : 'none';
      }
    }

    function onMove(e){
      mx=e.clientX; my=e.clientY;
      cur.style.transform='translate('+mx+'px,'+my+'px)';
      if(!shown){ shown=true; cur.style.opacity='1'; }
      var ctx=contextAt(mx,my);
      var key=ctx.m+(ctx.dark?'d':'l');
      if(key!==mode){ mode=key; apply(ctx); }
    }
    function onLeave(){ shown=false; cur.style.opacity='0'; }
    function onEnter(){ shown=true; cur.style.opacity='1'; }
    document.addEventListener('mousemove', onMove, {passive:true});
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return function(){
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if(cur) cur.remove();
    };
  }
  window.SGToolCursor = { mount: mount };
})();
