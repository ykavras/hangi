(() => {
  const toc = document.querySelector('.toc');
  if (!toc) return;
  if (window.matchMedia('(max-width: 800px)').matches) toc.open = false;
})();
