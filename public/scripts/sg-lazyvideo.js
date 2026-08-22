/* Skill Graphics — lazy video loader.
   Defers download/playback of every <video> until it nears the viewport,
   and pauses it when it scrolls away. Cuts initial page weight dramatically.

   Skips:
     - videos inside .sg-vhero  (managed by sg-vhero.js)
     - videos with [data-no-lazy] (e.g. the above-the-fold landing hero)

   No markup changes needed: the source URL is read from the element (or its
   child <source>) at runtime, stashed, and removed so nothing downloads until
   the element is close to being seen. */
(function () {
  function srcOf(v) {
    if (v.getAttribute('src')) return v.getAttribute('src');
    var s = v.querySelector('source[src]');
    return s ? s.getAttribute('src') : null;
  }
  function unload(v) {
    var url = srcOf(v);
    if (!url) return;
    v.dataset.lazySrc = url;
    if (v.getAttribute('src')) {
      v.removeAttribute('src');
    } else {
      var s = v.querySelector('source[src]');
      if (s) { v.dataset.lazyChild = '1'; s.removeAttribute('src'); }
    }
    v.removeAttribute('autoplay');
    v.setAttribute('preload', 'none');
    try { v.load(); } catch (e) {}
  }
  function load(v) {
    if (!v.dataset.lazySrc || v.dataset.lazyLoaded) return;
    if (v.dataset.lazyChild) {
      var s = v.querySelector('source');
      if (s) s.setAttribute('src', v.dataset.lazySrc);
    } else {
      v.setAttribute('src', v.dataset.lazySrc);
    }
    v.dataset.lazyLoaded = '1';
    try { v.load(); } catch (e) {}
    var p = v.play(); if (p && p.catch) p.catch(function () {});
  }
  function targets() {
    return [].slice.call(document.querySelectorAll('video')).filter(function (v) {
      if (v.closest('.sg-vhero')) return false;
      if (v.classList.contains('ais-video')) return false; // managed by AI Studio JS
      if (v.hasAttribute('data-no-lazy')) return false;
      if (v.id === 'sg-fs-player' || v.closest('#sg-fs-overlay')) return false;
      if (v.dataset.lazyWired) return false;
      return true;
    });
  }
  function init() {
    var list = targets();
    if (!list.length) return;
    list.forEach(function (v) { v.dataset.lazyWired = '1'; unload(v); });
    if (!('IntersectionObserver' in window)) { list.forEach(load); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) load(e.target);
        else if (e.target.getAttribute("data-sg-fs") || e.target.closest("#sg-fs-overlay")) return;
        else { try { e.target.pause(); } catch (x) {} }
      });
    }, { rootMargin: '400px 0px' });
    list.forEach(function (v) { io.observe(v); });
  }
  // DCs stream in; run now and re-scan shortly after in case videos arrive late.
  function boot() { init(); setTimeout(init, 1200); setTimeout(init, 3000); }
  if (document.readyState !== 'loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
