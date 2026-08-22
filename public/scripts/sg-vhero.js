/* Skill Graphics — seamless video hero playlist (double-buffered, gapless).
   Markup:
     <div class="sg-vhero" style="position:absolute;inset:0;">
       <video class="sg-vhero-v" ...></video>
       <video class="sg-vhero-v" ...></video>
     </div>
   window.SGVHero.mount(clips[]) preloads the next clip and hot-swaps on 'ended'
   so playback feels like one continuous film. Returns a cleanup fn. */
(function(){
  function mount(clips){
    var wrap = document.querySelector('.sg-vhero');
    if(!wrap || wrap._sgWired) return function(){};
    var vids = [].slice.call(wrap.querySelectorAll('.sg-vhero-v'));
    if(vids.length < 2) return function(){};
    wrap._sgWired = true;

    var OP = wrap.getAttribute('data-op') || '0.66';
    var idx = 0;               // clip index currently on screen
    var cur = vids[0], nxt = vids[1];

    function prep(v, src){
      try { v.muted = true; v.setAttribute('muted',''); v.playsInline = true;
            v.setAttribute('playsinline',''); v.preload = 'auto';
            v.src = src; v.load(); } catch(e){}
    }
    function play(v){ var p = v.play(); if(p && p.catch) p.catch(function(){}); }

    // init: cur shows clip 0, nxt buffers clip 1
    cur.style.opacity = OP; nxt.style.opacity = '0';
    prep(cur, clips[0 % clips.length]);
    prep(nxt, clips[1 % clips.length]);
    if(cur.readyState >= 2) play(cur);
    else cur.addEventListener('loadeddata', function(){ play(cur); }, {once:true});

    function advance(){
      var nextIdx = (idx + 1) % clips.length;
      nxt.currentTime = 0;
      play(nxt);
      var swap = function(){
        nxt.style.opacity = OP;
        cur.style.opacity = '0';
        // buffer the clip *after* next into the one that just finished
        var afterIdx = (nextIdx + 1) % clips.length;
        prep(cur, clips[afterIdx]);
        var t = cur; cur = nxt; nxt = t;   // rotate roles
        idx = nextIdx;
      };
      if(nxt.readyState >= 3) swap();
      else nxt.addEventListener('playing', swap, {once:true});
    }
    vids.forEach(function(v){ v.addEventListener('ended', function(){
      // only the on-screen (opacity>0) video should drive the advance
      if(v === cur) advance();
    }); });

    // keep the active clip alive if a browser pauses it
    var keep = setInterval(function(){ if(cur && cur.paused) play(cur); }, 1200);

    return function(){ clearInterval(keep); wrap._sgWired = false; };
  }
  window.SGVHero = { mount: mount };
})();
